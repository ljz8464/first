webpackJsonp([0],{JaS9:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return i});var s=r("VqPT"),n=0,a={beforeRouteEnter:function(e,t,r){var a=s.a.state.steps[e.meta.route][e.meta.type].currentIndex,i=s.a.state.steps[e.meta.route][e.meta.type].list;a<e.meta.step?r(0===n&&function(e){e.$router.push(i[0].link)}):e.meta.step===i.length-1?(s.a.commit("setSteps",{route:e.meta.route,type:e.meta.type,step:0}),r()):r(),n++}},i={methods:{next:function(){var e=this.$store.state.steps[this.$route.meta.route][this.$route.meta.type],t=this.$route.meta.step,r=e.list;t<r.length-1&&(this.$store.commit("initSteps",{route:this.$route.meta.route,type:this.$route.meta.type}),this.$store.commit("setSteps",{route:this.$route.meta.route,type:this.$route.meta.type,step:t+1}),this.$router.push(r[t+1].link))}}}},Ouqr:function(e,t,r){"use strict";var s={props:["keyValue","width","top","left"],data:function(){return{emails:[],currentSelectIndex:0,emailSource:["qq.com","163.com","126.com","gmail.com","foxmail.com","sina.com","yeah.net","sohu.com","outlook.com","aliyun.com","yahoo.com"]}},watch:{keyValue:function(){for(var e=0;e<this.emails.length;e++)if(this.emails[e]===this.keyValue)return void(this.emails=[]);this.keyValue.search("@")<=0&&(this.emails=[]);var t=[],r=[];if(this.keyValue.search("@")>0&&2===this.keyValue.split("@").length){for(var s=0;s<this.emailSource.length;s++)t[s]=this.keyValue.split("@")[0]+"@"+this.emailSource[s];for(var n=0;n<t.length;n++)-1!==t[n].indexOf(this.keyValue)&&r.push(t[n]);this.emails=r}}},methods:{resetAutoData:function(){this.$emit("cb-value",{value:this.emails[this.currentSelectIndex]}),this.currentSelectIndex=0,this.emails[this.currentSelectIndex]===this.keyValue&&(this.emails=[])},selectEmail:function(e){this.currentSelectIndex=e,this.resetAutoData()},bindEvent:function(e){var t=this.emails.length;13===e.keyCode&&t&&this.resetAutoData(),38===e.keyCode&&t&&(this.currentSelectIndex--,this.currentSelectIndex<0&&(this.currentSelectIndex=t-1),this.username=this.emails[this.currentSelectIndex]),40===e.keyCode&&t&&(this.currentSelectIndex++,this.currentSelectIndex>t-1&&(this.currentSelectIndex=0),this.username=this.emails[this.currentSelectIndex])}},mounted:function(){document.addEventListener("keydown",this.bindEvent)}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return 0!=e.emails.length?r("div",{staticClass:"autocomplete",style:{width:e.width,left:e.left,top:e.top}},[r("ul",e._l(e.emails,function(t,s){return r("li",{key:s,class:s===e.currentSelectIndex?"on":"",on:{click:function(t){e.selectEmail(s)}}},[e._v(e._s(t))])}))]):e._e()},staticRenderFns:[]};var a=r("VU/8")(s,n,!1,function(e){r("oqI5")},"data-v-375c78c5",null);t.a=a.exports},VT3b:function(e,t,r){"use strict";var s=r("//Fk"),n=r.n(s);t.a=function(e,t){return new n.a(function(r,s){var n="",a="";if(t&&(n=t.params||{},a=t.cbName||"cb",e)){var i="jsonp_"+Math.random();i=i.replace(".",""),window[i]=function(e){r(e),c.removeEventListener("error",s,!1),o.removeChild(c)};var c=document.createElement("script");c.addEventListener("error",s,!1),n[a]=i,c.src=e+"?"+function(e){var t=[];for(var r in e)t.push(r+"="+e[r]);return t.join("&")}(n);var o=document.getElementsByTagName("head")[0];o.appendChild(c)}})}},cW04:function(e,t,r){"use strict";var s=r("//Fk"),n=r.n(s),a=r("mtWM"),i=r.n(a),c=r("mw3O"),o={url:"",baseURL:"",method:"get",transformRequest:[function(e){return c.stringify(e)}],timeout:3e3,withCredentials:!0};r("VT3b");r.d(t,"c",function(){return p}),r.d(t,"b",function(){return m}),r.d(t,"e",function(){return d}),r.d(t,"a",function(){return f}),r.d(t,"d",function(){return v});var u=i.a.create(o);u.interceptors.response.use(function(e){return-101===e.data.code&&(window.location.href="https://passport.bilibili.com/login?gourl="+encodeURIComponent(location.href)),e},function(e){return n.a.reject(e)});var l="//passport.bilibili.com/",h={passport:{getGeeTest:l+"web/captcha/combine",checkUser:l+"web/reset/check/user",sendSms:l+"web/reset/msg/send",checkPassword:l+"web/generic/check/leak/pwd",resetPwd:l+"web/reset/pwd"},base:{checkLogin:"//api.bilibili.com/nav"}},p=function(e){return u.get(h.passport.getGeeTest,{params:e})},m=function(e){return u.post(h.passport.checkUser,e)},d=function(e){return u.post(h.passport.sendSms,e)},f=function(e){return u.post(h.passport.checkPassword,e)},v=function(e){return u.post(h.passport.resetPwd,e)}},nqeF:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("//Fk"),n=r.n(s),a=r("woOf"),i=r.n(a),c=(r("fLxU"),r("JaS9")),o=r("Ouqr"),u=r("cW04"),l=r("jeMz"),h={mixins:[c.a],name:"verify",data:function(){return{account:"",captcha:"",errorMessage:"",errorPhoto:"",captchaObj:null,imgSrc:"//passport.bilibili.com/web/captcha/img?t="+Math.random()+"&key=",key:"",type:1,geeTestResult:null}},methods:{checkFn:function(){var e=this;this.checkInput().then(function(){1===e.type?e.captchaObj.verify():e.submitFn()})},submitFn:function(){var e=this,t={},r={identify:this.account,key:this.key};1===this.type?t=i()({},r,this.geeTestResult):0===this.type&&(r.code=this.captcha,t=i()({},r)),Object(u.b)(t).then(function(t){var r=t.data;if(0===r.code&&r.data){e.$store.commit("updateVerify",r.data);var s={type:e.$route.meta.type,route:e.$route.meta.route,step:1};Object(l.i)(r.data,"verifyTicket",6e5),Object(l.i)(s,"findpasswordStep",6e5),e.next()}else 2400===r.code?e.initFn():2401===r.code||2402===r.code||2403===r.code?(e.errorPhoto=r.message,e.srcRefresh()):e.$msgbox({title:"提示",type:"error",context:r.message})}).catch(function(){e.$msgbox({title:"提示",type:"error",context:"服务器错误"})})},checkInput:function(){var e=this;return new n.a(function(t){e.errorMessage="",e.errorPhoto="",e.account?0!==e.type||e.captcha?t():e.errorPhoto="请输入验证码":e.errorMessage="请输入手机号/邮箱"})},srcRefresh:function(){this.imgSrc="//passport.bilibili.com/web/captcha/img?t="+Math.random()+"&key="},initFn:function(){var e=this;Object(u.c)({plat:5}).then(function(t){var r=t.data;0===r.code&&(e.key=r.data.result.key,1===r.data.type?(Object(l.h)("resetpassword_confirm_geetest"),window.initGeetest({gt:r.data.result.gt,challenge:r.data.result.challenge,offline:!r.data.result.success,new_captcha:!0,product:"bind"},function(t){e.captchaObj=t,e.type=1,t.onSuccess(function(){var r=t.getValidate();e.geeTestResult={challenge:r.geetest_challenge,validate:r.geetest_validate,seccode:r.geetest_seccode},e.submitFn(),setTimeout(function(){t.reset()},1e3)}).onError(function(){})})):0===r.data.type&&(Object(l.h)("resetpassword_confirm_captcha"),e.type=0))}).catch(function(){e.$msgbox({title:"提示",type:"error",context:"服务器错误，请刷新页面重试"})})},getValue:function(e){this.account=e.value},keyPress:function(){this.account=this.account.toString().replace(/[\u4E00-\u9FA5]/g,"")},clearErr:function(e){this[e]=""}},mounted:function(){this.initFn()},components:{EmailSelection:o.a}},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"form-group"},[r("el-input",{class:{"input-error":e.errorMessage},attrs:{placeholder:"请输入绑定的手机号/邮箱"},on:{input:function(t){e.clearErr("errorMessage")}},nativeOn:{keyup:function(t){return e.keyPress(t)}},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}}),e._v(" "),r("email-selection",{attrs:{keyValue:e.account,top:"48px"},on:{"cb-value":e.getValue}}),e._v(" "),r("div",{staticClass:"form-message text-error"},[e._v(e._s(e.errorMessage))])],1),e._v(" "),0===this.type?r("div",{staticClass:"form-group"},[r("div",{staticClass:"clearfix"},[r("el-input",{class:{"photo-code":!0,"float-left":!0,"input-error":e.errorPhoto},attrs:{placeholder:"验证码"},on:{input:function(t){e.clearErr("errorPhoto")}},model:{value:e.captcha,callback:function(t){e.captcha=t},expression:"captcha"}}),e._v(" "),r("img",{staticClass:"float-left verify-photo",attrs:{src:e.imgSrc+e.key,alt:""},on:{click:e.srcRefresh}}),e._v(" "),r("a",{staticClass:"float-left photo-refresh",attrs:{href:"javascript:;"},on:{click:e.srcRefresh}},[e._v("换一换")])],1),e._v(" "),r("div",{staticClass:"form-message text-error"},[e._v(e._s(e.errorPhoto))])]):e._e(),e._v(" "),r("div",{staticClass:"form-group"},[r("el-button",{directives:[{name:"report",rawName:"v-report",value:"resetpassword_confirm_click",expression:"'resetpassword_confirm_click'"}],staticClass:"btn-full",attrs:{type:"primary"},on:{click:e.checkFn}},[e._v("确认")])],1)])},staticRenderFns:[]};var m=r("VU/8")(h,p,!1,function(e){r("x9H+")},"data-v-788ca3b2",null);t.default=m.exports},oqI5:function(e,t){},"x9H+":function(e,t){}});