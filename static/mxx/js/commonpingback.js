!function (n) {
    function t(r) {
        if (e[r])return e[r].exports;
        var o = e[r] = {i: r, l: !1, exports: {}};
        return n[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }

    var e = {};
    return t.m = n, t.c = e, t.d = function (n, e, r) {
        t.o(n, e) || Object.defineProperty(n, e, {configurable: !1, enumerable: !0, get: r})
    }, t.n = function (n) {
        var e = n && n.__esModule ? function () {
            return n["default"]
        } : function () {
            return n
        };
        return t.d(e, "a", e), e
    }, t.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, t.p = "", t(t.s = 0)
}([function (n, t) {
    !function () {
        var n = function (n) {
            var t = function (n) {
                if (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(n)) {
                    var t = new RegExp("(^| )" + n + "=([^;]*)(;|$)"), e = t.exec(document.cookie);
                    if (e)return e[2] || ""
                }
                return ""
            };
            try {
                return n = t(n), "string" == typeof n ? n.length > 1 && "deleted" == n ? "" : decodeURIComponent(n) || "" : ""
            } catch (e) {
                return ""
            }
        }, t = function (n) {
            try {
                var t = [];
                if (isNaN(n)) t.push(Math.round(2147483647 * Math.random())); else for (var e = 0; n > e; e++)t.push(Math.round(2147483647 * Math.random()).toString(36));
                return t.join("")
            } catch (r) {
                return ""
            }
        }, e = function (n, t) {
            for (var e, r = n || {}, o = 1, a = arguments.length; a > o; o++)if (e = arguments[o])for (var u in e)e.hasOwnProperty(u) && (r[u] = e[u]);
            return r
        }, r = function () {
            var n = function () {
                for (var n = "", t = 0; 12 > t; t++)n += Math.floor(10 * Math.random());
                return Number(n)
            }, t = n(), e = (new Date).getTime(), r = t.toString(36), o = (t + e).toString(36), a = "" + o + r;
            return a
        }, o = function (n) {
            for (var t, e, r, o, a = Array.isArray || function (n) {
                    return "[object Array]" == Object.prototype.toString.call(n)
                }, u = n.split("&"), i = u.length, l = {}, f = 0; i > f; f++)u[f] && (o = u[f].split("="), t = o.shift(), e = o.join("="), r = l[t], "undefined" == typeof r ? l[t] = e : a(r) ? r.push(e) : l[t] = [r, e]);
            return l
        }, a = function () {
            var n = document.getElementById("pingbackSDK");
            if (n) {
                var t = n.getAttribute("data-param");
                return t ? o(t) : {}
            }
            return {}
        }, u = "//msg.qy.net/v5/bi/opendata?", i = Math.floor((new Date).getTime() / 1e3), l = r(), f = a(), c = null;
        window.Q && window.Q.PageInfo && window.Q.PageInfo.playPageInfo && (c = window.Q.PageInfo.playPageInfo.tvId);
        var d = {
            p1: "1_10_101",
            type: 5,
            flashuid: n("QC005"),
            v: null,
            pkg: null,
            sid: l,
            sttime: i,
            os_v: navigator.platform,
            lang: navigator.language || navigator.systemLanguage,
            resolution: screen.width + "*" + screen.height,
            cell_id: null,
            gps_lon: null,
            gps_lat: null,
            ip: null,
            tvid: c,
            aid: null,
            cid: null,
            pid: null,
            duration: null,
            act_name: document.title,
            rn: t(),
            rfr: window.document.referrer,
            url: window.location.href,
            br: navigator.userAgent.toLowerCase(),
            ce: window.webEventID || null,
            c2: null
        };
        d = e(d, f);
        for (var g in d)d.hasOwnProperty(g) && (u += encodeURIComponent(g) + "=" + encodeURIComponent(d[g]) + "&");
        "&" === u[u.length - 1] && (u = u.slice(0, -1));
        var p = new Image;
        p.src = u
    }()
}]);