(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{1511:function(e,n,s){"use strict";s.r(n);var t=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"User"},[s("h1",[e._v("This is a Userpage.")]),s("h2",[e._v("ようこそ、"+e._s(e.userName))])])},a=[],o=s("a18c"),r={name:"User",components:{},data:function(){return{userName:"名無しゲスト"}},mounted:function(){var e=this,n={headers:{Authorization:"Bearer "+this.$cookies.get("jwt_token")}};this.$axios.get("/api/get_login_user",n).then((function(n){e.userName=n.data.user_name})).catch((function(e){console.log(e),console.log(e.response.data),console.log(n),window.alert("もう一度ログインしてから試してください"),o["a"].push({name:"Home"})}))}},i=r,u=s("2877"),c=Object(u["a"])(i,t,a,!1,null,null,null);n["default"]=c.exports}}]);
<<<<<<< HEAD
<<<<<<< HEAD:dist/static/js/user.54007bf3.js
//# sourceMappingURL=user.54007bf3.js.map
=======
//# sourceMappingURL=user.5a1deec1.js.map
>>>>>>> faf5dd426dd6f2d207a612471993417728b3fc41:dist/static/js/user.5a1deec1.js
=======
//# sourceMappingURL=user.54007bf3.js.map
>>>>>>> 74158871ef75ef78b1f05cf7c1053c59473bb4fc
