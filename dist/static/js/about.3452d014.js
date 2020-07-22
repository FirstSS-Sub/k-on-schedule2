(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")]),n("button",{on:{click:t.onamae}},[t._v("お名前ボタン")]),n("ul",t._l(t.datalist,(function(a,e){return n("li",{key:e},[t._v(" "+t._s(a.last)+" "+t._s(a.first)+" ")])})),0)])},s=[],i={name:"About",data:function(){return{datalist:[]}},methods:{onamae:function(){var t=this;this.$axios.get("/api/create_user").then((function(a){t.datalist=a.data})).catch((function(t){console.log(t)}))}}},o=i,u=n("2877"),c=Object(u["a"])(o,e,s,!1,null,null,null);a["default"]=c.exports}}]);
<<<<<<< HEAD:dist/static/js/about.527d2764.js
//# sourceMappingURL=about.527d2764.js.map
=======
//# sourceMappingURL=about.3452d014.js.map
>>>>>>> a8dbabdfdf533efbe181331768879302b0456c34:dist/static/js/about.3452d014.js
