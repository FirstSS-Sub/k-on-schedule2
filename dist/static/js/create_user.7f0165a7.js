<<<<<<< HEAD:dist/static/js/create_user.7f0165a7.js
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create_user"],{5619:function(e,t,a){},5635:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"create_user"},[a("h1",[e._v("新規アカウント作成")]),a("div",[a("table",{staticClass:"form-table"},[a("tbody",[a("tr",[a("th",[e._v("ユーザ名")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user_name,expression:"user_name"}],attrs:{type:"text",placeholder:"ユーザ名"},domProps:{value:e.user_name},on:{input:function(t){t.target.composing||(e.user_name=t.target.value)}}})])]),a("tr",[a("th",[e._v("パスワード")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"パスワード"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),a("tr",[a("th",[e._v("パスワード（確認用）")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password_check,expression:"password_check"}],attrs:{type:"password",placeholder:"パスワード（確認用）"},domProps:{value:e.password_check},on:{input:function(t){t.target.composing||(e.password_check=t.target.value)}}})])]),a("tr",[a("th",[e._v("メールアドレス")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"メールアドレス"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])])])]),a("p",[a("button",{on:{click:function(t){return e.create_user()}}},[e._v("新規アカウント作成")])])])])},r=[],o={name:"create_user",data:function(){return{user_name:"",password:"",email:""}},methods:{create_user:function(){var e=this;if(""===this.user_name||""===this.password||""===this.password_check||""===this.email)window.alert("全ての項目を記入してください。");else if(this.password!==this.password_check)window.alert("パスワードが一致していません。\nもう一度確認した上で、パスワードを記入し直してください。");else{var t=this.$crypto.createHash("sha256");t.update(this.password);var a=t.digest("base64");this.$axios.post("/api/create_user",{user_name:this.user_name,password:a,email:this.email}).then((function(){console.log("うぇいよー"),window.alert("ユーザー名:"+e.user_name+"\nemail:"+e.email+"\n 登録しました。")})).catch((function(e){console.log(e),window.alert(e.response.data.message)}))}}}},n=o,i=(a("6d97"),a("74cc"),a("2877")),c=Object(i["a"])(n,s,r,!1,null,"7ac1094c",null);t["default"]=c.exports},"6d97":function(e,t,a){"use strict";var s=a("5619"),r=a.n(s);r.a},"74cc":function(e,t,a){"use strict";var s=a("b2be"),r=a.n(s);r.a},b2be:function(e,t,a){}}]);
//# sourceMappingURL=create_user.7f0165a7.js.map
=======
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create_user"],{5619:function(e,t,a){},5635:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"create_user"},[a("h1",[e._v("新規アカウント作成")]),a("div",[a("table",{staticClass:"form-table"},[a("tbody",[a("tr",[a("th",[e._v("ユーザ名")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user_name,expression:"user_name"}],attrs:{type:"text",placeholder:"ユーザ名"},domProps:{value:e.user_name},on:{input:function(t){t.target.composing||(e.user_name=t.target.value)}}})])]),a("tr",[a("th",[e._v("パスワード")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"パスワード"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),a("tr",[a("th",[e._v("パスワード（確認用）")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password_check,expression:"password_check"}],attrs:{type:"password",placeholder:"パスワード（確認用）"},domProps:{value:e.password_check},on:{input:function(t){t.target.composing||(e.password_check=t.target.value)}}})])]),a("tr",[a("th",[e._v("メールアドレス")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"メールアドレス"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])])])]),a("p",[a("button",{on:{click:function(t){return e.create_user()}}},[e._v("新規アカウント作成")])])])])},r=[],o={name:"create_user",data:function(){return{user_name:"",password:"",email:""}},methods:{create_user:function(){var e=this;if(""===this.user_name||""===this.password||""===this.password_check||""===this.email)window.alert("全ての項目を記入してください。");else if(this.password!==this.password_check)window.alert("パスワードが一致していません。\nもう一度確認した上で、パスワードを記入し直してください。");else{var t=this.$crypto.createHash("sha256");t.update(this.password);var a=t.digest("base64");this.$axios.post("/api/create_user",{user_name:this.user_name,password:a,email:this.email}).then((function(){console.log("うぇいよー"),window.alert("ユーザー名:"+e.user_name+"\nemail:"+e.email+"\n 登録しました。")})).catch((function(e){console.log(e),window.alert(e.response.data.message)}))}}}},n=o,i=(a("6d97"),a("df2a"),a("2877")),c=Object(i["a"])(n,s,r,!1,null,"094f6365",null);t["default"]=c.exports},"6d97":function(e,t,a){"use strict";var s=a("5619"),r=a.n(s);r.a},bfd4:function(e,t,a){},df2a:function(e,t,a){"use strict";var s=a("bfd4"),r=a.n(s);r.a}}]);
//# sourceMappingURL=create_user.f0421c0e.js.map
>>>>>>> faf5dd426dd6f2d207a612471993417728b3fc41:dist/static/js/create_user.f0421c0e.js
