(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create_user"],{5635:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"create_user"},[a("h1",[e._v("新規アカウント作成")]),a("div",[a("table",{staticClass:"form-table"},[a("tbody",[a("tr",[a("th",[e._v("ユーザ名")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user_name,expression:"user_name"}],attrs:{type:"text",placeholder:"ユーザ名"},domProps:{value:e.user_name},on:{input:function(t){t.target.composing||(e.user_name=t.target.value)}}})])]),a("tr",[a("th",[e._v("パスワード")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"パスワード"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),a("tr",[a("th",[e._v("パスワード（確認用）")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password_check,expression:"password_check"}],attrs:{type:"password",placeholder:"パスワード（確認用）"},domProps:{value:e.password_check},on:{input:function(t){t.target.composing||(e.password_check=t.target.value)}}})])]),a("tr",[a("th",[e._v("メールアドレス")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"メールアドレス"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])])])]),a("p",[a("button",{on:{click:function(t){return e.create_user()}}},[e._v("新規アカウント作成")])])])])},r=[],o={name:"create_user",data:function(){return{user_name:"",password:"",email:""}},methods:{create_user:function(){var e=this;""===this.user_name||""===this.password||""===this.password_check||""===this.email?window.alert("全ての項目を記入してください。"):this.password!==this.password_check?window.alert("パスワードが一致していません。\nもう一度確認した上で、パスワードを記入し直してください。"):this.$axios.post("/api/create_user",{user_name:this.user_name,password:this.password,email:this.email}).then((function(){console.log("うぇいよー"),window.alert("user_name:"+e.user_name+"\npassword:"+e.password+"\nemail:"+e.email+"\n 登録しました。")})).catch((function(e){console.log(e)}))}}},n=o,i=(a("7e7d"),a("9ca1"),a("2877")),c=Object(i["a"])(n,s,r,!1,null,"570700aa",null);t["default"]=c.exports},5924:function(e,t,a){},"7e7d":function(e,t,a){"use strict";var s=a("d5e8"),r=a.n(s);r.a},"9ca1":function(e,t,a){"use strict";var s=a("5924"),r=a.n(s);r.a},d5e8:function(e,t,a){}}]);
//# sourceMappingURL=create_user.53ddd98c.js.map