(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/share/add/add"],{18:
/*!*********************************!*\
  !*** external "../siteinfo.js" ***!
  \*********************************/
/*! no static exports found */function(t,e){t.exports=require("../siteinfo.js")},318:
/*!*************************************!*\
  !*** ./src/pages/share/add/add.vue ***!
  \*************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! ./add.vue?vue&type=template&id=0b3fe2a2&scoped=true&filter-modules=%7B%7D& */319),r=n(/*! ./add.vue?vue&type=script&lang=js& */321);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n(/*! ./add.vue?vue&type=style&index=0&id=0b3fe2a2&scoped=true&lang=scss& */323);var a=n(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),s=Object(a.default)(r.default,o.render,o.staticRenderFns,!1,null,"0b3fe2a2",null);s.options.__file="src/pages/share/add/add.vue",e.default=s.exports},319:
/*!******************************************************************************************************!*\
  !*** ./src/pages/share/add/add.vue?vue&type=template&id=0b3fe2a2&scoped=true&filter-modules=%7B%7D& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add.vue?vue&type=template&id=0b3fe2a2&scoped=true&filter-modules=%7B%7D& */320);n.d(e,"render",function(){return o.render}),n.d(e,"staticRenderFns",function(){return o.staticRenderFns})},320:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/share/add/add.vue?vue&type=template&id=0b3fe2a2&scoped=true&filter-modules=%7B%7D& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return o}),n.d(e,"staticRenderFns",function(){return r});var o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.protocol=!0},t.e1=function(e){t.protocol=!1,t.read=!0})},r=[];o._withStripped=!0},321:
/*!**************************************************************!*\
  !*** ./src/pages/share/add/add.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add.vue?vue&type=script&lang=js& */322),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e.default=r.a},322:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/share/add/add.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{status:null,mallName:"",name:"",phone:"",parent_name:"",height:0,form:{},template_message:[],read:!1,protocol:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},(0,n(/*! vuex */12).mapState)({mall:function(t){return t.mallConfig.mall},custom_setting:function(t){return t.mallConfig.share_setting_custom},share_setting:function(t){return t.mallConfig.share_setting}})),components:{AppDiyForm:function(){return n.e(/*! import() | components/page-component/app-diy-form/app-diy-form */"components/page-component/app-diy-form/app-diy-form").then(n.bind(null,/*! ../../../components/page-component/app-diy-form/app-diy-form */2638))}},methods:{handleFormInput:function(t){var e=t.data,n=[];for(var o in e)n[o]={key:e[o].key,label:e[o].name,value:e[o].value,required:e[o].is_required};this.form=n},toRead:function(){this.read=!this.read},imageLoad:function(t){var e=t.detail.width,n=t.detail.height;this.height=n*(702/e)},subscribe:function(){var e=this,n=0;if(this.form.length>0){var o=!0,r=!1,i=void 0;try{for(var a,s=this.form[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var u=a.value;if(1==u.required){if(!u.value)return t.showToast({title:"请填写"+u.label,icon:"none",duration:1e3}),!1;if("img_upload"==u.key&&Array.isArray(u.value)){var l=!0,c=!1,f=void 0;try{for(var d,h=u.value[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){if(!d.value)return t.showToast({title:"请填写"+u.label,icon:"none",duration:1e3}),!1}}catch(t){c=!0,f=t}finally{try{l||null==h.return||h.return()}finally{if(c)throw f}}}}}}catch(t){r=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}}1==this.read?(n=1,this.name?this.phone?/0?(1)[0-9]{10}/.test(this.phone)?this.$subscribe(this.template_message).then(function(t){e.submit(n)}).catch(function(t){e.submit(n)}):t.showToast({title:"请输入正确的手机号码",icon:"none",duration:1e3}):t.showToast({title:"请输入手机号码",icon:"none",duration:1e3}):t.showToast({title:"请输入真实姓名",icon:"none",duration:1e3})):t.showToast({title:"请先查看分销协议并同意",icon:"none",duration:1e3})},submit:function(e){var n=this;t.showLoading({title:"提交中..."});var o={name:n.name,mobile:n.phone,agree:e};1==n.share_setting.form_status&&(o.form=JSON.stringify(n.form)),n.$request({url:n.$api.share.apply,data:o,method:"post"}).then(function(e){n.$store.dispatch("mallConfig/actionResetConfig"),n.$hideLoading(),0==e.code?(t.showToast({title:e.msg,duration:1e3}),setTimeout(function(){t.navigateBack({delta:1})},500)):0==n.share_setting.form_status&&"请填写表单"==e.msg?t.showToast({title:"申请条件有所变化，请重新填写",icon:"none",duration:1e3}):t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){n.$hideLoading(),t.showToast({title:response,icon:"none",duration:1e3})})}},onLoad:function(e){var n=this;this.$commonLoad.onload(e);this.$showLoading({type:"global",text:"加载中..."}),null!=e.template_message&&(this.template_message=JSON.parse(e.template_message)),t.setNavigationBarTitle({title:this.custom_setting.apply.share_apply.name?this.custom_setting.apply.share_apply.name:this.custom_setting.apply.share_apply.default}),this.$request({url:this.$api.user.user_info}).then(function(t){n.$hideLoading(),0===t.code&&(n.parent_name=t.data.identity.parent_name)})},onShow:function(){this.$store.dispatch("mallConfig/actionResetConfig")}};e.default=i}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},323:
/*!***********************************************************************************************!*\
  !*** ./src/pages/share/add/add.vue?vue&type=style&index=0&id=0b3fe2a2&scoped=true&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../node_modules/css-loader??ref--8-oneOf-1-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add.vue?vue&type=style&index=0&id=0b3fe2a2&scoped=true&lang=scss& */324),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e.default=r.a},324:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/share/add/add.vue?vue&type=style&index=0&id=0b3fe2a2&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}},[[317,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/share/add/add.js.map