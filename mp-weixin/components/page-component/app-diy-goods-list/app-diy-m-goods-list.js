(global.webpackJsonp=global.webpackJsonp||[]).push([["components/page-component/app-diy-goods-list/app-diy-m-goods-list"],{3622:
/*!***********************************************************************************!*\
  !*** ./src/components/page-component/app-diy-goods-list/app-diy-m-goods-list.vue ***!
  \***********************************************************************************/
/*! no static exports found */function(t,e,i){"use strict";i.r(e);var n=i(/*! ./app-diy-m-goods-list.vue?vue&type=template&id=a52e4262&scoped=true&filter-modules=%7B%7D& */3623),r=i(/*! ./app-diy-m-goods-list.vue?vue&type=script&lang=js& */3625);for(var a in r)"default"!==a&&function(t){i.d(e,t,function(){return r[t]})}(a);i(/*! ./app-diy-m-goods-list.vue?vue&type=style&index=0&id=a52e4262&scoped=true&lang=scss& */3627);var o=i(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),s=Object(o.default)(r.default,n.render,n.staticRenderFns,!1,null,"a52e4262",null);s.options.__file="src/components/page-component/app-diy-goods-list/app-diy-m-goods-list.vue",e.default=s.exports},3623:
/*!****************************************************************************************************************************************************!*\
  !*** ./src/components/page-component/app-diy-goods-list/app-diy-m-goods-list.vue?vue&type=template&id=a52e4262&scoped=true&filter-modules=%7B%7D& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,i){"use strict";i.r(e);var n=i(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./app-diy-m-goods-list.vue?vue&type=template&id=a52e4262&scoped=true&filter-modules=%7B%7D& */3624);i.d(e,"render",function(){return n.render}),i.d(e,"staticRenderFns",function(){return n.staticRenderFns})},3624:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/components/page-component/app-diy-goods-list/app-diy-m-goods-list.vue?vue&type=template&id=a52e4262&scoped=true&filter-modules=%7B%7D& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,i){"use strict";i.r(e),i.d(e,"render",function(){return n}),i.d(e,"staticRenderFns",function(){return r});var n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.tempData.list,function(e,i){var n=t.isShowStock(e),r=t.isShowOriginalPrice(e),a=t.isShowMemPrice(e),o=t.isShowVip(e),s=t.isShowOriginalPrice(e);return{$orig:t.__get_orig(e),m0:n,m1:r,m2:a,m3:o,m4:s}}));t.$mp.data=Object.assign({},{$root:{l0:i}})},r=[];n._withStripped=!0},3625:
