webpackJsonp([10],{"+BTi":function(t,e){},"/i/W":function(t,e){},"3JEF":function(t,e){},"4WyJ":function(t,e,n){t.exports=n.p+"static/img/rl_top.35edfde.png"},F2bn:function(t,e){},GXEp:function(t,e){},"Hzw/":function(t,e,n){"use strict";var i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top-banner"},[e("img",{attrs:{src:n("4WyJ")}})])}]};var a=n("VU/8")(null,i,!1,function(t){n("IyM6")},null,null);e.a=a.exports},IyM6:function(t,e){},M9yL:function(t,e){},UCst:function(t,e){},VqPT:function(t,e,n){"use strict";var i=n("7+uW"),a=n("NYxO");i.default.use(a.a);var r={state:{verifyData:null,steps:{findpassword:{default:{currentIndex:0,list:[{text:"确认账号",link:{path:"./verify"}},{text:"重置密码",link:{path:"./set"}},{text:"重置成功",link:{path:"./result"}}]}}}},actions:{},mutations:{updateVerify:function(t,e){e.ticket&&e.type&&e.value&&(t.verifyData=e)},clearVerify:function(t){t.verifyData=null},setSteps:function(t,e){var n=e.route,i=e.type,a=e.step;n&&i&&t.steps[n]&&t.steps[n][i]&&(t.steps[n][i].currentIndex=a)},initSteps:function(t,e){var n=e.route,i=e.type,a=t.steps;for(var r in a)if(a[r]!==n){var s=a[r];for(var o in s)s[o]!==i&&(s[o].currentIndex=0)}}}};e.a=new a.a.Store(r)},"W0+T":function(t,e,n){t.exports=n.p+"static/img/message-success.000f491.png"},WZUo:function(t,e){},"X+ky":function(t,e){},ZB1U:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("M9yL"),n("+BTi");var i=n("OSLW"),a=n.n(i),r=(n("/i/W"),n("V1RD")),s=n.n(r),o=(n("GXEp"),n("mtrD")),c=n.n(o),u=(n("X+ky"),n("HJMx")),l=n.n(u),p=n("7+uW"),d={name:"app",components:{TopBanner:n("Hzw/").a}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"z-top-container"}),this._v(" "),e("top-banner"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1),this._v(" "),e("div",{staticClass:"footer bili-footer"})],1)},staticRenderFns:[]};var v=n("VU/8")(d,f,!1,function(t){n("iVcd")},null,null).exports,h=n("/ocq"),m=function(){return n.e(4).then(n.bind(null,"In0G"))},g=function(){return n.e(2).then(n.bind(null,"kAQh"))};p.default.use(h.a);var w=new h.a({routes:[{path:"*",component:m,redirect:"/"},{path:"/",component:m,redirect:"verify",children:[{path:"verify",components:{default:function(){return n.e(0).then(n.bind(null,"nqeF"))},step:g},meta:{type:"default",route:"findpassword",step:0}},{path:"set",components:{default:function(){return n.e(1).then(n.bind(null,"Qlmm"))},step:g},meta:{type:"default",route:"findpassword",step:1}},{path:"result",components:{default:function(){return n.e(3).then(n.bind(null,"MG/a"))},step:g},meta:{type:"default",route:"findpassword",step:2}}]}]}),y=n("VqPT"),x=n("mDgW"),b=(n("tvR6"),n("jeMz"));n("WZUo"),n("3JEF");n("hKoQ").polyfill(),p.default.config.productionTip=!1,p.default.use(l.a),p.default.use(c.a),p.default.use(s.a),p.default.use(a.a),p.default.directive("report",{bind:function(t,e){t.addEventListener("click",function(){Object(b.h)(e.value)},{passive:!1})}});var _=Object(b.d)("findpasswordStep"),C=Object(b.d)("verifyTicket");if(_&&_.type&&_.route&&_.step){var V={type:_.type,route:_.route,step:_.step};y.a.commit("setSteps",V)}if(C&&C.type&&C.value&&C.ticket){var k={type:C.type,ticket:C.ticket,value:C.value};y.a.commit("updateVerify",k)}p.default.prototype.$msgbox=x.a;var T=0;w.afterEach(function(t,e){setTimeout(function(){window.reportObserver&&(T>0?window.reportObserver.sendPV():T++)},0)}),new p.default({el:"#app",router:w,store:y.a,template:"<App/>",components:{App:v}})},b8Fh:function(t,e,n){t.exports=n.p+"static/img/message-error.3bb0596.png"},hHNF:function(t,e){},iVcd:function(t,e){},jeMz:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"e",function(){return s}),n.d(e,"g",function(){return o}),n.d(e,"c",function(){return c}),n.d(e,"k",function(){return l}),n.d(e,"h",function(){return p}),n.d(e,"j",function(){return d}),n.d(e,"a",function(){return v}),n.d(e,"f",function(){return h}),n.d(e,"i",function(){return m}),n.d(e,"d",function(){return g});var i=n("mvHQ"),a=n.n(i),r={get:function(t){var e=""+document.cookie,n=e.indexOf(t+"=");if(-1==n||""==t)return"";var i=e.indexOf(";",n);return-1==i&&(i=e.length),unescape(e.substring(n+t.length+1,i))},set:function(t,e,n){n=void 0!==n?n:365;var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),document.cookie=t+"="+escape(e)+";expires="+i.toGMTString()+"; path=/; domain=.bilibili.com"},delete:function(t){this.set(t,"",-1)}},s=function(t){var e=window.location.href,n=e.substring(e.indexOf("?"),e.length).replace(/#\/$/,"").match(new RegExp("[?&]"+t+"=([^&]+)","i"));return null===n||n.length<0?"":n[1]},o=function(t){var e=t.replace(/^http:\/\/|:\/\/|\/\/|\//,"https://");return e.match(/^https:\/\//)?e:"https://"+e},c=function(t,e,n){if(!t)return t;var i=t.match(/(.*\.(jpg|jpeg|gif|png))(\?.*)?/),a=-1!==t.indexOf("/bfs/");if("gif"===i[2]||!a||!i)return t;var r=e&&n?"@"+e+"w_"+n+"h":"@",s=i[3]?i[3]:"";return u?i[1]+r+".webp"+s:i[1]+r+"."+i[2]+s},u=function(){try{return 0==document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")}catch(t){return!1}}(),l=function(t){for(var e=t.substring(t.indexOf("?")+1,t.length).replace(/#\/$/,"").split("&"),n={},i=0;i<e.length;i++){var a=e[i].split("=");n[a[0]]=a[1]}return n},p=function(t,e){window.reportMsgObj&&(window.reportMsgObj[t]=void 0===e?t:e),window.reportObserver&&window.reportObserver.forceCommit&&window.reportObserver.forceCommit()},d=function(t){for(var e=[t[0]],n=0;n<=t.length-1;n++){for(var i=!0,a=0;a<=e.length-1;a++)if(e[a]===t[n]){i=!1;break}i&&e.push(t[n])}if(e.length<=2)return!0;if(!(t.length<=10&&t.length>=6))return!1;for(var r=t[0],s=t[0],o=[t[0]],c=[t[0]],u=1;u<t.length;u++)r++,s--,o.push(r),c.push(s);var l=new RegExp(o.join(""),"g"),p=new RegExp(c.join(""),"g");return!!l.test(t)||(!!p.test(t)||void 0)},f=function(t,e){return new RegExp("\\b"+e+"\\b").test(t.className)},v=function(t,e){t.className?f(t,e)||(t.className+=" "+e):t.className=e},h=function(t,e){var n=new RegExp("\\b"+e+"\\b","g");f(t,e)&&(t.className=t.className.replace(n,"").replace(/^\s+|\s+$/g,"").replace(/\s+/g," "))},m=function(t,e,n){t.ts=(new Date).getTime(),n&&(t.expiration=n),window.localStorage&&(window.localStorage[e]=a()(t))},g=function(t){if(window.localStorage){if(window.localStorage[t]){var e=null;try{e=JSON.parse(window.localStorage[t])}catch(t){e={}}if(e.expiration){var n=e.expiration;return(new Date).getTime()-e.ts>n?null:e}return e}return null}}},mDgW:function(t,e,n){"use strict";var i=n("//Fk"),a=n.n(i),r=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",["success"!==this.type?e("img",{attrs:{src:n("b8Fh")}}):e("img",{attrs:{src:n("W0+T")}}),this._v(" "),e("div",{staticClass:"error-text"},[this._v(this._s(this.contentText))])])},staticRenderFns:[]};var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"popup-container"},[e("div",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"context"},[this._v(this._s(this.contentText))])])},staticRenderFns:[]};var c={name:"popup",methods:{yesFn:function(){this.show=!1,this.resolve&&this.resolve({type:this.needCancel?"confirm":"alert",event:"yes"})},cancelFn:function(){this.show=!1,this.resolve&&this.resolve({type:this.needCancel?"confirm":"alert",event:"cancel"})},closeFn:function(){this.show=!1,this.resolve&&this.resolve({type:this.needCancel?"confirm":"alert",event:"close"})}},data:function(){return{title:"",context:"",data:{title:"",context:""},yesValue:!1,cancelValue:!1,needCancel:!1,show:!1,resolve:!1,type:"success",style:!1}},components:{PopupMessage:n("VU/8")({props:["contentText","type"]},s,!1,function(t){n("UCst")},"data-v-98d2f496",null).exports,PopupTitleContext:n("VU/8")({props:["contentText","title"]},o,!1,function(t){n("hHNF")},"data-v-7350825a",null).exports}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.show?n("div",{staticClass:"mask"},[n("div",{staticClass:"popup-box"},[n("div",{staticClass:"popup-title"},[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("span",{staticClass:"popup-close",on:{click:t.closeFn}})]),t._v(" "),n("div",{staticClass:"popup-container"},[n("div",{staticClass:"popup-content"},[t.type?n("popup-message",{attrs:{contentText:t.data.content?t.data.content:t.context,type:t.type}}):n("popup-title-context",{attrs:{title:t.data.title,contentText:t.data.context?t.data.content:t.context}})],1),t._v(" "),n("div",{staticClass:"popup-btn"},[t.needCancel?n("div",{staticClass:"btn-primary btn-middle",style:{marginRight:t.needCancel?"10px":"0"},on:{click:t.cancelFn}},[t._v(t._s(t.cancelValue?t.cancelValue:"取消"))]):t._e(),t._v(" "),n("div",{staticClass:"btn-default btn-middle",on:{click:t.yesFn}},[t._v(t._s(t.yesValue?t.yesValue:"确定"))])])])])]):t._e()])},staticRenderFns:[]};var l=n("VU/8")(c,u,!1,function(t){n("F2bn")},"data-v-8ee3b92a",null).exports,p=r.default.extend(l),d=null;e.a=function(t){return d||(d=new p({el:document.createElement("div")})),d.show=!0,d.$data.title=t.title||"提示",d.$data.context=t.context||"",d.$data.type=t.type||"success",d.$data.data=t.data||{},d.$data.yesValue=t.yesValue||"确定",d.$data.needCancel=t.needCancel||!1,d.$data.cancelValue=t.cancelValue||"取消",document.body.appendChild(d.$el),new a.a(function(t){d.$data.resolve=t})}},tvR6:function(t,e){}},["ZB1U"]);