<?php

namespace app\models;

use Yii;
use yii\web\IdentityInterface;

/**
 * This is the model class for table "{{%user}}".
 *
 * @property int $id
 * @property int $mall_id
 * @property int $mch_id
 * @property string $username
 * @property string $password
 * @property string $nickname
 * @property string $auth_key
 * @property string $access_token
 * @property string $mobile
 * @property string $unionid
 * @property string $created_at
 * @property string $updated_at
 * @property string $deleted_at
 * @property string $is_delete
 * @property UserIdentity $identity
 * @property UserInfo $userInfo
 * @property Share $share
 * @property User $parent
 * @property AdminInfo $adminInfo
 * @property UserPlatform[] $userPlatform
 */
class User extends ModelActiveRecord implements IdentityInterface
{
    const EVENT_REGISTER = 'userRegister';
    const EVENT_LOGIN = 'userLogin';

    private $xOptions;

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%user}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['mall_id', 'is_delete', 'mch_id'], 'integer'],
            [['username', 'password', 'auth_key', 'access_token'], 'required'],
            [['created_at', 'updated_at', 'deleted_at', 'mobile'], 'safe'],
            [['username', 'unionid'], 'string', 'max' => 64],
            [['password', 'auth_key', 'access_token'], 'string', 'max' => 128],
            [['nickname'], 'string', 'max' => 45],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'mall_id' => 'Mall ID',
            'mch_id' => 'Mch ID',
            'username' => 'Username',
            'password' => 'Password',
            'nickname' => 'Nickname',
            'auth_key' => 'Auth Key',
            'access_token' => 'Access Token',
            'unionid' => 'Unionid',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'deleted_at' => 'Deleted At',
            'is_delete' => 'Is Delete',
        ];
    }

    /**
     * ???????????????ID???????????????
     *
     * @param string|integer $id ????????????ID
     * @return IdentityInterface|null ??????ID????????????????????????
     */
    public static function findIdentity($id)
    {
        return static::findOne($id);
    }

    /**
     * ?????? token ???????????????
     *
     * @param string $token ???????????? token
     * @return IdentityInterface|null ?????? token ?????????????????????
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        return static::findOne(['access_token' => $token]);
    }

    /**
     * @return int|string ????????????ID
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string ??????????????????cookie???????????????
     */
    public function getAuthKey()
    {
        return $this->auth_key;
    }

    /**
     * @param string $authKey
     * @return boolean if auth key is valid for current user
     */
    public function validateAuthKey($authKey)
    {
        return $this->getAuthKey() === $authKey;
    }

    /**
     * ????????????
     * @return \yii\db\ActiveQuery
     */
    public function getIdentity()
    {
        return $this->hasOne(UserIdentity::className(), ['user_id' => 'id']);
    }

    public function getAdminInfo()
    {
        return $this->hasOne(AdminInfo::className(), ['user_id' => 'id']);
    }

    public function getRole()
    {
        return $this->hasMany(AuthRole::className(), ['id' => 'role_id'])->andWhere(['is_delete' => 0])
            ->viaTable(AuthRoleUser::tableName(), ['user_id' => 'id', 'is_delete' => 'is_delete']);
    }

    public function getUserInfo()
    {
        return $this->hasOne(UserInfo::className(), ['user_id' => 'id']);
    }

    public function getStore()
    {
        return $this->hasOne(Store::className(), ['id' => 'store_id'])
            ->viaTable(UserInfo::tableName(), ['user_id' => 'id', 'is_delete' => 'is_delete']);
    }

    public function getShare()
    {
        return $this->hasOne(Share::className(), ['user_id' => 'id']);
    }

    public function getParent()
    {
        return $this->hasOne(User::className(), ['id' => 'parent_id'])
            ->viaTable(UserInfo::tableName(), ['user_id' => 'id', 'is_delete' => 'is_delete']);
    }

    public function getNewParent()
    {
        return $this->hasOne(User::className(), ['id' => 'parent_id']);
    }

    public function getFormId()
    {
        return $this->hasMany(Formid::className(), ['user_id' => 'id']);
    }

    public function getOneFormId()
    {
        return $this->hasOne(Formid::className(), ['user_id' => 'id']);
    }

    public function setShare($val)
    {
        $this->share = $val;
    }

    public function getMall()
    {
        return $this->hasMany(Mall::className(), ['user_id' => 'id']);
    }

    public function getPlatform($platform)
    {
        switch ($platform) {
            case 'wxapp':
                $value = '??????';
                break;
            case 'aliapp':
                $value = '?????????';
                break;
            case 'ttapp':
                $value = '??????';
                break;
            case 'bdapp':
                $value = '??????';
                break;
            default:
                $value = '??????';
                break;
        }

        return $value;
    }

    public function getUserPlatform()
    {
        return $this->hasMany(UserPlatform::className(), ['user_id' => 'id']);
    }
}