/*!************************************************************************************************************!*\
  !*** ./src/components/page-component/app-diy-goods-list/app-diy-m-goods-list.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */function(t,e,i){"use strict";i.r(e);var n=i(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./app-diy-m-goods-list.vue?vue&type=script&lang=js& */3626),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e.default=r.a},3626:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/components/page-component/app-diy-goods-list/app-diy-m-goods-list.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(/*! vuex */12);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var o={name:"app-diy-m-goods-list",components:{"app-price":function(){return i.e(/*! import() | components/page-component/goods/app-price */"components/page-component/goods/app-price").then(i.bind(null,/*! ../../page-component/goods/app-price.vue */3273))},"app-goods-timer":function(){return i.e(/*! import() | components/page-component/app-diy-goods-list/app-goods-timer */"components/page-component/app-diy-goods-list/app-goods-timer").then(i.bind(null,/*! ./app-goods-timer.vue */3774))},appDiyCompositionImage:function(){return i.e(/*! import() | components/page-component/app-diy-goods-list/app-diy-composition-image */"components/page-component/app-diy-goods-list/app-diy-composition-image").then(i.bind(null,/*! ./app-diy-composition-image */3781))}},props:{list:{type:Array,default:function(){return[]}},mTitle:String,mColor:{type:String,default:"#FFFFFF"},mBgType:{type:String,default:"gradient"},mBgColor:{type:String,default:"#FF366F"},mBgGradientColor:{type:String,default:"#FF4242"},mTimeColor:{type:String,default:"#353535"},mTimeBgColor:{type:String,default:"#FFFFFF"},mGoodsBgColor:{type:String,default:"#FFE7E7"},showProgressBar:{type:[Boolean,String],default:!1},showGoodsName:{type:[Boolean,String],default:!0},showGoodsPrice:{type:[Boolean,String],default:!0},showGoodsTag:{type:[Boolean,String],default:!1},customizeGoodsTag:{type:[Boolean,String],default:"#FFFFFF"},goodsTagPicUrl:{type:String,default:""},isUnderLinePrice:{type:[Boolean,String],default:!0},backgroundColor:{type:String,default:"#FFFFFF"},sign:String,theme:Object,mData:Object},data:function(){return{timer:null,timer_text:"",tempData:this.mData,after_title:"",mTimeIntegral:null}},watch:{mData:{handler:function(t){this.tempData=t},immediate:!0}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(i,!0).forEach(function(e){a(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}({},(0,n.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img.mall},appSetting:function(t){return t.mallConfig.mall.setting},platform:function(t){return t.gConfig.systemInfo.platform}}),{},(0,n.mapGetters)("mallConfig",{getVideo:"getVideo"}),{newData:function(){return this.list},signAlone:function(){switch(this.sign){case"miaosha":return{sign:this.sign,title:"秒杀",empty_title:"暂无秒杀活动",more_url:"/plugins/miaosha/advance/advance"};case"flash-sale":return{sign:this.sign,title:"限时抢购",empty_title:"暂无抢购活动",more_url:"/plugins/flash_sale/index/index"}}}}),mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){"miaosha"===t.signAlone.sign&&t.sTime(),"flash-sale"===t.signAlone.sign&&t.fTime()})})},beforeDestroy:function(){clearInterval(this.mTimeIntegral)},methods:{isShowMemPrice:function(t){return 1===t.is_level&&1!==t.is_negotiable?1:0},isShowVip:function(t){return t.vip_card_appoint&&t.vip_card_appoint.discount>0&&1!==t.is_negotiable?1:0},isShowStock:function(t){return 1===this.appSetting.is_show_stock&&0===t.goods_stock?1:0},set_time:function(t){var e=this;clearInterval(this.mTimeIntegral);var i=new Date(t.replace(/-/g,"/"));this.now_time(i),this.mTimeIntegral=setInterval(function(){e.now_time(i)},1e3)},now_time:function(t){var e=t.getTime()-(new Date).getTime();e<0&&clearInterval(this.mTimeIntegral);var i=parseInt(e/1e3/60/60/24),n=parseInt(e/1e3/60/60%24),r=parseInt(e/1e3/60%60),a=parseInt(e/1e3%60);this.timer={day:i<10?"0"+i:i,hour:n<10?"0"+n:n,min:r<10?"0"+r:r,sec:a<10?"0"+a:a}},fTime:function(){this.tempData.activity?(this.after_title="结束",this.set_time(this.tempData.activity.end_at)):this.tempData.next_activity&&(this.after_title="开始",this.tempData.next_activity&&this.tempData.next_activity.start_at&&this.set_time(this.tempData.next_activity.start_at))},sTime:function(){var t=this,e=new Date;if(new Date(this.tempData.open_date).getDate()!=e.getDate())this.timer_text="预告 "+this.tempData.open_date+" "+this.tempData.open_time+"点场";else if(this.tempData.open_time!=e.getHours())this.timer_text="预告 "+this.tempData.open_time+"点场";else{this.timer_text=this.tempData.open_time+"点场";var i=1e3*this.tempData.date_time-e.getTime();this.mTimeIntegral=setInterval(function(){if((i-=1e3)<=0)clearInterval(t.mTimeIntegral);else{var e=parseInt(i/1e3/60/60),n=parseInt(i/1e3/60%60),r=parseInt(i/1e3%60);t.timer={hour:e<10?"0"+e:e,min:n<10?"0"+n:n,sec:r<10?"0"+r:r}}},1e3)}},jumpMore:function(){t.navigateTo({url:this.signAlone.more_url})},jump:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(id,"&sign=").concat(e.sign)}):t.navigateTo({url:e.page_url})},isShowOriginalPrice:function(t){return this.isUnderLinePrice&&t.original_price&&this.showGoodsPrice&&1!==t.is_negotiable}}};e.default=o}).call(this,i(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},3627:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/components/page-component/app-diy-goods-list/app-diy-m-goods-list.vue?vue&type=style&index=0&id=a52e4262&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */function(t,e,i){"use strict";i.r(e);var n=i(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../node_modules/css-loader??ref--8-oneOf-1-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./app-diy-m-goods-list.vue?vue&type=style&index=0&id=a52e4262&scoped=true&lang=scss& */3628),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e.default=r.a},3628:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/components/page-component/app-diy-goods-list/app-diy-m-goods-list.vue?vue&type=style&index=0&id=a52e4262&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,i){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/page-component/app-diy-goods-list/app-diy-m-goods-list.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-diy-goods-list/app-diy-m-goods-list-create-component',
    {
        'components/page-component/app-diy-goods-list/app-diy-m-goods-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(3622))
        })
    },
    [['components/page-component/app-diy-goods-list/app-diy-m-goods-list-create-component']]
]);                