<?php
/**
 * link: http://www.zjhejiang.com/
 * copyright: Copyright (c) 2018 浙江禾匠信息科技有限公司
 * author: jack_guo
 */

namespace app\plugins\community\forms\api;


use app\forms\api\order\OrderException;
use app\forms\api\order\OrderGoodsAttr;
use app\models\Model;
use app\models\Order;
use app\models\User;
use app\models\UserIdentity;
use app\plugins\community\forms\common\CommonSetting;
use app\plugins\community\models\CommunityActivity;
use app\plugins\community\models\CommunityAddress;
use app\plugins\community\models\CommunityGoods;
use app\plugins\community\models\CommunityGoodsAttr;
use app\plugins\community\models\CommunityOrder;
use app\plugins\community\models\CommunityRelations;
use app\plugins\community\Plugin;

class OrderSubmitForm extends \app\forms\api\order\OrderSubmitForm
{
    public $activity_id;
    public $middleman_id;

//    public $setting;

    public function setPluginData()
    {
//        $this->setting = CommonSetting::getCommon()->getSetting();
        $this->setEnableMemberPrice(false)->setEnableCoupon(false)
            ->setEnableIntegral(false)->setEnableVipPrice(true)
            ->setEnablePriceEnable(false)->setEnableAddressEnable(false)
            ->setSign((new Plugin())->getName());
        return $this;
    }

    public function getAllData()
    {
        $data = parent::getAllData(); // TODO: Change the autogenerated stub
        //团长的自提点，用户的信息
        $data['address']['name'] = $this->form_data['address']['name'];
        $data['address']['mobile'] = $this->form_data['address']['mobile'];
        return $data;
    }

    protected function getAddress()
    {
        $this->setXAddress(CommunityAddress::findOne([
            'user_id' => $this->middleman_id,
            'is_delete' => 0,
            'is_default' => 1,
        ]));
        return $this->getXAddress();
    }

    protected function setExpressData($mchItem)
    {
        return $mchItem;
    }

