<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/1/16
 * Time: 10:26
 */

namespace app\forms\mall\share;


use app\core\response\ApiCode;
use app\forms\common\share\CommonShareLevel;
use app\jobs\ChangeShareLevelJob;
use app\models\Goods;
use app\models\GoodsCats;
use app\models\GoodsWarehouse;
use app\models\Model;
use app\models\Share;
use app\models\ShareLevel;
use app\models\ShareSetting;

class BasicForm extends Model
{
    public $level;
    public $is_rebate;
    public $price_type;
    public $first;
    public $second;
    public $third;
    public $share_condition;
    public $condition;
    public $auto_share_val;
    public $total_consume;
    public $share_goods_status;
    public $share_goods_warehouse_id;
    public $pay_type;
    public $cash_max_day;
    public $min_money;
    public $cash_service_charge;
    public $agree;
    public $content;
    public $pic_url_apply;
    public $pic_url_status;
    public $pic_url_home_head;
    public $become_condition;
    public $cat_list;
    public $is_show_share_level;
    public $form_status;
    public $form;
    public $default_level_name;
    public $consume_condition;

    public function rules()
    {
        return [
            [['level', 'is_rebate', 'price_type', 'share_condition', 'condition', 'pay_type', 'cash_max_day',
                'min_money', 'cash_service_charge'], 'required'],
            [['level', 'is_rebate', 'price_type', 'share_condition', 'condition',
                'become_condition', 'share_goods_status', 'is_show_share_level', 'form_status',
                'consume_condition'], 'integer'],
            [['first', 'second', 'third', 'auto_share_val', 'total_consume',
                'min_money', 'cash_service_charge'], 'number', 'min' => 0],
            [['cash_max_day'], 'default', 'value' => -1],
            [['cash_max_day'], 'number', 'min' => -1],
            [['agree', 'content', 'pic_url_apply', 'pic_url_status', 'pic_url_home_head', 'default_level_name'], 'string'],
            [['agree', 'content', 'pic_url_apply', 'pic_url_status', 'pic_url_home_head','form'], 'trim'],
            [['first', 'second', 'third'], function ($attr, $params) {
                switch ($this->level) {
                    case 3:
                        if ($this->third == '') {
                            $this->addError($attr, '???????????????????????????');
                        }
                        if ($this->second == '') {
                            $this->addError($attr, '???????????????????????????');
                        }
                        if ($this->first == '') {
                            $this->addError($attr, '???????????????????????????');
                        }
                        break;
                    case 2:
                        if ($this->second == '') {
                            $this->addError($attr, '???????????????????????????');
                        }
                        if ($this->first == '') {
                            $this->addError($attr, '???????????????????????????');
                        }
                        break;
                    case 1:
                        if ($this->first == '') {
                            $this->addError($attr, '???????????????????????????');
                        }
                        break;
                    default:
                        break;
                }
            }, 'skipOnEmpty' => false, 'skipOnError' => false],
            [['share_goods_warehouse_id'], function ($attr, $params) {
                if ($this->share_goods_status == 2 && !($this->$attr && !empty($this->$attr))
                    && $this->become_condition == 2) {
                    $this->addError($attr, $this->getAttributeLabel($attr) . '????????????');
                }
            }, 'skipOnEmpty' => false, 'skipOnError' => false],
            [['cat_list'], function ($attr, $params) {
                if ($this->share_goods_status == 3 && !($this->$attr && !empty($this->$attr))
                    && $this->become_condition == 2) {
                    $this->addError($attr, $this->getAttributeLabel($attr) . '????????????');
                }
            }, 'skipOnEmpty' => false, 'skipOnError' => false],
        ];
    }

