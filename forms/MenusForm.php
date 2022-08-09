<?php
/**
 * link: http://www.zjhejiang.com/
 * copyright: Copyright (c) 2018 浙江禾匠信息科技有限公司
 * author: wxf
 */

namespace app\forms;


use app\forms\common\CommonOption;
use app\forms\common\CommonUser;
use app\models\Model;
use app\models\Option;

class MenusForm extends Model
{
    public $currentRouteInfo = [];
    public $currentRoute;
    public $pid = 0;
    public $id = 0;

    private $userIdentity;
    private $adminPermissions;
    private $permissionsStatus;

    //初始化数据，方便外部调用本类
    public function init()
    {
        $this->userIdentity = CommonUser::getUserIdentity();
        if ($this->userIdentity->is_admin == 1) {
            $arr = (CommonUser::getAdminInfo())->permissions;
            // 有些菜单上也有key标识、但无需进行删除
            $this->adminPermissions = array_merge(json_decode($arr, true), [
                'cache_manage', 'rule_user'
            ]);
            $this->permissionsStatus = CommonOption::get(
                Option::NAME_PERMISSIONS_STATUS,
                \Yii::$app->user->identity->mall_id,
                Option::GROUP_ADMIN,
                0
            );
        }
        parent::init(); // TODO: Change the autogenerated stub
    }

    /**
     * @param $type string 有效参数 admin|mall
     * @return mixed
     * @throws \Exception
     */
    public function getMenus($type)
    {
        if (!in_array($type, ['admin', 'mall', 'plugin'])) {
            throw new \Exception('type 传入参数无效');
        }

        if ($type === 'admin') {
            $menus = Menus::getAdminMenus();
        }

        if ($type === 'mall') {
            $menus = Menus::getMallMenus();
        }

        if ($type === 'plugin') {
            $plugin = \Yii::$app->plugin->currentPlugin;
            $menus = $plugin->getMenus();
        }

        // TODO 需要加入插件菜单
        $userPermissions = [];
        // 获取员工账号 权限路由
        if ($this->userIdentity->is_operator == 1) {
            $userPermissions = CommonUser::getUserPermissions();
        }
        // 多商户
        if (\Yii::$app->user->identity->mch_id) {
            $userPermissions = CommonUser::getMchPermissions();
        }

        // 标识菜单是否显示
        $checkMenus = $this->checkMenus($menus, $userPermissions);

        // 去除不需显示的菜单
        $menus = $this->deleteMenus($checkMenus);

        // 菜单列表
        $newMenus = $this->resetMenus($menus);

        return [
            'menus' => $newMenus,
            'currentRouteInfo' => $this->currentRouteInfo,
        ];
    }

    /**
     * 给自定义路由列表 追加ID 及 PID
     * @param array $list 自定义的多维路由数组
     * @param int $id 权限ID
     * @param int $pid 权限PID
     * @return mixed
     */
    private function resetMenus(array $list, &$id = 1, $pid = 0)
    {
        foreach ($list as $key => $item) {
            $list[$key]['id'] = (string)$id;
            $list[$key]['pid'] = (string)$pid;

            // 前端选中的菜单
            if (isset($list[$key]['route']) && $this->currentRoute === $list[$key]['route']) {
                $this->currentRouteInfo = $list[$key];
            }

            if (isset($item['children'])) {
                $id++;
                $list[$key]['children'] = $this->resetMenus($item['children'], $id, $id - 1);
            }

            if (isset($item['action'])) {
                $id++;
                $list[$key]['action'] = $this->resetMenus($item['action'], $id, $id - 1);
            }

            isset($item['children']) == false && isset($item['action']) == false ? $id++ : $id;
        }

        return $list;
    }

    /**
     * 根据权限 标识菜单是否可用
     * 2020年6月30日 16:18:36  开发给数据统计插件菜单使用
     * @param $menus
     * @param $permissions
     * @return mixed
     */
    public function checkMenus($menus, $permissions)
    {
        foreach ($menus as $k => $item) {
            if ($this->userIdentity->is_super_admin === 1) {
                // 超级管理员
                $menus[$k]['is_show'] = true;
            } elseif ($this->userIdentity->is_admin === 1) {
                // 子账号管理员
                $menus[$k]['is_show'] = true;
            } else {
                // 员工账号
                if ($item['route'] && in_array($item['route'], $permissions)) {
                    $menus[$k]['is_show'] = true;
                } else {
                    $menus[$k]['is_show'] = false;
                }
            }

            if (isset($item['children'])) {
                $menus[$k]['children'] = $this->checkMenus($item['children'], $permissions);
                foreach ($menus[$k]['children'] as $i) {
                    if ($i['is_show'] == true) {
                        $menus[$k]['route'] = $i['route'];
                        $menus[$k]['is_show'] = true;
                        break;
                    }
                }
            }
        }

        return $menus;
    }

    /**
     * 根据是否显示标识、去除不显示的菜单.
     * 2020年6月30日 16:18:36  开发给数据统计插件菜单使用
     * @param $menus
     * @param $permissions
     * @return mixed
     */
    public function deleteMenus($menus)
    {
        foreach ($menus as $k => $item) {
            if (isset($item['is_show']) && $item['is_show'] == false) {
                unset($menus[$k]);
                continue;
            }
            //子账号
            if ($this->userIdentity->is_admin === 1) {
                // 去除总管理才有的权限
                if (isset($item['key']) && in_array($item['key'], Menus::MALL_SUPER_ADMIN_KEY)) {
                    unset($menus[$k]);
                    continue;
                }
                //去除总账号未分配给子账号的菜单
                if (isset($item['key']) && !in_array($item['key'], $this->adminPermissions)) {
                    unset($menus[$k]);
                    continue;
                }
            }

            // 去除只允许多商户访问的路由
            if (\Yii::$app->user->identity->mch_id <= 0) {
                if (isset($item['key']) && in_array($item['key'], Menus::MALL_MCH_KEY)) {
                    unset($menus[$k]);
                    continue;
                }
            }

            //员工账号
            if ($this->userIdentity->is_operator === 1) {
                // 去除总管理才有的权限
                if (isset($item['key']) && in_array($item['key'], Menus::MALL_SUPER_ADMIN_KEY)) {
                    unset($menus[$k]);
                    continue;
                }
            }

            if (isset($item['children'])) {
                $menus[$k]['children'] = $this->deleteMenus($item['children']);
            }
        }
        $menus = array_values($menus);
        return $menus;
    }
}
