(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/article/article-list/article-list"],{1785:
/*!*********************************************************!*\
  !*** ./src/pages/article/article-list/article-list.vue ***!
  \*********************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! ./article-list.vue?vue&type=template&id=8e1989bc&scoped=true&filter-modules=%7B%7D& */1786),r=n(/*! ./article-list.vue?vue&type=script&lang=js& */1788);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n(/*! ./article-list.vue?vue&type=style&index=0&id=8e1989bc&scoped=true&lang=scss& */1790);var o=n(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),c=Object(o.default)(r.default,i.render,i.staticRenderFns,!1,null,"8e1989bc",null);c.options.__file="src/pages/article/article-list/article-list.vue",e.default=c.exports},1786:
/*!**************************************************************************************************************************!*\
  !*** ./src/pages/article/article-list/article-list.vue?vue&type=template&id=8e1989bc&scoped=true&filter-modules=%7B%7D& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./article-list.vue?vue&type=template&id=8e1989bc&scoped=true&filter-modules=%7B%7D& */1787);n.d(e,"render",function(){return i.render}),n.d(e,"staticRenderFns",function(){return i.staticRenderFns})},1787:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/article/article-list/article-list.vue?vue&type=template&id=8e1989bc&scoped=true&filter-modules=%7B%7D& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return i}),n.d(e,"staticRenderFns",function(){return r});var i=function(){var t=this.$createElement;this._self._c},r=[];i._withStripped=!0},1788:
/*!**********************************************************************************!*\
  !*** ./src/pages/article/article-list/article-list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./article-list.vue?vue&type=script&lang=js& */1789),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e.default=r.a},1789:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/article/article-list/article-list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{page:2,loading:!1,list:[]}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},(0,n(/*! vuex */12).mapState)({title:function(t){return t.mallConfig.bar_title}})),methods:{getList:function(){var t=this,e=this;e.$showLoading({text:"加载中..."}),this.$request({url:e.$api.article.list,method:"get"}).then(function(n){e.$hideLoading(),0==n.code&&(t.list=n.data.list)}).catch(function(t){e.$hideLoading()})},getMore:function(){var e=this;if(e.loading)return!1;e.loading=!0,t.showLoading({title:"加载中..."}),e.$request({url:e.$api.article.list,data:{page:e.page}}).then(function(n){e.loading=!1,t.hideLoading(),0==n.code&&(n.data.list.length>0?(e.list=e.list.concat(n.data.list),e.page++):(t.showToast({title:"没有更多内容",icon:"none",duration:1e3}),e.loading=!0))}).catch(function(n){e.loading=!1,t.hideLoading()})},toDetail:function(e){t.navigateTo({url:"/pages/article/article-detail/article-detail?id="+e})}},onLoad:function(){this.$commonLoad.onload(),this.getList()},onReachBottom:function(){this.getMore()},onShareAppMessage:function(){for(var t in this.title)if("文章中心"===this.title[t].name)return this.$shareAppMessage({title:this.title[t].new_name,path:"/pages/article/article-list/article-list"})}};e.default=a}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},1790:
/*!*******************************************************************************************************************!*\
  !*** ./src/pages/article/article-list/article-list.vue?vue&type=style&index=0&id=8e1989bc&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../node_modules/css-loader??ref--8-oneOf-1-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./article-list.vue?vue&type=style&index=0&id=8e1989bc&scoped=true&lang=scss& */1791),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e.default=r.a},1791:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/article/article-list/article-list.vue?vue&type=style&index=0&id=8e1989bc&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}},[[1784,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/article/article-list/article-list.js.map