(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{2527:function(t,e,n){},4231:function(t,e,n){"use strict";var a=n("f30d"),s=n.n(a);s.a},"52bf":function(t,e,n){"use strict";var a=n("2527"),s=n.n(a);s.a},a55b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("router-view"),n("h1",[t._v("ログイン")]),n("div",[n("table",{staticClass:"login-table"},[n("tbody",[n("tr",[n("th",[t._v("ユーザ名")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user_name,expression:"user_name"}],attrs:{type:"text",placeholder:"ユーザ名"},domProps:{value:t.user_name},on:{input:function(e){e.target.composing||(t.user_name=e.target.value)}}})])]),n("tr",[n("th",[t._v("パスワード")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"パスワード"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])])])]),n("p",[n("button",{on:{click:function(e){return t.login()}}},[t._v("ログイン")])]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/Login_forget"}},[t._v("パスワードを忘れた方はこちら")])],1)],1)},s=[],o={name:"login",data:function(){return{user_name:"",password:""}},methods:{login:function(){var t=this,e=this.$crypto.createHash("sha256");e.update(this.password);var n=e.digest("base64");this.$axios.post("/api/login",{user_name:this.user_name,password:n}).then((function(e){t.$cookies.set("jwt_token",e.data.access_token,{expires:1}),window.alert("ログインしました。")})).catch((function(t){console.log(t),window.alert(t.response.data.msg)}))}}},r=o,i=(n("52bf"),n("cd46"),n("4231"),n("2877")),u=Object(i["a"])(r,a,s,!1,null,"d3328f86",null);e["default"]=u.exports},cd46:function(t,e,n){"use strict";var a=n("f6ad"),s=n.n(a);s.a},f30d:function(t,e,n){},f6ad:function(t,e,n){}}]);
//# sourceMappingURL=login.368ad22f.js.map