    public function attributeLabels()
    {
        return [
            'level' => '????????????',
            'is_rebate' => '????????????',
            'price_type' => '??????????????????',
            'first' => '????????????',
            'second' => '????????????',
            'third' => '????????????',
            'share_condition' => '?????????????????????',
            'condition' => '??????????????????',
            'auto_share_val' => '???????????????????????????',
            'total_consume' => '???????????????????????????',
            'share_goods_status' => '?????????????????????????????????',
            'share_goods_warehouse_id' => '???????????????',
            'pay_type' => '????????????',
            'cash_max_day' => '??????????????????',
            'min_money' => '??????????????????',
            'cash_service_charge' => '???????????????',
            'agree' => '????????????',
            'content' => '????????????',
            'pic_url_apply' => '????????????????????????',
            'pic_url_status' => '????????????????????????',
            'pic_url_home_head' => '??????????????????',
            'default_level_name' => '????????????',
            'become_condition' => '????????????',
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }
        try {
            $setList = [];
            if (!empty($this->cat_list)) {
                $list = [];
                foreach ($this->cat_list as $item) {
                    $list[] = $item['value'];
                }
                $this->cat_list = $list;
            }
            foreach ($this->attributes as $index => $item) {
                $setList[] = [
                    'key' => $index,
                    'value' => $item
                ];
            }
            if(!empty($this->form)) {
                foreach ($this->form as $item) {
                    if (!$item['name']) {
                        throw new \Exception('????????? ' . $item['key_name'] . ' ??????');
                    }
                    if (isset($item['list'])) {
                        foreach ($item['list'] as $item2) {
                            if (!$item2['label']) {
                                throw new \Exception('????????? ' . $item['key_name'] . ' ????????????');
                            }
                        }
                    }
                }
            }
            ShareSetting::setList(\Yii::$app->mall->id, $setList);
            \Yii::$app->queue->delay(0)->push(new ChangeShareLevelJob([
                'mall' => \Yii::$app->mall
            ]));
            return [
                'code' => 0,
                'msg' => '????????????'
            ];
        } catch (\Exception $e) {
            return [
                'code' => 1,
                'msg' => $e->getMessage()
            ];
        }
    }

    public function search()
    {
        $list = ShareSetting::getList(\Yii::$app->mall->id);
        if ($list['form_status'] == 1 && isset($list['form'])) {
            foreach ($list['form'] as &$item) {
                $item['is_required'] = (int)$item['is_required'];
            }
            unset($item);
        }
        $list['goods_list'] = [];
        $newCatList = [];
        if (isset($list[ShareSetting::SHARE_GOODS_WAREHOUSE_ID]) && $list[ShareSetting::SHARE_GOODS_WAREHOUSE_ID]) {
            $goodsList = GoodsWarehouse::findAll([
                'is_delete' => 0, 'mall_id' => \Yii::$app->mall->id,
                'id' => $list[ShareSetting::SHARE_GOODS_WAREHOUSE_ID]
            ]);
            $list[ShareSetting::SHARE_GOODS_WAREHOUSE_ID] = [];
            if ($goodsList) {
                foreach ($goodsList as $goods) {
                    $list['goods_list'][] = [
                        'id' => $goods->id,
                        'name' => $goods->name,
                        'cover_pic' => $goods->cover_pic
                    ];
                    $list[ShareSetting::SHARE_GOODS_WAREHOUSE_ID][] = $goods->id;
                }
            }
        }
        if (isset($list[ShareSetting::CAT_LIST]) && $list[ShareSetting::CAT_LIST]) {
            $catList = GoodsCats::findAll([
                'is_delete' => 0, 'mall_id' => \Yii::$app->mall->id,
                'id' => $list[ShareSetting::CAT_LIST]
            ]);
            $list[ShareSetting::CAT_LIST] = [];
            if ($catList) {
                foreach ($catList as $cat) {
                    $newCatList[] = [
                        'label' => $cat['name'],
                        'value' => $cat['id']
                    ];
                    $list[ShareSetting::CAT_LIST] = $newCatList;
                }
            }
        }
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '',
            'data' => [
                'list' => $list
            ]
        ];
    }

    public function getGoodsShareConfig()
    {
        $level = ShareSetting::get(\Yii::$app->mall->id, ShareSetting::LEVEL);
        $shareArray = [
            [
                'label' => '????????????',
                'value' => 'share_commission_first',
            ],
            [
                'label' => '????????????',
                'value' => 'share_commission_second',
            ],
            [
                'label' => '????????????',
                'value' => 'share_commission_third',
            ],
        ];
        array_splice($shareArray, $level);
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => '',
            'data' => [
                'shareArray' => $shareArray,
                'shareLevelList' => CommonShareLevel::getInstance()->getList(),
            ]
        ];
    }
}
