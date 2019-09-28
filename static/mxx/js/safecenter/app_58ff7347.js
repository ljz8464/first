webpackJsonp([1], {
    142: function (e, t, n) {
        "use strict";
        var i = n(170), a = {};
        a.install = function (e, t) {
            e.mixin(i.a)
        }, t.a = a
    }, 143: function (e, t, n) {
        "use strict";
        t.a = {
            name: "i71-app", template: "<router-view></router-view>", mounted: function () {
            }
        }
    }, 144: function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(83), a = n(185);
            e.use(i.default);
            var o = new i.default({mode: "history", routes: n.i(a.a)()});
            t.a = o
        }).call(t, n(2))
    }, 145: function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(5), a = n.n(i), o = n(6), c = n(187), r = n(186);
            e.use(o.default);
            var s = {state: {version: "1.0"}, modules: {commonStore: c.a, changePwdStore: r.a}},
                d = new o.default.Store(a()({}, s));
            t.a = d
        }).call(t, n(2))
    }, 170: function (e, t, n) {
        "use strict";
        var i = n(24), a = n.n(i), o = {
            mounted: function () {
                this.$vnode && (this.$refs = a()({}, this.$vnode.context.$refs, this.$refs))
            }
        };
        t.a = o
    }, 174: function (e, t, n) {
        "use strict";
        var i = n(177);
        t.a = {mixins: [i.a], name: "i71-view"}
    }, 177: function (e, t, n) {
        "use strict";
        function i() {
            var e = document.getElementById("iqiyi-main");
            e = e ? e.innerHTML : "<div>没有找到iqiyi-main</div>", e = e.replace(/<!--@(?=<)/g, "").replace(/@-->/g, "");
            var t = /<script([^>]*)?>([\s\S])*?<\/script>/gi, n = /<style([^>]*)?>([\s\S])*?<\/style>/gi;
            return e = e.replace(t, "").replace(n, "")
        }

        t.a = {template: "<div>" + i() + "</div>"}
    }, 184: function (e, t, n) {
        "use strict";
        var i = n(174);
        n.d(t, "a", function () {
            return a
        });
        var a = [{path: ":id(.+)", component: i.a}]
    }, 185: function (e, t, n) {
        "use strict";
        var i = n(25), a = n.n(i), o = n(184), c = n(1);
        n.d(t, "a", function () {
            return s
        });
        var r = [], s = function () {
            return r.length = 0, o.a.forEach(function (e) {
                var t = e.name, i = e.path, o = null, s = e.component;
                "object" === (void 0 === s ? "undefined" : a()(s)) ? (s.name = e.componentName || s.name, o = n.i(c.n)(s)) : o = n.i(c.n)(s, e.componentName), r.push({
                    name: t,
                    path: i,
                    component: o
                })
            }), r
        }
    }, 186: function (e, t, n) {
        "use strict";
        var i = n(24), a = n.n(i), o = n(1), c = n(0), r = n(22), s = {
            CHANGE_PWD: "https://passport.iqiyi.com/pages/secure/password/chpasswd.action",
            FIND_PWD: "https://passport.iqiyi.com/pages/secure/password/find_passwd.action"
        }, d = function (e) {
            var t = "ab86b6371b5318aaa1d3c9e612a9f1264f372323c8c0f19875b5fc3b3fd3afcc1e5bec527aa94bfa85bffc157e4245aebda05389a5357b75115ac94f074aefcd",
                n = "10001", i = o.l.RSAUtils.getKeyPair(n, "", t);
            return o.l.RSAUtils.encryptedString(i, encodeURIComponent(e)).replace(/\s/g, "-")
        }, u = {
            state: {passwordResult: {}}, getters: {
                passwordResult: function (e) {
                    return e.passwordResult
                }
            }, mutations: {
                UPDATE_PWD_INFO: function (e, t) {
                    e.passwordResult = t
                }
            }, actions: {
                FIND_PASSWORD: function (e, t) {
                    var i = e.commit, u = {interceptor: {needValidation: !1}, method: "POST"}, p = "",
                        E = r.a.getFingerPrint(), f = {
                            QC005: n.i(o.a)("QC005"),
                            account: d(t.account),
                            agenttype: c.d,
                            device_id: n.i(o.a)("QC005"),
                            env_token: t.verifyToken,
                            dfp: E,
                            lang: c.b,
                            newpass: d(t.newPassWord),
                            ptid: c.c,
                            requestType: t.requestType,
                            serviceId: 2
                        };
                    p = n.i(o.c)(f, "tS7BdPLU2w0JD89dh"), f = a()(f, {qd_sc: p}), u.params = f, n.i(o.d)(s.FIND_PWD, u).then(function (e) {
                        i("UPDATE_PWD_INFO", e)
                    }).catch(function (e) {
                        i("UPDATE_PWD_INFO", {code: "E00000"})
                    })
                }, CHANGE_PASSWORD: function (e, t) {
                    var i = e.commit, u = {interceptor: {needValidation: !1}, method: "POST"}, p = "",
                        E = r.a.getFingerPrint(), f = {
                            QC005: n.i(o.a)("QC005"),
                            agenttype: c.d,
                            authcookie: n.i(o.a)("P00001"),
                            device_id: n.i(o.a)("QC005"),
                            env_token: t.verifyToken,
                            dfp: E,
                            lang: c.b,
                            newpass: d(t.newPassWord),
                            ptid: c.c,
                            requestType: t.requestType,
                            serviceId: 2
                        };
                    p = n.i(o.c)(f, "tS7BdPLU2w0JD89dh"), f = a()(f, {qd_sc: p}), u.params = f, n.i(o.d)(s.CHANGE_PWD, u).then(function (e) {
                        i("UPDATE_PWD_INFO", e)
                    }).catch(function (e) {
                        i("UPDATE_PWD_INFO", {code: "E00000"})
                    })
                }
            }
        };
        t.a = u
    }, 187: function (e, t, n) {
        "use strict";
        var i = n(55), a = n.n(i), o = n(24), c = n.n(o), r = n(54), s = n.n(r), d = n(189), u = n.n(d), p = n(1),
            E = n(0), f = n(22), _ = {
                GET_USER_INFO: "https://passport.iqiyi.com/apis/profile/info.action",
                ENV_CHECK: "https://verify.iqiyi.com/apis/eye/env_check.action",
                ENV_CHECK_BK: "https://verifybk.iqiyi.com/apis/eye/env_check.action",
                CHECK_ACCOUNT: "https://passport.iqiyi.com/apis/user/check_account.action",
                CH_PHONE: "https://passport.iqiyi.com/apis/phone/chphone.action",
                CH_EMAIL: "https://passport.iqiyi.com/apis/secure/chemail.action",
                INIT_PAGE: "https://qcaptcha.iqiyi.com/api/outer/verifycenter/initpage",
                SEND_EMAIL: "https://qcaptcha.iqiyi.com/api/outer/verifycenter/sendMail",
                VERIFY_EMAIL: "https://qcaptcha.iqiyi.com/api/outer/verifycenter/verify",
                SBOX_INIT_KEY: "https://qcaptcha.iqiyi.com/api/outer/sbox/sbox_init_key",
                GET_LOGIN_HISTORY: "https://passport.iqiyi.com/apis/secure/login_history.action"
            }, l = function (e) {
                var t = "ab86b6371b5318aaa1d3c9e612a9f1264f372323c8c0f19875b5fc3b3fd3afcc1e5bec527aa94bfa85bffc157e4245aebda05389a5357b75115ac94f074aefcd",
                    n = "10001", i = p.l.RSAUtils.getKeyPair(n, "", t);
                return p.l.RSAUtils.encryptedString(i, encodeURIComponent(e)).replace(/\s/g, "-")
            }, S = function (e, t) {
                var n = {interceptor: {needValidation: !1}, credentials: !1, method: "POST", reponseContentType: "text"},
                    i = f.a.getFingerPrint(), a = Math.floor((new Date).getTime() / 1e3), o = {
                        agentType: E.d,
                        clientVersion: "1",
                        dfp: i,
                        lang: E.b,
                        platform: "web",
                        ptid: E.c,
                        t: a,
                        token: e,
                        secondToken: t
                    }, c = u()(o);
                return n.params = {
                    cryptSrcData: SECSDK.encrypt(c).data,
                    cryptVersion: SECSDK.getVersion(),
                    platform: "web"
                }, n
            }, I = {
                state: {
                    userInfo: {},
                    envInfo: {},
                    verifyToken: "",
                    tonglanStep: 1,
                    phoneResult: {},
                    emailResult: {},
                    verifySDKInstance: null,
                    hasInitVerifySDK: !1,
                    emailSmsCode: null,
                    sendEmailResult: null,
                    initSbox: !1,
                    loginRecord: [],
                    secondToken: "",
                    cellphoneNumber: "",
                    email: ""
                }, getters: {
                    userInfo: function (e) {
                        return e.userInfo
                    }, envInfo: function (e) {
                        return e.envInfo
                    }, verifyToken: function (e) {
                        return e.verifyToken
                    }, tonglanStep: function (e) {
                        return e.tonglanStep
                    }, phoneResult: function (e) {
                        return e.phoneResult
                    }, emailResult: function (e) {
                        return e.emailResult
                    }, verifySDKInstance: function (e) {
                        return e.verifySDKInstance
                    }, hasInitVerifySDK: function (e) {
                        return e.hasInitVerifySDK
                    }, emailSmsCode: function (e) {
                        return e.emailSmsCode
                    }, sendEmailResult: function (e) {
                        return e.sendEmailResult
                    }, initSbox: function (e) {
                        return e.initSbox
                    }, loginRecord: function (e) {
                        return e.loginRecord
                    }, secondToken: function (e) {
                        return e.secondToken
                    }
                }, mutations: {
                    UPDATE_USER_INFO: function (e, t) {
                        e.userInfo = t
                    }, UPDATE_ENV_CHECK_INFO: function (e, t) {
                        e.envInfo = t
                    }, UPDATE_VERIFY_TOKEN: function (e, t) {
                        e.verifyToken = t
                    }, UPDATE_STEP: function (e, t) {
                        e.tonglanStep = t
                    }, UPDATE_PHONE_INFO: function (e, t) {
                        e.phoneResult = t
                    }, UPDATE_EMAIL_INFO: function (e, t) {
                        e.emailResult = t
                    }, SET_VERIFY_SDK_INSTANCE: function (e, t) {
                        e.verifySDKInstance = t
                    }, INIT_VERIFY_SDK: function (e) {
                        e.hasInitVerifySDK = !0
                    }, GET_EMAIL_SMSCODE: function (e, t) {
                        e.sendEmailResult = t
                    }, GET_VERIFY_EMAIL_RESULT: function (e, t) {
                        e.emailSmsCode = t
                    }, INIT_SOBX: function (e, t) {
                        e.initSbox = t
                    }, UPDATE_LOGIN_HISTORY: function (e, t) {
                        e.loginRecord = t
                    }, SET_SECOND_TOKEN: function (e, t) {
                        e.secondToken = t
                    }
                }, actions: {
                    GET_USER_INFO: function (e, t) {
                        var i = this, o = e.commit;
                        return s()(a.a.mark(function e() {
                            var t, r, s, d, u;
                            return a.a.wrap(function (e) {
                                for (; ;)switch (e.prev = e.next) {
                                    case 0:
                                        return t = _.GET_USER_INFO, r = {
                                            agenttype: E.d,
                                            fields: "private",
                                            lang: E.b,
                                            ptid: E.c
                                        }, s = {
                                            method: "POST",
                                            interceptor: {needValidation: !1}
                                        }, d = n.i(p.c)(r, "tS7BdPLU2w0JD89dh"), r = c()(r, {qd_sc: d}), s.params = r, e.prev = 5, e.next = 8, n.i(p.d)("" + t, s);
                                    case 8:
                                        u = e.sent, o("UPDATE_USER_INFO", u), e.next = 16;
                                        break;
                                    case 12:
                                        throw e.prev = 12, e.t0 = e.catch(5), o("UPDATE_USER_INFO", {code: "E00000"}), new Error("请求个人信息错误", e.t0);
                                    case 16:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, i, [[5, 12]])
                        }))()
                    }, SET_VERIFY_TOKEN: function (e, t) {
                        (0, e.commit)("UPDATE_VERIFY_TOKEN", t)
                    }, SET_STEP: function (e, t) {
                        (0, e.commit)("UPDATE_STEP", t)
                    }, OPR_PHONE: function (e, t) {
                        var i = e.commit, a = "", o = _.CH_PHONE, r = {method: "POST", interceptor: {needValidation: !1}},
                            s = f.a.getFingerPrint(), d = {
                                QC005: n.i(p.a)("QC005"),
                                agenttype: E.d,
                                area_code: t.acode,
                                cellphoneNumber: l(t.phone),
                                device_id: n.i(p.a)("QC005"),
                                dfp: s,
                                env_token: t.token,
                                lang: E.b,
                                ptid: E.c,
                                requestType: t.requestType,
                                serviceId: 2
                            };
                        t.sessionId && (d.session_id = t.sessionId), a = n.i(p.c)(d, "tS7BdPLU2w0JD89dh"), d = c()(d, {qd_sc: a}), r.params = d, n.i(p.d)("" + o, r).then(function (e) {
                            i("UPDATE_PHONE_INFO", e)
                        }).catch(function (e) {
                            throw i("UPDATE_PHONE_INFO", {code: "E00000"}), new Error("请求chphone.action错误", e)
                        })
                    }, OPR_EMAIL: function (e, t) {
                        var i = e.commit, a = "", o = _.CH_EMAIL, r = {method: "POST", interceptor: {needValidation: !1}},
                            s = f.a.getFingerPrint(), d = {
                                QC005: n.i(p.a)("QC005"),
                                agenttype: E.d,
                                device_id: n.i(p.a)("QC005"),
                                dfp: s,
                                email: t.email,
                                env_token: t.token,
                                lang: E.b,
                                ptid: E.c,
                                serviceId: 2
                            };
                        t.sessionId && (d.session_id = t.sessionId), a = n.i(p.c)(d, "tS7BdPLU2w0JD89dh"), d = c()(d, {qd_sc: a}), r.params = d, n.i(p.d)("" + o, r).then(function (e) {
                            i("UPDATE_EMAIL_INFO", e)
                        }).catch(function (e) {
                            throw i("UPDATE_EMAIL_INFO", {code: "E00000"}), new Error("请求chemail.action错误", e)
                        })
                    }, ENV_CHECK: function (e, t) {
                        var i = this, o = e.commit;
                        return s()(a.a.mark(function e() {
                            var r, s, d, u, S, I;
                            return a.a.wrap(function (e) {
                                for (; ;)switch (e.prev = e.next) {
                                    case 0:
                                        return r = {interceptor: {needValidation: !1}}, s = "", d = Math.floor((new Date).getTime() / 1e3), u = f.a.getFingerPrint(), S = {
                                            agentType: E.d,
                                            api_version: "1.2",
                                            authcookie: n.i(p.m)(),
                                            cellphoneNumber: l(t.cellphoneNumber),
                                            deviceId: n.i(p.a)("QC005"),
                                            dfp: u,
                                            forceVerifyMethod: t.forceVerifyMethod || "",
                                            email: l(t.email),
                                            ptid: E.c,
                                            requestType: t.requestType,
                                            serviceID: 2,
                                            ts: d
                                        }, s = n.i(p.c)(S, "tS7BdPLU2w0JD89dh"), S = c()(S, {qd_sc: s}), r.params = S, I = {}, e.prev = 5, e.next = 8, n.i(p.d)(_.ENV_CHECK, r);
                                    case 8:
                                        I = e.sent, o("UPDATE_ENV_CHECK_INFO", I), e.next = 24;
                                        break;
                                    case 12:
                                        return e.prev = 12, e.t0 = e.catch(5), e.prev = 14, e.next = 17, n.i(p.d)(_.ENV_CHECK_BK, r);
                                    case 17:
                                        I = e.sent, o("UPDATE_ENV_CHECK_INFO", I), e.next = 24;
                                        break;
                                    case 21:
                                        e.prev = 21, e.t1 = e.catch(14), o("UPDATE_ENV_CHECK_INFO", {});
                                    case 24:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, i, [[5, 12], [14, 21]])
                        }))()
                    }, INIT_SBOX: function (e, t) {
                        var i = e.dispatch, a = e.commit, o = {
                            interceptor: {needValidation: !1},
                            credentials: !1,
                            method: "POST",
                            params: {secure: SECSDK.getSecure(), platform: "web", nifc: !1}
                        };
                        n.i(p.d)(_.SBOX_INIT_KEY, o).then(function (e) {
                            if ("A00000" === e.code) {
                                var o = e.data;
                                SECSDK.init({sid: o.sid, sign: o.sign, sr: o.sr}, function (e) {
                                    if (e.success) {
                                        var o = S(t);
                                        n.i(p.d)(_.INIT_PAGE, o).then(function (e) {
                                            var n = SECSDK.decrypt(e).data;
                                            if (n = JSON.parse(n), "A00000" === n.code) {
                                                a("INIT_SOBX", !0);
                                                var o = n.data ? n.data.initData : null;
                                                o && o.secondToken && "slidecode" === o.secondVerify ? a("SET_SECOND_TOKEN", o.secondToken) : i("SEND_EMAIL", t)
                                            } else a("GET_EMAIL_SMSCODE", {code: "E00000"})
                                        }).catch(function (e) {
                                            a("GET_EMAIL_SMSCODE", {code: "E00000"})
                                        })
                                    } else a("GET_EMAIL_SMSCODE", {code: "E00000"})
                                })
                            } else a("GET_EMAIL_SMSCODE", {code: "E00000"})
                        }).catch(function (e) {
                            a("GET_EMAIL_SMSCODE", {code: "E00000"})
                        })
                    }, SEND_EMAIL: function (e, t) {
                        var i = e.dispatch, a = e.commit, o = e.state;
                        if (o.initSbox) {
                            var c = S(t, o.secondToken);
                            n.i(p.d)(_.SEND_EMAIL, c).then(function (e) {
                                if (e.code) a("GET_EMAIL_SMSCODE", e); else {
                                    var t = SECSDK.decrypt(e).data;
                                    t = JSON.parse(t), a("GET_EMAIL_SMSCODE", t)
                                }
                            }).catch(function (e) {
                                a("GET_EMAIL_SMSCODE", {code: "E00000"})
                            })
                        } else i("INIT_SBOX", t)
                    }, VERIFY_EMAIL: function (e, t) {
                        var i = e.commit, a = {
                                interceptor: {needValidation: !1},
                                credentials: !1,
                                method: "POST",
                                reponseContentType: "text"
                            }, o = Math.floor((new Date).getTime() / 1e3), c = f.a.getFingerPrint(),
                            r = {dfp: c, clientVersion: "1", t: o, token: t.token, staticVerifyValue: t.staticVerifyValue},
                            s = u()(r);
                        a.params = {
                            cryptSrcData: SECSDK.encrypt(s).data,
                            cryptVersion: SECSDK.getVersion(),
                            platform: "web"
                        }, n.i(p.d)(_.VERIFY_EMAIL, a).then(function (e) {
                            if (e.code) i("GET_VERIFY_EMAIL_RESULT", e); else {
                                var t = SECSDK.decrypt(e).data;
                                t = JSON.parse(t), i("GET_VERIFY_EMAIL_RESULT", t)
                            }
                        }).catch(function (e) {
                            i("GET_VERIFY_EMAIL_RESULT", {code: "E00000"})
                        })
                    }, GET_LOGIN_HISTORY: function (e, t) {
                        var i = this, o = e.commit;
                        return s()(a.a.mark(function e() {
                            var r, s, d, u, f;
                            return a.a.wrap(function (e) {
                                for (; ;)switch (e.prev = e.next) {
                                    case 0:
                                        return r = _.GET_LOGIN_HISTORY, s = {
                                            agenttype: E.d,
                                            lang: E.b,
                                            pageIndex: t.pageIndex || 1,
                                            pageSize: t.pageSize || 5
                                        }, d = {
                                            interceptor: {needValidation: !1},
                                            method: "POST"
                                        }, u = n.i(p.c)(s, "tS7BdPLU2w0JD89dh"), s = c()(s, {qd_sc: u}), d.params = s, e.prev = 5, e.next = 8, n.i(p.d)("" + r, d);
                                    case 8:
                                        f = e.sent, o("UPDATE_LOGIN_HISTORY", f), e.next = 16;
                                        break;
                                    case 12:
                                        throw e.prev = 12, e.t0 = e.catch(5), o("UPDATE_LOGIN_HISTORY", {code: "E00000"}), new Error("请求登录记录错误", e.t0);
                                    case 16:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, i, [[5, 12]])
                        }))()
                    }
                }
            };
        t.a = I
    }, 368: function (e, t, n) {
        "use strict";
        (function (e) {
            Object.defineProperty(t, "__esModule", {value: !0});
            var i = n(5), a = n.n(i), o = n(143), c = n(145), r = n(144), s = n(142), d = n(1), u = n(0);
            document.domain = window.location.hostname.match(/[^.]*?\.[^.]*?$/)[0], e.use(s.a), d.k._s.IE && (String.prototype.trim = function () {
                for (var e = this.replace(/^\s\s*/, ""), t = /\s/, n = e.length; t.test(e.charAt(--n)););
                return e.slice(0, n + 1)
            });
            var p = new e(a()({router: r.a, store: c.a}, o.a)), E = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                c.a.replaceState(a()({}, c.a.state, e)), setTimeout(function () {
                    p.$mount(u.p.appId)
                }, 0)
            };
            window.__INITIAL_STATE__ = window.__INITIAL_STATE__ || {}, E(window.__INITIAL_STATE__)
        }).call(t, n(2))
    }
}, [368]);