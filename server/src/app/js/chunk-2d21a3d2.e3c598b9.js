(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"media-home"},[e("v-app",[e("media-login"),e("media-alert")],1)],1)},s=[],n=e("646f"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"media-login"},[e("v-toolbar",{attrs:{dark:""}},[e("v-toolbar-title",[t._v("Lazy Drive")]),e("v-spacer"),e("v-btn",{attrs:{to:{path:"/"},flat:""},on:{click:function(t){t.stopPropagation(),t.preventDefault()}}},[t._v("Sign in")]),e("v-btn",{attrs:{to:{path:"/signup"},flat:""},on:{click:function(t){t.stopPropagation(),t.preventDefault()}}},[t._v("Sign up")])],1),e("v-content",[e("v-container",{staticClass:"loginOverlay",attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{flex:"","align-center":"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm4:"","elevation-6":""}},[e("v-toolbar",{staticClass:"pt-5 blue darken-4"},[e("v-toolbar-title",{staticClass:"white--text"},[e("h4",[t._v("Welcome Back")])])],1),e("v-card",[e("v-card-text",{staticClass:"pt-4"},[e("div",[e("v-form",{ref:"form",on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-text-field",{attrs:{label:"Enter your e-mail address",rules:t.emailRules,required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("v-text-field",{attrs:{label:"Enter your password",min:"8","append-icon":t.e1?"visibility":"visibility_off","append-icon-cb":function(){return t.e1=!t.e1},type:t.e1?"text":"password",rules:t.passwordRules,counter:"",required:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("v-layout",{attrs:{"justify-space-between":""}},[e("v-btn",{class:{"blue darken-4 white--text":t.valid,disabled:!t.valid},attrs:{loading:t.loading,disabled:t.loading},on:{click:t.submit}},[t._v("\n                      Sign in\n                      "),e("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Signing in...")])]),e("a",{attrs:{href:""}},[t._v("Forgot Password")])],1)],1)],1)])],1)],1)],1)],1)],1)],1)},r=[],l=(e("7f7f"),{name:"media-login",data:function(){return{valid:!1,e1:!1,password:"",loading:!1,passwordRules:[function(t){return!!t||"Password is required"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}]}},methods:{submit:function(){var t=this;if(this.$refs.form.validate()){var a={email:this.email,password:this.password};this.loading=!0,this.$store.dispatch("login",a).then(function(a){t.finalize(a)}).catch(function(a){t.loading=!1,n["a"]._handleError(a)})}},finalize:function(t){n["a"].mediastorage.cookies.set("name",t.data.userData.name,5e3),n["a"].mediastorage.cookies.set("email",t.data.userData.email,5e3),n["a"].mediastorage.cookies.set("token",t.data.token,5e3),n["a"].mediastorage.session.set("name",t.data.userData.name),n["a"].mediastorage.session.set("email",t.data.userData.email),n["a"].mediastorage.session.set("token",t.data.token),this.$store.state.token=t.data.token,this.$store.state.isUserLoggedIn=!0;var a=setInterval(function(){n["a"].auth.loggedIn()&&(clearInterval(a),200==t.status&&(this.$router.push("/drive/u/0/my-drive"),this.loading=!1))}.bind(this),500)},clear:function(){this.$refs.form.reset()}}}),d=l,u=e("2877"),c=Object(u["a"])(d,o,r,!1,null,null,null),f=c.exports,v={name:"media-home",data:function(){return{title:"Your Logo",icons:["fab fa-facebook","fab fa-twitter","fab fa-google-plus","fab fa-linkedin","fab fa-instagram"]}},components:{"media-login":f},computed:{isLoggedIn:function(){return n["a"].auth.loggedIn()}}},m=v,p=Object(u["a"])(m,i,s,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.e3c598b9.js.map