    /**
     * 额外优惠——满减
     * @param $mchItem
     * @param $formMchItem
     * @return mixed
     * @throws OrderException
     */
    public function setExtraDiscountData($mchItem, $formMchItem)
    {
        if (!$this->activity_id && empty($formMchItem['activity_id'])) {
            throw new OrderException('缺少活动ID');
        }
        if (!$this->middleman_id && empty($formMchItem['middleman_id'])) {
            throw new OrderException('还未选择团长提货点。');
        }
        $this->activity_id = $formMchItem['activity_id'];

        $mchItem['discount'] = price_format(0);

        /** @var User $user */
        $user = \Yii::$app->user->identity;
        /** @var UserIdentity $identity */
        $identity = $user->getIdentity()->andWhere(['is_delete' => 0,])->one();
        if (!$identity) {
            return $mchItem;
        }
        //团长信息
        $relations = CommunityRelations::findOne(['user_id' => \Yii::$app->user->id, 'is_delete' => 0]);
        if (empty($relations)) {
            //未绑定的用户，第一次下单绑定团长
            $relations = new CommunityRelations();
        }
        if (empty($relations) || $relations->middleman_id == 0) {
            $relations->middleman_id = $formMchItem['middleman_id'];
            $relations->user_id = \Yii::$app->user->id;
            if (!$relations->save()) {
                throw new OrderException((new Model())->getErrorMsg($relations));
            }
        }
        // elseif ($this->setting['is_allow_change'] == 1 && $formMchItem['middleman_id'] != $relations->middleman_id) {
        //切换团长绑定
//            if (CommunityRelations::updateAll(['middleman_id' => $formMchItem['middleman_id'], ['user_id' => \Yii::$app->user->id]]) <= 0) {
//                throw new OrderException('切换团长错误');
//            }
//        }
        $mchItem['middleman_id'] = $this->middleman_id = $relations->middleman_id;
        //是否符合活动条件
        $activity = CommunityActivity::findOne(['id' => $this->activity_id, 'is_delete' => 0]);
        if (empty($activity)) {
            throw new OrderException('活动ID错误');
        }
        //区域限制
        if ($activity->is_area_limit == 1) {
            $address = CommunityAddress::findOne(['user_id' => $relations->middleman_id, 'is_delete' => 0, 'is_default' => 1]);
            $address_arr = explode(',', $activity->area_limit);
            if (!in_array($address->district_id, $address_arr) && !in_array($address->city_id, $address_arr) && !in_array($address->province_id, $address_arr)) {
                throw new OrderException('该提货点不在活动范围内');
            }
        }
        if (strtotime($activity->start_at) > time() && strtotime($activity->end_at) < time()) {
            throw new OrderException('不在当前活动时间。');
        }
        if ($activity->status == 0) {
            throw new OrderException('该活动已下架。');
        }
        //总件数，总商品金额
        $count = 0;
        $price = 0;
        foreach ($mchItem['goods_list'] as $item) {
            //判断商品是否属于该活动
            if (empty(CommunityGoods::findOne(
                ['activity_id' => $this->activity_id, 'goods_id' => $item['id'], 'is_delete' => 0, 'mall_id' => \Yii::$app->mall->id]
            ))) {
                throw new OrderException($item['goods_attr']['name'] . '-不属于当前活动商品。');
            }

            $count += $item['num'];
            /* @var OrderGoodsAttr $goodsAttr */
            $goodsAttr = $item['goods_attr'];
            $price += price_format($goodsAttr->price * $item['num']);
        }
        $mchItem['activity_id'] = $this->activity_id;

        $mchItem['full_price'] = 0;//满多少金额
        $mchItem['reduce_price'] = 0;//减多少金额
        if (!empty($activity->full_price)) {
            $full_price = json_decode($activity->full_price, true);

            foreach ($full_price as $price_item) {
                if ($price_item['full_price'] <= $price && $price_item['full_price'] > $mchItem['full_price']) {
                    $mchItem['full_price'] = $price_item['full_price'];
                    $mchItem['reduce_price'] = $price_item['reduce_price'];
                }
            }
        }

        $totalSubPrice = $mchItem['reduce_price'] > $price ? $price : $mchItem['reduce_price']; // 总计优惠金额
        $mchItem['profit'] = 0;//总利润金额
        $profit = [];//利润数据
        $mchItem['community_discount'] = price_format(0);
        if ($totalSubPrice) {
            $rate = bcdiv($totalSubPrice, $price, 8);//优惠比例

            foreach ($mchItem['goods_list'] as $k => &$goodsItem) {
                /* @var OrderGoodsAttr $goodsAttr */
                $goodsAttr = $goodsItem['goods_attr'];

                $attr = CommunityGoodsAttr::findOne(['goods_id' => $goodsItem['id'], 'attr_id' => $goodsItem['goods_attr']['id'], 'is_delete' => 0]);
                if (empty($attr)) {
                    throw new OrderException($goodsItem['goods_attr']['name'] . '-未设置利润');
                }
                $profit[$k]['goods_id'] = $goodsItem['id'];
                $profit[$k]['attr_id'] = $goodsItem['goods_attr']['id'];
                $profit[$k]['num'] = $goodsItem['num'];
                $profit[$k]['total_price'] = price_format(bcmul($goodsAttr->price, (1 - $rate), 8));
                $profit[$k]['profit_price'] = $profit_price = price_format(bcmul(($goodsAttr->price - $attr['supply_price']), (1 - $rate), 8));
                $mchItem['profit'] += ($profit_price > 0 ? $profit_price : 0) * $goodsItem['num'];//总利润

                //商品实付价
                $communityUnitPrice = price_format(bcmul($goodsAttr->price, (1 - $rate), 8));

                if ($communityUnitPrice && is_numeric($communityUnitPrice) && $communityUnitPrice >= 0) {
                    // 商品单件价格（满减优惠后）
                    $goodsAttr->price = price_format($communityUnitPrice);
                    $pickTotalPrice = price_format($communityUnitPrice * $goodsItem['num']);
                    $communitySubPrice = $goodsItem['total_original_price'] - $pickTotalPrice;
                    if ($communitySubPrice != 0) {
                        // 减去优惠金额
                        $communitySubPrice = min($goodsItem['total_price'], $communitySubPrice);
                        $goodsItem['total_price'] = price_format($goodsItem['total_price'] - $communitySubPrice);
                        $mchItem['community_discount'] += price_format($communitySubPrice);
                        $mchItem['total_goods_price'] = price_format($mchItem['total_goods_price'] - $communitySubPrice);
                        $goodsItem['community_discount'] = price_format($communitySubPrice);
                    }
                }
            }
            //优惠后，因为四舍五入问题导致的比活动价格多或少几分钱时，记录第一件商品优惠中
            //总优惠-实际满减优惠金额，余数
            $redundancy_price = $mchItem['community_discount'] - $totalSubPrice;
            if ($redundancy_price != 0) {
                $mchItem['community_discount'] = price_format($mchItem['community_discount'] - $redundancy_price);
                $mchItem['goods_list'][0]['community_discount'] = price_format($mchItem['goods_list'][0]['community_discount'] - $redundancy_price);
                $mchItem['goods_list'][0]['total_price'] = price_format($mchItem['goods_list'][0]['total_price'] + $redundancy_price);
                $mchItem['goods_list'][0]['goods_attr']['price'] = price_format($mchItem['goods_list'][0]['goods_attr']['price'] + $redundancy_price);
                $mchItem['total_goods_price'] = price_format($mchItem['total_goods_price'] + $redundancy_price);
            }
        } else {
            foreach ($mchItem['goods_list'] as $k => &$goodsItem) {
                $goodsAttr = $goodsItem['goods_attr'];
                $attr = CommunityGoodsAttr::findOne(['goods_id' => $goodsItem['id'], 'attr_id' => $goodsItem['goods_attr']['id'], 'is_delete' => 0]);

                $profit[$k]['goods_id'] = $goodsItem['id'];
                $profit[$k]['attr_id'] = $goodsItem['goods_attr']['id'];
                $profit[$k]['num'] = $goodsItem['num'];
                $profit[$k]['total_price'] = price_format($goodsAttr->price);
                $profit[$k]['profit_price'] = $profit_price = price_format($goodsAttr->price - $attr['supply_price']);
                $mchItem['profit'] += ($profit_price > 0 ? $profit_price : 0) * $goodsItem['num'];//总利润
            }
        }
        $mchItem['profit_data'] = $profit;

        return $mchItem;
    }

