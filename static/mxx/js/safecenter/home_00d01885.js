webpackJsonp([5], {
    149: function (i, t, s) {
        "use strict";
        var a = s(98), e = s(363), n = s(4), c = !1, r = null, l = null, o = null, p = n(a.a, e.a, c, r, l, o);
        t.a = p.exports
    }, 180: function (i, t, s) {
        "use strict";
        var a = s(0);
        s.d(t, "a", function () {
            return c
        });
        var e = {
            bindPhone: "绑定手机",
            bindEmail: "绑定邮箱",
            cancel: "账号注销",
            cancelTip: "账号注销相关的操作管理",
            emailTip: "绑定后，可以使用邮箱登录来保证账号安全",
            loginRecord: "查看记录",
            loginRecordTip: "记录您账号的登录情况",
            modifyPhone: "修改手机",
            modifyEmail: "修改邮箱",
            actEmail: "激活邮箱",
            modifyPwd: "修改密码",
            phoneTip: "可以享受手机相关的登录安全及提醒服务",
            pwdTip: "登录爱奇艺时需要输入的密码",
            setPwd: "设置密码",
            pwdTipBindPhone: "绑定手机更便于进行登录密码操作"
        }, n = {
            bindPhone: "綁定手機",
            bindEmail: "綁定郵箱",
            cancel: "賬號註銷",
            cancelTip: "賬號註銷相關的操作管理",
            emailTip: "綁定後，可以使用郵箱登錄來保證賬號安全",
            loginRecord: "查看記錄",
            loginRecordTip: "記錄您賬號的登錄情況",
            modifyPhone: "修改手機",
            modifyEmail: "修改郵箱",
            actEmail: "激活郵箱",
            modifyPwd: "修改密碼",
            phoneTip: "可以享受手機相關的登錄安全及提醒服務",
            pwdTip: "登錄愛奇藝時需要輸入的密碼",
            setPwd: "設置密碼",
            pwdTipBindPhone: "綁定手機更便於進行登錄密碼操作"
        }, c = "zh_TW" === a.b ? n : e
    }, 363: function (i, t, s) {
        "use strict";
        var a = function () {
            var i = this, t = i.$createElement, s = i._self._c || t;
            return s("div", [s("i71-nav"), i._v(" "), "zh_TW" === i.lang ? s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: i.finish,
                    expression: "finish"
                }], staticClass: "security-con", attrs: {name: "i71-home"}
            }, [s("i71-head", {
                attrs: {
                    "sub-title": "安全中心",
                    "hide-title": !0
                }
            }), i._v(" "), i.showSyserr ? s("i71-syserr", {attrs: {msg: i.syserr}}) : s("ul", [s("li", {staticClass: "security-item"}, [s("span", {staticClass: "item-name"}, [i._v("手機")]), i._v(" "), s("a", {
                staticClass: "btn-sec-green",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (t) {
                        i.sendCLPingback(i.rseatPhone, i.urlPhone)
                    }
                }
            }, [i._v(i._s(i.phoneBtnTip) + "\n                ")]), i._v(" "), s("span", {staticClass: "item-txt"}, [i._v(i._s(i.phoneTip))])]), i._v(" "), s("li", {staticClass: "security-item"}, [s("span", {staticClass: "item-name"}, [i._v("郵箱")]), i._v(" "), s("a", {
                staticClass: "btn-sec-green",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (t) {
                        i.sendCLPingback(i.rseatEmail, i.urlEmail)
                    }
                }
            }, [i._v(i._s(i.emailBtnTip) + "\n                ")]), i._v(" "), s("span", {staticClass: "item-txt item-descript"}, [i._v(i._s(i.emailTip))])]), i._v(" "), s("li", {staticClass: "security-item"}, [s("span", {staticClass: "item-name"}, [i._v("登錄密碼")]), i._v(" "), i.pwdBtnDisable ? s("a", {
                staticClass: "btn-sec-gray",
                attrs: {href: "javascript:;"}
            }, [i._v(i._s(i.pwdBtnTip))]) : s("a", {
                staticClass: "btn-sec-green",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (t) {
                        i.sendCLPingback(i.rseatPwd, i.urlPwd)
                    }
                }
            }, [i._v(i._s(i.pwdBtnTip))]), i._v(" "), s("span", {staticClass: "item-txt item-descript"}, [i._v(i._s(i.pwdTip))])]), i._v(" "), s("li", {staticClass: "security-item"}, [s("span", {staticClass: "item-name"}, [i._v("登錄記錄")]), i._v(" "), s("a", {
                staticClass: "btn-sec-green",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (t) {
                        i.sendCLPingback("c-loginrecord", i.urlloginRecord)
                    }
                }
            }, [i._v(i._s(i.loginRecordBtnTip) + "\n                ")]), i._v(" "), s("span", {staticClass: "item-txt item-descript"}, [i._v(i._s(i.loginRecordTip) + "\n                ")])])])], 1) : s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: i.finish,
                    expression: "finish"
                }], staticClass: "security-con", attrs: {name: "i71-home"}
            }, [s("i71-head", {
                attrs: {
                    "sub-title": "安全中心",
                    "hide-title": !0
                }
            }), i._v(" "), i.showSyserr ? s("i71-syserr", {attrs: {msg: i.syserr}}) : s("ul", [s("li", {staticClass: "security-item"}, [s("span", {staticClass: "item-name"}, [i._v("手机")]), i._v(" "), s("a", {
                staticClass: "btn-sec-green",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (t) {
                        i.sendCLPingback(i.rseatPhone, i.urlPhone)
                    }
                }
            }, [i._v(i._s(i.phoneBtnTip) + "\n                ")]), i._v(" "), s("span", {staticClass: "item-txt"}, [i._v(i._s(i.phoneTip))])]), i._v(" "), s("li", {staticClass: "security-item"}, [s("span", {staticClass: "item-name"}, [i._v("邮箱")]), i._v(" "), s("a", {
                staticClass: "btn-sec-green",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (t) {
                        i.sendCLPingback(i.rseatEmail, i.urlEmail)
                    }
                }
            }, [i._v(i._s(i.emailBtnTip) + "\n                ")]), i._v(" "), s("span", {staticClass: "item-txt item-descript"}, [i._v(i._s(i.emailTip))])]), i._v(" "), s("li", {staticClass: "security-item"}, [s("span", {staticClass: "item-name"}, [i._v("登录密码")]), i._v(" "), i.pwdBtnDisable ? s("a", {
                staticClass: "btn-sec-gray",
                attrs: {href: "javascript:;"}
            }, [i._v(i._s(i.pwdBtnTip))]) : s("a", {
                staticClass: "btn-sec-green",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (t) {
                        i.sendCLPingback(i.rseatPwd, i.urlPwd)
                    }
                }
            }, [i._v(i._s(i.pwdBtnTip))]), i._v(" "), s("span", {staticClass: "item-txt item-descript"}, [i._v(i._s(i.pwdTip))])]), i._v(" "), s("li", {staticClass: "security-item"}, [s("span", {staticClass: "item-name"}, [i._v("登录记录")]), i._v(" "), s("a", {
                staticClass: "btn-sec-green",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (t) {
                        i.sendCLPingback("c-loginrecord", i.urlloginRecord)
                    }
                }
            }, [i._v(i._s(i.loginRecordBtnTip) + "\n                ")]), i._v(" "), s("span", {staticClass: "item-txt item-descript"}, [i._v(i._s(i.loginRecordTip) + "\n                ")])]), i._v(" "), s("li", {staticClass: "security-item"}, [s("span", {staticClass: "item-name"}, [i._v("账号注销")]), i._v(" "), s("a", {
                staticClass: "btn-sec-green",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (t) {
                        i.sendCLPingback("c-cancellation", i.urlAccount)
                    }
                }
            }, [i._v(i._s(i.cancelBtnTip) + "\n                ")]), i._v(" "), s("span", {staticClass: "item-txt item-descript"}, [i._v(i._s(i.cancelTip))])])])], 1)], 1)
        }, e = [], n = {render: a, staticRenderFns: e};
        t.a = n
    }, 371: function (i, t, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = s(2), e = s.n(a), n = s(149);
        e.a.component(n.a.name, n.a)
    }, 98: function (i, t, s) {
        "use strict";
        var a = s(5), e = s.n(a), n = s(6), c = s(0), r = s(180), l = s(1), o = (s(21), s(17), s(9));
        s(31);
        t.a = {
            name: "i71-home", mixins: [o.a], data: function () {
                return {
                    cancelBtnTip: "",
                    cancelTip: "",
                    emailBtnTip: "",
                    emailTip: "",
                    lang: c.b,
                    loginRecordBtnTip: "",
                    loginRecordTip: "",
                    phoneBtnTip: "",
                    phoneTip: "",
                    pwdBtnTip: "",
                    pwdTip: "",
                    pwdBtnDisable: !0,
                    rseatEmail: "",
                    rseatPhone: "",
                    rseatPwd: "",
                    urlPhone: c.a,
                    urlEmail: c.k,
                    urlPwd: c.i,
                    urlloginRecord: c.l,
                    urlAccount: c.m,
                    showSyserr: !1,
                    syserr: "",
                    finish: !1
                }
            }, computed: e()({}, s.i(n.mapGetters)(["userInfo"])), mounted: function () {
                this.GET_USER_INFO()
            }, watch: {
                userInfo: function (i) {
                    var t = this;
                    if ("A00000" === i.code) {
                        var a = ["securitycenter", "s-loginrecord"], e = i.data ? i.data.userinfo : {};
                        e.phone ? (this.phoneTip = "+" + e.area_code + "  " + e.phone, this.phoneBtnTip = r.a.modifyPhone, this.pwdBtnDisable = !1, this.urlPhone += "zh_TW" === c.b ? "&type=modify" : "?type=modify", this.rseatPhone = "c-modifyphone", a.push("s-modifyphone")) : (this.phoneTip = r.a.phoneTip, this.phoneBtnTip = r.a.bindPhone, this.rseatPhone = "c-bindingphone", a.push("s-bindingphone")), e.email ? (this.emailTip = e.email, e.phone || 1 == e.activated ? (this.emailBtnTip = r.a.modifyEmail, this.pwdBtnDisable = !1, this.urlEmail += "zh_TW" === c.b ? "&type=modify" : "?type=modify", this.rseatEmail = "c-modifyemail", a.push("s-modifyemail")) : (this.emailBtnTip = r.a.actEmail, this.urlEmail += "zh_TW" === c.b ? "&type=act" : "?type=act", this.rseatEmail = "c-activationemail", a.push("s-activationemail"))) : (this.emailTip = r.a.emailTip, this.emailBtnTip = r.a.bindEmail, this.rseatEmail = "c-bindingemail", a.push("s-bindingemail")), e.phone || e.email && 1 === e.activated ? (this.pwdTip = r.a.pwdTip, this.pwdBtnTip = r.a.modifyPwd, this.urlPwd += "zh_TW" === c.b ? "&type=modify" : "?type=modify", this.rseatPwd = "c-modifypassword", a.push("s-modifypassword")) : (this.pwdTip = r.a.pwdTipBindPhone, this.pwdBtnTip = r.a.setPwd, this.urlPwd += "zh_TW" === c.b ? "&type=set" : "?type=set", this.rseatPwd = "c-setpassword", a.push("s-setpassword")), this.loginRecordTip = r.a.loginRecordTip, this.loginRecordBtnTip = r.a.loginRecord, "zh_TW" != c.b && (a.push("s-cancellation"), this.cancelBtnTip = r.a.cancel, this.cancelTip = r.a.cancelTip), a.forEach(function (i) {
                            t.sendPingback({block: i})
                        });
                        var n = s.i(l.f)(window.location.href, "nav");
                        n && (this.urlAccount += "?nav=" + n, this.urlEmail += this.urlEmail.indexOf("?") > 0 ? "&nav=" + n : "?nav=" + n, this.urlloginRecord += this.urlloginRecord.indexOf("?") > 0 ? "&nav=" + n : "?nav=" + n, this.urlPhone += this.urlPhone.indexOf("?") > 0 ? "&nav=" + n : "?nav=" + n, this.urlPwd += this.urlPwd.indexOf("?") > 0 ? "&nav=" + n : "?nav=" + n)
                    } else this.showSyserr = !0, this.syserr = i.msg;
                    this.finish = !0
                }
            }, methods: e()({}, s.i(n.mapActions)(["GET_USER_INFO"]), {
                sendCLPingback: function (i, t) {
                    this.sendPingback({rseat: i}), window.location.href = t
                }
            })
        }
    }
}, [371]);