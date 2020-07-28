(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")]),n("button",{on:{click:t.onamae}},[t._v("お名前ボタン")]),n("ul",t._l(t.datalist,(function(a,e){return n("li",{key:e},[t._v(" "+t._s(a.last)+" "+t._s(a.first)+" ")])})),0)])},s=[],i={name:"About",data:function(){return{datalist:[]}},methods:{onamae:function(){var t=this;this.$axios.get("/api/create_user").then((function(a){t.datalist=a.data})).catch((function(t){console.log(t)}))}}},o=i,u=n("2877"),c=Object(u["a"])(o,e,s,!1,null,null,null);a["default"]=c.exports}}]);
<<<<<<< HEAD
<<<<<<< HEAD:dist/static/js/about.8810afd9.js
//# sourceMappingURL=about.8810afd9.js.map
=======
//# sourceMappingURL=about.5528af1e.js.map
>>>>>>> faf5dd426dd6f2d207a612471993417728b3fc41:dist/static/js/about.5528af1e.js
=======
//# sourceMappingURL=about.8810afd9.js.map
>>>>>>> 74158871ef75ef78b1f05cf7c1053c59473bb4fc
