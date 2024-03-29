var md5V2 = function () {
    var t = function (t, e) {
        return t << e | t >>> 32 - e
    };
    var e = function (t, e) {
        var r, i, n, o, a;
        n = t & 2147483648;
        o = e & 2147483648;
        r = t & 1073741824;
        i = e & 1073741824;
        a = (t & 1073741823) + (e & 1073741823);
        if (r & i) {
            return a ^ 2147483648 ^ n ^ o
        }
        if (r | i) {
            if (a & 1073741824) {
                return a ^ 3221225472 ^ n ^ o
            } else {
                return a ^ 1073741824 ^ n ^ o
            }
        } else {
            return a ^ n ^ o
        }
    };
    var r = function (t, e, r) {
        return t & e | ~t & r
    };
    var i = function (t, e, r) {
        return t & r | e & ~r
    };
    var n = function (t, e, r) {
        return t ^ e ^ r
    };
    var o = function (t, e, r) {
        return e ^ (t | ~r)
    };
    var a = function (i, n, o, a, s, c, f) {
        i = e(i, e(e(r(n, o, a), s), f));
        return e(t(i, c), n)
    };
    var s = function (r, n, o, a, s, c, f) {
        r = e(r, e(e(i(n, o, a), s), f));
        return e(t(r, c), n)
    };
    var c = function (r, i, o, a, s, c, f) {
        r = e(r, e(e(n(i, o, a), s), f));
        return e(t(r, c), i)
    };
    var f = function (r, i, n, a, s, c, f) {
        r = e(r, e(e(o(i, n, a), s), f));
        return e(t(r, c), i)
    };
    var u = function (t) {
        var e;
        var r = t.length;
        var i = r + 8;
        var n = (i - i % 64) / 64;
        var o = (n + 1) * 16;
        var a = Array(o - 1);
        var s = 0;
        var c = 0;
        while (c < r) {
            e = (c - c % 4) / 4;
            s = c % 4 * 8;
            a[e] = a[e] | t.charCodeAt(c) << s;
            c++
        }
        e = (c - c % 4) / 4;
        s = c % 4 * 8;
        a[e] = a[e] | 128 << s;
        a[o - 2] = r << 3;
        a[o - 1] = r >>> 29;
        return a
    };
    var h = function (t) {
        var e = "", r = "", i, n;
        for (n = 0; n <= 3; n++) {
            i = t >>> n * 8 & 255;
            r = "0" + i.toString(16);
            e = e + r.substr(r.length - 2, 2)
        }
        return e
    };
    var l = function (t) {
        t = t.replace(/\x0d\x0a/g, "\n");
        var e = "";
        for (var r = 0; r < t.length; r++) {
            var i = t.charCodeAt(r);
            if (i < 128) {
                e += String.fromCharCode(i)
            } else if (i > 127 && i < 2048) {
                e += String.fromCharCode(i >> 6 | 192);
                e += String.fromCharCode(i & 63 | 128)
            } else {
                e += String.fromCharCode(i >> 12 | 224);
                e += String.fromCharCode(i >> 6 & 63 | 128);
                e += String.fromCharCode(i & 63 | 128)
            }
        }
        return e
    };
    return function (t) {
        t += "";
        var r = Array();
        var i, n, o, d, p, v, m, g, w;
        var b = 7, y = 12, I = 17, _ = 22;
        var C = 5, k = 9, A = 14, j = 20;
        var S = 4, M = 11, O = 16, Q = 23;
        var T = 6, E = 10, N = 15, x = 21;
        t = l(t);
        r = u(t);
        v = 1732584193;
        m = 4023233417;
        g = 2562383102;
        w = 271733878;
        for (i = 0; i < r.length; i += 16) {
            n = v;
            o = m;
            d = g;
            p = w;
            v = a(v, m, g, w, r[i + 0], b, 3614090360);
            w = a(w, v, m, g, r[i + 1], y, 3905402710);
            g = a(g, w, v, m, r[i + 2], I, 606105819);
            m = a(m, g, w, v, r[i + 3], _, 3250441966);
            v = a(v, m, g, w, r[i + 4], b, 4118548399);
            w = a(w, v, m, g, r[i + 5], y, 1200080426);
            g = a(g, w, v, m, r[i + 6], I, 2821735955);
            m = a(m, g, w, v, r[i + 7], _, 4249261313);
            v = a(v, m, g, w, r[i + 8], b, 1770035416);
            w = a(w, v, m, g, r[i + 9], y, 2336552879);
            g = a(g, w, v, m, r[i + 10], I, 4294925233);
            m = a(m, g, w, v, r[i + 11], _, 2304563134);
            v = a(v, m, g, w, r[i + 12], b, 1804603682);
            w = a(w, v, m, g, r[i + 13], y, 4254626195);
            g = a(g, w, v, m, r[i + 14], I, 2792965006);
            m = a(m, g, w, v, r[i + 15], _, 1236535329);
            v = s(v, m, g, w, r[i + 1], C, 4129170786);
            w = s(w, v, m, g, r[i + 6], k, 3225465664);
            g = s(g, w, v, m, r[i + 11], A, 643717713);
            m = s(m, g, w, v, r[i + 0], j, 3921069994);
            v = s(v, m, g, w, r[i + 5], C, 3593408605);
            w = s(w, v, m, g, r[i + 10], k, 38016083);
            g = s(g, w, v, m, r[i + 15], A, 3634488961);
            m = s(m, g, w, v, r[i + 4], j, 3889429448);
            v = s(v, m, g, w, r[i + 9], C, 568446438);
            w = s(w, v, m, g, r[i + 14], k, 3275163606);
            g = s(g, w, v, m, r[i + 3], A, 4107603335);
            m = s(m, g, w, v, r[i + 8], j, 1163531501);
            v = s(v, m, g, w, r[i + 13], C, 2850285829);
            w = s(w, v, m, g, r[i + 2], k, 4243563512);
            g = s(g, w, v, m, r[i + 7], A, 1735328473);
            m = s(m, g, w, v, r[i + 12], j, 2368359562);
            v = c(v, m, g, w, r[i + 5], S, 4294588738);
            w = c(w, v, m, g, r[i + 8], M, 2272392833);
            g = c(g, w, v, m, r[i + 11], O, 1839030562);
            m = c(m, g, w, v, r[i + 14], Q, 4259657740);
            v = c(v, m, g, w, r[i + 1], S, 2763975236);
            w = c(w, v, m, g, r[i + 4], M, 1272893353);
            g = c(g, w, v, m, r[i + 7], O, 4139469664);
            m = c(m, g, w, v, r[i + 10], Q, 3200236656);
            v = c(v, m, g, w, r[i + 13], S, 681279174);
            w = c(w, v, m, g, r[i + 0], M, 3936430074);
            g = c(g, w, v, m, r[i + 3], O, 3572445317);
            m = c(m, g, w, v, r[i + 6], Q, 76029189);
            v = c(v, m, g, w, r[i + 9], S, 3654602809);
            w = c(w, v, m, g, r[i + 12], M, 3873151461);
            g = c(g, w, v, m, r[i + 15], O, 530742520);
            m = c(m, g, w, v, r[i + 2], Q, 3299628645);
            v = f(v, m, g, w, r[i + 0], T, 4096336452);
            w = f(w, v, m, g, r[i + 7], E, 1126891415);
            g = f(g, w, v, m, r[i + 14], N, 2878612391);
            m = f(m, g, w, v, r[i + 5], x, 4237533241);
            v = f(v, m, g, w, r[i + 12], T, 1700485571);
            w = f(w, v, m, g, r[i + 3], E, 2399980690);
            g = f(g, w, v, m, r[i + 10], N, 4293915773);
            m = f(m, g, w, v, r[i + 1], x, 2240044497);
            v = f(v, m, g, w, r[i + 8], T, 1873313359);
            w = f(w, v, m, g, r[i + 15], E, 4264355552);
            g = f(g, w, v, m, r[i + 6], N, 2734768916);
            m = f(m, g, w, v, r[i + 13], x, 1309151649);
            v = f(v, m, g, w, r[i + 4], T, 4149444226);
            w = f(w, v, m, g, r[i + 11], E, 3174756917);
            g = f(g, w, v, m, r[i + 2], N, 718787259);
            m = f(m, g, w, v, r[i + 9], x, 3951481745);
            v = e(v, n);
            m = e(m, o);
            g = e(g, d);
            w = e(w, p)
        }
        var q = h(v) + h(m) + h(g) + h(w);
        return q.toLowerCase()
    }
}();
window.lib = window.lib || {};
lib.md5V2 = md5V2;
Object.extend = function (t, e) {
    for (var i in e) {
        t[i] = e[i]
    }
    return t
};
window.lib = window.lib || {};
if (!lib.SITE_DOMAIN) {
    var getDomain = function () {
        var t = 2;
        var e = window.location.hostname.split(".");
        e = e.slice(e.length - t);
        return e.join(".")
    };
    lib.SITE_DOMAIN = getDomain()
}
lib.PROJECT_VERSION = "20190111102721";
lib.developer = "yinyanhui";
lib.action = lib.action || {};
lib.action.Qa = function () {
    this.init = function (t) {
        var e = this;
        var i = lib.SITE_DOMAIN.match(/pps/);
        try {
            var r = navigator.userAgent.toLowerCase();
            this.par = {};
            this.pars = [];
            this.custom = {};
            this.filter = [];
            this.time = 0;
            this.w = window;
            this.l = window.location;
            this.d = window.document;
            this.urlMap = {
                rdm: "rdm",
                qtcurl: "qtcurl",
                rfr: "rfr",
                lrfr: "lrfr",
                jsuid: "jsuid",
                qtsid: "qtsid",
                ppuid: "ppuid",
                platform: "platform",
                weid: "weid",
                pru: "pru",
                flshuid: "flshuid",
                fcode: "fcode",
                ffcode: "ffcode",
                coop: "coop",
                odfrm: "odfrm",
                fvcode: "fvcode",
                nu: "nu",
                mod: "mod",
                pcau: "pcau"
            };
            this.cookieMap = {
                flshuid: "QC005",
                jsuid: "QC006",
                pru: "P00PRU",
                lrfr: "QC007",
                qtsid: "QC008",
                QY_FC: "QC009",
                QY_FFC: "QC014",
                gaflag: "QC011",
                odfrm: "QC132",
                QY_FV: "QC142",
                pcau: "PCAU"
            };
            t = t || {};
            this.times = t.times || 5;
            this.timeouts = t.timeouts || 1e3;
            this.url = t.url || "//msg.qy.net/jspb.gif";
            if (this.url.indexOf("?") == -1) {
                this.url += "?"
            } else if (this.url.slice(-1) != "&") {
                this.url += "&"
            }
            this.flag = t.flag || "QC010";
            this.callback = t.callback || function () {
                };
            if (typeof t.urlMap == "object") {
                Object.extend(this.urlMap, t.urlMap)
            }
            if (typeof t.cookieMap == "object") {
                Object.extend(this.cookieMap, t.cookieMap)
            }
            if (typeof t.custom == "object") {
                Object.extend(this.custom, t.custom)
            }
            if (t.filter instanceof Array) {
                this.filter = t.filter
            }
            var n = this.urlMap;
            this.par[n.rdm] = this.rand();
            this.par[n.qtcurl] = this.u(this.l.href);
            this.par[n.rfr] = this.u(this.d.referrer);
            this.par[n.lrfr] = this.getLrfr();
            this.par[n.jsuid] = this.getJsuid();
            this.par[n.qtsid] = this.getQtsid();
            this.par[n.ppuid] = this.getUserInfoUid();
            this.par[n.nu] = this.getNu();
            this.par[n.platform] = /ipad/i.test(r) ? "21" : /(iphone os)|(android)/i.test(r) ? "31" : "11";
            if (i) {
                this.par[n.platform] = "20" + this.par[n.platform]
            }
            if (this.w.pingbackParams) {
                if (Object.assign) {
                    this.par = Object.assign({}, this.w.pingbackParams, this.par)
                } else {
                    this.par = Object.extend({}, this.w.pingbackParams, this.par)
                }
            }
            if (this.w.Q && Q.PageInfo.playPageInfo && Q.PageInfo.playPageInfo.videoTemplate) {
                this.par["tmplt"] = Q.PageInfo.playPageInfo.videoTemplate || ""
            }
            this.par[n.fcode] = this.getFc();
            this.par[n.ffcode] = this.getFfc();
            this.par[n.coop] = this.getCoop();
            this.par[n.weid] = this.getWeid();
            this.par[n.pru] = this.getPRU();
            this.par[n.fvcode] = this.getFv();
            this.par[n.mod] = this.getMod();
            Object.extend(this.par, this.custom);
            var o = this.queryToJson(this.l.href);
            var a = this.cookieMap[this.urlMap.odfrm];
            var s = o[this.urlMap.odfrm] || this.cookieGet(a) || "";
            if (s) {
                s = s;
                this.par[n.odfrm] = s;
                this.cookieSet(a, s, 0, "/", lib.SITE_DOMAIN);
                var c = this.d.getElementsByTagName("body")[0];
                var f = this.queryToJson(c.getAttribute("data-pb") || "") || {};
                f[n.odfrm] = s;
                var u = this.jsonToQuery(f);
                c.setAttribute("data-pb", u)
            }
            var h = document.getElementById("block-B");
            if (h && h.getAttribute("data-pb")) {
                var l = h.getAttribute("data-pb");
                var d = l.match(/(^|&)?tmplt=([^&]+)/i);
                if (d && d[2]) {
                    e.par["tmplt"] = d[2]
                }
            }
            var p = /ipad/i.test(r) || /iphone os/i.test(r) || /lepad_hls/i.test(r);
            if (p) {
                e.par[n.flshuid] = e.getJsuid()
            } else {
                e.par[n.flshuid] = e.getFlashId()
            }
            e.par[n.pcau] = e.getPcau();
            var v = "ChEnYH0415dadrrEDFf2016";
            var m = p ? e.par[n.flshuid] : e.getJsuid();
            e.par["as"] = lib.md5V2(e.par[n.platform] + m + e.par[n.weid] + v);
            if (window.dfp) {
                window.dfp.getFingerPrint(function (t) {
                    e.par["dfp"] = t;
                    e.setQC005();
                    e.post()
                }, function (t) {
                    e.setQC005();
                    e.post()
                })
            } else {
                e.setQC005();
                e.post()
            }
        } catch (g) {
        }
    };
    this.getUserInfoUid = function () {
        try {
            var userInfo = this.cookieGet("P00002");
            if (userInfo) {
                userInfo = userInfo == window.JSON ? window.JSON.parse(userInfo) : eval("(" + userInfo + ")")
            }
            if (userInfo && userInfo.uid) {
                return userInfo.uid
            } else {
                return ""
            }
        } catch (e) {
            return ""
        }
    };
    this.u = function (t) {
        try {
            var e = encodeURIComponent;
            return e instanceof Function ? e(t) : escape(t)
        } catch (i) {
            return ""
        }
    };
    this.hash = function (t) {
        try {
            var e = 1, i = 0;
            if (t) {
                e = 0;
                for (var r = t.length - 1; r >= 0; r--) {
                    i = t.charCodeAt(r);
                    e = (e << 6 & 268435455) + i + (i << 14);
                    i = e & 266338304;
                    e = i !== 0 ? e ^ i >> 21 : e
                }
            }
            return e
        } catch (n) {
            return ""
        }
    };
    this.rand = function (t) {
        try {
            var e = [];
            if (!isNaN(t)) {
                for (var i = 0; i < t; i++) {
                    e.push(Math.round(Math.random() * 2147483647).toString(36))
                }
            } else {
                e.push(Math.round(Math.random() * 2147483647))
            }
            return e.join("")
        } catch (r) {
            return ""
        }
    };
    this.cookieGet = function (t) {
        var e = function (t) {
            if (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(t)) {
                var e = new RegExp("(^| )" + t + "=([^;]*)(;|$)"), i = e.exec(document.cookie);
                if (i) {
                    return i[2] || ""
                }
            }
            return ""
        };
        try {
            t = e(t);
            if ("string" == typeof t) {
                if (t.length > 1 && t == "deleted") {
                    return ""
                } else {
                    return decodeURIComponent(t) || ""
                }
            } else {
                return ""
            }
        } catch (i) {
            return ""
        }
    };
    this.cookieSet = function (t, e, i, r, n, o) {
        try {
            var a = [];
            a.push(t + "=" + encodeURIComponent(e));
            if (i) {
                var s = new Date;
                var c = s.getTime() + i * 36e5;
                s.setTime(c);
                a.push("expires=" + s.toGMTString())
            }
            if (r) {
                a.push("path=" + r)
            }
            if (n) {
                a.push("domain=" + n)
            }
            if (o) {
                a.push(o)
            }
            document.cookie = a.join(";")
        } catch (f) {
            return ""
        }
    };
    this.getJsuid = function () {
        try {
            var t;
            var e = this.cookieMap.jsuid;
            t = this.cookieGet(e);
            if (!t || !isNaN(t)) {
                t = this.rand(4)
            }
            this.cookieSet(e, t, 365 * 24, "/", lib.SITE_DOMAIN);
            return t
        } catch (i) {
            return ""
        }
    };
    this.getQtsid = function () {
        try {
            var t, e = /^\d{10}\.\d{10}\.\d{10}\.\d+$/;
            var i = this.cookieMap.qtsid;
            var r = function () {
                return parseInt(new Date / 1e3, 10).toString()
            };
            t = this.cookieGet(i);
            if (this.cookieGet(this.flag)) {
                return t
            }
            if (!e.test(t)) {
                var n = r();
                t = [n, n, n, "1"]
            } else {
                t = t.split(".");
                t[1] = t[2];
                t[2] = r();
                t[3] = parseInt(t[3], 10) + 1
            }
            this.cookieSet(i, t.join("."), 365 * 24, "/", lib.SITE_DOMAIN);
            return t
        } catch (o) {
            return ""
        }
    };
    this.getLrfr = function () {
        try {
            var t, e = this;
            var i = this.cookieMap.lrfr;
            var r = this.d.referrer.match(/http[s]?:\/\/([^\/]*)/);
            r = r ? r[1] : "";
            t = this.cookieGet(i);
            t = t == "undefined" ? "" : t;
            var n = this.l.hostname;
            var o = r && r.match(/i?qiyi\.com|pps\.tv/);
            var a = t;
            if (!t) {
                if (!this.d.referrer || o) {
                    a = "DIRECT"
                } else {
                    a = this.u(this.d.referrer)
                }
            } else if (!this.d.referrer) {
                a = "DIRECT"
            } else if (r !== n && r.indexOf(lib.SITE_DOMAIN) === -1) {
                if (!o) {
                    a = this.u(this.d.referrer)
                }
            }
            this.cookieSet(i, a, 0, "/", lib.SITE_DOMAIN);
            return a
        } catch (s) {
            return ""
        }
    };
    this.getFlashId = function () {
        var t = this.cookieMap.flshuid;
        var e = this.cookieGet(t) || "";
        return e
    };
    this.getPcau = function () {
        var t = this.cookieMap.pcau;
        var e = this.cookieGet(t) || "0";
        return e
    };
    this.setQC005 = function () {
        var t = this.cookieGet("QC005");
        var e = window.localStorage && localStorage.getItem("QC005");
        if (t && !e) {
            window.localStorage && localStorage.setItem("QC005", t)
        }
        if (!t && e) {
            this.cookieSet("QC005", e)
        }
    };
    this.getFc = function () {
        try {
            var t = this.l.search.match(/[\?&]fc=([^&]*)(&|$)/i);
            var e = this.cookieMap.QY_FC;
            var i = this.cookieGet(e);
            if (i == "b22dab601821a896") {
                return i
            }
            if (t) {
                t = t[1];
                this.cookieSet(e, t, 0, "/", lib.SITE_DOMAIN)
            } else {
                t = this.cookieGet(e);
                if (!t || t == "undefined") {
                    t = ""
                }
            }
            return t
        } catch (r) {
            return ""
        }
    };
    this.getFv = function () {
        try {
            var t = this.l.search.match(/[\?&]fv=([^&]*)(&|$)/i);
            var e = this.cookieMap.QY_FV;
            if (t) {
                var i = encodeURIComponent(t[1]);
                if (i.length > 146) {
                    i = i.substring(0, 146)
                }
                i = decodeURIComponent(i);
                t = i;
                this.cookieSet(e, t, 24 * 3, "/", lib.SITE_DOMAIN)
            } else {
                t = this.cookieGet(e);
                if (!t || t == "undefined") {
                    t = ""
                }
            }
            return t
        } catch (r) {
            return ""
        }
    };
    this.getFfc = function () {
        try {
            var t = this.l.search.match(/[\?&]ffc=([^&]*)(&|$)/i);
            var e = this.cookieMap.QY_FFC;
            if (t) {
                t = t[1];
                this.cookieSet(e, t, 0, "/", lib.SITE_DOMAIN)
            } else {
                t = this.cookieGet(e);
                if (!t || t == "undefined") {
                    t = ""
                }
            }
            return t
        } catch (i) {
            return ""
        }
    };
    this.getCoop = function () {
        var t = "";
        var e;
        if (this.l.host.split(".")[0] == "mini") {
            e = lib.$url(this.l.href, "app");
            e = e && e["app"] || "";
            if (e) {
                t = "coop_" + e.replace("bdbrowser", "bdexplorer")
            }
        } else {
            if (this.w.INFO && this.w.INFO.flashVars && this.w.INFO.flashVars.coop) {
                t = this.w.INFO.flashVars.coop
            }
        }
        return t
    };
    this.getWeid = function () {
        return window.webEventID || lib.md5V2(+new Date + Math.round(Math.random() * 2147483647) + "") || ""
    };
    this.getNu = function () {
        return this.cookieGet("QC173") || 0
    };
    this.getPRU = function () {
        return this.cookieGet("P00PRU") || ""
    };
    this.getMod = function () {
        var t = window.Q && Q.PageInfo || {};
        if (window.uniqy) {
            t = window.uniqy && uniqy.PageInfo || {}
        }
        var e = t.i18n === "tw_t" ? false : true;
        var i;
        if (e) {
            i = "cn_s"
        } else {
            i = "tw_t"
        }
        return i
    };
    this.post = function () {
        var t = this;
        try {
            t.pars = [];
            var e, i = t.filter.length, r;
            if (i === 0) {
                for (e in t.par) {
                    t.pars.push([e, t.par[e]].join("="))
                }
            } else {
                for (e = 0; e < i; e++) {
                    r = t.filter[e];
                    t.pars.push([r, t.par[r]].join("="))
                }
            }
            t.pars = t.pars.join("&");
            window.jsQa = new Image(1, 1);
            window.jsQa.src = t.url + t.pars;
            t.cookieSet(t.flag, t.hash(t.pars), 0, "/", lib.SITE_DOMAIN);
            t.cookieSet(t.urlMap.nu, 0, 0, "/", lib.SITE_DOMAIN);
            t.callback()
        } catch (n) {
            return ""
        }
    };
    this.iframeRequest = function (t) {
        var e = document.createElement("iframe");
        e.scrolling = "no";
        e.style.display = "none";
        e.frameborder = 0;
        e.src = t;
        document.body.appendChild(e)
    };
    this.syncCookie = function (t, e, i) {
        var r = this;
        var n;
        if (t.indexOf("iqiyi.com") !== -1) {
            n = "//passport.pps.tv/pages/user/proxy.action"
        } else if (t.indexOf("pps.tv") !== -1) {
            n = "//passport.iqiyi.com/pages/user/proxy.action"
        }
        if (n) {
            setTimeout(function () {
                var t = n + "#" + e + "=" + i;
                try {
                    window.JSHandler.logToConsole("xxx")
                } catch (o) {
                    if (!window.external.GetLoginJsonInfo) {
                        r.iframeRequest(t)
                    }
                }
            }, 0)
        }
    };
    this.queryToJson = function (t) {
        var e = Array.isArray || function (t) {
                return Object.prototype.toString.call(t) == "[object Array]"
            };
        t = t || this.l.href;
        var i = t.substr(t.lastIndexOf("?") + 1), r = i.split("&"), n = r.length, o = {}, a = 0, s, c, f, u;
        for (; a < n; a++) {
            if (!r[a]) {
                continue
            }
            u = r[a].split("=");
            s = u.shift();
            c = u.join("=");
            f = o[s];
            if ("undefined" == typeof f) {
                o[s] = c
            } else if (e(f)) {
                f.push(c)
            } else {
                o[s] = [f, c]
            }
        }
        return o
    };
    this.jsonToQuery = function (t, e) {
        var i = Array.isArray || function (t) {
                return Object.prototype.toString.call(t) == "[object Array]"
            };
        var r = function (t, e) {
            var i, r, n;
            if ("function" == typeof e) {
                for (r in t) {
                    if (t.hasOwnProperty(r)) {
                        n = t[r];
                        i = e.call(t, n, r);
                        if (i === false) {
                            break
                        }
                    }
                }
            }
            return t
        };
        var n = function (t) {
            return String(t).replace(/[#%&+=\/\\\ \u3000\f\r\n\t]/g, function (t) {
                return "%" + (256 + t.charCodeAt()).toString(16).substring(1).toUpperCase()
            })
        };
        var o = [], a, s = e || function (t) {
                return n(t)
            };
        r(t, function (t, e) {
            if (i(t)) {
                a = t.length;
                while (a--) {
                    o.push(e + "=" + s(t[a], e))
                }
            } else {
                o.push(e + "=" + s(t, e))
            }
        });
        return o.join("&")
    }
};
!function () {
    var t = new lib.action.Qa;
    var e = false;
    var i = null;
    try {
        if (window.dfp) {
            t.init({url: "//msg.qy.net/jpb.gif"})
        } else {
            var r = document.getElementsByTagName("HEAD").item(0);
            var n = document.createElement("script");
            n.type = "text/javascript";
            n.src = "//security.iqiyi.com/static/cook/v1/cooksdk.js";
            var o = navigator.userAgent.toLowerCase();
            var a = /ipad/i.test(o) || /iphone os/i.test(o) || /lepad_hls/i.test(o);
            if (a) {
                n.src = "//security.iqiyi.com/static/cook/v1/cooksdkpcwpad.js"
            }
            r.appendChild(n);
            var s = [];
            window.qaLoadingDfp = function (t) {
                s.push(t)
            };
            var c = function () {
                while (s.length > 0) {
                    try {
                        var t = s.shift();
                        t()
                    } catch (e) {
                    }
                }
            };
            var f = function () {
                clearTimeout(i);
                i = setTimeout(function () {
                    if (!e) {
                        clearTimeout(i);
                        t.init({url: "//msg.qy.net/jpb.gif"});
                        c()
                    }
                }, 2e3)
            };
            f();
            var u = /msie/.test(o);
            if (u) {
                n.onreadystatechange = function () {
                    if (/loaded|complete/.test(n.readyState)) {
                        e = true;
                        clearTimeout(i);
                        t.init({url: "//msg.qy.net/jpb.gif"});
                        c()
                    }
                }
            } else {
                n.onload = function () {
                    e = true;
                    clearTimeout(i);
                    t.init({url: "//msg.qy.net/jpb.gif"});
                    c()
                }
            }
        }
    } catch (h) {
    }
}();
!function () {
    var t = new lib.action.Qa;
    var e = t.cookieGet("QC001") == "1";
    var i = t.cookieGet("QC005");
    var r;
    window._dxt = window._dxt || [];
    var n = location.hostname;
    window._dxt.push(["_setUserId", i]);
    var o = window.uniqy || {};
    var a = o.PageInfo || {};
    if (a.i18n != "tw_t") {
        var s = document.createElement("script");
        s.src = "//datax.baidu.com/x.js?si=&dm=" + n + "";
        var c = document.getElementsByTagName("script")[0];
        c.parentNode.insertBefore(s, c)
    }
    if (e || !i || window.location.protocol == "https:" || lib.SITE_DOMAIN.match(/pps/)) {
        return
    }
    t.cookieSet("QC001", "1", 24, "/", lib.SITE_DOMAIN);
    var f = "324";
    var u = {qiyi_cookie: i};
    var h = {sid: i, p: "iqiyi"};
    var l = "//nsclick.baidu.com/v.gif", d = [], p = "BD_QIYI_LOG_" + (new Date).getTime(), v = window[p] = new Image;
    d.push("pid=" + f);
    for (r in u) {
        d.push(r + "=" + encodeURIComponent(u[r]))
    }
    v.src = l + "?" + d.join("&") + "&t=" + (new Date).getTime();
    var m = "//cpro.baidu.com/cpro/ui/html/sync.htm", g = [], w = "BD_QIYI_LOG_" + (new Date).getTime(),
        b = window[w] = new Image;
    for (r in h) {
        g.push(r + "=" + encodeURIComponent(h[r]))
    }
    b.src = m + "?" + g.join("&") + "&t=" + (new Date).getTime();
    if (!parseInt(Math.random() * 10, 10)) {
        var y = "http://m.wrating.com/m.gif?a=&c=860010-2370010124&mcookie=" + i,
            I = "WRATING_LOG_" + (new Date).getTime(), _ = window[I] = new Image;
        _.src = y + "&t=" + (new Date).getTime()
    }
}();
!function () {
    try {
        var t = document.getElementsByTagName("HEAD").item(0);
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.src = "//stc.iqiyipic.com/js/pingback/commonpingback.js";
        t.appendChild(e)
    } catch (i) {
    }
}();
!function () {
    var t = function () {
        var t = 2;
        var e = window.location.hostname.split(".");
        e = e.slice(e.length - t);
        return e.join(".")
    }();
    var e = t.match(/pps/);
    var i = navigator.userAgent.toLowerCase();
    var r = "1", n = "10", o = "101";
    if (/(android)|(like mac os x)/i.test(i)) {
        r = "2";
        n = "20"
    } else if (e) {
        r = "201"
    }
    if (/(android)/i.test(i)) {
        o = "201"
    } else if (/(like mac os x)/i.test(i)) {
        if (/(iphone)/i.test(i)) {
            o = "201"
        } else {
            o = "202"
        }
    }
    var a = "//msg.qy.net/b?t=20&p=10&p1=101" + ("&pf=" + r);
    if (window.uniqy) {
        a = "//msg.qy.net/b?t=20&p=" + n + "&p1=" + o + ("&pf=" + r)
    }
    var s = function (t, e) {
        t = t || {};
        if (e.indexOf("?") == -1) {
            e += "?"
        } else {
            e += "&"
        }
        var i = +new Date;
        t._ = i;
        for (var r in t) {
            if (t.hasOwnProperty(r)) {
                e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]) + "&"
            }
        }
        if (e[e.length - 1] === "&") {
            e = e.slice(0, -1)
        }
        var n = new Image;
        n.src = e
    };
    if (!document.querySelectorAll) {
        var c = function (t) {
            if (!t) {
                return
            }
            var e = [];
            var i = document;
            var r = i.getElementsByTagName("*") || i.all;
            for (var n = 0, o = r.length; n < o; n++) {
                if (r[n].id == t) {
                    e.push(r[n])
                }
            }
            return e
        }
    }
    function f() {
        var t = [];
        var e = "block-";
        var i, r, n, o;
        var a = "A".charCodeAt();
        var s = function (t) {
            return document.getElementById(t)
        };
        var f = String.fromCharCode;
        var u;
        for (u = 0; u < 26; u++) {
            i = f(a + u);
            n = e + i;
            var h = "*[id=" + n + "]";
            var l = "";
            if (document.querySelectorAll) {
                l = document.querySelectorAll(h)
            } else {
                l = c(n)
            }
            var d = l.length;
            if (d) {
                if (d > 1) {
                    var p = 0;
                    var v = 1;
                    while (p < d) {
                        o = l[p];
                        if (p) {
                            o["__bid__"] = i + v;
                            o["id"] = n + v;
                            v++
                        } else {
                            o["__bid__"] = i
                        }
                        t.push(o);
                        p++
                    }
                } else {
                    o = s(n);
                    o["__bid__"] = i;
                    t.push(o)
                }
            }
        }
        for (u = 0; u < 26; u++) {
            r = f(a + u);
            var m = false;
            for (var g = 0; g < 26; g++) {
                i = f(a + g);
                n = e + r + i;
                o = s(n);
                if (o) {
                    m = true;
                    o["__bid__"] = r + i;
                    t.push(o)
                }
            }
        }
        return t
    }

    function u() {
        var t = {};
        var e = [];
        var i = "block-";
        var r = document.getElementsByTagName("qchunk");
        var n, o;
        for (var a = 0, s = r.length; a < s; a++) {
            n = r[a];
            o = n.getAttribute("data-id") || "";
            if (o.substr(0, i.length).toLowerCase() == i) {
                var c = o.substr(i.length);
                if (!t[c]) {
                    t[c] = 1
                } else {
                    var f = ++t[c];
                    var u;
                    do {
                        u = c[0];
                        u = u + f;
                        f++
                    } while (t[u]);
                    t[u] = 1;
                    n.setAttribute("data-id", u);
                    c = u
                }
                n["__bid__"] = c;
                e.push(n)
            }
        }
        return e
    }

    function h(t, e, i) {
        if (t._clickMapPBSent) {
            return false
        }
        t._clickMapPBSent = true;
        if (e === i) {
            e._c = 1;
            return true
        }
        if (e._c >= 1) {
            e._c++;
            return false
        } else {
            if (typeof e._c !== "number") {
                e._c = 1
            } else {
                e._c++
            }
            if (!e._adjustClickMap) {
                var r = function () {
                    this._c = 0
                };
                e._adjustClickMap = r.bind(e);
                try {
                    if (e.addEventListener) {
                        e.addEventListener("mousedown", e._adjustClickMap, false)
                    } else {
                        e.attachEvent("onmousedown", e._adjustClickMap)
                    }
                } catch (n) {
                }
            }
        }
        return true
    }

    var l = function (t) {
        t = t || window.event;
        var e = t.target || t.srcElement;
        var i = t.currentTarget || this;
        if (!h(t, e, i)) {
            return
        }
        var r = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
        var n = document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft;
        var o = document.documentElement && document.documentElement.scrollWidth || document.body.scrollWidth;
        var c = document.documentElement && document.documentElement.scrollHeight || document.body.scrollHeight;
        var f = document.documentElement && document.documentElement.clientHeight || document.body.clientHeight;
        var u = document.documentElement && document.documentElement.clientWidth || document.body.clientWidth;
        var l = Math.max(c, f);
        var d = Math.max(o, u);
        var p = this["__bid__"] || "";
        var v = b(document.getElementsByTagName("body")[0].getAttribute("data-pb"), "&");
        var m = b(this.getAttribute("data-pb"), "&");
        var g, w, I;
        do {
            g = e;
            w = g.getAttribute("rseat");
            I = g.tagName.toUpperCase();
            e = e.parentNode;
            if (g == this) {
                break
            }
        } while (!w && I !== "A" && I !== "IMG");
        var _ = b(g.getAttribute("data-pb"), "&");
        var k, C, A;
        var j = e && e.tagName && e.tagName.toUpperCase() === "A";
        if (w) {
            _.rseat = w
        }
        if (I === "A") {
            k = g.title || "";
            C = "a";
            A = g.getAttribute("href") || ""
        } else if (I === "IMG") {
            k = g.alt || "";
            C = "i";
            A = ""
        } else {
            k = g.title || "";
            C = "e";
            A = ""
        }
        if (I !== "A" && j) {
            if (e.getAttribute("href")) {
                if (e.getAttribute("href").indexOf("javascript") == -1) {
                    A = location.protocol + e.getAttribute("href").replace(/^((http|https):)/, "") || ""
                } else {
                    A = e.getAttribute("href")
                }
            }
        }
        var M, S, E, O;
        O = b(document.cookie, ";");
        M = O["P00003"] || "";
        S = O["QC005"] || "";
        E = O["QC006"] || "";
        var T = window.Q && Q.PageInfo || {};
        if (window.uniqy) {
            T = window.uniqy && uniqy.PageInfo || {}
        }
        var N = T.i18n === "tw_t" ? false : true;
        var x;
        if (N) {
            x = "cn_s"
        } else {
            x = "tw_t"
        }
        var q = {
            block: p,
            rt: C,
            r: k,
            rlink: A,
            pu: decodeURIComponent(M),
            u: decodeURIComponent(S),
            jsuid: decodeURIComponent(E),
            ce: window.webEventID || "",
            re: d + "*" + l,
            clkx: t.clientX + n,
            clky: t.clientY + r,
            mod: x,
            tm: window.__qlt && window.__qlt.statisticsStart ? new Date - window.__qlt.statisticsStart : ""
        };
        if (window.pingbackParams) {
            if (Object.assign) {
                q = Object.assign({}, window.pingbackParams, q)
            } else {
                q = y({}, window.pingbackParams, q)
            }
        }
        if (window.Q && Q.PageInfo.playPageInfo && Q.PageInfo.playPageInfo.videoTemplate) {
            q.tmplt = Q.PageInfo.playPageInfo.videoTemplate || ""
        }
        s(y(q, v, m, _), a)
    };
    var d = function () {
        var t = f();
        var e = u();
        var i, r;
        for (var n = 0, o = t.length; n < o; n++) {
            if (e.indexOf(t[n]) == -1) {
                e.push(t[n])
            }
        }
        var a = document.getElementsByTagName("body")[0];
        a.__bid__ = "body";
        e.push(a);
        return e
    };
    var p = d();
    var v = function (t) {
        var e = p || [];
        if (t && t.data) {
            e = t.data.down("[data-block-name]") || [];
            if (e.length === 0) {
                return
            }
            var i = "block-";
            e.forEach(function (t) {
                t["__bid__"] = t.id.substr(i.length)
            })
        }
        for (var r = 0, n = e.length; r < n; r++) {
            var o = e[r];
            var a = "";
            if (window.Q) {
                a = Q(o)
            } else if (window.jQuery) {
                a = $(o)
            }
            if (a.attr("data-asyn-pb")) {
                continue
            }
            var s = l.bind(o);
            if (o.addEventListener) {
                o.addEventListener("mousedown", s, false)
            } else {
                o.attachEvent("onmousedown", s)
            }
            a.attr("data-asyn-pb", "true")
        }
    };
    var m = function () {
        var t = p || [];
        if (t.length) {
            for (var e = 0, i = t.length; e < i; e++) {
                var r = t[e];
                if (r.getAttribute("data-asyn-pb")) {
                    continue
                }
                var n = l.bind(r);
                if (r.addEventListener) {
                    r.addEventListener("mousedown", n, false)
                } else {
                    r.attachEvent("onmousedown", n)
                }
                r.setAttribute("data-asyn-pb", "true")
            }
        }
    };
    var g = function (t) {
        if (t.length) {
            for (var e = 0, i = t.length; e < i; e++) {
                var r = t[e];
                if (r.getAttribute("data-asyn-pb")) {
                    r.removeAttribute("data-asyn-pb")
                }
            }
        }
    };
    if (window.Q && Q.$) {
        Q.$(window).on("scroll", v);
        Q.$(window).on("resize", v);
        Q.event.customEvent.on("bindingPingback", v);
        v()
    } else if (window.jQuery) {
        try {
            $(window).on("scroll", v);
            $(window).on("resize", v);
            v()
        } catch (w) {
        }
    } else {
        m()
    }
    function b(t, e) {
        var i = {};
        e = e || "&";
        if (t) {
            var r = t.split(e), n;
            for (var o = 0, a = r.length; o < a; o++) {
                n = r[o];
                if (n) {
                    n = n.split(/\s*=\s*/g);
                    if (n[0]) {
                        i[n[0].replace(/^\s*|\s*$/g, "")] = n[1] || ""
                    }
                }
            }
        }
        return i
    }

    function y(t, e) {
        var i = t || {};
        var r;
        for (var n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            if (r) {
                for (var a in r) {
                    if (r.hasOwnProperty(a)) {
                        i[a] = r[a]
                    }
                }
            }
        }
        return i
    }

    lib.action.Qa.prototype.reloadClickMap = function () {
        p = d();
        this.qchunks = p;
        g(p);
        m()
    }
}();