    /**
     * @param Order $order
     * @param $mchItem
     * @return bool
     * @throws OrderException
     */
    public function extraOrder($order, $mchItem)
    {
        $order_info = CommunityOrder::find()->where(['activity_id' => $mchItem['activity_id']])->orderBy('no desc')->one();
        $activity_no = '';
        $no = 1;
        if (empty($order_info)) {
            while (true) {
                //重新生成编号
                $num = md5(mt_rand(0, 999999) . time());
                $activity_no = substr($num, mt_rand(0, 26), 6);
                //查询是否重复
                if (!CommunityOrder::findOne(['activity_no' => $activity_no])) {
                    break;
                }
            }
        } else {
            $activity_no = $order_info->activity_no;
            $no = $order_info->no + 1;
        }
        $model = new CommunityOrder();
        $model->mall_id = $order->mall_id;
        $model->user_id = $order->user_id;
        $model->order_id = $order->id;
        $model->activity_id = $mchItem['activity_id'];
        $model->profit_price = $mchItem['profit'];
        $model->profit_data = json_encode($mchItem['profit_data']);
        $model->middleman_id = $mchItem['middleman_id'];
        $model->discount_price = $mchItem['community_discount'];
        $model->full_price = $mchItem['full_price'];
        $model->activity_no = $activity_no;
        $model->no = $no;
        $model->num = 0;
        foreach ($mchItem['goods_list'] as $item) {
            $model->num += $item['num'];
        }
        if (!$model->save()) {
            throw new OrderException('社区团购订单记录失败');
//            throw new OrderException((new Model())->getErrorMsg($model));
        }
        return true;
    }

    /**
     * 配送方式
     * @param $mchItem
     * @param $formMchItem
     * @return mixed
     * @throws \Exception
     */
    protected function setDeliveryData($mchItem, $formMchItem)
    {
        $mchItem['show_delivery'] = false;
        $mchItem['delivery']['send_type'] = 'express';
        $mchItem['delivery']['disabled'] = true;
        $mchItem['delivery']['send_type_list'] = [];
        return $mchItem;
    }

    public function whiteList()
    {
        return [$this->sign];
    }
}
