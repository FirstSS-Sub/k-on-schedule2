(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["schedule"],{"6b7b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Schedule"},[n("h1",[t._v("スケジュール登録ページだよーーーー")])])}],s={name:"Schedule",data:function(){return{datalist:[]}},created:function(){var t=this;this.$axios.get("/api/schedule").then((function(e){t.datalist=e.data})).catch((function(t){console.log(t)}))}},i=s,l=n("2877"),u=Object(l["a"])(i,a,c,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=schedule.2d17a72f.js.map