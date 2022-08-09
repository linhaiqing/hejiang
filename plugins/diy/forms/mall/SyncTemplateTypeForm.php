<?php
/**
 * Created by PhpStorm.
 * User: 风哀伤
 * Date: 2020/7/18
 * Time: 17:56
 * @copyright: ©2019 浙江禾匠信息科技
 * @link: http://www.zjhejiang.com
 */

namespace app\plugins\diy\forms\mall;

use app\core\response\ApiCode;
use app\models\Model;
use app\plugins\diy\models\CoreTemplateType;
use Yii;

class SyncTemplateTypeForm extends Model
{
    public function sync()
    {
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'msg' => 'sync ok.',
        ];
    }
}
