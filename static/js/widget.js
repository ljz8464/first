﻿!function () {
    var e = {}, i = function (i, o, s, n) {
            this.ajax = null, this.key = o, this.onComplete = n, this.disposed = !1;
            var l = this, a = function (i) {
                e[l.key] = i, !l.disposed && T.isFunction(l.onComplete) && T.fn.bind(l.onComplete, l)(i)
            }, r = function () {
                return e[l.key] ? void a(e[l.key]) : void(T.isString(i) && (l.ajax = "jsonp" != i ? F.get(s, a) : F.http.jsonp(s, a)))
            };
            this.abort = function () {
                this.ajax && T.isFunction(this.ajax.abort) && this.ajax.abort()
            }, this.dispose = function () {
                this.abort(), this.onComplete = null, this.ajax = null, this.disposed = !0
            }, r()
        },
        o = ['<div class="auto-complete-item" data-type="<% type %>" data-more="1" rel="<%index-1%>" ct="sohint_<%index%>_<%if type=="media"%>so<%else%>sokey<%/if%>_<%title%>">', '   <div class="item-s <%if type == "media" %>item-s-media<%else%>item-s-video<%/if%>"><div class="stit"><% hot_title %></div></div>', '   <%if type =="media" %>', '   <div class="item-c <%if type == "media" %>item-c-media<%else%>item-c-video<%/if%>">', '        <a class="pic" block="sohint_<%index%>_poster_<%title%>" href="<%url%>" <%if !isfs %>target="_blank"<%/if%>>', '            <img src="<% pic %>" />', "            <% if isfee %>", '            <i class="ico-pay-bill"></i>', "            <% else if isvip %>", '            <i class="ico-vd-pay"></i>', "            <% /if %>", "        </a>", '        <div class="info">', '            <a class="tit" title="<%title%>" href="<%url%>" block="sohint_<%index%>_title_<%title%>" <%if !isfs %>target="_blank"<%/if%>><% title %></a>', '            <div class="ext">', '                <div class="ls ls-update"><% update_info %></div>', '                <% if gtype=="movie" || gtype == "vfilm" %>', '                <div class="ls">', "                    <span>导演:</span>", "                    <%if directors%>", "                    <%each directors as val%>", '                    <a block="sohint_<%index%>_dir_<%key%>" href="/search/?word=<% val.name %>"<%if !isfs %>target="_blank"<%/if%>><% val.name %></a><%if $index < directors.length-1 %><i>/</i><%/if%>', "                    <%/each%>", "                    <%/if%>", "                </div>", '                <div class="ls">', "                    <span>主演:</span>", "                    <%if lactors %>", "                    <%each lactors as val%>", '                    <a <%$index%> len="<% lactors.length%>" block="sohint_<%index%>_act_<%key%>" href="/search/?word=<% val.name %>"<%if !isfs %>target="_blank"<%/if%>><% val.name %></a><%if $index < lactors.length-1 %><i>/</i><%/if%>', "                    <%/each%>", "                    <%/if%>", "                </div>", '                <% else if gtype == "tv" %>', '                <div class="ls">', "                    <span>主演:</span>", "                    <%if lactors %>", "                    <%each lactors as val%>", '                    <a <%$index%> len="<% lactors.length%>" block="sohint_<%index%>_act_<%key%>" href="/search/?word=<% val.name %>"<%if !isfs %>target="_blank"<%/if%>><% val.name %></a><%if $index < lactors.length-1 %><i>/</i><%/if%>', "                    <%/each%>", "                    <%/if%>", "                </div>", "                <% else %>", '                <div class="ls">', "                    <span>类型:</span>", "                    <%if cates %>", "                    <%each cates as val%>", '                    <a block="sohint_<%index%>_type_<%key%>" href="<%val.url %>"<%if !isfs %>target="_blank"<%/if%>><% val.name %></a><%if $index <cates.length-1 %><i>/</i><%/if%>', "                    <%/each%>", "                    <%/if%>", "                </div>", "                <% /if %>", "            </div>", "            <%if !isfs %>", '            <a href="<% url %>" class="play" block="sohint_<%index%>_play_<%title%>" <%if !isfs %>target="_blank"<%/if%>></a>', "            <%else%>", '            <a href="<% url %>" class="play play-detail" block="sohint_<%index%>_detail_<%title%>" <%if !isfs %>target="_blank"<%/if%>></a>', "            <%/if%>", "        </div>", "    </div>", '    <div class="mtype">', "        <i></i><% channel_name %>", "    </div>", "    <%/if%>", "</div>"].join(""),
        s = {
            show: function (e) {
                if (this.options = {
                        renderTo: null,
                        renderContentTo: null,
                        listener: null,
                        key: null,
                        cls: "",
                        proxy: null,
                        proxyType: "ajax",
                        proxyRoot: "data",
                        proxyDelay: 200,
                        lineHeight: 22,
                        padding: 0,
                        hoverCls: "auto-item-current",
                        filter: null,
                        render: T.fn.blank,
                        handler: T.fn.blank,
                        change: T.fn.blank,
                        show: T.fn.blank,
                        close: T.fn.blank,
                        display: T.fn.blank,
                        displayed: T.fn.blank
                    }, this.options = T.extend(this.options, e || {}), !this.options.renderTo || !this.options.proxy || !this.options.listener)return null;
                this.options.renderTo = T.get(this.options.renderTo), this.options.renderContentTo && (this.options.renderContentTo = T.get(this.options.renderContentTo)), this.options.listener = T.get(this.options.listener), this.options.key = T.lang.guid(), this.data = [], this.selectedIndex = -1;
                var s = this, n = null, l = 0;
                this.curEles = [], this.lastVlaue = "", this.searchKey = "", this.dispose = function () {
                    n && n.dispose(), T.un(this.options.listener, "focus", p), T.un(this.options.listener, "click", f), T.un(this.options.listener, "keydown", y), T.un(this.options.listener, "keyup", x), T.un(document.documentElement, "click", u), F.Event.undelegate(this.options.renderTo, "div.auto-complete-item", "click"), F.Event.undelegate(this.options.renderTo, "div.auto-complete-item", "mouseover"), F.Event.undelegate(this.options.renderTo, "div.auto-complete-item", "mouseout"), delete s.curEles
                }, this.close = function () {
                    !1 !== T.fn.bind(this.options.close, this)(this.data) && (T.addClass(this.options.renderTo, "search-hidden"), T.setStyle(this.options.renderTo, "visibility", "hidden"), T.un(document.documentElement, "click", u))
                }, this.show = function () {
                    !1 !== T.fn.bind(this.options.show, this)(this.data) && (T.removeClass(this.options.renderTo, "search-hidden"), T.setStyle(this.options.renderTo, "visibility", "visible"), T.un(document.documentElement, "click", u), T.on(document.documentElement, "click", u))
                }, this.scrollTo = function (e) {
                    return console.log("scrollTo", e), this.selectedIndex = Math.min(Math.max(-1, e), this.curEles.length - 1), console.log("selectedIndex", this.selectedIndex), this.options.renderTo.scrollTop = this.options.lineHeight * Math.max(0, this.selectedIndex - 5), e > -1 ? (T.each(this.curEles, function (e, i) {
                        T.removeClass(e, s.options.hoverCls), i == s.selectedIndex ? T.addClass(e, s.options.hoverCls) : T.removeClass(e, s.options.hoverCls)
                    }), this.selectedIndex) : -1
                };
                var a = function (e) {
                    s.options.renderContentTo.innerHTML = "";
                    var i = [], n = 10, l = s.options.listener.value;
                    T.object.each(s.data, function (n, a) {
                        if (!e || 0 != e(l, n, a)) {
                            {
                                parseInt(a) + 1, T.fn.bind(s.options.render, s)(n, a)
                            }
                            console.log("data", n);
                            var r = n || {};
                            r.index = Number(a) + 1, r.value = r.title, r.isfs = F.config.isFsDomain ? 1 : 0, r.hot_title = r.title.replace(s.searchKey, "<b>" + s.searchKey + "</b>"), html = F.tpl.compile(o)(r), html = html.replace(/&#60;/gi, "<"), html = html.replace(/&#62;/gi, ">"), html = html.replace(/&#34;/gi, '"'), html = html.replace(/&#39;/gi, "'"), html = html.replace(/&#38;/gi, "&"), i.push(html)
                        }
                    }), i.length > 0 && s.isFocus && T.dom.show(s.options.renderTo), s.options.renderContentTo.innerHTML = i.join(""), T.setStyles(s.options.renderTo, {
                        overflow: "hidden",
                        "overflow-y": i.length > n ? "scroll" : "hidden",
                        height: "auto"
                    }), s.curEles = T.query("div.auto-complete-item", s.options.renderTo), s.scrollTo(-1), console.log("map====", i), i.length ? (T.dom.hasClass(s.options.renderTo, "search-hidden") && s.show(), T.fn.bind(s.options.display, s)(s.data)) : s.close(), T.each(s.curEles, function (e, i) {
                        var o = e.getAttribute("data-type");
                        "media" == o && 0 == i && (T.dom.addClass(e, s.options.hoverCls), T.dom.addClass(e, "auto-item-first"))
                    }), T.fn.bind(s.options.displayed, s)(s.data)
                };
                this.setFocus = function (e) {
                    this.isFocus = e
                }, this.remoteFilter = function (e) {
                    clearTimeout(l), n && n.dispose();
                    var o = this.options.proxy + (this.options.proxy.indexOf("?") > -1 ? "&" : "?") + this.options.filter + "=" + encodeURIComponent(e),
                        s = null;
                    s = T.isFunction(this.options.proxyType) ? T.fn.bind(this.options.proxyType, this)() : this.options.proxyType, T.isString(s) && (n = new i(s, e, o, r))
                };
                var r = function (e) {
                    var i = null;
                    i = T.isString(e) ? T.json.parse(e) : e, i && 200 == i.status && (s.data = i[s.options.proxyRoot], s.searchKey = decodeURIComponent(i.key) || "", a())
                }, d = function () {
                    T.addClass(this, "mouse-hover")
                }, c = function () {
                    T.removeClass(this, "mouse-hover")
                }, h = function (e) {
                    var i = e || window.event;
                    e = T.event.get(e);
                    var o = !1;
                    if (e) {
                        var n = e.target || e.srcElement;
                        for ("a" == n.nodeName.toLowerCase() && (o = !0); n && !T.dom.hasClass(n, "auto-complete-item") && n != document.body;)n = n.parentNode, "a" == n.nodeName.toLowerCase() && (o = !0)
                    }
                    if (!o) {
                        var l = this.getAttribute("ct") || "";
                        l && T.observer.send(F.EventCenter.LOG_DOM_CLICK, {event: i, poscode: l, target: this})
                    }
                    o || T.event.stop(e);
                    for (var a = T.event.getTarget(e), r = 0; 10 > r && (r++, !T.dom.hasClass(a, "auto-complete-item"));)a = a.parentNode;
                    if (!1 !== T.fn.bind(s.options.handler, s)(s.data, parseInt(a ? a.getAttribute("rel") : 0), o)) {
                        var r = -1;
                        T.each(s.curEles, function (e) {
                            T.removeClass(e, s.options.hoverCls), r++, a == e ? T.addClass(e, s.options.hoverCls) : T.removeClass(e, s.options.hoverCls)
                        }), s.selectedIndex = r, s.close()
                    }
                }, p = function () {
                    clearTimeout(l);
                    var e = T.trim(s.options.listener.value);
                    e && (s.remoteFilter(e), s.show())
                }, u = function () {
                    s.close()
                }, f = function (e) {
                    T.event.stopPropagation(T.event.get(e))
                }, m = -1, v = !0, g = 0, y = function (e) {
                    if (clearTimeout(g), !s.options.listener.HOT_FOCUS && ("undefined" != typeof s.options.listener.HOT_FOCUS || s.options.listener.AUTO_FOCUS)) {
                        e = T.event.get(e);
                        var i = m;
                        console.log("code", e.keyCode);
                        var o = !1;
                        switch (e.keyCode) {
                            case 38:
                                v = !1, o = !0, i = s.scrollTo(s.selectedIndex - 1 < 0 ? s.curEles.length - 1 : s.selectedIndex - 1);
                                break;
                            case 40:
                                v = !1, o = !0, i = s.scrollTo(s.selectedIndex + 1 > s.curEles.length - 1 ? 0 : s.selectedIndex + 1);
                                break;
                            case 37:
                            case 39:
                                s.show();
                                break;
                            case 27:
                                s.close()
                        }
                        i > -1 && T.fn.bind(s.options.change, s)(s.data, i, o), g = setTimeout(function () {
                            v = !0
                        }, 100)
                    }
                }, x = function (e) {
                    if (!(e.keyCode >= 37 && e.keyCode <= 40)) {
                        e = T.event.get(e);
                        var i = T.trim(s.options.listener.value);
                        if (13 == e.keyCode) {
                            if (T.dom.hasClass(s.options.renderTo, "search-hidden") || s.selectedIndex < 0 || s.selectedIndex >= s.curEles.length)return;
                            return !1 !== T.fn.bind(s.options.handler, s)(s.data, s.curEles[s.selectedIndex].getAttribute("rel")) && s.close(), void T.event.stop(e)
                        }
                        s.lastVlaue !== i && (s.lastVlaue = i, T.isFunction(s.options.filter) ? (a(s.options.filter), s.show(), T.fn.bind(s.options.handler, s)(s.data, null)) : T.isString(s.options.filter) && T.isString(s.options.proxy) && i ? (n && n.dispose(), clearTimeout(l), l = F.setTimeout(s.remoteFilter, s.options.proxyDelay, s, i), s.show()) : (s.close(), s.options.renderContentTo.innerHTML = "", s.curEles = [], s.data = []))
                    }
                };
                T.isString(this.options.proxy) || (this.data = this.options.proxy, a()), T.on(this.options.listener, "focus", p), T.on(this.options.listener, "click", f), T.on(this.options.listener, "keydown", y), T.on(this.options.listener, "keyup", x), F.Event.delegate(this.options.renderTo, "div.auto-complete-item", "click", h), T.browser.ie && T.browser.ie < 7 && (F.Event.delegate(this.options.renderTo, "div.auto-complete-item", "mouseover", d), F.Event.delegate(this.options.renderTo, "div.auto-complete-item", "mouseout", c)), F.Event.delegate("#soAutoWrap", ".auto-complete-item", "mouseover", function () {
                    var e = this, i = T.query("#soAutoWrap .auto-complete-item");
                    e.getAttribute("data-more") && v && (m = i.indexOf(this), s.selectedIndex = m, T.each(i, function (e) {
                        T.removeClass(e, "auto-item-first"), T.removeClass(e, s.options.hoverCls)
                    }), T.dom.addClass(e, s.options.hoverCls))
                }), F.Event.delegate("#soAutoWrap", ".auto-complete-item", "mouseout", function () {
                    var e = this;
                    e.getAttribute("data-more") && v
                })
            }
        };
    F.namespace("widget.autocomplete.autoComplete", s)
}();
;!function () {
    var e = function (e, i) {
        this.option = {
            focusCls: "combox-focus",
            itemClick: null
        }, this.target = e, this.target && (this.target.instance || (this.target.instance = this, this.option = T.extend(this.option, i || {}), this.cancelBubble = "0" == this.target.getAttribute("data-cancelbubble") ? !1 : !0, this.filter = T.q("combox-title", e)[0], this.label = T.q("label", this.filter)[0], this.list = T.q("combox-list", e)[0], this.listItems = this.list && T.q("item", this.list), this.selectedIndex = 0, this.filter && this.list && (this.folded = !0, this.init())))
    };
    e.prototype.init = function () {
        var e = this;
        T.on(e.filter, "click", function (i) {
            e.folded = !e.folded, e.updateState(), T.event.get(i).stop()
        }), F.Event.delegate(e.list, ".item", "click", function (i) {
            var s = this || i.target || i.srcElement, l = s.getAttribute("data-islink");
            return l ? !0 : (e.selectedIndex = e.listItems.indexOf(s), e.option.itemClick && e.option.itemClick.call(e), this.itemClick && this.itemClick.call(e), e.target.itemClick && e.target.itemClick.call(e), e.folded = !0, e.updateState(s.innerHTML), e.cancelBubble && T.event.get(i).stop(), void e.highlight(e.selectedIndex))
        }), T.on(document, "click", function (i) {
            var s = i.target || i.srcElement;
            baidu.dom.contains(e.target, s) || (e.folded = !0, T.hide(e.list), T.dom.removeClass(e.target, e.option.focusCls))
        })
    }, e.prototype.setItems = function (e) {
        var i = this, s = [];
        s.push("<ul>");
        for (var l = 0; l < e.length; l++)s.push("<li>"), s.push(e[l]), s.push("</li>");
        s.push("</ul>"), this.list && (this.list.innerHTML = s.join("")), i.listItems = this.list && T.q("item", this.list) || [], i.selectedIndex = 0, i.listItems.length > 0 && i.updateState(i.listItems[0].innerHTML), i.folded = !0, this.list && (T.hide(this.list), T.dom.removeClass(i.target, i.option.focusCls))
    }, e.prototype.setSelectIndex = function (e) {
        var i = this;
        if (i.selectedIndex = e, i.listItems.length > 0) {
            var s = i.listItems[i.selectedIndex];
            s && (i.updateState(s.innerHTML), i.option && i.option.itemClick && i.option.itemClick.call(i), s.itemClick && s.itemClick.call(i)), i.highlight(s)
        }
    }, e.prototype.highlight = function (e) {
        var i = this, s = 0;
        s = "number" != typeof e ? i.listItems.indexOf(e) : e;
        for (var l = 0; l < i.listItems.length; l++)l == s ? T.dom.addClass(i.listItems[l], "current") : T.dom.removeClass(i.listItems[l], "current")
    }, e.prototype.updateState = function (e) {
        var i = this;
        (i.folded ? T.hide : T.show)(i.list), e && this.label && e != this.label.innerHTML && (this.label.innerHTML = e), i.folded ? T.dom.removeClass(i.target, i.option.focusCls) : T.dom.addClass(i.target, i.option.focusCls)
    }, e.registry = function () {
        T.each(T.q("tool-combox"), function (i) {
            new e(i)
        })
    }, T.ready(function () {
        e.registry()
    }), F.namespace("widget.combox.combox", e)
}();
;!function () {
    var e = function (n) {
        var o = n, c = void 0, i = !1;
        if (!n.instance) {
            var r = !1;
            T.dom.hasClass(n, "disable") && (r = !0), e.currentInstance || (e.currentInstance = []);
            for (var a = n; a.parentNode && a.parentNode != document.body;)a = a.parentNode;
            if (c = a, c == n && (c = void 0), c) {
                var s = T.dom.getComputedStyle(c, "position");
                ("relative" == s || "absolute" == s) && (i = !0)
            }
            n.instance = this;
            var u = T.dom.getAttr(o, "data-mouse") || "click", a = T.dom.getAttr(o, "data-target") || ".panel",
                d = T.dom.getAttr(o, "data-click"), f = [], l = [];
            T.each(a.split(","), function (e) {
                var n = T.query(e);
                n[0] && f.push(n[0])
            });
            var m = !1;
            if (!(f.length <= 0)) {
                var v = function (e) {
                    if (r = T.dom.hasClass(n, "disable") ? !0 : !1) {
                        if (e || "undefined" == typeof e)try {
                            window[d]()
                        } catch (o) {
                        }
                    } else f.length > 0 && ("undefined" == typeof e && (e = !m), m = e, e ? (T.each(f, function (e) {
                        T.dom.show(e)
                    }), "function" == typeof n.onshow && n.onshow.call(n)) : T.each(f, function (e) {
                        T.dom.hide(e)
                    }), h())
                }, h = function () {
                    var n = !0;
                    e.currentInstance.length <= 0 && (n = !1), T.browser.ie <= 7 && c && (T.dom.setStyle(c, "z-index", ""), n && T.dom.setStyle(c, "z-index", "1"), i || (n ? T.dom.setStyle(c, "position", "relative") : T.dom.setStyle(c, "position", "")))
                };
                T.each(f, function (e) {
                    l = T.query(".close", e), T.each(l, function (e) {
                        e.getAttribute("title") || e.setAttribute("title", "关闭面板")
                    })
                });
                var p = function () {
                    T.each(f, function (e) {
                        T.dom.hide(e)
                    });
                    var n = e.currentInstance.indexOf(o);
                    n > -1 && e.currentInstance.splice(n, 1), h()
                };
                p();
                var g = null;
                if ("mouseover" != u) T.on(o, "click", function (n) {
                    n = n || window.event;
                    var c = n.target || n.srcElement;
                    g = c, -1 == e.currentInstance.indexOf(o) && e.currentInstance.push(o), v()
                }), T.on(document, "click", function (n) {
                    n = n || window.event;
                    var c = n.target || n.srcElement;
                    if (1 == c.nodeType && -1 == f.indexOf(c) && c != o) {
                        for (var i = !1, r = 0; r < f.length; r++)if (T.dom.contains(f[r], c)) {
                            i = !0;
                            break
                        }
                        if (g && T.dom.contains(o, g) && (i = !0), i || T.dom.contains(o, c)) {
                            if (!T.dom.contains(o, c))for (var r = 0; r < l.length; r++)if (T.dom.contains(l[r], c) || c == l[r]) {
                                g = null, p(), m = !1;
                                break
                            }
                        } else {
                            v(!1);
                            var a = e.currentInstance.indexOf(o);
                            a > -1 && e.currentInstance.splice(a, 1)
                        }
                    }
                    g = null
                }); else {
                    var y = 0;
                    T.on(o, "mouseover", function () {
                        clearTimeout(y), -1 == e.currentInstance.indexOf(o) && e.currentInstance.push(o), v(!0)
                    }), T.on(o, "mouseout", function () {
                        clearTimeout(y), y = setTimeout(function () {
                            var n = e.currentInstance.indexOf(o);
                            n > -1 && e.currentInstance.splice(n, 1), v(!1)
                        }, 300)
                    }), f.length > 0 && T.each(f, function (n) {
                        T.on(n, "mouseover", function () {
                            clearTimeout(y), -1 == e.currentInstance.indexOf(o) && e.currentInstance.push(o), v(!0)
                        }), T.on(n, "mouseout", function () {
                            y = setTimeout(function () {
                                var n = e.currentInstance.indexOf(o);
                                n > -1 && e.currentInstance.splice(n, 1), v(!1)
                            }, 300)
                        })
                    })
                }
            }
        }
    };
    e.registry = function () {
        T.each(T.query(".tool-comboxlike"), function (n) {
            new e(n)
        })
    }, F.namespace("widget.combox.comboxlike", e), T.ready(function () {
        e.registry()
    })
}();
;!function () {
    var i = [".dialog-shied{background-color:#000;position:absolute;left:0;top:0;opacity:0.5;filter:alpha(opacity=50);-moz-transition-property:opacity;-moz-transition-duration:500ms;-webkit-transition-property:opacity;-webkit-transition-duration:500ms}", ".dialog-view{width:400px;}", ".gradient{height:2px;width:100%;overflow;hidden;font-size:0;border:none;background-color:#f86400;background: -webkit-gradient(linear, left center, right center, from(#f86400), color-stop(50%, #f97217),to(#fa924c));background: -moz-linear-gradient(left, #f86400,#f97217 50%, #fa924c);}", ".dialog-view .ui-relative{position:relative;width:100%;height:100%}", ".dialog-view .ui-relative .ui-hidden{display:none}", ".dialog-view .dialog-layout{-moz-box-shadow:0 0 10px #666;-moz-border-radius:8px;-webkit-box-shadow:0 0 10px #666;-webkit-border-radius:8px;box-shadow:0 0 10px #666;border-radius:8px;}", ".dialog-view .ui-iframe-blank, .dialog-shied .ui-iframe-blank{opacity:0;filter:alpha(opacity=0);border:0;overflow:hidden;width:100%;height:178px;position:absolute;left:0;top:0;background:#ccc;z-index:-1}", ".dialog-view .ui-title-close{width:14px;height:14px;overflow:hidden;displayblock;background:url(" + F.config.protocol + "//static.funshion.com/img/v10/shareicon/close_btn.png);position:absolute;right:10px;top:13px;text-indent:-999em;}", ".dialog-view .ui-title-close:hover{background-position:0 14px;}", ".dialog-view p.loading{padding:12px;background:url(" + F.config.protocol + "//static.funshion.com/img/loading.gif) no-repeat center center;height:50px}", ".dialog-view div.ui-loading{background:#fff url(" + F.config.protocol + "//static.funshion.com/img/loading.gif) no-repeat center center;position:absolute;left:0;top:0}", ".dialog-view .dialog-border{border-collapse:collapse;border:0;width:100%}", ".dialog-view .ui-middle-center{background-color:#fff}", ".dialog-view .ui-title{height:40px;position:relative;border-bottom:1px solid #dedede}", ".dialog-view .ui-title .ui-title-label{height:20px;line-height:20px;padding: 10px 10px 10px 254px;font-size:16px;font-weight:bold;}", ".dialog-view-drag .ui-title{cursor:move}", ".dialog-view .ui-content{background:#F7F7F7;min-height:40px;position:relative;}", ".dialog-view .ui-content .padding{padding:12px;}", ".dialog-view .ui-content-loaded p.loading, .dialog-view .ui-content-loaded div.ui-loading{display:none}", ".dialog-view .ui-act{border-top:1px solid #dedede}", ".dialog-view .ui-act-layut{height:26px;line-height:26px;padding:8px 10px;text-align:right;}", ".dialog-view .ui-botton {text-align:right; white-space:nowrap;margin-left:8px; padding: 4px 8px; cursor: pointer; display: inline-block; text-align: center;line-height: 1; *padding:3px 10px; *height:2em; letter-spacing:1px; font-family: Tahoma, Arial/9!important; width:auto; overflow:visible; *width:1; color: #333; border: solid 1px #999; border-radius: 5px; background: #DDD; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF', endColorstr='#DDDDDD'); background: linear-gradient(top, #FFF, #DDD); background: -moz-linear-gradient(top, #FFF, #DDD); background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#FFF), to(#DDD)); text-shadow: 0px 1px 1px rgba(255, 255, 255, 1); box-shadow: 0 1px 0 rgba(255, 255, 255, .7),  0 -1px 0 rgba(0, 0, 0, .09); -moz-transition:-moz-box-shadow linear .2s; -webkit-transition: -webkit-box-shadow linear .2s; transition: box-shadow linear .2s;}", ".dialog-view .ui-botton::-moz-focus-inner{ border:0; padding:0; margin:0; }", ".dialog-view .ui-botton:hover { color:#000; border-color:#666; }", ".dialog-view .ui-botton:active { border-color:#666; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#DDDDDD', endColorstr='#FFFFFF'); background: linear-gradient(top, #DDD, #FFF); background: -moz-linear-gradient(top, #DDD, #FFF); background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#DDD), to(#FFF)); box-shadow:inset 0 1px 5px rgba(0, 50, 0, .7), inset 0 1px 1em rgba(0, 0, 0, .3); }", ".dialog-view .ui-botton[disabled] { cursor:default; color:#666; background:#DDD; border: solid 1px #999; filter:alpha(opacity=50); opacity:.5; box-shadow:none; }", ".dialog-view .ui-middle-center{background-color:#fff}", ".sueDialog .gradient{display:none;}", ".sueDialog .ui-title{background:#cc4c49;}", ".sueDialog .ui-title .ui-title-label{color:#fff; padding: 10px 0px; text-align:center;}", '.dialog-view input[type="radio"]{-webkit-appearance:radio;}', ".sueDialog .ui-content{background-color:#fff}"].join(""),
        e = ['<div class="ui-relative" id="ui-relative-#index#"><div class="dialog-layout" id="ui-layout-#index#"><table border="0" class="dialog-border" id="ui-table-#index#">', "<tr>", '<div class="gradient"></div>', '<td class="ui-middle-center"><div class="ui-relative">', '<div class="ui-title" id="ui-title-#index#">', '<div class="ui-title-label" id="ui-title-label-#index#">提示</div>', "</div>", '<div class="ui-content" id="ui-content-#index#">', "</div>", '<div class="ui-act" id="ui-act-#index#">', '<div class="ui-act-layut" id="ui-act-layut-#index#">', '<input type="button" value="#yes_btn_value#" class="ui-botton ui-botton-yes" id="ui-botton-yes-#index#" />', '<input type="button" value="#no_btn_value#" class="ui-botton ui-botton-no" id="ui-botton-no-#index#" />', "</div>", "</div>", '<a href="javascript:void(0)" id="ui-title-close-#index#" class="ui-title-close">关闭</a></div></td>', "</tr>", "</table></div></div>"].join(""),
        o = 0, n = 9999, s = [], a = !1;
    n = 1e5;
    var d = function () {
        for (var i = Dialog.manager.getList(), e = 0, o = null, n = 0; n < i.length; n++)e = Math.max(e, parseInt(T.dom.getStyle(i[n].dialog, "zIndex"))), i[n].dialog.offsetWidth > 0 && (o = i[n]);
        var s = T.get("dialog-shied-ele");
        if (s) {
            if (!o)return T.hide(s);
            T.setStyles(s, {
                display: "block",
                zIndex: e - 1,
                opacity: o.options.opacity,
                background: o.options.bgcolor,
                width: T.page.getWidth(),
                height: T.page.getHeight()
            }), T.observer.send("window.dialog.show")
        }
    };
    Dialog = {
        manager: {
            view: function () {
                for (var i = this.getList(), e = 0, o = -1, n = 0; n < i.length; n++) {
                    var s = parseInt(T.dom.getStyle(i[n].dialog, "zIndex")) || 0;
                    s >= e && (o = n)
                }
                return o > -1 ? i[o] : null
            }, getById: function (i) {
                for (var e = T.get(T.isString(i) || T.isNumber(i) ? "dialog-view-" + i : i), o = 0; o < s.length; o++)if (s[o].dialog == e)return s[o];
                return null
            }, getByDialog: function (i) {
                if (!T.isObject(i))return null;
                var e = T.array.indexOf(s, i);
                return e >= 0 ? s[e] : null
            }, getBySelf: function (i) {
                if (!i || !i.tagName)return null;
                for (; ;) {
                    if ("div" == i.tagName.toLowerCase() && T.dom.hasClass(i, "dialog-view")) {
                        var e = this.getById(i);
                        if (!e)break;
                        return e
                    }
                    if (!i || !i.parentNode)break;
                    i = i.parentNode
                }
                return null
            }, remove: function (i) {
                var e = T.array.indexOf(s, i);
                e >= 0 && T.array.removeAt(s, e), T.dom.remove(i.dialog), i = null, delete i
            }, removeById: function (i) {
                var e = this.getById(i);
                e && this.remove(e)
            }, removeAll: function () {
                F.each(s, function () {
                    this.close()
                })
            }, add: function (i) {
                var e = T.array.indexOf(s, i);
                0 > e && s.push(i)
            }, getList: function () {
                return s
            }
        }, alert: function (i, e, o) {
            o = o || {}, o.title = i, o.content = e, o.id = o.id || "instance";
            var n = new this.open(o);
            return n.show()
        }, close: function () {
            this.manager.removeAll()
        }, get: function (i, e) {
            var o = new this.open(e);
            return o.show(), o.get(i), o
        }, open: function (s) {
            this.options = {
                width: 400,
                height: 0,
                left: "center",
                top: "center",
                type: "abs",
                subject: !0,
                act: !0,
                title: "提示",
                content: '<p class="loading"></p>',
                url: "",
                follow: null,
                fixed: !1,
                lock: !0,
                opacity: .5,
                bgcolor: "#000000",
                index: 9999,
                drag: !1,
                className: "",
                padding: 0,
                id: "",
                showClose: !0,
                yes: {
                    show: !1, label: "确定", click: function () {
                    }
                },
                no: {
                    show: !0, label: "关闭", click: function () {
                        return !0
                    }
                },
                onCloseing: T.fn.blank,
                onDragStart: T.fn.blank,
                onDragEnd: T.fn.blank
            }, o++, n += 2;
            var l = this;
            this.options = T.object.extend(this.options, s || {}), this.options.id && Dialog.manager.removeById(this.options.id), a || (a = !0, F.tool.addSheet(i)), this.index = this.options.id || o, this.options.index = 9999 == this.options.index ? n : this.options.index, this.options.follow = this.options.follow ? T.get(this.options.follow) : null, this.dialog = T.dom.create("div", {
                "class": "dialog-view" + (this.options.drag ? " dialog-view-drag" : "") + " " + this.options.className,
                id: "dialog-view-" + this.index
            }), this.shied = T.get("dialog-shied-ele"), this.shied || (this.shied = T.dom.create("div", {
                "class": "dialog-shied",
                id: "dialog-shied-ele"
            }), T.hide(this.shied), (T.platform.isIpad || T.platform.isAndroid) && T.on(this.shied, "click", function () {
                var i = Dialog.manager.view();
                i ? i.close() : Dialog.clsoe()
            }), function () {
                if (6 == T.browser.ie) {
                    var i = T.dom.create("iframe", {
                        "class": "ui-iframe-blank",
                        id: "ui-iframe-shied-" + this.index,
                        width: "100%",
                        src: "about:blank",
                        scrolling: "no",
                        frameborder: 0,
                        allowTransparency: !1
                    });
                    T.setStyle(i, "height", T.page.getHeight()), l.shied.appendChild(i)
                }
            }()), this.dragStatus = !1, this.domChangeTimer = 0, this.closeDelayTimer = 0, this.bodyHeightTimer = 0, this.lastBodyHeight = 0, this.dragPoint = {
                left: 0,
                top: 0
            }, this.eventPoint = {left: 0, top: 0}, this.instance = !1, this.ajax = null;
            var r = {display: "none", "z-index": this.options.index, width: this.options.width + this.options.padding};
            Dialog.manager.add(this), this.get = function (i) {
                this.ajax = F.get(i, g)
            }, this.layout = function () {
                T.dom.show(l.dialog), l.lastBodyHeight = l.dialog.offsetHeight, f(), T.dom.hide(l.dialog)
            }, this.show = function () {
                return this.instance ? (T.show(this.dialog), void d()) : (this.instance = !0, T.on(window, "resize", f), T.on(window, "scroll", f), T.on(this.dialog, "mousedown", p), T.on(T.get("ui-title-close-" + this.index), "click", c.close), T.on(T.get("ui-botton-no-" + this.index), "click", c.close), T.on(T.get("ui-botton-yes-" + this.index), "click", c.sure), this.options.drag && (T.on(T.get("ui-title-" + this.index), "mousedown", u.mouseDown), T.on(T.get("ui-title-" + this.index), "selectstart ", u.selectStart), T.on(document.documentElement, "mousemove", u.mouseMove), T.on(document.documentElement, "mouseup", u.mouseUp)), 6 == T.browser.ie && (this.domChangeTimer = window.setInterval(h.update, 500)), this.iframe && (this.checkLoadingTimer = window.setInterval(h.checkLoading, 500)), this.dialog && T.show(this.dialog), this.shied && this.options.lock ? d() : this.shied && T.hide(this.shied), f(), this.bodyHeightTimer = window.setInterval(h.checkDialogHeight, 500), setTimeout(f, 0), this)
            }, this.hide = function () {
                T.hide(this.dialog), d()
            }, this.close = function (i) {
                if (!this.options.onCloseing || T.fn.bind(this.options.onCloseing, this)() !== !1) {
                    this.options.onCloseing = null;
                    var i = i || 0;
                    if (window.clearTimeout(this.closeDelayTimer), window.clearInterval(this.checkLoadingTimer), this.ajax && (this.ajax.abort(), this.ajax = null), i)return this.closeDelayTimer = window.setTimeout(function () {
                        l.close()
                    }, i);
                    var e = T.get("ui-content-" + this.index);
                    if (e) {
                        var o = T.get("ui-content-" + this.index).getElementsByTagName("iframe");
                        if (o.length > 0) {
                            for (var n = 0; n < o.length; n++)o[n].src = "about:blank";
                            return T.hide(this.dialog), setTimeout(function () {
                                l.content("<br />"), l.close()
                            }, 100)
                        }
                        T.un(window, "resize", f), T.un(window, "scroll", f), T.un(this.dialog, "mousedown", p), T.un(T.get("ui-title-close-" + this.index), "click", c.close), T.un(T.get("ui-botton-no-" + this.index), "click", c.close), T.un(T.get("ui-botton-yes-" + this.index), "click", c.sure), this.options.drag && (T.un(T.get("ui-title-" + this.index), "mousedown", u.mouseDown), T.un(T.get("ui-title-" + this.index), "selectstart ", u.selectStart), T.un(document.documentElement, "mousemove", u.mouseMove), T.un(document.documentElement, "mouseup", u.mouseUp)), window.clearInterval(this.domChangeTimer), window.clearInterval(this.checkLoadingTimer), window.clearInterval(this.bodyHeightTimer);
                        var s = Dialog.manager;
                        this.shied && this.options.lock && (T.browser.isWebkit || T.browser.firefox) ? (T.hide(this.dialog), T.setStyle(this.shied, "opacity", 0), setTimeout(function () {
                            s.remove(l), 0 == s.getList().length ? (T.hide(l.shied), T.observer.send("window.dialog.close")) : d()
                        }, 300)) : (s.remove(l), T.observer.send("window.dialog.close"), d())
                    }
                }
            }, this.title = function (i) {
                return T.get("ui-title-label-" + this.index).innerHTML = i, this
            }, this.content = function (i) {
                return T.get("ui-content-" + this.index).innerHTML = i || this.options.content, f(), this
            }, this.yesHander = function (i, e, o) {
                this.options.yes.show = i, this.options.yes.label = e || this.options.yes.label, this.options.yes.click = o || this.options.yes.click, i ? T.removeClass(T.get("ui-botton-yes-" + this.index), "ui-hidden") : T.addClass(T.get("ui-botton-yes-" + this.index), "ui-hidden"), T.get("ui-botton-yes-" + this.index).value = this.options.yes.label
            }, this.noHander = function (i, e, o) {
                this.options.no.show = i, this.options.no.label = e || this.options.no.label, this.options.no.click = o || this.options.no.click, i ? T.removeClass(T.get("ui-botton-no-" + this.index), "ui-hidden") : T.addClass(T.get("ui-botton-no-" + this.index), "ui-hidden"), T.get("ui-botton-no-" + this.index).value = this.options.no.label
            }, this.iframe = function (i) {
                var e = window.location.host.split(".")[0], o = document.domain == window.location.hostname ? 0 : 1;
                document.cookie = "_proxy_login=" + escape(T.json.stringify({
                        domain: o,
                        host: e
                    })) + "; path=/; domain=.fun.tv;";
                var n = T.get("ui-content-" + this.index), s = Math.max(this.options.height, 50);
                T.setStyle(T.get("ui-content-" + this.index), "height", s);
                var a = T.dom.create("iframe", {
                    frameborder: 0,
                    src: i,
                    scrolling: "no",
                    id: "ui-iframe-url-" + this.index
                }), d = T.dom.create("div", {id: "ui-loading-" + this.index, "class": "ui-loading"});
                T.setStyles(a, {width: "100%", height: s, display: "none"}), T.setStyles(d, {
                    width: "100%",
                    height: s
                }), T.on(a, "load", h.loaded), n.appendChild(a), n.appendChild(d)
            }, this.getId = function () {
                return this.index
            }, this.setWidth = function (i) {
                return this.options.width = i, T.setStyle(this.dialog, "width", i), f(), this
            }, this.setHeight = function (i) {
                return this.options.height = i, T.setStyle(this.dialog, "height", i), T.setStyle(T.get("ui-content-" + this.index), "height", i - this.options.padding), f(), this
            };
            var g = function (i) {
                l.content(F.string.stripscript(i)), F.string.evalscript(i)
            }, h = {
                height: 0, update: function () {
                    T.get("ui-iframe-" + l.index) && l.dialog.offsetHeight != this.height && (this.height = l.dialog.offsetHeight, T.setStyle(T.get("ui-iframe-" + l.index), "height", this.height))
                }, checkDialogHeight: function () {
                    l.lastBodyHeight != l.dialog.offsetHeight && (l.lastBodyHeight = l.dialog.offsetHeight, f())
                }, checkLoading: function () {
                    var i = T.get("ui-loading-" + l.index);
                    i && T.setStyle(i, "height", i.parentNode.offsetHeight)
                }, loaded: function () {
                    var i = T.get("ui-iframe-url-" + l.index);
                    if (i) {
                        T.addClass(T.get("ui-content-" + l.index), "ui-content-loaded"), T.show(i);
                        var e = i.contentWindow;
                        if (e) {
                            if (T.setStyle(i, "height", T.get("ui-content-" + l.index).offsetHeight), T.setStyle(T.get("ui-content-" + l.index), "height", "100%"), T.browser.ie < 10) {
                                var o = T.get("ui-iframe-url-login-panel");
                                o && T.setStyle(o, "height", "255px")
                            }
                            var n = T.get("ui-loading-" + l.index);
                            n && (window.clearInterval(this.checkLoadingTimer), T.dom.remove(n))
                        }
                    }
                }
            }, c = {
                close: function (i) {
                    return T.event.stop(T.event.get(i)), T.isFunction(l.options.no.click) ? void(T.fn.bind(l.options.no.click, l)(T.event.getTarget(i)) && l.close()) : l.close()
                }, sure: function (i) {
                    T.isFunction(l.options.yes.click) && T.fn.bind(l.options.yes.click, l)(T.event.getTarget(i))
                }
            }, u = {
                instance: !1, selectStart: function (i) {
                    return T.event.stop(i), !1
                }, mouseDown: function (i) {
                    l.dragStatus = !0, l.eventPoint = {
                        left: T.event.getPageX(window.event || i),
                        top: T.event.getPageY(window.event || i)
                    }, l.dragPoint = T.dom.getPosition(l.dialog)
                }, mouseMove: function (i) {
                    if (l.dragStatus) {
                        this.instance || (this.instance = !0, T.isFunction(l.options.onDragStart) && T.fn.bind(l.options.onDragStart, l)());
                        var i = window.event || i;
                        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
                        var e = Math.min(T.page.getViewWidth() - l.dialog.offsetWidth, Math.max(0, T.event.getPageX(i) - l.eventPoint.left + l.dragPoint.left)),
                            o = Math.min(T.page.getHeight() - l.dialog.offsetHeight, Math.max(0, T.event.getPageY(i) - l.eventPoint.top + l.dragPoint.top));
                        T.removeStyle(l.dialog, "bottom"), T.removeStyle(l.dialog, "right"), T.setStyles(l.dialog, {
                            left: e,
                            top: o,
                            position: "absolute"
                        }), l.options.left = e, l.options.top = o, l.options.fixed = !1
                    }
                }, mouseUp: function () {
                    l.dragStatus && (l.dragStatus = !1, this.instance = !1, T.un(window, "resize", f), T.un(window, "scroll", f), T.isFunction(l.options.onDragEnd) && T.fn.bind(l.options.onDragEnd, l)())
                }
            }, p = function () {
                for (var i = Dialog.manager.getList(), e = 0, o = 0; o < i.length; o++)l.dialog != i[o].dialog && (e = Math.max(e, parseInt(T.dom.getStyle(i[o].dialog, "zIndex")) || 0));
                parseInt(T.dom.getStyle(l.dialog, "z-index")) < e && T.setStyle(l.dialog, "z-index", e + 1)
            }, f = function (i) {
                var i = window.event || i, e = {};
                if (T.isNumber(l.options.left)) e.left = l.options.left; else if (T.isString(l.options.left))switch (l.options.left) {
                    case"left":
                        e.left = 0;
                        break;
                    case"right":
                        delete e.left, e.right = 0;
                        break;
                    case"center":
                    default:
                        e.left = Math.max(0, (T.page.getViewWidth() - (l.dialog.offsetWidth || l.options.width + 2 * l.options.padding)) / 2)
                }
                if (T.isNumber(l.options.top)) e.top = l.options.top; else if (T.isString(l.options.top))switch (l.options.top) {
                    case"top":
                        l.options.top = 0, e.top = 0;
                        break;
                    case"center":
                        var o = function () {
                            return T.get("ui-title-" + l.index) && T.get("ui-title-" + l.index).offsetHeight ? T.get("ui-title-" + l.index).offsetHeight : 0
                        }(), n = function () {
                            return T.get("ui-act-" + l.index) && T.get("ui-act-" + l.index).offsetHeight ? T.get("ui-act-" + l.index).offsetHeight : 0
                        }();
                        e.top = Math.max(0, (T.page.getViewHeight() - (l.dialog.offsetHeight || l.options.height + 2 * l.options.padding + o + n)) / 2);
                        break;
                    case"bottom":
                        delete e.top, e.bottom = 0;
                        break;
                    default:
                        e.top = 0
                }
                if (l.options.fixed && !l.options.follow) 6 == T.browser.ie && (T.isNumber(e.top) ? e.top = e.top + T.page.getScrollTop() : T.isNumber(e.bottom) && (T.setStyle(l.dialog, "zoom", 1.1), e.zoom = 1)); else if (l.options.follow) {
                    var s = T.dom.getPosition(l.options.follow);
                    e.left = s.left, e.top = s.top + l.options.follow.offsetHeight
                } else arguments.callee.caller && null != arguments.callee.caller.caller ? e.top += T.page.getScrollTop() : delete e.top;
                if (T.setStyles(l.dialog, e), l.shied) {
                    T.setStyles(l.shied, {width: T.page.getWidth(), height: T.page.getHeight()});
                    var a = l.shied.getElementsByTagName("iframe");
                    a.length && T.setStyles(a[0], {width: T.page.getWidth(), height: T.page.getHeight()})
                }
            };
            r.position = this.options.fixed && !this.options.follow && 6 != T.browser.ie ? "fixed" : "absolute", T.setStyles(this.dialog, r), this.dialog.innerHTML = e.replace(/#index#/gi, this.index).replace(/#yes_btn_value#/, this.options.yes.label).replace(/#no_btn_value#/, this.options.no.label), T.dom.insertBefore(this.dialog, document.body.firstChild), 6 == T.browser.ie && T.dom.insertBefore(T.dom.create("iframe", {
                "class": "ui-iframe-blank",
                id: "ui-iframe-" + this.index,
                width: "100%",
                src: "about:blank",
                scrolling: "no",
                frameborder: 0,
                allowTransparency: !1
            }), T.get("ui-layout-" + this.index)), this.shied && T.dom.insertBefore(this.shied, document.body.firstChild), this.options.subject || T.addClass(T.get("ui-title-" + this.index), "ui-hidden"), this.options.act || T.addClass(T.get("ui-act-" + this.index), "ui-hidden"), this.options.yes.show || T.addClass(T.get("ui-botton-yes-" + this.index), "ui-hidden"), this.options.no.show || T.addClass(T.get("ui-botton-no-" + this.index), "ui-hidden"), this.options.showClose || T.addClass(T.get("ui-title-close-" + this.index), "ui-hidden"), this.title(this.options.title), this.options.url ? this.iframe(this.options.url) : this.content(this.options.content)
        }
    }, F.namespace("widget.dialog", "dialog", Dialog), F.namespace("tool", "dialog", Dialog)
}();
;window.F = window.F || {}, window.T = window.T || {}, function () {
    var e, n = window, o = n.document, a = {}, i = function (e, n, o, i) {
        if (e && n && o && i) {
            var h = T.query(e), r = e + n + o;
            h && (a[r] = function (e) {
                for (var o = T.query(n, this), a = T.event.getTarget(e), h = 0, r = o.length; r > h; h++)if (a == o[h] || a.parentNode == o[h]) {
                    a != o[h] ? a = a.parentNode : "", 0 == i.call(a, e) && T.event.stop(e);
                    break
                }
            }, T.each(h, function (e) {
                T.on(e, o, a[r])
            }))
        }
    }, h = function () {
        return T.browser.ie < 8 || T.browser.firefox < 3.6 || T.browser.opera < 10.6 || T.browser.safari < 5
    }(), r = function () {
        return T.g("_hashIE") || T.dom.insertHTML(o.body, "afterBegin", '<iframe src="about:blank" id="_hashIE" name="_hashIE" class="hidden" style="width:1px;height:1px;"></iframe>'), T.g("_hashIE")
    }, c = function (e) {
        var n = r(), a = n.contentDocument || n.contentWindow.document;
        a.open(), a.write(["<html>", "<head>", "<script type='text/javascript'>", "function pageLoaded() {", 'try {top.window.F.tool.hashchange.trigger("' + e + '");} catch(ex) {}', "}", "</script>", "</head>", "<body onload='pageLoaded();'>", "<input type='value' value='" + e + "' id='history'/>", "</body>", "</html>"].join("")), a.title = o.title, a.close()
    }, s = function (e) {
        e && e.hash && (n.location.hash = e.hash, h && c(n.location.hash))
    }, d = function () {
        i("body", "a", "click", function () {
            var e = T.getAttr(this, "href");
            return 0 === e.indexOf("#") && e.replace(/\#/g, "").length ? (c(e), n.location.hash = e.substr(1), !1) : void 0
        })
    }, u = function () {
        e && e()
    }, f = function (n) {
        h ? (e = n, d()) : T.on(window, "hashchange", n), T.observer.addOne("hash.change", s)
    };
    F.tool.hashchange = {
        trigger: u,
        fire: u,
        emit: u,
        send: u,
        on: f
    }, F.namespace("widget.hashchange", "hashchange", F.tool.hashchange)
}();
;!function () {
    function i(i) {
        this.registry = function (i) {
            var e = T.query("img", T.isArray(i) ? i[0] : i);
            T.each(e, function (i) {
                i.instance = new a(i)
            })
        }, this.registry(i)
    }

    var a = function (i) {
        var a = this;
        this.isLoad = !1, this.isStart = !1;
        var e = "lazy-alpha-start";
        i.getAttribute("_lazycls") && (e = i.getAttribute("_lazycls"));
        var r = function () {
            a.isLoad = !0, T.un(this, "load", r), T.un(this, "error", s), T.dom.removeClass(this, e), this.removeAttribute("_lazysrc"), this.instance = null
        }, s = function () {
            a.isLoad = !0, T.un(this, "load", r), T.un(this, "error", s), T.dom.removeClass(this, e), this.removeAttribute("_lazysrc"), this.instance = null
        };
        this.start = function () {
            u && -1 == u.indexOf("blank.gif") || o && (this.isStart || this.isLoad || (T.dom.addClass(i, e), T.on(i, "load", r), T.on(i, "error", s), i.src = o))
        };
        {
            var n = "_lazysrc", o = "";
            i.getAttribute(n)
        }
        o = i.getAttribute(n) || "";
        var u = i.getAttribute("src") || "";
        o && i.setAttribute(n, o)
    };
    i.isWraperInPage = function (i) {
        var a = function () {
            return baidu.page.getScrollTop() + baidu.page.getViewHeight() + 100
        };
        return baidu.dom.getPosition(i).top < a() ? !0 : !1
    }, F.namespace("widget.lazyloading.LazyWraper", i), F.namespace("widget.lazyloading.LazyImage", a), T.dom.ready(function () {
        T.page.lazyLoadImage({preloadHeight: 100})
    })
}();
;!function () {
    var e = !1;
    try {
        e = window.localStorage ? !0 : !1
    } catch (n) {
    }
    var i = !1, o = {}, r = function () {
        return T.swf.getMovie("localStorage")
    }, a = {
        get: function (e, n) {
            var i = window.localStorage["_" + e], o = null;
            return i && (o = T.json.parse(String(i)), o && o.data && o.exp && o.time && (new Date).getTime() - o.time < 1e3 * o.exp ? i = o.data : (i = null, this.remove(e))), T.isFunction(n) ? T.fn.bind(n, this)(i) : i
        }, set: function (e, n, i, o) {
            return o = o || T.fn.blank, window.localStorage["_" + e] = T.json.stringify({
                data: n,
                exp: i,
                time: (new Date).getTime()
            }), T.fn.bind(o, this)()
        }, remove: function (e, n) {
            return n = n || T.fn.blank, delete window.localStorage["_" + e], T.fn.bind(n, this)()
        }
    }, f = {}, u = [], c = function () {
        var e = r();
        e && "function" == typeof e.send && (T.each(u, function (n) {
            e.send(n.type, n.param)
        }), u = [])
    }, s = {
        readyCalled: function () {
            o = {}, i = !0, T.lang.eventCenter.dispatchEvent("storage.ready"), setTimeout(c, 100)
        }, hasReady: function () {
            var n = r();
            return T.swf.version ? n && "function" == typeof n.get ? !0 : !1 : e
        }, get: function (n, u, c) {
            if (e)return a.get(n, u);
            if ("undefined" != typeof o[n])return T.isFunction(u) ? T.fn.bind(u, this)(o[n]) : o[n];
            var s = this, l = r(), d = null;
            if (c = c || 0, c > 10)return o[n] = d, T.isFunction(u) ? T.fn.bind(u, this)(d) : d;
            if (!i || !l || "function" != typeof l.get)return clearTimeout(f[n]), f[n] = setTimeout(function () {
                s.get(n, u, c + 1)
            }, 500), f[n];
            try {
                d = l.get(n)
            } catch (g) {
            }
            return o[n] = d, T.isFunction(u) ? T.fn.bind(u, this)(d) : d
        }, set: function (n, u, c, s, l) {
            if (s = s || T.fn.blank, c = c || 31536e3, e)return a.set(n, u, c, s);
            var d = this, g = r();
            if (l = l || 0, l > 10)return T.fn.bind(s, this)();
            if (!i || !g || "function" != typeof g.set)return clearTimeout(f[n]), setTimeout(function () {
                d.set(n, u, c, s, l + 1)
            }, 500);
            try {
                g.set(n, u, c)
            } catch (h) {
            }
            delete o[n], T.fn.bind(s, this)()
        }, remove: function (n, u, c) {
            if (u = u || T.fn.blank, e)return a.remove(n, u);
            var s = this, l = r();
            if (c = c || 0, c > 10)return T.fn.bind(u, this)();
            if (!i || !l || "function" != typeof l.remove)return clearTimeout(f[n]), setTimeout(function () {
                s.remove(n, u, c + 1)
            }, 500);
            try {
                l.remove(n)
            } catch (d) {
            }
            delete o[n], T.fn.bind(u, this)()
        }, send: function (e, n) {
            var i = r();
            u.push({type: e, param: n || {}}), i && "function" == typeof i.send && c()
        }
    };
    if (F.namespace("widget.localstorage", "localStorage", s), F.tool.localStorage = F.widget.localstorage.localstorage, e) T.ready(function () {
        T.lang.eventCenter.dispatchEvent("storage.ready")
    }); else {
        var l = F.widget.localstorage.localStorage;
        !i && l.hasReady() && l.readyCalled()
    }
}();
;!function () {
    var e = {
        changeTips: function (e) {
            function n() {
                T.dom.hide(d)
            }

            function o(e) {
                var n = d.children.length;
                "up" == e ? 1 == r ? r = n - 1 : r-- : r == n - 1 ? r = 1 : r++, T.each(d.children, function (e, n) {
                    n == r ? T.dom.addClass(e, "active") : T.dom.removeClass(e, "active")
                })
            }

            function i() {
                var e = c.value, o = "", i = /@/, a = new RegExp(e.substring(e.indexOf("@")));
                "" == e ? n() : (T.dom.show(d), T.each(d.children, function (n, d) {
                    var c = T.dom.getAttr(n, "email");
                    n && 0 != d && (1 == d ? (n.innerHTML = e + c, T.dom.addClass(n, "active")) : (n.innerHTML = e + c, T.dom.removeClass(n, "active"), i.test(e) ? (o = e.substring(e.indexOf("@"), 0), n.innerHTML = o + c, a.test(c) ? T.dom.show(n) : T.dom.hide(n)) : n.innerHTML = e + c))
                }))
            }

            function a() {
                var e = "";
                return T.each(d.children, function (n, o) {
                    return o == r ? (e = n.innerHTML, !1) : void 0
                }), e
            }

            var d = T.dom.query("ul.on_changes")[0], c = T.dom.g(e), r = 1;
            T.on(document, "click", function (e) {
                var o = e.target || e.srcElement;
                T.dom.hasClass(o, "on_changes") || "LI" == o.tagName ? (c.value = o.innerHTML, n()) : n()
            }), T.on(c, "input", function () {
                i()
            }), T.each(d.children, function (e, n) {
                0 != n && (T.on(e, "mouseover", function () {
                    T.dom.addClass(e, "active")
                }), T.on(e, "mouseleave", function () {
                    T.dom.removeClass(e, "active")
                }))
            }), T.on(c, "keydown", function (e) {
                38 == e.keyCode ? (o("up"), c.value = a()) : 40 == e.keyCode ? (o(), c.value = a()) : 9 == e.keyCode ? T.dom.hide(d) : 13 == e.keyCode && (c.value = a(), n())
            })
        }
    };
    F.namespace("widget.mailtips", "mailtips", e)
}();
;window.F = window.F || {}, window.F.tool = window.F.tool || {}, function () {
    function getLoginTemplate() {
        return ['<div class="fixed-header-padding w-layout">', '   <div class="main-login page fix">', '       <div class="fix">', '<div class="login-conn dialog-conn">', thirdLoginTemplate, loginTemplate, "       </div>", loginConflict, loginBottom, "    </div>", "</div>"].join("")
    }

    function getRegTemplate() {
        return ['<div class="fixed-header-padding w-layout">', '   <div class="dialog-reg page fix">', '       <div class="fix">', '           <div class="login-conn reg-conn dialog-conn">', thirdLoginTemplate, regTemplate, "       </div>", regBottom, "    </div>", "</div>"].join("")
    }

    function getVerfiyRealIdTemplate() {
        return ['<div class="fixed-header-padding w-layout">', '   <div class="dialog-verifyrealid page fix">', '       <div class="fix">', verifyRealIdTemplate, "       </div>", "    </div>", realBottom, "</div>"].join("")
    }

    function getUUID() {
        F.thirdConn && F.thirdConn.getUUID && F.thirdConn.getUUID()
    }

    function getServerTime() {
        6 == T.browser.ie && F.get(F.config.api + "/ajax/get_systime/", function (e) {
            var o = isNaN(e) ? +new Date / 1e3 : parseInt(e, 10);
            return Math.abs((o - +new Date / 1e3) / 86400) > 1 ? (F.load("dialog", function () {
                return this.alert("提示", "<p style='padding:20px;line-height:20px;'>亲爱的用户，您的电脑系统时间不正确，请调整时间后注册登录。<br /> " + new Date(1e3 * o).toLocaleString() + "</p>"), !1
            }), !1) : void 0
        })
    }

    function logSend(e) {
        var o = "login_panel_close";
        e && (o = "reg_panel_close"), F.tool.pv && F.tool.pv.send("reg_panel_close", {
            url: location.href,
            startTime: startTime,
            endTime: +new Date
        })
    }

    var panelRegTimes = 0, startTime = 0,
        loginTemplate = [
            '<div class="login-form dialog-form">',
            '    <form name="pageLoginForm" id="pageLoginForm" method="post" autocomplete="off">',
            '        <div style="display: none;"><input type="text"><input type="password"></div>',
            '        <p class="login-tip"><span>风行账号登录</span></p>',
            '        <p class="f-p">',
            '            <input type="text" class="inputstyle hide" id="login-error-show" onfocus="this.blur()"/>',
            '            <a class="close-error hide" onclick="closeError();" id="close-error"></a>',
            '            <input type="text" class="inputstyle" name="username" id="panel_account" autocomplete="off"/>',
            '            <span for="panel_email" id="for-panel_account" class="f-tip">用户名/邮箱/手机号</span>',
            '            <span class="login-error inline-block">',
            '                <span id="et_panel_account" class="login-error-right" style="display:none;">账号不能为空</span>',
            "            </span>",
            '            <ul class="on_changes" id="select_li">',
            '                <li email="">请选择或继续输入</li>',
            '                <li email=""></li>',
            '                <li email="@qq.com"></li>',
            '                <li email="@163.com"></li>',
            '                <li email="@126.com"></li>',
            '                <li email="@sina.com"></li>',
            '                <li email="@gmail.com"></li>',
            '                <li email="@139.com"></li>',
            "            </ul>",
            "        </p>",
            '        <p class="f-p">',
            '            <input type="password" class="inputstyle" name="password"  id="panel_password" autocomplete="off"/>',
            '            <span for="panel_password" id="for-panel_password" class="f-tip">密码</span>',
            '            <span class="login-error inline-block">',
            '                <span id="et_panel_password" class="login-error-right" style="display:none;">密码不能为空</span>',
            "            </span>",
            "        </p>",
            '        <p class="act clearfix">',
            '            <input class="f-checkbox" name="autologin" type="checkbox" id="exp-time" checked />',
            '            <label for="exp-time">记住登录状态</label>',
            '            <input type="button" class="login_submit" value="" id="loginsubmit"/>',
            "        </p>",
            "    </form>",
            "</div>"
        ].join(""),
        loginConflict = [
            '<div class="login-confict fix">',
            '   <div class="ico"></div>',
            '   <div class="info">当前账号各端同时登录数超限！<br /><em>请在其它端退出登录或联系客服。电话：010-88888888；QQ：912338929</em></div>',
            "</div>"
        ].join(""),
        loginBottom = [
            '<div class="login-bottom">',
            '  <a href="javascript:void(0)" onclick="return F.tool.ajaxLogin.panelReg();">注册账号</a>&nbsp;或&nbsp;',
            '  <a href="/account/password" target="<%target%>" id="forgetpsd">找回密码</a>',
            "</div>"
        ].join(""),
        regTemplate = [
            '<div class="login-form reg-form dialog-form">',
            '    <form name="pageRegForm" id="pageRegForm" method="post" type="mobile_reg" autocomplete="off">',
            '        <div style="display: none;"><input type="text"><input type="password"></div>',
            '        <p class="login-tip"><span>注册Nebula账号</span></p>',
            '        <p class="f-p">',
            '            <input type="text" class="inputstyle" name="username" id="panel_email" autocomplete="off"/>',
            '            <span for="panel_email" id="for-panel_email" class="f-tip">请输入手机号</span>',
            '            <span class="login-error inline-block" id="account-error">',
            '                <span id="et_panel_email" class="login-error-right" style="display:none;">账号不能为空</span>',
            "            </span>",
            "        </p>",
            '        <p class="f-p">',
            '            <input type="password" class="inputstyle" name="password"  id="panel_password" autocomplete="off"/>',
            '            <span for="panel_password" id="for-panel_password" class="f-tip">请输入密码(6-15位)</span>',
            '            <span class="login-error inline-block" id="password-error">',
            '                <span id="et_panel_password" class="login-error-right" style="display:none;">密码不能为空</span>',
            "            </span>",
            "        </p>",
            '        <p class="f-p hide" id="email_reg">',
            '            <input type="password" class="inputstyle" name="verifypass"  id="verify_password" autocomplete="off"/>',
            '            <span for="verify_password" id="for-verify_password" class="f-tip">请输入确认密码</span>',
            '            <span class="login-error inline-block" id="verifypsd-error">',
            '                <span id="et_verify_password" class="login-error-right" style="display:none;">确认密码不能为空</span>',
            "            </span>",
            "        </p>",
            '        <p class="f-p verifycode" id="verifycode">',
            '            <input type="text" maxlength="4" autocomplete="off" id="vcode" class="inputstyle">',
            '            <input type="hidden" value="X3GMSHaESRKbRZXDFIbFaDGcaDbGZSBc" name="vcodekey" id="vcode-key">',
            '            <span for="vcode" id="for-vcode" class="f-tip">请输入验证码</span>',
            '            <img class="preview changecode" src="' + F.config.api + '/ajax/get_vcode/getimg/kanba?vcodekey=X3GMSHaESRKbRZXDFIbFaDGcaDbGZSBc" /><a class="changecode" href="javascript:;">换一换</a>',
            '            <span class="login-error login-error-left inline-block">',
            '                <span id="et_vcode" style="display:none;">验证码不能为空</span>',
            "            </span>",
            "        </p>",
            '        <p class="f-p" id="mobile_reg">',
            '            <input type="text" id="phone_verify" class="inputstyle" maxlength="6" autocomplete="off"/>',
            '            <span for="phone_verify" id="for-phone_verify" class="f-tip">请输入短信验证码</span>',
            '            <a class="code_btn" id="count-down" href="javascript:void(0)">获取短信验证码</a>',
            '            <span class="login-error inline-block" id="verifycode-error">',
            '                <span id="et_phone_verify" class="login-error-right" style="display:none;">验证码不能为空</span>',
            "            </span>",
            "        </p>",
            '        <p class="act clearfix">',
            '            <input class="f-checkbox" name="autoreg" type="checkbox" checked id="agreement"/>',
            '            <label class="agree"><a href="/about" target="_blank">同意《注册协议》</a></label>',
            '            <input type="button" class="reg_submit" value="" id="regsubmit"/>',
            "        </p>",
            "    </form>",
            "</div>"
        ].join(""),
        verifyRealIdTemplate = [
            '<div class="login-form verifyrealid-form dialog-form">',
            '    <form name="verfiyRealIdForm" id="verfiyRealIdForm" method="post" type="mobile_verify" autocomplete="off">',
            '        <p class="login-tip"><span>为了您的账户安全，请绑定您的手机号</span></p>',
            '        <div class="group fix">',
            '           <p class="f-p phone-wrap">',
            '               <input type="text" class="inputstyle" name="username" id="panel_email" autocomplete="off"/>',
            '               <span for="panel_email" id="for-panel_email" class="f-tip">请输入手机号</span>',
            '               <span class="login-error inline-block" id="account-error">',
            '                   <span id="et_panel_email" class="login-error-right" style="display:none;">账号不能为空</span>',
            "               </span>",
            "           </p>", '        <p class="f-p verifycode" id="verifycode">', '            <input type="text" maxlength="4" autocomplete="off" id="vcode" class="inputstyle">', '            <input type="hidden" value="X3GMSHaESRKbRZXDFIbFaDGcaDbGZSBc" name="vcodekey" id="vcode-key">', '            <span for="vcode" id="for-vcode" class="f-tip">请输入验证码</span>', '            <img class="preview changecode" src="' + F.config.api + '/ajax/get_vcode/getimg/kanba?vcodekey=X3GMSHaESRKbRZXDFIbFaDGcaDbGZSBc" /><a class="changecode" href="javascript:;">换一换</a>', '            <span class="login-error login-error-left inline-block">', '                <span id="et_vcode" style="display:none;">验证码不能为空</span>', "            </span>", "        </p>", "        </div>", '           <p class="f-p group-phonecode" id="mobile_reg">', '               <input type="text" id="phone_verify" class="inputstyle" maxlength="6" autocomplete="off"/>', '               <span for="phone_verify" id="for-phone_verify" class="f-tip">请输入短信验证码</span>', '               <a class="code_btn" id="count-down" href="javascript:void(0)">获取短信验证码</a>', '               <span class="login-error inline-block" id="verifycode-error">', '                   <span id="et_phone_verify" class="login-error-right" style="display:none;">验证码不能为空</span>', "               </span>", "           </p>", '        <p class="act clearfix">', '            <input type="button" class="check_btn" value="" id="bindReal"/>', "        </p>", '        <p class="f-p"><span class="bind-error login-error-left inline-block">111</span></p>', "    </form>", "</div>"].join(""),
        regBottom = ['<div class="login-bottom reg-bottom">已有NeBula帐号?', '    <a href="/static/demo.html" onclick="return F.tool.ajaxLogin.panel();">马上登录</a>', "</div>"].join(""),
        realBottom = [""].join(""),
        thirdLoginTemplate = [
            '    <p class="login-tip">推荐使用</p>',
            '    <div class="login-site clearfix" id="login-site">',
            '        <div class="site tencent"><a title="QQ账号登录"></a></div>',
            '        <div class="site sina"><a title="新浪微博登录"></a></div>',
            '        <div class="site weixin"><a title="微信账号登录"></a></div>',
            "    </div>",
            "</div>",
            '<div id="remember-login" class="login-conn" style="display:none">',
            '    <p class="login-tip" style="color:#cc0000">您上次的登录方式是</p>',
            '    <div class="login-site clearfix" id="login-site">',
            '        <div class="site">',
            '            <a id="lastlogin" href="javascript:void(0);"><i class="chked">&nbsp;</i></a>',
            "        </div>",
            "    </div>",
            '    <div class="login-site-small clearfix" id="login-site-small">',
            '        <div class="more">更多:</div>',
            '        <div class="small-site"><a href="javascript:void(0);"></a></div>',
            '        <div class="small-site"><a href="javascript:void(0);"></a></div>',
            '        <div class="small-site"><a href="javascript:void(0);"></a></div>',
            "    </div>",
            "</div>"
        ].join(""),
        ajaxLogin = {
            userKey: "funshion_username", logined: function (e) {
                var o = this;
                try {
                    window.external.login(window.F && window.F.user && window.F.user.userid)
                } catch (e) {
                }
                e && e.appfirst && (F.cookie.set("msg_pic", 1, .5), F.load("html.novice", function () {
                    this.display()
                }));
                var a = window.location;
                if (a.pathname.indexOf("/account/login") > -1) a.href = a.href.split("#")[0]; else if (o.callback && o.callback.onSuccess && o.callback.onSuccess(), T.observer.send("login"), F.load("widget.localstorage.localStorage", function () {
                        this.send("login")
                    }), Dialog) {
                    var i = Dialog.manager.getById("login-panel");
                    i && i.close()
                }
            }, beforeShowPanel: function () {
                if (window != top) {
                    try {
                        top.location.href = "/account/login/?location=" + window.location.href
                    } catch (e) {
                    }
                    return !1
                }
                getUUID(), getServerTime(), startTime = +new Date
            }, verify_vcode: function () {
                var e = this, o = T.g("vcode"), a = T.g("vcode-key") || "";
                if (a && (a = a.value || ""), o.value) {
                    var i = F.config.api + "/api_check_captcha?captcha=" + o.value + "&ucid=" + a;
                    F.post(i, "", function (o) {
                        return T.isObject(o) && 200 == o.status || 400 == o.status ? void(200 == o.status) : void e.showError("验证码有误", "vcode", 1)
                    })
                } else e.showError("验证码不能为空", "vcode", 1)
            }, initVCode: function () {
                var e = T.get("verifycode"), o = function () {
                    var o = T.query(".preview", e)[0], a = T.g("vcode-key"), i = T.g("vcode"),
                        n = "//pcap.funshion.com/v1/cap/captcha?";
                    return o && a && i ? (setTimeout(function () {
                        var e = F.config.isFsHost ? "pc" : "web",
                            r = F.string.hash("privateletter" + e + Math.random() + +new Date + (F.cookie.get("fck") || ""));
                        r = r.toLowerCase(), a && (a.value = r), o && (o.src = n + "cl=" + e + "&ucid=" + r);
                        try {
                            i && (i.value = "")
                        } catch (s) {
                        }
                    }, 0), !1) : !1
                }, a = function () {
                    F.Event.delegate("#verifycode", ".changecode", "click", function () {
                        o()
                    })
                };
                o(), a()
            }, afterShowPanel: function (isreg) {
                var that = this;
                if (T.each(T.query(".dialog-conn div div"), function (e) {
                        if (T.dom.hasClass(e, "site") || T.dom.hasClass(e, "small-site")) {
                            var o = T.dom.getAttr(e, "class"), a = o.split(" "),
                                i = F.config.api + "/login/oauth_authorize/" + a[1] + "/iframe?target=/home";
                            T.on(e, "click", function () {
                                return F.thirdConn.openThird(i), !1
                            })
                        }
                    }), isreg) {
                    var hideEle = T.query(".reg-form .f-p input.inputstyle");
                    T.each(hideEle, function (e) {
                        var o = T.dom.getAttr(e, "id"), a = T.get("for-" + o);
                        F.tool.searchTip(e, a)
                    }), this.bindRegTest(), T.g("regsubmit") && T.on(T.g("regsubmit"), "click", function () {
                        that.reg()
                    }), T.g("verify_password") && T.on(T.g("verify_password"), "keyup", function (e) {
                        var o = window.event || e;
                        13 == o.keyCode && that.emailReg()
                    });
                    var vcode = T.get("vcode");
                    if (vcode && T.on(vcode, "blur", function () {
                            that.verify_vcode()
                        }), T.g("phone_verify")) {
                        T.on(T.g("phone_verify"), "keyup", function (e) {
                            var o = window.event || e;
                            13 == o.keyCode && that.mobileReg()
                        });
                        var verifyphone = T.g("phone_verify");
                        T.on(verifyphone, "blur", function (e) {
                            verifyphone.value && !eval("/\\d{6}$/").test(verifyphone.value) && that.showError("验证码格式错误", "phone_verify", 1)
                        })
                    }
                } else F.load("widget.mailtips.mailtips", function () {
                    this.changeTips("panel_account")
                }), F.tool.searchTip("panel_account", "for-panel_account"), F.tool.searchTip("panel_password", "for-panel_password"), T.on(T.g("panel_account"), "onkeyup", function () {
                    T.g("panel_account").value ? T.dom.addClass(T.g("loginsubmit"), "useful1") : T.dom.removeClass(T.g("loginsubmit"), "useful1")
                }), T.on(T.g("panel_password"), "onkeyup", function () {
                    T.g("panel_password").value ? T.dom.addClass(T.g("loginsubmit"), "useful2") : T.dom.removeClass(T.g("loginsubmit"), "useful2")
                }), T.g("panel_password") && T.on(T.g("panel_password"), "keyup", function (e) {
                    var o = T.event.get(e);
                    return 13 == o.keyCode ? (that.login(), !1) : void 0
                }), T.g("loginsubmit") && T.on(T.g("loginsubmit"), "click", function () {
                    return that.login(), !1
                });
                that.initVCode()
            }, verifyRealIdEvent: function () {
                var wrap = T.query(".verifyrealid-form"), hideEle = T.query(".verifyrealid-form .f-p input.inputstyle");
                T.each(hideEle, function (e) {
                    var o = T.dom.getAttr(e, "id"), a = T.get("for-" + o);
                    F.tool.searchTip(e, a)
                });
                var that = this;
                that.initVCode();
                var mailele = T.get("panel_email", wrap);
                T.on(mailele, "blur", function () {
                    mailele.value = T.trim(T.query("#select_li .active").length ? T.query("#select_li .active")[0].innerHTML : mailele.value), mailele.value && (that.checkMobile(mailele.value) ? (F.post(F.config.api + "/ajax/check_account/", "account=" + mailele.value, function (e) {
                        return T.isObject(e) && 200 == e.status || !that.checkMobile(mailele.value) ? void 0 : void that.showError("手机号已绑定", "panel_email", 1)
                    }), that.checkMobile(mailele.value) && T.dom.removeClass(T.g("mobile_reg"), "hide")) : that.showError("手机号不正确", "panel_email", 1))
                });
                var verifyphone = T.g("phone_verify");
                verifyphone.value = T.trim(verifyphone.value), T.on(verifyphone, "blur", function () {
                    verifyphone.value && !eval("/\\d{6}$/").test(verifyphone.value) && that.showError("验证码格式错误", "phone_verify", 1)
                });
                var countDown = 60, phone = /^1[3-9][0-9]\d{8,8}$/, countdownfun = function (e) {
                    countDown -= 1, countDown ? (e.innerHTML = countDown + "s后重新获得", T.dom.addClass(e, "seconds"), setTimeout(function () {
                        countdownfun(e)
                    }, 1e3)) : (e.innerHTML = "获取短信验证码", T.dom.removeClass(e, "seconds"), countDown = 60)
                };
                T.on(T.get("count-down"), "click", function () {
                    if (60 == countDown) {
                        var e = this, o = T.get("panel_email").value, a = T.trim(T.get("vcode").value),
                            i = T.trim(T.get("vcode-key").value);
                        if (!phone.test(o))return that.showError("手机号码不正确", "panel_email", 1), !1;
                        if (!a)return that.showError("验证码不能为空", "vcode", 1), !1;
                        var n = "", r = F.config.api + "/ajax/get_mobile_vcode/" + o + "/bind/" + a + "/" + i;
                        F.post(r, n, function (o) {
                            return T.isObject(o) && 200 == o.status || 400 == o.status ? 400 == o.status ? (that.showError(o.msg, "vcode", 1), void T.query(".changecode")[0].click()) : void(200 == o.status && countdownfun(e)) : void that.showError(o.msg, "phone_verify", 1)
                        })
                    }
                }), T.g("bindReal") && T.on(T.g("bindReal"), "click", function () {
                    return that.bindPhone(), !1
                })
            }, panel: function (e) {
                var o = this;
                return this.beforeShowPanel(), this.callback = e, F.load("widget.dialog.dialog", function () {
                    var e = Dialog.manager.view();
                    e && e.close(), new this.open({
                        title: "",
                        content: F.tpl.compile(getLoginTemplate())({target: F.config.isFsHost ? "_self" : "_blank"}),
                        fixed: !0,
                        width: 660,
                        height: 338,
                        act: !1,
                        id: "login-panel",
                        no: {
                            click: function () {
                                logSend(), this.close()
                            }
                        }
                    }).show(), startTime = +new Date;
                    var a = function () {
                        F.cookie.del("___useridmess")
                    };
                    T.observer.addOne("login", a), o.afterShowPanel()
                }), !1
            }, bindPhone: function () {
                var that = this, unele = T.get("panel_email"), flag = !0, phone = /^1[3-9][0-9]\d{8,8}$/;
                unele.value || (that.showError("手机号码为空", "panel_email", 1), flag = !1), phone.test(unele.value) || (that.showError("手机号码不正确", "panel_email", 1), flag = !1);
                var verifyphone = T.g("phone_verify");
                verifyphone.value = T.trim(verifyphone.value), verifyphone.value ? verifyphone.value && !eval("/\\d{6}$/").test(verifyphone.value) && (that.showError("短信验证码格式错误", "phone_verify", 1), flag = !1) : (that.showError("验证码不能为空", "phone_verify", 1), flag = !1);
                var vcode_input = T.trim(T.get("vcode").value), key = T.get("vcode-key").value;
                if (vcode_input || (that.showError("验证码不能为空", "vcode", 1), flag = !1), !flag)return !1;
                var params = ["phone=" + unele.value, "verifycode=" + verifyphone.value, "vcode=" + vcode_input, "vcodekey=" + key, "myFormAc=update"],
                    showErr = function (e) {
                        var o = T.query(".bind-error")[0];
                        o && (e ? (T.dom.show(o), o.innerHTML = "错误:" + e) : T.dom.hide(o))
                    };
                F.user.userid && F.cookie.get("sso_token") ? F.post("/account/security/bindmobile", params.join("&"), function (e) {
                    if (e && e.status && 200 == e.status) {
                        var o = Dialog.manager.view();
                        o && o.close(), location.href = location.href
                    } else {
                        var a = e.msg || "绑定未知异常";
                        showErr(a)
                    }
                }) : showErr("会话过期，请重新登录")
            }, login: function () {
                if (F.config && F.config.switchControl && 0 == F.config.switchControl.login)return void F.tool.errModule();
                var e = this;
                unele = T.get("panel_account"), pwele = T.get("panel_password"), unele.value = T.trim(unele.value), pwele.value = T.trim(pwele.value);
                var o = !0;
                if (unele.value || (e.showError("账号不能为空", "panel_account", 1), o = !1), pwele.value || (e.showError("密码不能为空", "panel_password", 1), o = !1), !o)return !1;
                var a = T.get("exp-time").checked ? "on" : "off",
                    i = "username=" + unele.value + "&password=" + hex_sha1(pwele.value).substr(0, 15) + "&location={location}&autologin=" + a;
                F.post(F.config.api + "/account/login_funshion", i, function (o) {
                    if (o && o.status && 200 == o.status) e.logined(); else if (1423 == o.status)try {
                        var a = Dialog.manager.view().dialog, i = T.query(".login-confict", a)[0];
                        T.dom.show(i)
                    } catch (n) {
                    } else {
                        var r = "账号或密码错误";
                        switch (o.status) {
                            case 1412:
                                r = o.msg;
                                break;
                            case 1407:
                                r = "此功能暂不能使用，如有问题请联系客服"
                        }
                        var s = T.g("login-error-show");
                        T.dom.removeClass(s, "hide"), T.dom.removeClass(T.g("close-error"), "hide"), s.value = r, setTimeout(function () {
                            e.closeError()
                        }, 2e3)
                    }
                })
            }, panelReg: function () {
                if (F.config && F.config.switchControl && 0 == F.config.switchControl.register)return void F.tool.errModule();
                var e = this;
                return this.beforeShowPanel(), F.load("widget.dialog.dialog", function () {
                    var o = Dialog.manager.view();
                    o && o.close(), new this.open({
                        title: "",
                        content: getRegTemplate(),
                        act: !1,
                        width: 660,
                        height: 390,
                        fixed: !0,
                        id: "reg-panel",
                        no: {
                            click: function () {
                                logSend(1), this.close()
                            }
                        }
                    }).show(), e.afterShowPanel(1)
                }), !1
            }, verifyRealId: function () {
                var e = this;
                return F.load("widget.dialog.dialog", function () {
                    var o = Dialog.manager.view();
                    o && o.close(), new this.open({
                        title: "",
                        content: getVerfiyRealIdTemplate(),
                        act: !1,
                        width: 660,
                        height: 390,
                        fixed: !0,
                        id: "verifyrealid-panel",
                        no: {
                            click: function () {
                                T.observer.send("logout"), this.close()
                            }
                        }
                    }).show(), e.verifyRealIdEvent()
                }), this
            }, bindRegTest: function () {
                var that = this, mailele = T.get("panel_email");
                T.on(mailele, "blur", function () {
                    mailele.value = T.trim(T.query("#select_li .active").length ? T.query("#select_li .active")[0].innerHTML : mailele.value), mailele.value && (that.checkMobile(mailele.value) ? (F.post(F.config.api + "/ajax/check_account/", "account=" + mailele.value, function (e) {
                        return T.isObject(e) && 200 == e.status || !that.checkMobile(mailele.value) ? void 0 : void that.showError("手机号已注册", "panel_email", 1)
                    }), that.checkMobile(mailele.value) && (T.dom.removeClass(T.g("mobile_reg"), "hide"), T.dom.addClass(T.g("email_reg"), "hide"), T.dom.setAttr(T.g("pageRegForm"), "type", "mobile_reg"))) : that.showError("手机号不正确", "panel_email", 1))
                });
                var password = T.g("panel_password");
                password.value = T.trim(password.value), T.on(password, "blur", function () {
                    password.value && (password.value.length < 5 || password.value.length > 15) && that.showError("密码长度错误", "panel_password", 1)
                });
                var verifypsd = T.g("verify_password");
                verifypsd.value = T.trim(verifypsd.value), T.on(verifypsd, "blur", function () {
                    if (verifypsd.value) {
                        var e = !0;
                        (verifypsd.value.length < 5 || verifypsd.value.length > 15) && (e = !1, that.showError("确认密码长度错误", "verify_password", 1)), e && verifypsd.value != password.value && that.showError("两次输入密码不一致", "verify_password", 1)
                    }
                });
                var verifyphone = T.g("phone_verify");
                verifyphone.value = T.trim(verifyphone.value), T.on(verifyphone, "blur", function () {
                    verifyphone.value && !eval("/\\d{6}$/").test(verifyphone.value) && that.showError("验证码格式错误", "phone_verify", 1)
                }), T.on(T.g("panel_email"), "onkeyup", function () {
                    T.g("panel_email").value ? T.dom.addClass(T.g("regsubmit"), "useful1") : T.dom.removeClass(T.g("regsubmit"), "useful1")
                }), T.on(T.g("panel_password"), "onkeyup", function () {
                    T.g("panel_password").value ? T.dom.addClass(T.g("regsubmit"), "useful2") : T.dom.removeClass(T.g("regsubmit"), "useful2")
                }), T.on(T.g("phone_verify"), "onkeyup", function () {
                    T.g("phone_verify").value ? T.dom.addClass(T.g("regsubmit"), "useful3") : T.dom.removeClass(T.g("regsubmit"), "useful3")
                }), T.on(T.g("verify_password"), "onkeyup", function () {
                    T.g("verify_password").value ? T.dom.addClass(T.g("regsubmit"), "useful3") : T.dom.removeClass(T.g("regsubmit"), "useful3")
                });
                var countDown = 60, phone = /^1[3-9][0-9]\d{8,8}$/, countdownfun = function (e) {
                    countDown -= 1, countDown ? (e.innerHTML = countDown + "s后重新获得", T.dom.addClass(e, "seconds"), setTimeout(function () {
                        countdownfun(e)
                    }, 1e3)) : (e.innerHTML = "获取短信验证码", T.dom.removeClass(e, "seconds"), countDown = 60)
                };
                T.on(T.get("count-down"), "click", function () {
                    if (60 == countDown) {
                        var e = this, o = T.get("panel_email").value, a = T.trim(T.get("vcode").value),
                            i = T.trim(T.get("vcode-key").value);
                        if (!phone.test(o))return that.showError("手机号码不正确", "panel_email", 1), !1;
                        if (!a)return that.showError("验证码不能为空", "vcode", 1), !1;
                        var n = "", r = F.config.api + "/ajax/get_mobile_vcode/" + o + "/register/" + a + "/" + i;
                        F.post(r, n, function (o) {
                            return T.isObject(o) && 200 == o.status || 400 == o.status ? 400 == o.status ? (that.showError(o.msg, "vcode", 1), void T.query(".changecode")[0].click()) : void(200 == o.status && countdownfun(e)) : void that.showError(o.msg, "phone_verify", 1)
                        })
                    }
                })
            }, reg: function () {
                var e = this, o = T.dom.getAttr(T.g("pageRegForm"), "type");
                "email_reg" == o && e.emailReg(), "mobile_reg" == o && e.mobileReg()
            }, emailReg: function () {
                var e = this, o = T.trim(T.g("panel_email").value), a = T.trim(T.g("panel_password").value),
                    i = T.trim(T.g("verify_password").value);
                if (!o)return e.showError("邮箱不能为空", "panel_email", 1), !1;
                if (!e.checkEmail(o))return e.showError("邮箱格式错误", "panel_email", 1), !1;
                if (!a)return e.showError("密码不能为空", "panel_password", 1), !1;
                if (a.length < 6 || a.length > 15)return e.showError("密码长度错误", "panel_password", 1), !1;
                if (!i)return e.showError("确认密码不能为空", "verify_password", 1), !1;
                if (a != i)return e.showError("两次输入密码不一致", "verify_password", 1), !1;
                if (!T.g("agreement").checked)return e.showError("不同意使用协议，将不能注册"), !1;
                var n = T.g("agreement").checked ? "on" : "off",
                    r = "account_name=" + o + "&password=" + hex_sha1(a).substr(0, 15) + "&verifypass=" + hex_sha1(i).substr(0, 15) + "&agreement=" + n;
                return e.postRegister(F.config.api + "/account/reg", r, o, a), !1
            }, mobileReg: function () {
                var that = this, mobile = T.trim(T.get("panel_email").value),
                    password = T.trim(T.get("panel_password").value), vcode = T.trim(T.get("phone_verify").value),
                    vcode_input = T.trim(T.get("vcode").value), vcodekey = T.trim(T.get("vcode-key").value), flag = !0;
                if (mobile || (that.showError("手机号码不能为空", "panel_email", 1), flag = !1), mobile && !that.checkMobile(mobile) && (that.showError("手机号码格式错误", "panel_email", 1), flag = !1), password || (that.showError("密码不能为空", "panel_password", 1), flag = !1), (password.length < 6 || password.length > 15) && (that.showError("密码长度错误", "panel_password", 1), flag = !1), vcode_input || (that.showError("验证码不能为空", "vcode", 1), flag = !1), vcode || (that.showError("短信验证码不能为空", "phone_verify", 1), flag = !1), vcode && !eval("/\\d{6}$/").test(vcode) && (that.showError("短信验证码格式错误", "phone_verify", 1), flag = !1), T.get("agreement").checked || (that.showError("请阅读并接受《使用协议》"), flag = !1), flag) {
                    F.cookie.del(this.userKey);
                    var agreement = T.g("agreement").checked ? "on" : "off",
                        param = "mobile=" + mobile + "&password=" + hex_sha1(password).substr(0, 15) + "&verifycode=" + vcode + "&agreement=" + agreement;
                    return that.postRegister(F.config.api + "/account/mobile_reg", param, mobile, password), !1
                }
            }, postRegister: function (e, o, a, i) {
                var n = {1422: "phone_verify", 1302: "phone_verify", 1038: "vcode"};
                n.find = function (e) {
                    var o = n[e];
                    return o || (o = "phone_verify"), o
                };
                var r = this;
                F.post(e, o, function (e) {
                    if (T.get("regsubmit").disabled = !1, !e || !e.status)return r.showError("出了点问题，请F5刷新当前页面重试");
                    if (200 == e.status) {
                        if ("" != a && "" != i) {
                            var o = "username=" + a + "&password=" + hex_sha1(i).substr(0, 15) + "&autologin=on&location=" + (T.url.getQueryValue("location") || "/account/personal");
                            F.post(F.config.api + "/account/login_funshion/iframe", o, function (o) {
                                e.status && F.tool.cookie.set("_firstreg", e.status + "___" + top.location.href.split("#")[0].split("?")[0], 1), o && o.status && 200 == o.status && r.logined({appfirst: 1})
                            })
                        }
                        var s = Dialog.manager.view();
                        s && s.close(1e3), F.tool.pv && F.tool.pv.send("reg_success", {url: location.href})
                    } else if (400 == e.status) r.showError(e.msg, "vcode", 1), T.query(".changecode")[0].click(); else if (1408 == e.status) r.showError("此功能暂不能使用，如有问题请联系客服"); else {
                        var l = n.find(e.status);
                        r.showError(e.msg, l, 1)
                    }
                })
            }, checkMobile: function (e) {
                var o = /^1[3-9][0-9]\d{8,8}$/;
                return o.test(e)
            }, checkEmail: function (e) {
                var o = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                return o.test(e)
            }, closeError: function () {
                T.dom.addClass(T.g("login-error-show"), "hide"), T.dom.addClass(T.g("close-error"), "hide")
            }, showError: function (e, o, a) {
                var i = T.get("et_" + o), n = T.get(o), r = T.get("for-" + o);
                return n && i ? (e && (i.innerHTML = e), T.show(i), r && T.hide(r), T.addClass(n, "errorinput"), a || setTimeout(function () {
                    n.focus()
                }, 20), clearTimeout(n.timer), n.timer = setTimeout(function () {
                    i && T.hide(i), n && (T.removeClass(n, "errorinput"), !T.trim(n.value) && T.show(r))
                }, 2e3)) : alert("出错了：" + e), !1
            }
        };
    T.lang.eventCenter.addEventListener("bridge", function (e) {
        e && e.space && e.fun && "F.tool.ajaxLogin" == e.space && F.tool.ajaxLogin[e.fun](e.args)
    }), T.observer.add("logined", function () {
        T.observer.send("login"), F.load("widget.localStorage.localStorage", function () {
            this.send("login")
        }), F.load("widget.dialog.dialog", function () {
        })
    }), F.namespace("widget.login", "ajaxLogin", ajaxLogin), F.namespace("tool", "ajaxLogin", ajaxLogin)
}();
;!function () {
    function o(o) {
        this.options = {
            cls: "",
            currentPage: 1,
            pageSize: 10,
            total: 0,
            pageCount: 0,
            pageButtonNumber: 10,
            pageGroupMode: 0,
            lang: {first: "第一页", pre: "上一页", next: "下一页", last: "最后一页", n: "#n#"},
            show: {first: !1, pre: !0, next: !0, last: !1, more: !0, info: !1},
            ui: null,
            uiDelay: 100,
            uiResponse: "mouseover",
            uiHover: "p-current",
            update: T.fn.blank,
            anchor: "",
            anchorOffset: 0,
            lazyTarget: null,
            renderTo: null
        }, o = o || {}, o.show = T.object.extend(this.options.show, o.show || {}), o.lang = T.object.extend(this.options.lang, o.lang || {}), this.options = T.object.extend(this.options, o || {}), this.pageCount = this.options.pageCount || Math.max(1, Math.ceil(this.options.total / this.options.pageSize)), this.options.currentPage > this.pageCount && (this.options.currentPage = this.pageCount), this.options.currentPage < 1 && (this.options.currentPage = 1), this.options.renderTo = T.get(this.options.renderTo), this.options.renderTo && T.dom.hide(this.options.renderTo);
        var i = this, s = [], a = !1, r = 0, p = [], h = "javascript:;", u = "", g = null;
        u = this.options.anchor ? 0 != this.options.anchor.indexOf("#") ? "#" + this.options.anchor : this.options.anchor : h, n || F.tool.addSheet(e), n = 1;
        var c = null, l = function () {
            c = new this(i.options.renderTo)
        };
        F.load("widget.lazyloading.LazyWraper", l);
        var d = function (o) {
            var o = o || window.event;
            T.event.stopPropagation(o), T.event.stop(o), g = o;
            var e = T.event.getTarget(o);
            if (console.log("bindEvnt", e), !e || "a" != e.tagName.toLowerCase())return !1;
            var n = {
                first: 1,
                pre: Math.max(1, i.options.currentPage - 1),
                next: Math.min(i.options.currentPage + 1, i.pageCount),
                last: i.pageCount
            }, s = String(e.className).toLowerCase().substr(2);
            if (i.options.pageGroupMode) {
                var a = Math.floor((i.options.currentPage - 1) / i.options.pageButtonNumber);
                "pre" == s && (a -= 1, n.pre = a * i.options.pageButtonNumber + 1), "next" == s && (a += 1, n.next = a * i.options.pageButtonNumber + 1), n.pre = Math.max(1, n.pre), n.next = Math.min(n.next, i.pageCount)
            }
            var r = parseInt(e.getAttribute("rel")) || n[s];
            return r ? void i.gopage(r) : !1
        }, f = function (o) {
            var o = o || window.event;
            T.event.stopPropagation(o), T.event.stop(o);
            var e = T.event.getTarget(o), n = parseInt(e.getAttribute("_page"));
            n && (F.clearTimeout(r), i.options.uiDelay ? r = F.setTimeout(i.gopage, i.options.uiDelay, i, n) : i.gopage(n))
        }, m = 0, x = 0, v = function (o) {
            return T.isFunction(i.options.lang.n) ? i.options.lang.n(o) : String(i.options.lang.n).replace(/#n#/gi, o) || o
        }, b = function (o) {
            return o > i.pageCount ? !1 : (m = Math.max(o, m), s.push(o == i.options.currentPage ? "<a class='p-current' href='" + u + "'>" + v(o) + "</a>" : "<a rel='" + o + "' title='第" + o + "页' href='" + u + "'>" + v(o) + "</a>"), !0)
        };
        this.options.renderTo && !this.options.ui && T.on(this.options.renderTo, "click", d), this.gopage = function (o) {
            i.options.currentPage = o, T.isFunction(i.options.update) && T.fn.bind(i.options.update, i)(), i.update()
        }, this.setRenderTo = function (o) {
            this.options.renderTo = o, this.options.renderTo && !this.options.ui && T.on(this.options.renderTo, "click", d)
        }, this.update = function (o) {
            if (this.options.renderTo) {
                m = 0, x = 0, o = o || {}, o.show = T.object.extend(this.options.show, o.show || {}), o.lang = T.object.extend(this.options.lang, o.lang || {}), this.options = T.object.extend(this.options, o || {});
                var e = this.options.pageGroupMode;
                if (s = [], this.options.ui)if (this.options.cls && T.addClass(this.options.renderTo, this.options.cls), a) T.array.each(p, function (o, e) {
                    e + 1 == i.options.currentPage ? T.addClass(o, i.options.uiHover) : T.removeClass(o, i.options.uiHover)
                }); else {
                    a = !0, p = T.query(this.options.ui, this.options.renderTo), this.pageCount = p.length;
                    for (var n = 0, r = this.pageCount; r > n; n++)T.dom.setAttr(p[n], "_page", (n + 1).toString()), T.on(p[n], this.options.uiResponse, f)
                } else {
                    if (this.pageCount = Math.max(1, Math.ceil(this.options.total / this.options.pageSize)), this.options.currentPage = Math.min(this.options.currentPage, this.pageCount), s.push("<div class='com-pager " + this.options.cls + " clearfix'>"), this.pageCount < 2)return s.push("</div>"), void(this.options.renderTo.innerHTML = s.join(""));
                    {
                        var h = parseInt(this.options.pageButtonNumber / 2);
                        max = 0
                    }
                    if (this.options.currentPage > 1 && this.options.show.pre && s.push("<a class='p-pre' title='上一页' href='" + u + "'>" + this.options.lang.pre + "</a>"), e) {
                        var g = this.options.currentPage - 1;
                        x = g % this.options.pageButtonNumber == 0 ? g / this.options.pageButtonNumber * this.options.pageButtonNumber + 1 : Math.floor(g / this.options.pageButtonNumber) * this.options.pageButtonNumber + 1, max = x + this.options.pageButtonNumber
                    } else this.options.currentPage <= h ? (x = 1, max = this.options.pageButtonNumber) : this.options.currentPage + h > this.pageCount ? (x = this.pageCount - this.options.pageButtonNumber + 1 > 0 ? this.pageCount - this.options.pageButtonNumber + 1 : 1, max = this.pageCount) : (x = this.options.currentPage - h > 0 ? this.options.currentPage - h : 1, max = this.options.currentPage + h);
                    this.options.show.more && x > 1 && s.push("<span class='disc'>...</span>");
                    var c = x, l = max;
                    l - c >= i.options.pageButtonNumber && (l = c + i.options.pageButtonNumber - 1);
                    for (var n = c; l >= n && 0 != b(n); n++);
                    this.options.show.more && max < this.pageCount && s.push("<span class='disc'>...</span>"), this.options.currentPage < this.pageCount && (this.options.show.last && m < this.pageCount && s.push("<a class='p-last' title='最后一页' href='" + u + "'>" + this.options.lang.last + "</a>"), this.options.show.next && s.push("<a class='p-next' title='下一页' href='" + u + "'>" + this.options.lang.next + "</a>")), this.options.show.info && s.push("<a class='p-info' title='当前第" + this.options.currentPage + "页，一共" + this.pageCount + "页' href='" + u + "'>" + this.options.currentPage + "/" + this.pageCount + "</a>"), s.push("</div>"), this.options.currentPage > 1 && this.options.show.first && x > 1 && (s = s.slice(0, 2).concat("<a class='p-first' rel='1' title='首页' href='" + u + "'>" + this.options.lang.first + "</a>").concat(s.slice(2))), this.options.renderTo.innerHTML = s.join(""), T.dom.show(this.options.renderTo), s = []
                }
                this.anchor()
            }
        }, this.anchor = function (o) {
            if (g = g || o) {
                if (u && -1 != u.indexOf("#")) {
                    var e = u.substring(1), n = document.getElementsByName(e) || [];
                    if (n[0]) {
                        var i = T.dom.getPosition(n[0]);
                        window.scrollTo(0, i.top + this.options.anchorOffset)
                    }
                }
                g = !0
            }
        }, this.dispose = function () {
            if (this.options.renderTo)if (this.options.ui)for (var o = 0, e = p.length; e > o; o++)T.un(p[o], this.options.uiResponse, f); else T.un(this.options.renderTo, "click", d), this.options.renderTo.innerHTML = "";
            this.options.renderTo = null, a = !1
        }, this.update()
    }

    var e = [".com-pager{clear:both;text-align:left;margin:10px 0;}", ".com-pager a, .com-pager span, .com-pager a.disabled, .com-pager b{cursor:pointer;display:inline-block;border:1px solid #ccc;color:#666;padding:2px 9px;line-height:18px;margin:0 3px;vertical-align : top}", ".com-pager a.p-current, .com-pager a:hover {background-color:#ffede1;color:#ff6600;border:1px solid #ff6600;}", ".com-pager a.p-current{cursor:default;font-weight:bold;}", ".com-pager a.p-info{cursor:default;}", ".com-pager a.p-first{margin-left:0;}", ".com-pager a.p-first, .com-pager a.p-next, .com-pager a.p-pre,.com-pager a.p-last{padding-top:3px9;padding-bottom:1px9; font-size:16px; line-height:16px;}", ".com-pager span.disc{cursor:default;border:0;vertical-align:text-bottom;float:left;display:block;}"].join(""),
        n = 0;
    F.namespace("widget.pager", "pager", o)
}();
;!function () {
    function o(o) {
        this.options = {
            cls: "",
            currentPage: 1,
            pageSize: 10,
            total: 0,
            pageCount: 0,
            pageButtonNumber: 10,
            lang: {first: "第一页", pre: "上一页", next: "下一页", last: "最后一页", n: "#n#"},
            show: {first: !1, pre: !0, next: !0, last: !1, more: !0, info: !1},
            ui: null,
            uiDelay: 100,
            uiResponse: "mouseover",
            uiHover: "p-current",
            update: T.fn.blank,
            anchor: "",
            anchorOffset: 0,
            lazyTarget: null,
            renderTo: null
        }, o = o || {}, o.show = T.object.extend(this.options.show, o.show || {}), o.lang = T.object.extend(this.options.lang, o.lang || {}), this.options = T.object.extend(this.options, o || {}), this.pageCount = this.options.pageCount || Math.max(1, Math.ceil(this.options.total / this.options.pageSize)), this.options.currentPage > this.pageCount && (this.options.currentPage = this.pageCount), this.options.currentPage < 1 && (this.options.currentPage = 1), this.options.renderTo = T.get(this.options.renderTo), this.options.renderTo;
        var i = this, n = [], e = "javascript:;", s = "", r = null;
        s = this.options.anchor ? 0 != this.options.anchor.indexOf("#") ? "#" + this.options.anchor : this.options.anchor : e;
        var a = null, h = function () {
            a = new this(i.options.renderTo)
        };
        F.load("widget.lazyloading.LazyWraper", h);
        var p = function (o) {
            var o = o || window.event;
            T.event.stopPropagation(o), T.event.stop(o), r = o;
            var n = T.event.getTarget(o);
            if (!n || "a" != n.tagName.toLowerCase())return !1;
            var e = {
                first: 1,
                pre: Math.max(1, i.options.currentPage - 1),
                next: Math.min(i.options.currentPage + 1, i.pageCount),
                last: i.pageCount
            }, s = parseInt(n.getAttribute("rel")) || e[String(n.className).toLowerCase().substr(2)];
            return s ? void i.gopage(s) : !1
        }, u = function (o) {
            return T.isFunction(i.options.lang.n) ? i.options.lang.n(o) : String(i.options.lang.n).replace(/#n#/gi, o) || o
        };
        this.options.renderTo && !this.options.ui && T.on(this.options.renderTo, "click", p), this.gopage = function (o) {
            i.options.currentPage = o, i.highlightCurrent(), T.isFunction(i.options.update) && T.fn.bind(i.options.update, i)()
        }, this.highlightCurrent = function () {
            var o = i.options.currentPage, n = this.options.pageButtonNumber || 1,
                e = Math.max(1, Math.ceil(this.options.total / this.options.pageSize)), s = Math.min(e, n);
            if (n >= o && this.highlightComboxCurrent(!1), T.each(T.query("a", this.options.renderTo), function (i) {
                    var n = i.getAttribute("rel");
                    o == n ? T.dom.addClass(i, "p-current") : n && T.dom.removeClass(i, "p-current")
                }), o >= s + 1) {
                var r = T.query(".com-jpager .label", this.options.renderTo)[0];
                r && (T.dom.addClass(r, "p-current"), r.innerHTML = u(o))
            }
        }, this.update = function () {
            if (this.options.renderTo) {
                var o = this.options.pageButtonNumber || 1,
                    e = Math.max(1, Math.ceil(this.options.total / this.options.pageSize)), s = Math.min(e, o);
                n = [], n.push("<div class='com-jpager " + this.options.cls + " clearfix z-10'>"), console.log("viewCount", s, "opt", this.options);
                var r = e > s;
                e == s + 1 && (r = !1);
                for (var a = 0; e > a; a++)s > a ? n.push("<a rel='" + (a + 1) + "'>" + u(a + 1) + "</a>") : r ? (a == s && (n.push("<div class='cb tool-combox' data-cancelbubble='0'>"), n.push("<div class='combox-title z-1'><a class='label'>更多</a><i class='icon'></i></div>"), n.push("<div class='combox-list wrap fix'>")), n.push("<a class='item' rel='" + (a + 1) + "'>" + u(a + 1) + "</a>"), a == e - 1 && (n.push("</div>"), n.push("</div>"))) : n.push("<a rel='" + (a + 1) + "'>" + u(a + 1) + "</a>");
                this.options.renderTo.innerHTML = n.join("");
                try {
                    if (F.widget.combox.combox.registry(), this.options.renderTo) {
                        var h = T.query(".tool-combox", this.options.renderTo);
                        h[0] && (h[0].itemClick = function () {
                            i.highlightComboxCurrent(!0)
                        })
                    }
                } catch (p) {
                }
                this.highlightCurrent(), this.anchor()
            }
        }, this.highlightComboxCurrent = function (o) {
            var i = T.query(".combox-title a", this.options.renderTo);
            i[0] && (T.dom.removeClass(i[0], "p-current"), o && T.dom.addClass(i[0], "p-current"))
        }, this.anchor = function (o) {
            if (r = r || o) {
                if (s && -1 != s.indexOf("#")) {
                    var i = s.substring(1), n = document.getElementsByName(i) || [];
                    if (n[0]) {
                        var e = T.dom.getPosition(n[0]);
                        window.scrollTo(0, e.top + this.options.anchorOffset)
                    }
                }
                r = !0
            }
        }, this.dispose = function () {
        }, this.update()
    }

    F.namespace("widget.pager", "jpager", o)
}();
;!function () {
    var e = function (e) {
        var a = this;
        a.target = e;
        var r = T.query(".rating-box", e)[0], n = T.query(".rating", e), i = !0;
        if ("rating" != a.target.getAttribute("data-comtype")) {
            var s = 0;
            a.target.setAttribute("data-comtype", "rating");
            var o = function (e) {
                i = T.dom.hasClass(r, "disable ") ? !1 : !0;
                var e = e || window.event, s = e.target || e.srcElement, o = n.indexOf(s);
                switch (T.event.preventDefault(e), console.log("idx", o, a.onRate), e.type) {
                    case"mouseover":
                        break;
                    case"click":
                        if (!i)return;
                        if (!F.user.isLogin())return void F.tool.user.isLogin(!0, !0);
                        a.onRate && a.onRate(o)
                }
            };
            this.onRate = null, this.disable = function () {
                T.dom.addClass(r, "disable"), i = !1;
                for (var e = T.query("a", r), a = 0; a < e.length; a++) {
                    var n = "rating-stars" + (a + 1);
                    a != s && T.dom.removeClass(e[a], n)
                }
            }, this.enable = function () {
                T.dom.removeClass(r, "disable"), i = !0;
                for (var e = T.query("a", r), a = 0; a < e.length; a++) {
                    var n = "rating-stars" + (a + 1);
                    T.dom.addClass(e[a], n)
                }
            }, this.setRate = function (e) {
                console.log("setRATE_IDX:", e), T.each(n, function (e) {
                    T.dom.removeClass(e, "current")
                }), n[e] && T.dom.addClass(n[e], "current"), a.target.setAttribute("data-rating", e + 1), s = e
            }, T.each(n, function (e) {
                T.on(e, "mouseover", o), T.on(e, "click", o)
            });
            for (var c = T.query("a", r), u = 0; u < c.length; u++)if (T.dom.hasClass(c[u], "current")) {
                s = u;
                break
            }
            e.onRegister && (e.instance = this, e.onRegister())
        }
    };
    e.registry = function (a) {
        T.each(T.query(".com-rating", a), function (a) {
            if (!a.instance && !a.getAttribute("data-comtype")) {
                var r = new e(a);
                a.instance = r
            }
        })
    };
    var a = function () {
        e.registry()
    };
    T.ready(a), F.namespace("widget.rating", "rating", e)
}();
;!function () {
    var e = [".rightmenu{position:absolute;left:0;top:0;width:188px;left:0;top:0;padding:2px 0;visibility:hidden;z-index:500}", ".rightmenu ul{padding:2px 0;width:186px;border:1px solid #979797;background-color:#f0f0f0;box-shadow:3px 3px 2px #999;-webkit-box-shadow:3px 3px 2px #999}", ".rightmenu .rightmenu-item{line-height:22px;height:22px;position:relative;}", ".rightmenu li.hover{background:url(" + F.config.protocol + "//static.funshion.com/img/v9/right-menu-hover.gif) no-repeat 2px 0;border:0;}", ".rightmenu .rightmenu-disabled{color:#ccc}", ".rightmenu .rightmenu-item ul{display:none;}", ".rightmenu li.hover>ul{display:block;border:1px solid #979797;margin-left:180px;margin-top:-28px;line-height:20px;zoom:1;}", ".rightmenu .item-line{height:0px;line-height:0;font-size:0;border-top:1px solid #e0e0e0;border-bottom:1px solid #fff;margin-top:2px}", ".rightmenu .rightmenu-item-name{margin-left:28px;padding-left:5px;border-left:1px solid #e2e3e3;cursor:default;}"].join(""),
        i = 0;
    F.tool.rightMenu = function (n) {
        0 == i && (i = 1, F.tool.addSheet(e)), this.options = {
            renderTo: null,
            cls: "",
            data: [],
            closeHandler: T.fn.blank
        }, this.options = T.extend(this.options, n || {}), this.options.renderTo && (this.options.renderTo = T.get(this.options.renderTo)), this.elementID = T.lang.guid(), this.x = 0, this.y = 0;
        var o = this, s = {}, r = null, l = function () {
            var e = this.getAttribute("id");
            return e && s[e] ? void(1 != s[e].disabled && T.addClass(this, "hover")) : o.close()
        }, d = function () {
            T.removeClass(this, "hover")
        }, a = function (e) {
            T.event.stop(T.event.get(e))
        }, u = function (e) {
            e = T.event.get(e);
            var i = this.getAttribute("id");
            return i && s[i] ? void(1 != s[i].disabled && (T.isString(s[i].handler) ? window.location.href = s[i] : T.isFunction(s[i].handler) ? T.fn.bind(s[i].handler, o)(this, s[i].sid) !== !1 && o.close() : o.close())) : o.close()
        }, h = function () {
            o.close()
        }, c = function (e) {
            e && e.key != o.elementID && o.close()
        }, m = function () {
            var e = function (i, n) {
                var r = T.dom.create("ul", {"class": "rightmenu-ul"});
                T.each(i, function (i) {
                    var n = i.id || T.lang.guid(), a = "right-item-" + o.elementID + "-" + n, h = T.dom.create("li", {
                        "class": "rightmenu-item" + ("line" == i.name ? " item-line" : ""),
                        id: a
                    });
                    "line" != i.name && (h.innerHTML = "<div class='rightmenu-item-name'>" + i.name + "</div>", T.isArray(i.data) && e(i.data, h), s[a] = {
                        disabled: !1,
                        handler: i.handler || null,
                        sid: n
                    }, T.on(h, "click", u), T.on(h, "mouseover", l), T.on(h, "mouseout", d)), r.appendChild(h)
                }), n.appendChild(r)
            };
            r = T.dom.create("div", {
                "class": "rightmenu " + o.options.cls,
                id: o.elementID
            }), e(o.options.data, r), T.dom.insertBefore(r, document.body.firstChild), T.on(r, "click", a), T.on(r, "contextmenu", a), o.options.renderTo && T.on(o.options.renderTo, "contextmenu", p), T.on(document.documentElement, "click", h), T.on(document.documentElement, "contextmenu", h), T.observer.add("contentMenu.display", c)
        }, p = function (e) {
            var e = T.event.get(e), i = T.event.getPageX(e), n = T.event.getPageY(e), s = r.offsetWidth,
                l = r.offsetHeight, d = T.page.getViewWidth(), a = T.page.getViewHeight();
            T.event.stop(e), i + s > d && (i -= s), n + l > a + T.page.getScrollTop() && (n -= l), o.display(i, n), T.observer.send("contentMenu.display", {key: o.elementID})
        };
        this.display = function () {
            var e = arguments;
            switch (e.length) {
                case 1:
                    p(e[0]);
                    break;
                case 2:
                    var i = e[0] + 5, n = e[1] + 5;
                    T.setStyles(r, {left: i, top: n}), this.x = i, this.y = n;
                    break;
                default:
                    return
            }
            T.setStyle(r, "visibility", "visible")
        }, this.close = function () {
            T.setStyle(r, "visibility", "hidden"), T.setStyles(r, {
                left: 0,
                top: 0
            }), this.x = 0, this.y = 0, T.isFunction(this.options.closeHandler) && this.options.closeHandler(this)
        }, this.disabled = function (e, i) {
            e = "right-item-" + this.elementID + "-" + e;
            var n = T.get(e);
            n && s[e] && (i ? T.addClass(n, "rightmenu-disabled") : T.removeClass(n, "rightmenu-disabled"), s[e].disabled = !!i)
        }, this.dispose = function () {
            this.close(), this.options.renderTo && T.un(this.options.renderTo, "contextmenu", p), T.observer.remove("contentMenu.display", c), T.un(document.documentElement, "click", h), T.un(document.documentElement, "contextmenu", h), T.un(r, "click", a), T.un(r, "contextmenu", a), T.array.each(T.query("li.rightmenu-item", r), function (e) {
                T.un(e, "mouseover", l), T.un(e, "mouseout", d), T.un(e, "click", u)
            }), T.dom.remove(r), r = null
        }, m()
    }, F.namespace("widget.rightmenu.rightMenu", F.tool.rightMenu)
}();
;!function () {
    var e = {
            type: "vscroll",
            size: 300,
            target: "",
            lumpsize: 50,
            value: 0,
            onscroll: null,
            overcontent: !1,
            autohide: !1,
            offset: 4,
            scrollpos: "",
            scrolloffset: 0,
            lazy: !1,
            className: "com-scrollbar"
        },
        o = ['<div class="scroll-body">', '	<div class="scroll-back"></div>', '	<div class="scroll-lump">', '		<div class="scroll-lumpU"></div>', '		<div class="scroll-lumpC"></div>', '		<div class="scroll-lumpD"></div>', "	</div>", "</div>"].join(""),
        r = function (o, r) {
            var n = this, a = baidu.extend(baidu.extend({}, e), r);
            n.options = a, n.GUID = "com-scroll-" + T.lang.guid(), n.target = T.g(a.target), n.targetParent = n.target ? n.target.parentNode : null, n.size = a.size || n.target.offsetHeight, n.targetParent && (n.size = n.targetParent.offsetHeight), n.lumpSize = a.lumpsize || 0, n.scrolloffset = a.offset || 0, n.arrowSize = 0, n.thick = 10, n.value = a.value, n.isVert = "hscroll" == a.type ? !1 : !0, this.oldSize = 0, n.targetSize = n.isVert ? n.target.offsetWidth : n.target.offsetHeight, n.parentContainer = T.g(o), n.target && n.targetParent && (n.parentContainer || (n.parentContainer = n.targetParent.parentNode)), n.parentContainer || (n.parentContainer = document.body), n.container = T.dom.create("div", {
                id: n.GUID,
                className: e.className,
                style: "position:absolute"
            }), n.scrollable = !0, n.lazyTimeId = 0, n.options.lazy && n.checkLazy(), n._init(), n.bindTouchEvent()
        };
    r.prototype._init = function () {
        var e = this;
        e.container.innerHTML = o, T.dom.insertAfter(e.container, e.targetParent);
        var r = ["scroll-back", "scroll-lump", "scroll-lumpU", "scroll-lumpC", "scroll-lumpD"];
        T.array.each(r, function (o) {
            var r = o.replace(/\-(\S)/, function (e, o) {
                return String(o).toUpperCase()
            });
            e[r] = T.dom.query("." + o, e.container)[0]
        }), e.arrowSize = T.g(e.scrollLumpU).offsetHeight, e.thick = T.g(e.scrollBack).offsetWidth, e.thick || (e.thick = 15), e.redraw(), e._initEvent()
    }, r.prototype.checkLazy = function () {
        var e = this, o = null, r = function () {
            new (o = F.widget.lazyloading.LazyWraper)(e.target)
        };
        try {
            o = F.widget.lazyloading.LazyWraper
        } catch (n) {
        }
        o ? r() : F.load("widget.lazyloading.LazyWraper", r)
    }, r.prototype.destroy = function () {
        var e = this;
        e._removeEvent(), T.dom.remove(e.container), e.parentContainer && e.parentContainer != document.body && T.dom.remove(e.parentContainer);
        try {
            F.TouchHandler.detach(e.target)
        } catch (o) {
        }
    }, r.prototype._removeEvent = function () {
        var e = this;
        T.un(e.scrollLumpC, "mousedown", e.__onDragEvent), T.un(e.scrollLumpU, "mousedown", e.__onBackEvent), T.un(e.scrollLumpD, "mousedown", e.__onBackEvent), T.un(e.scrollLumpU, "mouseup", e.__onStopScroll), T.un(e.scrollLumpD, "mouseup", e.__onStopScroll), T.un(e.scrollBack, "mousedown", e.__onBackEvent), T.un(e.scrollBack, "mouseup", e.__onStopScroll), e.target ? T.browser.isGecko ? e.target.removeEventListener("DOMMouseScroll", e.__onMouseWheel, !1) : T.un(e.target, "mousewheel", e.__onMouseWheel) : T.browser.isGecko ? e.container.removeEventListener("DOMMouseScroll", e.__onMouseWheel, !1) : T.un(e.container, "mousewheel", e.__onMouseWheel), e.parentContainer && e.options.autohide && (T.un(e.parentContainer, "mouseenter", e.__onTargetEnter), T.un(e.parentContainer, "mouseleave", e.__onTargetLeave))
    }, r.prototype._initEvent = function () {
        var e = this, o = 0;
        e.__onDragEvent = function (r) {
            l(), r = r || window.event;
            var n, a = r.type;
            switch (a) {
                case"mousedown":
                    T.on(document, "mousemove", e.__onDragEvent), T.on(document, "mouseup", e.__onDragEvent);
                    var i = {x: T.page.getScrollLeft(), y: T.page.getScrollTop()},
                        n = e._pointToClient(e.scrollLumpC, {left: r.clientX + i.x, top: r.clientY + i.y});
                    o = e.isVert ? n.top : n.left;
                    break;
                case"mousemove":
                    var s = e.scrollLumpC, i = {x: T.page.getScrollLeft(), y: T.page.getScrollTop()},
                        n = e._pointToClient(e.container, {left: r.clientX + i.x, top: r.clientY + i.y}),
                        c = e.isVert ? n.top : n.left;
                    c -= o, c = Math.min(Math.max(e.arrowSize + e.scrolloffset, c), e.size - e.arrowSize - e.lumpSize - e.scrolloffset), T.setStyle(s, e.isVert ? "top" : "left", c + "px");
                    var p = e.size - 2 * e.arrowSize - e.lumpSize - 2 * e.scrolloffset;
                    e.value = (c - e.arrowSize - e.scrolloffset) / p * 100, e.dragging = !0, e.updateContentPos();
                    break;
                case"mouseup":
                    T.un(document, "mousemove", e.__onDragEvent), T.un(document, "mouseup", e.__onDragEvent), e.updateContentPos(), e.dragging = !1
            }
        };
        var r = 15, n = 0, a = 0, i = !1, l = function () {
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
        }, s = function (o) {
            var o = o || window.event, r = e.isVert ? o.clientY : o.clientX, n = T.dom.getPosition(e.scrollLumpC),
                a = e.isVert ? n.top : n.left;
            return r > a ? -1 : 1
        }, c = function (o) {
            if (o) {
                var n = s(o) > 0 ? !0 : !1;
                0 > a && !n && e.__stopScroll()
            }
            e.setScrollOffset(-r)
        }, p = function (o) {
            if (e.setScrollOffset(r), o) {
                var n = s(o) > 0 ? !0 : !1;
                a > 0 && n && e.__stopScroll()
            }
        };
        e.__stopScroll = function () {
            clearInterval(n)
        }, e.__onBackEvent = function (o) {
            l(), o = o || window.event;
            var a = T.event.getTarget(o);
            if (this == e.scrollBack) {
                var i = {x: T.page.getScrollLeft(), y: T.page.getScrollTop()},
                    u = e.isVert ? o.clientY + i.y : o.clientX + i.x, g = T.dom.getPosition(e.scrollLumpC),
                    f = e.isVert ? g.top : g.left;
                if (u >= f && u <= f + e.lumpSize)return
            }
            if (e.target && e.targetParent) {
                var d = e.isVert ? e.target.offsetHeight : e.target.offsetWidth,
                    h = e.isVert ? e.targetParent.offsetHeight : e.targetParent.offsetWidth,
                    m = e.size - 2 * e.arrowSize;
                r = .3 * h / d * m
            }
            switch (e.__stopScroll(), a) {
                case e.scrollBack:
                    var v = s(o) > 0 ? !0 : !1;
                    v ? c() : p();
                    break;
                case e.scrollLumpU:
                    n = setInterval(c, 80), c();
                    break;
                case e.scrollLumpD:
                    n = setInterval(p, 80), p()
            }
            T.on(document, "mouseup", e.__onStopScroll)
        }, e.__onStopScroll = function (o) {
            o = o || window.event, e.__stopScroll(), T.un(document, "mouseup", e.__onStopScroll), a = -1, e.dragging = !1
        }, e.__onMouseWheel = function (o) {
            var o = T.event.get(o);
            e.scrollable && T.event.stop(o);
            var r = e.isVert ? "scrollTop" : "scrollLeft",
                n = -(o.wheelDelta ? o.wheelDelta / 120 : -(o.detail % 3 == 0 ? o.detail : o.detail / 3)),
                a = (this[r] || 0) + 10 * n;
            0 > a ? c() : p()
        }, e.__onBodyUp = function (o) {
            i || (e.dragging = !1, e.__onTargetLeave(o))
        }, e.__onTargetOver = function (o) {
            i = !0, e.__onTargetEnter(o)
        }, e.__onTargetOut = function () {
            i = !1
        }, e.__onTargetEnter = function (o) {
            o = T.event.get(o), T.browser.ie && T.browser.ie <= 7 ? T.dom.setStyle(e.container, "opacity", 1) : F.tween(e.container, F.math.tweener.simple, .5, {opacity: 1})
        }, e.__onTargetLeave = function (o) {
            o = T.event.get(o), e.dragging || (T.browser.ie && T.browser.ie <= 7 ? T.dom.setStyle(e.container, "opacity", 0) : F.tween(e.container, F.math.tweener.simple, .5, {opacity: 0}))
        }, T.on(e.scrollLumpC, "mousedown", e.__onDragEvent), T.on(e.scrollLumpU, "mousedown", e.__onBackEvent), T.on(e.scrollLumpD, "mousedown", e.__onBackEvent), T.on(e.scrollLumpU, "mouseup", e.__onStopScroll), T.on(e.scrollLumpD, "mouseup", e.__onStopScroll), T.on(e.scrollBack, "mousedown", e.__onBackEvent), T.on(e.scrollBack, "mouseup", e.__onStopScroll), e.target ? T.browser.isGecko ? e.target.addEventListener("DOMMouseScroll", e.__onMouseWheel, !1) : T.on(e.target, "mousewheel", e.__onMouseWheel) : T.browser.isGecko ? e.container.addEventListener("DOMMouseScroll", e.__onMouseWheel, !1) : T.on(e.container, "mousewheel", e.__onMouseWheel), e.parentContainer && e.options.autohide && (T.on(document.body, "mouseup", e.__onBodyUp), T.on(e.parentContainer, "mouseover", e.__onTargetOver), T.on(e.parentContainer, "mouseout", e.__onTargetOut), T.on(e.parentContainer, "mouseenter", e.__onTargetEnter), T.on(e.parentContainer, "mouseleave", e.__onTargetLeave))
    }, r.prototype.resetLazy = function () {
        this.options.lazy && this.checkLazy(), this.bindTouchEvent()
    }, r.prototype.setTarget = function (e) {
        this._removeEvent(), this.target && F.TouchHandler.detach(this.target), e != this.target && (this.value = 0, this.oldSize = 0, this.targetSize = 0), this.target = e, this.resetLazy(), !this.targetSize && this.target && (this.target.removeAttribute("style"), this.targetSize = this.isVert ? this.target.offsetWidth : this.target.offsetHeight), this._initEvent()
    }, r.prototype.fixValue = function (e) {
        return Math.min(Math.max(0, e), 100)
    }, r.prototype.setScrollOffset = function (e) {
        var o = this, r = o.size - 2 * o.arrowSize - o.lumpSize;
        o.value = o.fixValue(o.value + e / r * 100), o.updateScrollPos(), o.updateContentPos()
    }, r.prototype.bindTouchEvent = function () {
        if (T.platform.isIpad) {
            var e = this, o = e.value, r = !1;
            F.TouchHandler.attach(this.target, {
                onTouchStart: function () {
                    o = e.value
                }, onTouchEnd: function (e) {
                    r && T.event.stop(e), r = !1
                }, onTouchMove: function (n) {
                    r = !0;
                    var a = e.isVert ? e.target.scrollHeight : e.target.scrollWidth, i = this.distance || {x: 0, y: 0},
                        l = e.size - 2 * e.arrowSize - e.lumpSize;
                    e.value = e.fixValue(o + -i.y * (e.size / a) / l * 100), e.updateScrollPos(), e.updateContentPos(), 0 >= o && e.value <= 0 || o >= 100 && e.value >= 100 || T.event.stop(n)
                }
            })
        }
    }, r.prototype._pointToClient = function (e, o) {
        var r = T.dom.getPosition(e);
        return o.top = o.top - r.top, o.left = o.left - r.left, o
    }, r.prototype.setValue = function (e) {
        var o = this;
        o.value = o.fixValue(e), o.oldValue = o.value, o.updateScrollPos(), o.updateContentPos()
    }, r.prototype.setPosition = function (e) {
        var o = this;
        o.value = o.fixValue(e / (o.size - 2 * o.arrowSize - o.lumpSize + o.arrowSize - 2 * o.scrolloffset) * 100), o.updateScrollPos(), o.updateContentPos()
    }, r.prototype.updateContentPos = function () {
        var e = this;
        if (e.targetParent && e.target) {
            var o = e.isVert ? e.target.scrollHeight - e.targetParent.offsetHeight : e.target.scrollWidth - e.targetParent.offsetWidth;
            e.isVert && (e.targetParent.scrollTop = o * e.value / 100)
        }
        e.options && e.options.onscroll && e.options.onscroll();
        try {
            window.F.tooltip.hide()
        } catch (r) {
        }
        clearTimeout(e.lazyTimeId), e.lazyTimeId = setTimeout(function () {
            e.updateLazyImage()
        }, 500)
    }, r.prototype.updateLazyImage = function () {
        var e = this;
        if (e.targetParent) {
            var o = (e.targetParent.scrollTop || 0, e.size || 1), r = T.dom.getPosition(e.targetParent);
            if (e.options.lazy) {
                var n = T.query("img", e.target);
                T.each(n, function (e) {
                    var n = T.dom.getPosition(e);
                    n.top >= r.top - 200 && n.top <= r.top + o && e && e.instance && e.instance.start()
                })
            }
        }
    }, r.prototype.updateScrollPos = function () {
        var e, o = this;
        o.isVert ? (e = o.value / 100 * (o.size - 2 * o.arrowSize - o.lumpSize - 2 * o.scrolloffset) + o.arrowSize + o.scrolloffset, e = e || 0, T.setStyle(o.scrollLumpC, "top", e + "px")) : (e = o.value / 100 * (o.size - 2 * o.arrowSize - o.lumpSize - 2 * o.scrolloffset) + o.arrowSize + o.scrolloffset, T.setStyle(o.scrollLumpC, "left", e + "px"))
    }, r.prototype.redraw = function () {
        var e = this;
        if (e.targetParent && (e.size = e.targetParent.offsetHeight), e.oldSize || (e.oldSize = e.size), e.targetParent && e.target) {
            var o = e.isVert ? e.target.scrollHeight : e.target.scrollWidth,
                r = e.isVert ? e.targetParent.offsetHeight : e.targetParent.offsetWidth;
            e.scrollable = r >= o ? !1 : !0;
            var n = e.size - 2 * e.arrowSize;
            if (e.lumpSize = Math.max(20, r / o * n) || 0, isFinite(e.lumpSize) || (e.lumpSize = 1), e.oldSize && (e.value = e.targetParent.scrollTop / (o - r) * 100), e.options.scrollpos) {
                var a = T.query("." + e.options.scrollpos, e.target)[0];
                if (a) {
                    var i = T.dom.getPosition(a), l = a.parentNode, s = T.dom.children(l)[0];
                    s || (s = e.target);
                    var c = T.dom.getPosition(s), p = i.top - c.top,
                        u = Math.floor(p - e.size / 2) + (e.scrolloffset || 0),
                        g = e.isVert ? e.target.scrollHeight - e.targetParent.offsetHeight : e.target.scrollWidth - e.targetParent.offsetWidth;
                    e.value = e.fixValue(u / g * 100)
                }
            }
        }
        if (e.scrollable ? T.setStyle(e.container, "display", "block") : T.setStyle(e.container, "display", "none"), e.isVert) {
            T.setStyle(e.scrollBack, "height", e.size + "px");
            try {
                T.setStyle(e.scrollLumpC, "height", e.lumpSize + "px")
            } catch (f) {
            }
            T.setStyle(e.scrollLumpD, "top", e.size - e.arrowSize + "px")
        } else {
            T.setStyle(e.scrollBack, "width", e.size + "px");
            try {
                T.setStyle(e.scrollLumpC, "width", e.lumpSize + "px")
            } catch (f) {
            }
            T.setStyle(e.scrollLumpD, "left", e.size - e.arrowSize + "px")
        }
        var l = e.parentContainer;
        if (e.target) {
            var d = e.target.getAttribute("data-initwidth");
            d && "0" != d ? e.targetSize = Number(d) : e.target.setAttribute("data-initwidth", e.target.offsetWidth), d = e.target.getAttribute("data-initheight"), d && "0" != d || e.target.setAttribute("data-initheight", e.target.offsetHeight)
        }
        if (e.target && e.scrollable) {
            if (0 == h)return;
            e.targetSize || (e.targetSize = e.target.offsetWidth), e.thick = T.g(e.scrollBack).offsetWidth, e.thick || (e.thick = 15);
            var h = e.targetSize, m = 0;
            e.options.overcontent ? m = -e.thick : h -= e.thick;
            var v = 0;
            if (!this.pcoffset && e.targetParent.parentNode) {
                var S = T.dom.getPosition(e.targetParent.parentNode), _ = T.dom.getPosition(e.targetParent);
                this.pcoffset = e.isVert ? _.top - S.top : _.left - S.left
            }
            v = this.pcoffset || 0, e.isVert ? (T.setStyles(e.target, {width: h + "px"}), T.setStyles(e.container, {
                position: "absolute",
                left: e.targetParent.offsetWidth + m + "px",
                top: v + "px"
            })) : (T.setStyle(e.target, "height", h + "px"), T.setStyles(e.container, {
                position: "absolute",
                top: e.target.offsetHeight + m + "px",
                left: v + "px"
            }))
        }
        if (!e.isVert) {
            var y = {width: e.size + "px", height: e.thick + "px"},
                z = {width: e.arrowSize + "px", height: e.thick + "px"};
            T.setStyles(e.scrollBack, y), T.setStyles(e.scrollLump, y), T.setStyles(e.scrollLumpU, z), T.setStyles(e.scrollLumpD, z), T.setStyle(e.scrollLumpC, "height", e.thick + "px")
        }
        e.options.autohide && T.setStyle(e.container, "opacity", 0), e.updateScrollPos(), e.updateContentPos()
    }, r.prototype.setVisible = function (e) {
        var o = this;
        o.container && (e ? T.show(container) : T.hide(container))
    }, r.prototype.move = r.prototype.setScrollPos = function (e) {
        var o = this;
        o.setPosition(e)
    }, r.prototype.onRedraw = r.prototype.redraw, F.namespace("widget.scrollbar", "scrollBar", r), window.ScrollBar = r
}();
;window.F = window.F || {}, window.F.ui = window.F.ui || {}, window.log = function () {
};
var HashTest = function () {
    function e() {
        clearTimeout(d);
        var n = o(), a = i();
        if (a != n) {
            a = n;
            var s = i();
            r(s) || (location.hash = s, u.hash = n, log("#################hashchange"), u.trigger("hashchange"))
        }
        d = setTimeout(e, f)
    }

    function i() {
        var e = "";
        try {
            e = c.contentWindow.location.href
        } catch (i) {
        }
        return e ? o(e) : ""
    }

    function n(e) {
        if (log("history_set:", e + ",his=" + w, "tmp=" + h + ", new_hash=" + v + ",old_hash=" + g), e != h) {
            h = e;
            try {
                b = c.contentDocument || c.contentWindow.document
            } catch (n) {
                log("history.set:Error:", n)
            }
            if (b && (domain = document.domain, g != v)) {
                try {
                    b.open(), m || (b.write('<script>document.domain="' + domain + '"</script>'), m = !0), b.write("hash===" + v), b.close();
                    try {
                        c.contentWindow.location.hash = v
                    } catch (n) {
                        log("history_set error(hash):" + n)
                    }
                } catch (n) {
                    log("history_set error:" + n)
                }
                var o = i();
                o && (v = "")
            }
        }
    }

    function o(e) {
        e = e || location.href;
        var i = e.replace(/^[^#]*#?(.*)$/, "$1");
        return i ? "#" + i : ""
    }

    function r(e) {
        return !e || "#" == e
    }

    function a() {
        log("窗体onload."), location.hash && u.pushHash(location.hash)
    }

    function s() {
        y = o(), e(), v && n(o())
    }

    var l = {}, u = this;
    this.trigger = function (e) {
        if (l[e])for (var i = l[e], n = 0; n < i.length; n++)i[n].call(this)
    }, this.on = function (e, i) {
        l[e] || (l[e] = []), -1 == l[e].indexOf(i) && l[e].push(i)
    }, this.un = function (e, i) {
        if (i) {
            if (l[e]) {
                var n = l[e].indexOf(i);
                n > -1 && l[e].splice(n, 1)
            }
        } else l[e] = []
    }, this.pushHash = function (e) {
        v = e, n(v), u.hash = e, log("#################hashchange"), u.trigger("hashchange")
    };
    var d, c, m = !1, h = "", f = (T.lang.guid(), 50), b = null, v = "", g = "", y = "", w = "";
    this.destroy = function () {
        c && (c.onload = null, document.body.removeChild(c)), clearTimeout(d)
    }, this.init = function () {
        c || (c = T.dom.create("iframe", {
            tabindex: -1,
            title: "",
            src: "about:blank",
            width: "300",
            height: "100",
            style: "position:absolute;left:300px"
        }), document.body.appendChild(c)), c.onload = s, d = setTimeout(e, f), T.on(window, "load", a)
    }
};
HashTest.supportHashEvent = function () {
    var e = "hashchange", i = document, n = i.documentMode, o = "on" + e in window && (void 0 === n || n > 7);
    return o
};
var HisManager = function () {
    this.hashtest = null, this.isSupportHistory = function () {
        return history && "function" == typeof history.pushState
    }, this.pushState = function (e, i, n, o, r, a) {
        var s = {};
        this.isSupportHistory() ? (s.title = i, s.url = n, s.mid = o, s.sid = r, s.dom = a, history.pushState(s, i, n)) : (log("unsupport history.pushState."), location.href = location.href.replace(/#.*/, "") + ("#/" + o + "/" + r), this.hashtest && this.hashtest.pushHash && this.hashtest.pushHash("#/" + o + "/" + r))
    }, this.replaceState = function () {
    }, this.getURL = function () {
    }
};
!function () {
    var e = function (e, i) {
        var n = ("FSilder_" + T.lang.guid(), this), o = null, r = null, a = null, s = null, l = null, u = null,
            d = null, c = null, m = !0, h = !1, f = 1440, b = !1, v = !1, g = null, y = [], w = [], p = null, k = null,
            S = [], A = [], q = -1, C = null, M = 200, H = 60, E = 200, _ = 66, x = 0, z = 0, I = !1, L = !1, W = null,
            B = null, D = 0, P = 1, N = !0, U = -1 != window.location.href.indexOf("#debug"), R = 0, O = !1, V = !0;
        if (F.config) {
            var X = !1;
            try {
                X = F.config.isFsHost()
            } catch (Z) {
            }
            X && (R = 1), F.config.isFsDomain && (R = 1)
        }
        var j = T.platform.isIpad;
        j && (V = !1);
        var $, G = {}, J = i || function () {
                },
            K = ['<div class="menuitem">', '	<div class="face">', '		<img width="28" height="28" src="<%logo%>">', "   </div>", '   <div class="title">', '       <h4><a href="/channel/<%listid%>/" title="<%title%>"><%title_split%></a></h4>', '       <span data-tooltip="" class="bookmark bookmark-ok" href="#"></span>', "   </div>", "</div>"].join(""),
            Q = ['<a href="<%url%>" class="l-default"><%title%></a>'].join(""), Y = function () {
                clearTimeout(z), clearTimeout(Et), n.checkMainMenuHover(!0), I = !0
            }, et = function () {
                I = !1, ot()
            }, tt = function (e) {
                e.target || e.srcElement;
                return L = !0, N ? void 0 : m ? void n.changeMenuLabel(!0) : void(e.clientX >= E || n.maxsize())
            }, it = function (e) {
                L = !1, U || (clearTimeout(Et), n.checkMainMenuHover(!1), N || I || e && e.clientX <= E || m && (clearTimeout(z), z = setTimeout(function () {
                    n.minsize()
                }, 300)))
            }, nt = function (e) {
                var e = e || window.event, i = e.currentTarget || this;
                p = i, q = y.indexOf(i);
                n.checkMainMenuHover(!0), 0 > q || (C = i, clearTimeout(x), v ? n.showPanel(q) : x = setTimeout(function (e) {
                    return function () {
                        clearTimeout(x), n.showPanel(e)
                    }
                }(q), 300), q = w.indexOf(i))
            }, ot = function () {
                clearTimeout(x), L || (x = setTimeout(n.hidePanel, 500))
            }, rt = function (e, i) {
                var n = i.listid;
                "add" == e ? (G[n] = i, G[n].id = i.listid, G[n].type = i.listtype) : "remove" == e && (G[n] = null, delete G[n]), at(), st()
            }, at = function () {
                for (var e = A, i = null, n = 0; n < e.length; n++) {
                    i = e[n];
                    var o = "1" == i.getAttribute("data-recommend") ? !0 : !1, r = i.getAttribute("data-cid"),
                        a = i.getAttribute("data-bookmark");
                    if (o && r) {
                        a && "1" == a && (G[r] = {id: r, type: "channel"});
                        var s = T.query(".bookmark", i)[0];
                        T.dom.removeClass(s, "bookmark-un"), T.dom.removeClass(s, "bookmark-nn"), G[r] ? i.setAttribute("data-bookmark", "1") : (T.dom.addClass(s, "bookmark-un"), s.setAttribute("title", "订阅"), i.setAttribute("data-bookmark", "0"))
                    }
                }
            }, st = function () {
                var e = T.query(".templet li", u);
                T.each(e, function (e) {
                    if (!T.dom.hasClass(e, "empty")) {
                        var i = e.getAttribute("data-cid"), n = e.getAttribute("data-ctype");
                        if (i) {
                            var o = T.query(".bookmark", e)[0], r = e.getAttribute("data-bookmark");
                            r && "1" == r && (G[i] = {
                                id: i,
                                type: n
                            }), o && (T.dom.removeClass(o, "bookmark-un"), T.dom.removeClass(o, "bookmark-nn"), G[i] ? (T.dom.addClass(o, "bookmark-nn"), o.setAttribute("title", "取消订阅"), e.setAttribute("data-bookmark", "1"), T.removeClass(o, "tool-tooltip"), o.setAttribute("data-tooltip", "")) : (T.dom.addClass(o, "bookmark-un"), o.setAttribute("title", "订阅"), e.setAttribute("data-bookmark", "0"), T.addClass(o, "tool-tooltip")))
                        }
                    }
                })
            }, lt = function (e, i) {
                return void ut(e, i)
            }, ut = function (e, i, n) {
                for (var o = A, r = [], a = 0; a < o.length; a++) {
                    var s = o[a].getAttribute("data-cid"), l = "1" == o[a].getAttribute("data-recommend") ? !0 : !1;
                    o[a].setAttribute("data-bookmark", "0"), s == e && (l ? "1" != i || r.push(o[a]) : r.push(o[a]))
                }
                for (var a = 0; a < r.length; a++)Tt(r[a]);
                n && "function" == typeof n && setTimeout(n, 500)
            }, dt = function (e) {
                if (e) {
                    log("addSuccess,", e);
                    var i = T.query(".menuitem  .bookmark", e)[0], n = T.query(".menuitem", e)[0];
                    i.innerHTML = "", $ = setTimeout(function () {
                        i && (T.dom.removeClass(i, "bookmark-ok"), T.dom.addClass(i, "txt-bm")), n && T.dom.removeClass(n, "menuitem-current")
                    }, 3e3), n && T.dom.addClass(n, "menuitem-current"), l && l.scrollbar && l.scrollbar.redraw()
                }
            }, ct = function (e, i) {
                var n = null, r = 0;
                if (n || (n = T.query(".separate", o)[0]), n) {
                    if (T.dom.insertAfter(e, n), !m) {
                        var a = T.query(".title", e)[0];
                        T.dom.hide(a)
                    }
                    if (A.splice(r, 0, e), F.tween(e, F.math.tweener.simple, .5, {height: 40}, dt, [e]), i) {
                        {
                            T.query(".menuitem  .bookmark", e)[0], e.getAttribute("data-cid")
                        }
                        return
                    }
                }
            }, mt = function (e) {
                T.dom.remove(e), yt()
            }, ht = function (e) {
                log("添加新的li", e), A = w, ct(e, !0)
            }, Tt = function (e) {
                log("移除已存在的li"), e.setAttribute("data-bookmark", "0");
                var i = A.indexOf(e);
                i && A.splice(i, 1), log("tmpMenu,", A, i), F.tween(e, F.math.tweener.simple, .5, {height: 0}, mt, [e])
            }, ft = function (e) {
                vt("add", l, {item: e})
            }, bt = function (e) {
                vt("remove", l, {id: e})
            }, vt = function (e, i, n) {
                var o, r = n.item, a = n.id, s = T.query(".mylist", i)[0];
                if (s) {
                    var l = T.query(".mylist .login", i)[0];
                    if ("add" == e) {
                        D += 1;
                        var u = T.query(".empty", i)[0];
                        u && T.dom.remove(u);
                        var d = T.query(".face .icon-new", i)[0];
                        d && setTimeout(function () {
                            T.dom.setStyle(d, "opacity", 1), T.dom.setStyle(d, "top", 0), T.dom.show(d), setTimeout(function () {
                                var e = F.widget.tween.Tweener, i = {top: "-6", opacity: 0};
                                for (var n in i)e.add(d, {
                                    prop: n,
                                    time: 1e3,
                                    end: i[n],
                                    method: F.math.tweener.easeInCubic,
                                    onComplete: function () {
                                    }
                                })
                            }, 1e3)
                        }, 1e3), l ? T.dom.insertAfter(r, l) : r && T.dom.insertInnerBefore(r, s)
                    } else if (e = "del") {
                        D -= 1, 0 >= D && (D = 0);
                        var d = T.query(".face .icon-new", i)[0];
                        d && 0 >= D && T.dom.hide(d), o = T.query("li", s);
                        for (var c = 0; c < o.length; c++)o[c].getAttribute("data-cid") == a && T.dom.remove(o[c]);
                        if (o = T.query("li", s), o.length <= 0) {
                            var m = document.createElement("li");
                            m.innerHTML = "<div class='icon'></div>您还没有订阅专辑和影视剧哦～", m.setAttribute("class", "empty"), s.appendChild(m)
                        }
                    }
                }
            }, gt = function () {
                g = [];
                var e = T.query(".menu > li", l), i = e.length;
                g = [];
                for (var n = 0; i > n; n++) {
                    T.on(e[n], "mouseover", nt), T.on(e[n], "mouseout", ot);
                    var o = e[n].getAttribute("data-cid"), r = T.query(".menuitem-sug .bookmark", e[n])[0];
                    r && T.on(r, "click", function (e, i) {
                        return function () {
                            A = w;
                            var n = i.getAttribute("data-bookmark");
                            if (void 0 != n) {
                                var o = new F.widget.subscription.Subscriber, r = i.getAttribute("data-recommend");
                                "1" != n ? o.subscribe(e, "", null, 0, r) : o.unSubscribe(e, "", null, 0, r)
                            }
                        }
                    }(o, e[n]));
                    var a = T.q("templet", e[n]);
                    if (a) {
                        var s = "";
                        if (a[0]) {
                            var u = a[0].getAttribute("class");
                            s = '<div class="' + u + '">' + a[0].innerHTML + "</div>"
                        }
                        g[n] = {info: {id: "m" + n, title: "", url: ""}, contentHTML: s, content: a[0]}
                    }
                    w.push(e[n]), y.push(e[n])
                }
            }, yt = function () {
                l.scrollbar && l.scrollbar.redraw(), u.scrollbar && u.scrollbar.redraw()
            }, wt = !0, pt = function () {
                var e = _, i = T.page.getViewHeight(), n = 0, o = T.query(".templet", u);
                if (o && o[0]) {
                    var r = o[0].getAttribute("data-initheight");
                    n = r && "0" != r ? 0 : o[0].offsetHeight
                }
                if (p) {
                    o && o[0] && (n = o[0].getAttribute("data-initheight") || o[0].offsetHeight);
                    var s = (Number(n) || 0, i - e), l = Math.min(420, s), d = Math.min(Math.min(420, n), s),
                        c = T.dom.getPosition(p), m = c.top - e - (T.page.getScrollTop() || 0);
                    m = m - d / 2 + 17, 0 >= m && (m = 0);
                    m + d > s && (m -= m + d - s + 10), T.dom.setStyle(a, "top", m), u.removeAttribute("style"), n >= l && T.setStyle(u, "height", l), u.scrollbar && u.scrollbar.redraw()
                }
                return void st();
                var e, i
            }, kt = function (e) {
                var i = T.query(".welcome", o)[0];
                if (i) {
                    var n = T.dom.getStyle(d, "top");
                    T.setStyles(i, {width: E + 20, height: e});
                    var r = T.query(".pane", i)[0];
                    r && T.setStyles(r, {top: parseInt(n) - 92, left: E + 5})
                }
            }, St = function (e) {
                if (!(H >= E) || b) {
                    var i = e.target || e.srcElement;
                    baidu.dom.contains(o, i) || et()
                }
            }, At = function () {
                var e = _, i = T.page.getViewHeight();
                "undefined" != typeof window.innerHeight && window.innerHeight && (i = Math.max(i, window.innerHeight));
                var r = T.page.getViewWidth(!0), a = i - e, u = T.query(".mainmenu .bottom", o);
                if (u && u[0] && (a -= u[0].offsetHeight), l) {
                    T.setStyle(l, "height", a), T.setStyle(s, "height", i), T.setStyle(o, "top", _), T.setStyle(d, "top", (i - e) / 2 - d.offsetHeight / 2), yt(), pt(), kt(i);
                    var c = m ? M : H;
                    if (f >= r && (c = H), m ? T.observer.send(F.EventCenter.SIDEBAR_MAXSIZE, {sidebarWidth: c}) : T.observer.send(F.EventCenter.SIDEBAR_MINSIZE, {sidebarWidth: c}), n.lockSidebar(f >= r ? !0 : !1), o)try {
                        o.setAttribute("data-top", _), o.setAttribute("data-left", 0)
                    } catch (h) {
                    }
                    if (J) {
                        try {
                            J(0, _)
                        } catch (h) {
                        }
                        J = null
                    }
                }
            }, Ft = function () {
                var e = parseInt(T.getStyle(r, "width").replace("px", ""));
                T.setStyle(a, "left", e);
                T.setStyle(s, "left", e - M), c && T.setStyle(c, "width", e - 16), l.scrollbar.redraw(), T.browser.ie && T.browser.ie <= 6 && (T.setStyle(l, "width", e), l.scrollbar.redraw());
                var e = r.offsetWidth;
                T.observer.send(F.EventCenter.SIDEBAR_UPDATE, {sidebarWidth: e})
            }, qt = function () {
                E = m ? M : H, m ? (T.removeClass(d, "slider-on"), T.dom.setAttr(d, "title", "收起导航")) : (T.addClass(d, "slider-on"), T.dom.setAttr(d, "title", "展开导航")), T.setStyle(d, "left", E), T.setStyle(r, "width", E), T.setStyle(s, "left", E - M);
                Mt(m)
            }, Ct = function (e) {
                var i = T.query(".page-wrap");
                if (i[0]) {
                    var o = T.dom.getPosition(i[0]);
                    if ("undefined" == typeof e) {
                        var r = F.tool.cookie.get("_m_maxsize"), a = T.dom.getStyle(i[0], "padding-left");
                        a = parseInt((a + "").replace("px", "")) || 0, e = "1" == r ? !0 : !1, a >= 200 ? n.maxsize() : n.minsize()
                    } else o.left > M && (e = !1), e ? T.each(i, function (e) {
                        T.setStyle(e, "padding-left", M)
                    }) : T.each(i, function (e) {
                        T.setStyle(e, "padding-left", H)
                    })
                }
            }, Mt = function (e, i) {
                e ? (T.removeClass(d, "slider-on"), T.dom.setAttr(d, "title", "收起导航")) : (T.addClass(d, "slider-on"), T.dom.setAttr(d, "title", "展开导航"), wt = !0), e || n.changeMenuLabel(!1), e || (N = !1), e ? T.observer.send(F.EventCenter.SIDEBAR_MAXSIZE, {sidebarWidth: M}) : T.observer.send(F.EventCenter.SIDEBAR_MINSIZE, {sidebarWidth: H}), E = m ? M : H;
                parseInt(T.getStyle(r, "width").replace("px", ""));
                if (b || T.show(d), T.setStyle(d, "left", E), c && T.setStyle(c, "width", E - 16), T.browser.ie && T.browser.ie <= 7 && (T.setStyle(l, "width", E + "px"), l.scrollbar.redraw()), T.setStyle(s, "left", E - M), T.setStyle(r, "width", E), T.browser.ie && T.browser.ie <= 6)try {
                    T.setStyle(T.query(".bottom", r)[0], "width", E - 26)
                } catch (o) {
                }
                i && Ct(e)
            };
        this.changeMenuLabel = function (e) {
            R && (e = !0);
            var i = T.query(".menu .menuitem .title", r);
            T.each(i, function (i) {
                e ? T.dom.show(i) : T.dom.hide(i)
            })
        }, this.minsize = function (e) {
            n.isClient() || (m = !1, V ? F.tween(r, F.math.tweener.simple, .5, {width: H}, Mt, [!1, e], Ft, [!1]) : F.tween(r, F.math.tweener.simple, 0, {width: H}, Mt, [!1, e], Ft, [!1]), F.tool.cookie.set("_m_maxsize", "0"), T.hide(d), n.hideSubMenu())
        }, this.maxsize = function (e) {
            n.isClient() || (m = !0, this.changeMenuLabel(!0), V ? F.tween(r, F.math.tweener.simple, .5, {width: M}, Mt, [!0, e], Ft, [!0]) : F.tween(r, F.math.tweener.simple, 0, {width: M}, Mt, [!0, e], Ft, [!0]), F.tool.cookie.set("_m_maxsize", "1"), T.hide(d), n.hideSubMenu())
        }, this.toggleMenu = function () {
            n.isClient() || (h = !1, N = !0, m ? n.minsize(!0) : n.maxsize(!0))
        }, this.hideSubMenu = function () {
            U || T.setStyle(a, "visibility", "hidden")
        };
        var Ht = function (e, i) {
            if (e) {
                var n = T.query(".menuitem", e);
                n && n[0] && (T.dom.removeClass(e, "menuitem-current"), T.dom.removeClass(n[0], "menuitem-current"), i && (T.dom.addClass(n[0], "menuitem-current"), T.dom.addClass(e, "menuitem-current")))
            }
        }, Et = null, _t = !1;
        this.checkMainMenuHover = function (e) {
            Ht(k, !1), p && "1" != p.getAttribute("data-type") || (Ht(p, e), k = p)
        };
        var xt = function (e) {
            e && (e.offsetHeight <= 0 ? T.dom.setAttr(e, "visibility", "hidden") : T.dom.setAttr(e, "visibility", "visible"))
        }, zt = function (e) {
            _t = !1, e ? (clearTimeout(Et), n.checkMainMenuHover(!1), T.setStyle(a, "visibility", "hidden"), N || L || n.minsize()) : (T.dom.addClass(a, "z-10"), pt(), T.setStyle(a, "left", M))
        };
        this.getSubscriptionPosition = function () {
            var e = T.dom.query(".mi-my", o), i = T.dom.getPosition(e[0]);
            return i.left += E, i
        }, this.hidePanel = function () {
            U || I || (v = !1, F.killtween(a), T.dom.removeClass(a, "z-10"), _t = !0, V ? F.tween(a, F.math.tweener.simple, .5, {left: -200 + E}, zt, [!0], xt) : F.tween(a, F.math.tweener.simple, 0, {left: -200 + E}, zt, [!0], xt))
        }, this.onStorageEvent = function (e) {
            var i = this;
            e && "subscribe" == e.key && setTimeout(function () {
                var n = window.localStorage[e.key];
                return n = T.json.parse(n), console.log("onStorageEvent", e, n), n.pagetime && n.pagetime == F.config.timeStart ? void console.log("ingore current page.") : void("add" == n.method ? i.onSubscribeAdd(n) : i.onSubscribeDel(n))
            }, 100)
        }, this.initSessionSubscribe = function () {
            var e = this;
            "undefined" != typeof window.sessionStorage && T.on(window, "storage", T.fn.bind(e.onStorageEvent, e))
        }, this.lockSidebar = function (e) {
            return n.isClient() ? void T.dom.hide(d) : (b = e, h || (N = !1), e || Ct(), m && b && this.minsize(!0), void(b ? T.dom.hide(d) : T.dom.show(d)))
        };
        var It = function (e) {
            var e = e || window.event, i = e.target || e.srcElement, n = (S.indexOf(i), null);
            if (i && i.menu && (n = i.menu), n) {
                var o = n.getAttribute("data-cid"), r = n.getAttribute("data-bookmark");
                if (void 0 != r) {
                    var a = new F.widget.subscription.Subscriber;
                    "1" != r ? (a.subscribe(o), n.setAttribute("data-bookmark", "1")) : (a.unSubscribe(o), n.setAttribute("data-bookmark", "0"))
                }
            }
        };
        this.hideNewUser = function () {
            var e = T.query(".welcome", o)[0];
            e && T.dom.remove(e)
        }, this.checkNewUser = function () {
            if (!b) {
                var e = !1;
                try {
                    e = F.tool.user.isNewUser()
                } catch (i) {
                }
                if (e) {
                    var r = T.query(".welcome", o)[0];
                    if (r) {
                        m || T.dom.show(r);
                        var a = T.query(".btn", r)[0];
                        T.on(a, "click", function () {
                            n.hideNewUser()
                        })
                    }
                }
            }
        }, this.setLoginedState = function () {
            var e = T.query(".login", o);
            T.each(e, function (e) {
                T.dom.remove(e)
            })
        }, this.lazyload = function () {
            if (!W)try {
                W = F.widget.lazyloading.LazyWraper
            } catch (e) {
            }
            W && (B ? B.registry(u) : B = new W(u)), T.each(T.query("img", u), function (e) {
                e.instance && e.instance.start()
            })
        }, this.showPanel = function (e) {
            if (1 != P || m) {
                var i = E;
                T.each(S, function (e) {
                    T.un(e, "click", It)
                }), S = [];
                var o = g[e], r = T.dom.children(u);
                T.each(r, function (e) {
                    T.dom.remove(e)
                });
                var s = !1;
                if (o && o.content) {
                    var l = T.dom.children(o.content);
                    if (l && l.length > 0) {
                        s = !0;
                        var d = w[e], c = !1, h = T.query(".mi-my", d);
                        if (h && h.length > 0 && (c = !0), c) {
                            var f = "";
                            try {
                                f = T.query(".templet", d)[0].innerHTML, f = '<div class="templet">' + f + "</div>"
                            } catch (b) {
                            }
                            u.innerHTML = f
                        } else u.appendChild(o.content);
                        n.lazyload();
                        var y = T.query(".templet", u);
                        if (y && y[0] && (T.dom.show(y[0]), y[0].setAttribute("data-initwidth", y[0].offsetWidth)), u.removeAttribute("style"), u.scrollbar) {
                            var t = o.content;
                            if (t = y, T.browser.ie && T.browser.ie <= 7) {
                                var p = T.query(".templet_mix", u)[0], k = T.query(".submenu .container")[0];
                                k && T.dom.removeClass(k, "w270"), p && k && T.dom.addClass(k, "w270")
                            }
                            u.scrollbar.setTarget(y[0]), u.scrollbar.setValue(0), u.scrollbar.redraw()
                        }
                        var A = T.query(".bottom", a)[0];
                        A && (d && "history" == d.getAttribute("data-type") ? T.show(A) : T.hide(A)), pt();
                        for (var q = T.query("ul > li", u), C = q.length || 0, H = 0; C > H; H++) {
                            var _ = T.query(".menuitem .bookmark", q[H])[0];
                            if (_) {
                                {
                                    q[H].getAttribute("data-cid")
                                }
                                T.on(_, "click", It), _.menu = q[H], S.push(_)
                            }
                        }
                    }
                }
                if (i = M, !v && s ? (T.show(u), T.setStyle(a, "visibility", "visible"), _t = !0, V ? F.tween(a, F.math.tweener.simple, .5, {left: i}, zt, [!1], xt, [a]) : F.tween(a, F.math.tweener.simple, 0, {left: i}, zt, [!1], xt, [a])) : _t || T.setStyle(a, "left", i), v = !0, pt(), s) T.show(u), T.setStyle(a, "visibility", "visible"), u.scrollbar && u.scrollbar.redraw(); else {
                    if (T.setStyle(a, "visibility", "hidden"), L)return;
                    n.hidePanel()
                }
            }
        }, this.isClient = function () {
            return 1 == R
        }, this.initialize = function (e) {
            var i = this;
            if (!e)throw new Error("*** 未设定父容器id ***");
            o = T.g(e), o.instance = this;
            var n = F.tool.cookie.get("_m_maxsize");
            m = "0" == n || "" == n ? !1 : !0, i.isClient() && (M = H = 130, m = !0), h = m, "index_" == F.config.ctrlname && (h = !0, m = !0, N = !0), "vplay_" == F.config.ctrlname && (h = !1, m = !1, N = !1), baidu.page.getWidth() <= f && (m = !1), this.isClient() && (m = !0), T.show(o);
            try {
                o.style.visibility = "visible"
            } catch (b) {
            }
            var v = null;
            v = T.query("#nav-container")[0];
            var g = T.query("#nav-container-main")[0];
            if (T.browser.ie && T.browser.ie <= 6) setTimeout(function () {
                if (_ = v ? v.offsetHeight : 0, g) {
                    var e = g.offsetHeight;
                    _ = Math.max(e, _)
                }
            }, 1); else if (_ = v ? v.offsetHeight : 0, g) {
                var y = g.offsetHeight;
                _ = Math.max(y, _)
            }
            r = T.query(".mainmenu", o)[0], a = T.query(".submenu", o)[0], s = T.query(".menuShadow", o)[0];
            var p = 0;
            T.browser.ie && T.browser.ie <= 6 && (p = 200), d = T.q("slider", o)[0], c = T.query(".bottom-line", o)[0];
            var k = function () {
                l = T.query(".mainmenu>.container", o)[0], l.scrollbar = new ScrollBar("", {
                    target: T.q("menu", l)[0],
                    overcontent: !0,
                    autohide: !0
                }), u = T.query(".submenu > .container", o)[0], u.scrollbar = new ScrollBar("", {
                    target: T.q("templet", u)[0],
                    overcontent: !0,
                    autohide: !0
                }), T.browser.ie && T.browser.ie <= 6 && (F.Event.delegate(u, "li", "mouseover", function (e) {
                    e.target || e.srcElement;
                    if ("0" == this.getAttribute("data-bookmark")) {
                        var i = T.query(".bookmark", this);
                        i && i[0] && T.dom.show(i[0])
                    }
                }), F.Event.delegate(u, "li", "mouseout", function () {
                    var e = T.query(".bookmark", this);
                    e && e[0] && T.dom.hide(e[0])
                }))
            };
            p > 0 ? setTimeout(function () {
                k()
            }, p) : k(), T.browser.ie && T.browser.ie <= 6 ? setTimeout(function () {
                qt(), gt()
            }, 300) : (qt(), gt()), T.on(window, "resize", At), T.on(document, "click", St), T.on(d, "click", i.toggleMenu), T.on(a, "mouseover", Y), T.on(a, "mouseout", et), j ? T.on(r, "click", tt) : (T.on(r, "mouseover", tt), T.on(r, "mouseout", it));
            var S = T.query(".submenu .close")[0];
            j && (T.on(S, "click", function () {
                I = !1, N = !1, L = !1, i.hidePanel()
            }), S && T.show(S)), T.observer.add("login", function () {
                O = !0, i.setLoginedState()
            });
            var q = function (e) {
                var i = null, e = e || {};
                if (e.listid || (e.listid = e.sub_num), e.title_split = e.title.substring(0, 6), "channel" == e.listtype) {
                    i = T.dom.create("li", {style: "height:0px"});
                    var n = F.tpl.compile(K)(e);
                    i.innerHTML = n, i.setAttribute("data-cid", e.listid), i.setAttribute("data-ctype", e.listtype), i.setAttribute("data-bookmark", "1"), i.setAttribute("data-num", e.sub_num), e.element ? setTimeout(function () {
                        ht(i)
                    }, 1e3) : ut(e.listid, e.recommend, function () {
                        ht(i)
                    })
                } else {
                    i = T.dom.create("li");
                    var n = F.tpl.compile(Q)(e);
                    i.innerHTML = n, i.setAttribute("data-cid", e.listid), i.setAttribute("data-ctype", e.listtype), i.setAttribute("data-bookmark", "1"), i.setAttribute("data-num", e.sub_num), ft(i)
                }
                rt("add", e)
            }, C = function (e) {
                e = e || {}, A = w, "channel" == e.listtype ? lt(e.listid, e.recommend) : bt(e.listid), rt("remove", e)
            };
            i.onSubscribeAdd = q, i.onSubscribeDel = C, T.observer.add(F.EventCenter.SUBSCRIBE_ADD, q), T.observer.add(F.EventCenter.SUBSCRIBE_CANCEL, C), T.browser.ie && T.browser.ie <= 6 ? setTimeout(At, 300) : At(), this.checkNewUser(), O = F.user.isLogin(), O && this.setLoginedState(), this.initSessionSubscribe()
        }, this.initialize(e)
    };
    F.namespace("widget.sidebar", "sidebar", e)
}();
;!function () {
    if (F.config.ctrlnav) {
        var e = "", n = !1, o = null, i = "_m_session", a = "sidebarhtml", r = 120,
            c = F.config.isFsHost || F.config.isFsDomain, f = !1;
        try {
            f = window.localStorage ? !0 : !1
        } catch (d) {
        }
        var s = function () {
            var n = parseInt(F.cookie.get(i) + "") || 0, o = (new Date).valueOf() / 1e3;
            if (f)if (o - n > r) v(); else try {
                e = window.localStorage.getItem(a)
            } catch (c) {
            }
            l(e)
        }, u = function (e) {
            if (n) {
                var i = T.query("#wrap-sidebar")[0];
                i || (i = document.body);
                try {
                    e = decodeURIComponent(e)
                } catch (r) {
                }
                if (-1 == e.indexOf("<div") || -1 != e.indexOf("corsair"))return void(o && o.set(a, ""));
                T.dom.insertHTML(i, "afterBegin", e), F.load("widget.sidebar.sidebar", function () {
                    var e = F.widget.sidebar.sidebar, n = null, o = function () {
                        setTimeout(function () {
                            window.fixedIE6 && window.fixedIE6()
                        }, 500)
                    };
                    try {
                        n = new e("mod-sidebar", o)
                    } catch (i) {
                    }
                })
            }
        }, l = function (n) {
            var o = "";
            try {
                o = decodeURIComponent(n)
            } catch (r) {
            }
            if (("null" == o || "undefined" == o) && (o = ""), o) u(o); else {
                var d = F.config.api + "/api/vertical_nav/?from=fun.tv";
                d += c ? "&host=fs" : "&host=open", F.http.get(d, function () {
                    e = arguments[0];
                    try {
                        e = encodeURIComponent(e)
                    } catch (n) {
                    }
                    if (u(e), f)try {
                        window.localStorage.setItem(a, e);
                        var o = Math.floor((new Date).valueOf() / 1e3);
                        F.cookie.set(i, o, -1)
                    } catch (n) {
                    }
                }, {format: "text"})
            }
        }, v = function () {
            console.log("清除会话session Storage."), e = "", F.cookie.set(i, "0", -1)
        }, m = function () {
            var e = function () {
                v()
            }, n = function (e) {
                var n = e.ctrlKey, o = (e.shiftKey, e.altKey), i = e.keyCode;
                n && o && 68 == i && (v(), alert("本地菜单缓存数据清除成功."))
            };
            T.on(document, "keyup", n), T.observer.add(F.EventCenter.SUBSCRIBE_ADD, e), T.observer.add(F.EventCenter.SUBSCRIBE_CANCEL, e), setTimeout(function () {
                v()
            }, 1e3 * r)
        }, g = function () {
            n = !0, e && u(e);
            var o = function () {
            };
            o()
        };
        s(), m(), T.ready(g)
    }
}();
;!function () {
    function e() {
    }

    var i = F.config.api;
    e.prototype.isSubscribed = function () {
    }, e.prototype.subscribe = function (e, s, n, o, r) {
        if (!F.tool.user.isLogin())return void F.tool.user.isLogin(!0);
        var a = this;
        s = null == s || void 0 == s || "" == s ? 1 : Number(s);
        var u = i + "/ajax/pgc_subscribe/add/" + e + "?type=" + s;
        F.get(u, function (i) {
            if (!i || 200 != i.status)return void(i && 403 == i.status && F.tool.user.isLogin(!0));
            var u = i.data;
            u.listtype = 1 == s || 2 == s || isNaN(s) ? "channel" : "gallery", F.config.isFsHost && (u.listtype = "gallery"), u.listid = e, u.element = n, u.factorType = s;
            var d = o + 1;
            u.sub_num = d, u.recommend = r, T.observer.send(F.EventCenter.SUBSCRIBE_ADD, u), a.setSessionStorage(u, "add")
        })
    }, e.prototype.unSubscribe = function (e, s, n, o, r) {
        var a = this;
        s = null == s || void 0 == s || "" == s ? 1 : Number(s);
        var u = i + "/ajax/pgc_subscribe/cancel/" + e + "?type=" + s;
        F.get(u, function (i) {
            if (!i || 200 != i.status)return void(i && 403 == i.status && F.tool.user.isLogin(!0));
            var u = i.data;
            u.listtype = 1 == s || 2 == s || isNaN(s) ? "channel" : "gallery", F.config.isFsHost && (u.listtype = "gallery"), u.listid = e, u.element = n;
            var d = o - 1;
            d = 0 >= d ? 0 : d, u.sub_num = d, u.recommend = r, u.factorType = s, T.observer.send(F.EventCenter.SUBSCRIBE_CANCEL, u), a.setSessionStorage(u, "del")
        })
    }, e.prototype.setSessionStorage = function (i, s) {
        if ("undefined" != typeof window.sessionStorage) {
            var n = T.extend(baidu.extend({}, i));
            n.element = null, n.method = s, n.pagetime = F.config.timeStart || 0;
            var o = T.json.stringify(n);
            try {
                window.localStorage.setItem(e.SESSION_KEY, o), window.sessionStorage.setItem(e.SESSION_KEY, o)
            } catch (r) {
            }
        }
    }, e.synchronizeAll = function () {
        var e = {}, i = [];
        T.each(T.query(".tool-subscription"), function (s) {
            var n = s.getAttribute("data-id"), o = s.getAttribute("data-type") || 1;
            n && "0" != n && (e[n] || (e[n] = {id: n, type: o, dom: []}, i.push(n + "#" + o)), e[n].dom.push(s))
        }), i.length <= 0 || F.jsonp(F.config.api + "/api_subscribe/?sid=" + encodeURIComponent(i.join(",")), function (i) {
            if (i && 200 == i.status)for (var s = i.data || [], n = null, o = 0; o < s.length; o++) {
                var r = s[o].sid, a = Boolean(s[o].subscription);
                if (r) {
                    var u = e[r];
                    if (u && u.dom)for (var d = 0; d < u.dom.length; d++)n = u.dom[d], a ? (T.dom.addClass(n, "subscriptioned"), "1" == n.getAttribute("data-text") && (n.innerHTML = "已订阅")) : (T.dom.removeClass(n, "subscriptioned"), "1" == n.getAttribute("data-text") && (n.innerHTML = ""))
                }
            }
        })
    }, e.SESSION_KEY = "subscribe", F.namespace("widget.subscription", "Subscriber", e)
}();
;T.dom.ready(function () {
    function e(e, i) {
        function n(e) {
            for (var n = T.query(".tool-subscription"), s = null, a = 0; a < n.length; a++) {
                var s = n[a], u = s.getAttribute("data-id");
                if (u == i.listid) {
                    "add" == e.types ? T.dom.addClass(s, "subscriptioned") : T.dom.removeClass(s, "subscriptioned");
                    var r = T.query(".innerText", s)[0];
                    r ? r.innerHTML = 1 == s.getAttribute("data-text") ? "add" == e.types ? e.text : "" : e.text : s.innerHTML = 1 == s.getAttribute("data-text") ? "add" == e.types ? e.text : "" : e.text, T.setAttr(s, "title", e.text);
                    var d = T.query(".subnum", s.parentNode)[0];
                    d && (d.innerHTML = o, s.setAttribute("data-subnum", o));
                    var c = T.dom.getAncestorByClass(s, "js-sub-wrap");
                    if (c) {
                        var d = T.query(".subnum", c)[0];
                        d && (d.innerHTML = o, s.setAttribute("data-subnum", o))
                    }
                }
            }
        }

        var o = (e.title || "", e.logo || "", e.sub_num);
        n("add" == i.subtype ? {text: "已订阅", types: "add"} : {text: "订阅", types: "cancel"})
    }

    function i(e, i, n) {
        if (e && i) {
            var o = T.dom.hasClass(e, "subscriptioned"), s = T.dom.hasClass(e, "subscription-disable");
            if (!s) {
                var a = T.query(".subnum", e.parentNode)[0], u = 0;
                u = a ? Number(a.innerHTML) || 0 : Number(e.getAttribute("data-subnum")) || 0;
                var r = new F.widget.subscription.Subscriber;
                o ? r.unSubscribe(i, n, e, u) : r.subscribe(i, n, e, u)
            }
        }
    }

    function n(e) {
        e && e.id && e.type && F.log.action({
            flag: e.action,
            action: "feed",
            mediatype: 1 == e.factorType ? "|||" + e.id : "|" + e.id + "||"
        })
    }

    var o = o || window.document, s = function (e, i) {
        var n = document.createElement("div"), o = e, s = T.g("mod-sidebar"), a = !1;
        T.browser && T.browser.ie < 7 && (a = !0), this.start = function () {
            if (o && s && s.instance) {
                var e = baidu.page.getScrollTop() || 0, u = 0, r = 0, d = function () {
                    var i = baidu.page.getScrollTop() || 0;
                    u = i - e
                }, c = T.dom.getPosition(o), l = c.top, p = s.instance.getSubscriptionPosition();
                p.left = 15, "channel" != i || (p.top += 40), a || (l -= e, p.top -= e), T.dom.setStyle(n, "left", c.left), T.dom.setStyle(n, "top", l), document.body.appendChild(n), n.className = "subscribe_ani z-act", a && T.dom.setStyle(n, "position", "absolute"), F.load("widget.tween.Tweener", function () {
                    var e = F.widget.tween.Tweener, i = Math.floor(c.left / 2);
                    300 >= i && (i = 300);
                    var o = Math.min(p.top, l) - 100;
                    return 0 >= o && (o = 0), F.parabola({x: c.left, y: l}, {x: p.left, y: p.top}, o, {
                        duration: 1e3,
                        onTween: function (e, i) {
                            n.style.left = e + "px", n.style.top = i + u + "px";
                            e / c.left
                        },
                        onFinish: function () {
                            setTimeout(function () {
                                e.add(n, {
                                    prop: "opacity",
                                    time: 50,
                                    end: 0,
                                    method: F.math.tweener.easeInCubic,
                                    onComplete: function () {
                                        T.dom.remove(n)
                                    }
                                })
                            }, 10), T.un(window, "scroll", d)
                        }
                    }), void(a && (clearTimeout(r), r = setTimeout(function () {
                        T.un(window, "scroll", d)
                    }, 1500), T.on(window, "scroll", d)))
                })
            }
        }
    };
    !function () {
        function e() {
            this.init()
        }

        e.prototype.contrast = function () {
            var e = this, i = T.query("body")[0],
                n = ['<div class="sub-shade z-act" id="subShade"></div>', '<div class="sub-window z-root" id="subWindow">', '<p class="sub-txt">是否将本地订阅与观看历史同步至账号？</p>', '<p class="sub-btns"><a href="javascript:;" id="subSubmit">同步</a><a href="javascript:;" id="subEsc">不同步</a></p>', '<a href="javascript:;" class="sub-colse" id="subColseBtn" title="关闭">关闭</a>', "</div>"].join("");
            T.dom.insertHTML(i, "afterBegin", n), e.bind()
        }, e.prototype.bind = function () {
            function e(e) {
                T.event.stop(T.event.get(e)), T.dom.remove(u), T.dom.remove(a)
            }

            var i = this, n = T.get("subColseBtn"), o = T.get("subSubmit"), s = T.get("subEsc"), a = T.get("subShade"),
                u = T.get("subWindow");
            a && u && n && o && s && (i.reset(), T.on(n, "click", function (i) {
                e(i), F.cookie.set("_subWindow", 1)
            }), T.on(o, "click", function (i) {
                F.get(F.config.api + "/ajax/sync_sub/sync/", function (n) {
                    n && 200 == n.status && (e(i), window.location.reload())
                })
            }), T.on(s, "click", function (i) {
                e(i), F.cookie.set("_subWindow", 1)
            }), T.on(window, "resize", i.reset))
        }, e.prototype.reset = function () {
            var e = T.get("subShade"), i = T.get("subWindow"), n = T.page.getWidth() + "px",
                o = T.page.getHeight() + "px", s = Math.ceil(T.page.getViewWidth() / 2) + "px",
                a = Math.ceil(T.page.getViewHeight() / 2) + "px";
            T.dom.setStyle(e, "width", n), T.dom.setStyle(e, "height", o), T.dom.setStyle(i, "left", s), T.dom.setStyle(i, "top", a)
        }, e.prototype.init = function () {
            var e = this, i = F.config.api + "/ajax/sync_sub/compare/";
            F.tool.user.userid && 1 != F.cookie.get("_subWindow") && F.get(i, function (i) {
                i && 200 == i.status && 1 == i.data && e.contrast()
            })
        }
    }(), T.observer.add(F.EventCenter.SUBSCRIBE_ADD, function (i) {
        e(i, {subtype: "add", listid: i.listid, sub_num: i.sub_num}), n({
            action: 1,
            id: i.listid,
            type: i.listtype,
            factorType: i.factorType
        }), i.element && new s(i.element, i.listtype).start()
    }), T.observer.add(F.EventCenter.SUBSCRIBE_CANCEL, function (i) {
        e(i, {subtype: "cancel", listid: i.listid, sub_num: i.sub_num}), n({
            action: 0,
            id: i.listid,
            type: i.listtype,
            factorType: i.factorType
        })
    }), F.Event.delegate(o, ".tool-subscription", "click", function (e) {
        T.event.stop(T.event.get(e));
        var n = T.getAttr(this, "data-id"), o = T.getAttr(this, "data-type");
        i(this, n, o)
    });
    var a = {
        bindMouseAct: function (e) {
            e = e || document, F.Event.delegate(e, ".tool-subscription", "mouseover", function (e) {
                T.event.stop(T.event.get(e));
                var i = this;
                1 == i.getAttribute("data-text") || (i.innerHTML = "")
            }), F.Event.delegate(e, ".tool-subscription", "mouseout", function (e) {
                T.event.stop(T.event.get(e));
                var i = this;
                1 == i.getAttribute("data-text") || (i.innerHTML = "")
            })
        }
    };
    F.namespace("widget.subscription", "subscription", a)
});
;!function () {
    var e = {target: "", interactive: 1, direction: "top", className: "com-tooltip z-act"},
        n = ['<div class="tooltip top">', '	<div class="content"></div>', '	<div class="conner"></div>', "</div>"].join(""),
        o = function (n, o) {
            var i = this, a = baidu.extend(baidu.extend({}, e), o);
            i.options = a, i.GUID = T.lang.guid(), i.size = {
                x: 0,
                y: 0
            }, i.delayId = 0, i.target = T.g(a.target), i.parentContainer = T.g(n), (i.target || i.parentContainer) && (i.target && (i.parentContainer || (i.parentContainer = document.body)), i.container = T.dom.create("div", {
                id: i.GUID,
                className: e.className,
                style: "position:absolute;left:0;top:0;display:none;"
            }), i._init())
        };
    o.prototype._init = function () {
        var e = this;
        e.container.innerHTML = n, e.parentContainer.appendChild(e.container), e.styleHolder = T.query(".tooltip", this.container)[0], e.content = T.query(".content", this.container)[0], e.uiconner = T.query(".conner", this.container)[0], e.update(), e.redraw()
    }, o.prototype.update = function () {
        var e = this, n = this.target.getAttribute("data-tooltip");
        e.content && (e.content.innerHTML = n), T.show(e.container);
        var o = {x: 11, y: 4};
        switch (e.size = {
            x: e.content.offsetWidth,
            y: e.content.offsetHeight
        }, e.options.direction = e.target.getAttribute("data-dir"), e.styleHolder.className = "tooltip " + (e.options.direction || "top"), e.options.direction) {
            case"bottom":
                T.dom.insertBefore(e.uiconner, e.content), e.size.y += o.y;
                break;
            case"left":
                T.dom.insertBefore(e.content, e.uiconner), e.size.x += o.y;
                break;
            case"right":
                T.dom.insertBefore(e.content, e.uiconner), e.size.x += o.y;
                break;
            default:
                T.dom.insertBefore(e.content, e.uiconner), e.size.y += o.y
        }
        T.hide(e.container)
    }, o.prototype.enabled = function () {
        var e = this;
        return e.target && e.target.getAttribute("data-tooltip") ? !0 : !1
    }, o.prototype.show = function () {
        var e = this;
        this.update(), this.redraw(), clearTimeout(e.delayId), e.delayId = setTimeout(function () {
            e.enabled() && T.show(e.container)
        }, 800)
    }, o.prototype.hide = function () {
        clearTimeout(this.delayId), T.hide(this.container)
    }, o.staticInstance = void 0, o.items = [], o.prototype.__onEvent = function (e) {
        var e = e || window.event, n = e.type;
        switch (n) {
            case"mouseover":
                o.staticInstance.target = this, o.staticInstance.show();
                break;
            case"mouseout":
            case"mouseleave":
                o.staticInstance.hide()
        }
    }, o.prototype.__addEvent = function (e) {
        T.on(e, "mouseover", this.__onEvent), T.on(e, "mouseout", this.__onEvent), T.on(e, "mouseleave", this.__onEvent)
    }, o.prototype.__removeEvent = function (e) {
        T.un(e, "mouseover", this.__onEvent), T.un(e, "mouseout", this.__onEvent)
    }, o.prototype.bindTarget = function (e) {
        var n = this;
        o.items.push(e), n.__addEvent(e)
    }, o.prototype.unbindTarget = function (e) {
        var n = o.items.indexOf(e);
        -1 != n && (o.items.splice(n, 1), self.__removeEvent(e))
    }, o.prototype.redraw = function () {
        var e = this, n = T.dom.getPosition(e.target), o = n.left, i = n.top, a = {x: 11, y: 4};
        switch (e.options.direction) {
            case"bottom":
                i += e.target.offsetHeight, o -= e.size.x / 2 - e.target.offsetWidth / 2, T.setStyle(e.uiconner, "left", Math.floor(e.size.x / 2 - a.x / 2) + "px");
                break;
            case"left":
                o -= e.size.x, T.setStyles(e.uiconner, {
                    left: e.size.x - a.y + "px",
                    top: Math.floor(e.size.y / 2 - a.x / 2)
                }), i -= e.size.y / 2 - e.target.offsetHeight / 2;
                break;
            case"right":
                T.setStyles(e.uiconner, {
                    left: "0px",
                    top: Math.floor(e.size.y / 2 - a.x / 2)
                }), o += e.target.offsetWidth, i -= e.size.y / 2 - e.target.offsetHeight / 2;
                break;
            default:
                o -= e.size.x / 2 - e.target.offsetWidth / 2, i -= e.size.y, T.setStyle(e.uiconner, "left", Math.floor(e.size.x / 2 - a.x / 2) + "px")
        }
        T.setStyles(e.container, {left: o, top: i})
    }, setTimeout(function () {
        T.each(T.query(".tool-tooltip"), function (e) {
            o.staticInstance || (o.staticInstance = new o(null, {
                target: e,
                direction: e.getAttribute("data-dir")
            })), o.staticInstance.bindTarget(e), window.F.tooltip = {
                hide: function () {
                    o.staticInstance.hide()
                }
            }
        })
    }, 3500)
}();
;!function () {
    var e = {
            target: "",
            lineCount: 10,
            pageSize: 30,
            tabpageSize: 3,
            tabpageIndex: null,
            tabpageMode: 0,
            pageInstance: "",
            autosize: !1,
            displayMode: 0,
            mediaType: "",
            supportExpand: !0,
            supportScrollBar: !1,
            filterData: 1,
            supportCheck: !1,
            supportPage: !0,
            supportToggleImage: !1,
            supportLazy: !1,
            onItemClick: function () {
            },
            onLayout: function () {
            },
            style: "number",
            className: "com-torrent"
        },
        a = (['<div class="tooltip top">', '	<div class="content"></div>', '	<div class="conner"></div>', "</div>"].join(""), ['<div class="cb {CHECKED} {DISABLE}" id="ck_<%id%>"></div>', '<span class="lblwrap" for="ck_<%id%>">', '   <span class="lbl">', "       <%title%>", "   </span>", "</span>"].join("")),
        i = ['   <span class="lbl">', "       <%title%>", "   </span>"].join(""),
        r = ['   <span class="lbl">', "       <%title%>", '		<span class="ico"></span>', "   </span>"].join(""),
        o = ['	<div class="pic">', '   	<span class="lbl">', '       	<img src="<%pic%>" />', "   	</span>", '		<span class="shadow"><i class="tip">全集</i></span>', "	</div>", '	<div class="info">', '		<h3 class="tit">', '		<span class="lbl" target="_blank" title="<%title%>"><%title%></span>', "	</h3></div>"].join(""),
        s = ['<span class="lbl rate <%rate%> <%definition%>">', '	<span><%title%></span><i></i><div style="clear:both"></div>', "</span>"].join(""),
        n = {};
    n.numberStyle = ["..."].join(""), n.textStyle = ['<a class="expand">展开更多<i></i></a>'].join("");
    var l = F.client.isClient(), d = 70, c = function (a, r) {
        var s = this, n = baidu.extend(baidu.extend({}, e), r);
        if (s.options = n, s.GUID = T.lang.guid(), s.target = T.g(n.target), "torrent" != s.target.getAttribute("data-comtype")) {
            console.log("种子列表初始化:", s.options), s.qualityMap = {
                tv: {label: "流畅", idx: 0},
                dvd: {label: "标清", idx: 1},
                high_dvd: {label: "高清", idx: 2},
                super_dvd: {label: "超清", idx: 3}
            }, s.isSupportToggleImage = s.options.supportToggleImage, s.target.setAttribute("data-comtype", "torrent"), s.target.instance = this, s.torrentScrollPane = T.query(".torrent-panel", this.target)[0], s.torrentPanel = T.query(".torrent", this.target)[0], s.torrentHead = T.query(".torrent-p", this.target)[0], s.count = 0, s.pagesize = 1, s.pagecount = 1, s.page = 1, s.isInitTorrent = !1, s.hasCurrent = !1, s.tabpageCurTag = "", s.tabPageCurrent = -1, s.quirkPageGroup = !1, this.debug = (window.location.href + "").indexOf("debug") > 0 ? !0 : !1, s.initReverse = 1 == this.target.getAttribute("data-reverse") ? !0 : !1, s.initReverse && "jpage" == s.options.pageInstance && (s.quirkPageGroup = !0), this.options.seedinfo && this.options.seedinfo.reverse && (s.initReverse = !0), s.isReverse = s.initReverse, s.options.supportExpand = "0" == this.target.getAttribute("data-expand") ? !1 : !0, s.options.tabpageSize = s.options.tabpageSize || (this.target.getAttribute("data-tabpagesize") ? this.target.getAttribute("data-tabpagesize") : 3), s.autosize = s.options.autosize, s.displayMode = 0, s.mediaType = s.options.mediaType, s.initDisplayMode = s.displayMode = Number(s.options.displayMode) || 0, s.isSupportToggleImage || (s.displayMode = 0), s.torrent_tpl_current = s.displayMode ? o : i;
            var l = s.options.tabpageIndex.split(",");
            s.tabpageIndex = [];
            for (var d = 0; d < l.length; d++)l[d] && s.tabpageIndex.push(l[d]);
            if (s.objPager = null, s.objScrollBar = null, s.uiExpandOn = null, s.uiExpandOff = null, s.uiQualityContainer = null, s.uiQuality = null, s.uiToggleImage = null, s.pagerContainer = null, s.autoExpandUI = !0, s.isExpand = !0, s.isChecked = !1, s.isCheckAll = !1, s.childDataOrigin = this.options.seedinfo || {}, s.aggregate = parseInt(s.childDataOrigin.aggregate + "") ? !0 : !1, s.options.aggregate && (s.aggregate = s.options.aggregate), s.childData = [], s.currentRate = "tv", s.mutilrate = [], s.itemWidth = 0, "undefined" == typeof s.childDataOrigin.isend && (s.childDataOrigin.isend = 0), s.childDataOrigin.videos && (s.childData = baidu.extend([], s.childDataOrigin.videos)), s.childs = null, s.childData && s.childData.length > 0) {
                var c = s.childData.length, d = 0, p = [], h = 0, u = 0;
                for (d = 0; c > d; d++)p = s.childData[d].streams || [], p.length > h && (h = p.length, u = d);
                var g = s.childData[u];
                g.streams = g.streams || [];
                var v = "";
                for (d = 0; d < g.streams.length; d++)v = g.streams[d].definition, v && s.qualityMap[v] && s.mutilrate.push(v);
                if (s.mutilrate = s.mutilrate.sort(function (e, a) {
                        var i = s.qualityMap[e].idx, r = s.qualityMap[a].idx;
                        return i > r ? !0 : !1
                    }), ("tv" == s.childDataOrigin.gallery_type || "cartoon" == s.childDataOrigin.gallery_type) && (s.options.filterData = 0), ("movie" == s.childDataOrigin.gallery_type || "vfilm" == s.childDataOrigin.gallery_type) && s.childData.length <= 1) {
                    s.displayMode = 2, s.options.filterData = 0;
                    var t = s.childDataOrigin.videos[0], f = [], m = {};
                    for (d = 0; d < g.streams.length; d++)m = T.extend({}, t), m.streams = [t.streams[d]], "" != m.streams[0].definition && f.push(m);
                    f = f.sort(function (e, a) {
                        var i = s.qualityMap[e.streams[0].definition].idx,
                            r = s.qualityMap[a.streams[0].definition].idx;
                        return r > i ? !0 : !1
                    }), s.childData = f
                }
                console.log("mutilrate", s.mutilrate), s.mutilrate[0] ? (s.autosetTpl(), s.render(s.childData, i, s.mutilrate[0])) : g.streams.length <= 0 && s.render(s.childData, i)
            }
            s._initData(), s._init(), setTimeout(function () {
                T.observer.send("torrent_loaded", {mid: s.childDataOrigin.gallery_id, target: s})
            }, 100)
        }
    };
    c.prototype.updateCurrentAttr = function (e, a) {
        for (var i = this, r = null, o = i.childs, s = 0; s < o.length; s++)T.dom.removeClass(o[s], "nowplay"), T.dom.removeClass(o[s], "scrollpos"), o[s].getAttribute(e) == a && (r = o[s], T.dom.addClass(r, "nowplay"), T.dom.addClass(r, "scrollpos"))
    }, c.prototype.checkScrollPos = function () {
        var e = this;
        if (T.each(e.childs, function (a) {
                T.dom.hasClass(a, "scrollpos") && (e.hasCurrent = !0, e.tabpageCurTag = a.getAttribute("data-tabindex"))
            }), e.tabpageIndex && e.tabpageIndex.length > 0) {
            e.pagecount = e.tabpageIndex.length, e.count = e.pagecount * e.pagesize;
            for (var a = 0; a < e.tabpageIndex.length; a++)e.tabpageIndex[a] == e.tabpageCurTag && (e.page = a + 1, e.tabPageCurrent = a + 1)
        } else if (e.hasCurrent) {
            var i = 0;
            if (T.each(e.childs, function (e, a) {
                    T.dom.hasClass(e, "scrollpos") && (i = a)
                }), e.tabPageCurrent = Math.ceil((i + 1) / e.pagesize), e.quirkPageGroup) {
                var r = i % e.pagesize, o = e.count % e.pagesize;
                0 != o && r >= o && (e.tabPageCurrent += 1)
            }
        }
        e.tabPageCurrent < 0 && (e.tabPageCurrent = 0), this.objPager && e.tabPageCurrent && this.objPager.gopage(e.tabPageCurrent)
    }, c.prototype.render = function (e, a, i) {
        var o = this;
        this.currentRate = i;
        var s = null, n = !1;
        this.childs || (this.childs = []);
        var d = 0, c = [], p = 1;
        if (F.client.isClient()) {
            p = this.childs.length;
            for (var d = 0; d < this.childs.length; d++)if (this.childs[d]) {
                clearInterval(this.childs[d]);
                var h = T.query(".cb", this.childs[d])[0];
                h && clearInterval(h.interval)
            }
        }
        if (d = 0, p = e.length, this.torrentPanel.innerHTML = "", o.options.filterData) {
            for (o.childs = [], d = 0; p > d; d++) {
                e[d].streams = e[d].streams || [];
                for (var u = 0; u < e[d].streams.length; u++)if (e[d].streams[u].definition == i) {
                    c.push(e[d]);
                    break
                }
            }
            e = c, o.childData = c
        }
        for (p = e.length, d = 0; p > d; d++) {
            if (s = document.createElement("a"), n = !1, e[d].streams = e[d].streams || [], 2 == o.displayMode) e[d].realstream = e[d].streams[0], n = !0; else for (var u = 0; u < e[d].streams.length; u++)if (e[d].streams[u].definition == i) {
                e[d].realstream = e[d].streams[u], n = !0;
                break
            }
            e[d]._matchrate = n, 2 == o.displayMode ? e[d].title = e[d].name || o.childDataOrigin.name : e[d].title || (e[d].title = o.initReverse ? e.length - d : d + 1), e[d].period && (e[d].title = e[d].period + " " + (e[d].desc || e[d].name)), e[d].realstream && (e[d].rate = e[d].realstream.definition || "");
            var a = this.torrent_tpl_current;
            "tv" == o.mediaType && "prevue" == e[d].dtype && (a = r);
            var g = a.replace(/<%\s*([^%\s]+)\s*%>/gi, function (a, i) {
                return e[d][i]
            });
            s.setAttribute("data-title", e[d].title), s.setAttribute("data-definition", e[d].rate), s.setAttribute("data-id", e[d].videoid), F.client.isClient() ? s.setAttribute("href", "javascript:;") : s.setAttribute("href", e[d].url), l && (e[d].realstream && (s.setAttribute("data-hash", e[d].realstream.hashid), s.setAttribute("data-quality", e[d].realstream.definition)), n || (s.removeAttribute("data-hash", ""), s.removeAttribute("data-quality", ""))), s.className = e[d].dtype ? "torr-list torr-list-" + e[d].dtype : "torr-list", l && !n && (s.className = "torr-list torr-list-supply"), "supply" == e[d].dtype && (l ? s.setAttribute("title", "暂不支持下载") : s.setAttribute("title", "暂不支持观看")), l && n && "prevue" == e[d].dtype && (s.className = "torr-list torr-list-supply"), o.options.filterData ? n && (this.torrentPanel.appendChild(s), s.innerHTML = g, this.childs.push(s)) : (this.torrentPanel.appendChild(s), s.innerHTML = g, this.childs[d] = s)
        }
        this._initData()
    }, c.prototype.processData = function () {
        for (var e = this, a = null, i = 0; i < e.childs.length; i++)if (a = e.childs[i], a && T.dom.hasClass(a, "torr-list-supply")) {
            var r = T.query("a", a);
            T.each(r, function (e) {
                e.removeAttribute("target")
            }), r[0] && r[0].setAttribute("title", "暂不支持观看")
        }
    }, c.prototype.updateSize = function () {
        this.page = this.page, this._initData(), this.redraw()
    }, c.prototype.autosetTpl = function () {
        var e = this;
        switch (e.displayMode) {
            case 1:
                e.torrent_tpl_current = o;
                break;
            case 2:
                e.torrent_tpl_current = s;
                break;
            default:
                e.torrent_tpl_current = i
        }
    }, c.prototype._initData = function () {
        var e = this, a = T.dom.children(this.torrentPanel);
        if (T.each(a, function (e) {
                T.dom.hasClass(e, "torr-list-more") && T.dom.remove(e)
            }), e.childs = e.childs || T.dom.children(this.torrentPanel), e.autosetTpl(), !e.childs || e.childs.length <= 0)return void T.dom.hide(e.target);
        switch (T.dom.removeClass(e.torrentPanel, "ratestyle"), T.dom.removeClass(e.torrentPanel, "imgstyle"), e.displayMode) {
            case 1:
                e.isSupportToggleImage && T.dom.addClass(e.torrentPanel, "imgstyle");
                break;
            case 2:
                T.dom.addClass(e.torrentPanel, "ratestyle")
        }
        e.processData(), e.itemWidth = 0;
        var i = 0;
        if (T.each(e.childs, function (a) {
                i || (i = Number(T.dom.getStyle(a, "margin-right").replace("px", "")) || 0), e.itemWidth || (e.itemWidth = a.offsetWidth + (Number(T.dom.getStyle(a, "margin-left").replace("px", "")) || 0) + (Number(T.dom.getStyle(a, "margin-right").replace("px", "")) || 0)), T.dom.hasClass(a, "scrollpos") && (e.hasCurrent = !0, e.tabpageCurTag = a.getAttribute("data-tabindex"))
            }), e.count = e.childs.length, e.pagesize = e.options.pageSize, e.autosize && (e.pagesize = Math.floor((e.torrentPanel.offsetWidth + i) / e.itemWidth), "variety" == e.mediaType && 1 != e.displayMode && (e.pagesize = e.options.pageSize)), e.pagecount = Math.ceil(e.count / e.pagesize), e.tabpageIndex && e.tabpageIndex.length > 0) {
            e.pagecount = e.tabpageIndex.length, e.count = e.pagecount * e.pagesize;
            for (var r = 0; r < e.tabpageIndex.length; r++)e.tabpageIndex[r] == e.tabpageCurTag && (e.page = r + 1, e.tabPageCurrent = r + 1)
        } else if (e.hasCurrent) {
            var o = 0;
            T.each(e.childs, function (e, a) {
                T.dom.hasClass(e, "scrollpos") && (o = a)
            }), e.tabPageCurrent = Math.ceil((o + 1) / e.pagesize)
        }
        e.options.filterData && e.objPager && e.objPager.update({
            total: e.count,
            currentPage: e.page || 1,
            pageSize: e.pagesize
        })
    }, c.prototype._init = function () {
        var e = this;
        e.uiExpandOff = T.query(".expandoff", this.target)[0], e.pagerContainer = T.query(".torrent-pager", this.target)[0], e.options.supportExpand ? T.hide(e.torrentHead) : (e.uiExpandOff && T.hide(e.uiExpandOff), T.show(e.torrentHead)), 2 == e.displayMode && T.hide(e.torrentHead), e.options.supportExpand && (e.autoExpandUI ? e.uiExpandOn || (e.uiExpandOn = T.dom.create("li", {className: "torr-list torr-list-more"})) : e.uiExpandOn = T.query(".expandon", e.target)[0]);
        var a = function () {
            e.toggle()
        };
        e.uiExpandOn && T.on(e.uiExpandOn, "click", a), e.uiExpandOff && T.on(e.uiExpandOff, "click", a);
        try {
            e.toggle()
        } catch (i) {
            alert(i)
        }
        if (e.childs && !(e.childs.length <= 0)) {
            if (e.childs.length >= e.pagesize || this.supportTabIndex()) e.initPageAction(); else if ("tv" == e.mediaType) {
                var r = T.query(".torrent-o", e.target)[0];
                r && e.torrentHead && r.appendChild(e.torrentHead)
            }
            e.options.supportScrollBar && (e.objScrollBar = new ScrollBar("", {
                target: e.torrentPanel,
                overcontent: !0,
                scrollpos: "scrollpos",
                scrolloffset: 60,
                offset: 0,
                lazy: !0
            }));
            var o = T.query(".sort", this.torrentHead)[0];
            o && T.on(o, "click", function () {
                e.reverse()
            });
            var s = function (a) {
                e.exitCheck();
                var i = parseInt(a.getAttribute("data-value")) || 0;
                console.log("value===" + i), e.displayMode = i ? 1 : 0, e._initData(), e.updateSize(), e.updateSize()
            }, n = T.query(".tool-toggleimage", this.target)[0];
            n && (e.options.supportToggleImage ? (T.dom.show(n), e.isSupportToggleImage && F.load("widget.radiogroup.radiogroup", function () {
                var a = this;
                e.uiToggleImage = n.instance ? n.instance : new a(n, {itemClick: s}), e.uiToggleImage.setOptions({itemClick: s})
            })) : T.dom.hide(n));
            var l = T.query(".tool-check", e.target)[0];
            e.options.supportCheck ? l && T.on(l, "click", function () {
                    e.toggleCheck(), e.isChecked ? T.dom.addClass(l, "tool-check-select") : T.dom.removeClass(l, "tool-check-select")
                }) : l && T.dom.hide(l);
            var d = T.query(".tool-checkall", e.target)[0], c = T.query(".cb", d);
            d && T.on(d, "click", function () {
                return e.isCheckAll ? (T.dom.removeClass(c[0], "checked"), T.dom.removeClass(d, "tool-checkall-check")) : (T.dom.addClass(c[0], "checked"), T.dom.addClass(d, "tool-checkall-check")), e.setCheckStatus(), void e.checkAll()
            });
            var p = T.query(".tool-download", e.target)[0];
            p && T.on(p, "click", function () {
                return 0 == e.childDataOrigin.down ? void alert("此媒体因为某些原因不允许下载") : void e.download()
            });
            var h = T.query(".tool-play", e.target)[0];
            h && T.on(h, "click", function () {
                e.playFirst()
            }), e.uiQualityContainer = T.query(".tool-rate", e.target)[0], e.drawQuality(e.uiQualityContainer), e.drawUpdate(), e.uiQualityContainer && (2 == e.displayMode && e.uiQualityContainer && T.dom.hide(e.uiQualityContainer), F.config.isFsHost || T.dom.hide(e.uiQualityContainer)), F.Event.delegate(e.target, ".torr-list", "click", function (e) {
                return function (a) {
                    return e.__onTorrentClick.apply(e, [a, this]), !0
                }
            }(e)), e.checkScrollPos()
        }
    }, c.prototype.redraw = function () {
        var e = this;
        this.checkScrollPos(), this.updateSortUI(), this.objPager && this.objPager.update({
            currentPage: e.page || 1,
            pageSize: e.pagesize
        }), this.setPage(this.page)
    }, c.prototype.setCheckStatus = function () {
        this.isChecked = !1, this.toggleCheck()
    }, c.prototype.exitCheck = function () {
        var e = this;
        e.isChecked = !1;
        var a = T.query(".tool-check", e.target)[0];
        a && (e.isChecked ? T.dom.addClass(a, "tool-check-select") : T.dom.removeClass(a, "tool-check-select"))
    }, c.prototype.toggleCheck = function () {
        var e = this;
        this.isChecked = !this.isChecked, T.dom.removeClass(this.torrentPanel, "torrentcheck"), this.isChecked && T.dom.addClass(this.torrentPanel, "torrentcheck");
        var a = 0, i = 1;
        if (this.childs = this.childs || [], F.client.isClient() && T.browser.ie <= 7)for (i = this.childs.length, a = 0; i > a; a++)if (this.childs[a]) {
            clearInterval(this.childs[a].interval);
            var r = T.query(".cb", this.childs[a])[0];
            r && clearInterval(r.interval)
        }
        var o = T.query(".torrent-q", e.target)[0];
        o && (this.isChecked ? T.dom.show(o) : T.dom.hide(o)), T.dom.removeClass(e.torrentPanel, "imgstyle"), this.isChecked || 1 == this.displayMode && T.dom.addClass(e.torrentPanel, "imgstyle"), this.redraw()
    };
    var p = !1;
    c.prototype.checkAll = function () {
        this.isCheckAll = !this.isCheckAll;
        var e = this.childData.length;
        this.isCheckAll && e > d && (e = d, alert("一次只能添加" + d + "条,其它的需要手动添加噢~"));
        for (var a = 0; e > a; a++)this.childData[a]._matchrate && (this.childData[a]._checked = this.isCheckAll);
        p = !0, this.redraw(), p = !1
    }, c.formatClientData = function (e) {
        if (F.client.isClient)return e;
        var a = {};
        for (var i in e)a[i] = e[i];
        a.videos = [];
        for (var r = 0, o = 0; o < e.videos.length; o++) {
            var s = e.videos[o];
            s && s.streams && s.streams.length > 0 && "supply" != s.dtype && (s.index = r, a.videos.push(s), r += 1)
        }
        return a
    }, c.prototype.downloadAll = function () {
        for (var e = this.childData.length, a = [], i = 0; e > i; i++)a.push(this.childData[i].videoid);
        try {
            console.log("下载数据：", a, this.currentRate, T.json.stringify(c.formatClientData(this.childDataOrigin)));
            var r = "fsp://download/" + this.childDataOrigin.gallery_id + "/" + a.join(",") + "/" + this.currentRate;
            F.http.proxy(r, "iframe", 50)
        } catch (o) {
        }
    }, c.prototype.download = function () {
        for (var e = c.formatClientData(this.childDataOrigin), a = e.videos, i = a.length, r = [], o = 0; i > o; o++)a[o]._checked && r.push(a[o].videoid);
        console.log("download", r), this.debug && alert("download:len" + r.length);
        var s = -1 != window.location.href.indexOf("client_play");
        if (r && r.length > 0)if (T.browser.ie && !s) {
            var n = T.object.clone(this.childDataOrigin);
            this.initReverse && (r = r.reverse(), n.videos = n.videos.reverse()), this.debug && alert("externalDownload:" + r.join(",") + ",def=" + this.currentRate), this.debug && alert("externalDownload:" + T.json.stringify(n)), window.external.download(r.join(",") + "", this.currentRate, T.json.stringify(n))
        } else try {
            console.log("下载数据：", r, this.currentRate, T.json.stringify(this.childDataOrigin));
            var l = "fsp://download/" + this.childDataOrigin.gallery_id + "/" + r.join(",") + "/" + this.currentRate;
            this.debug && alert("externalPlayFSP:" + l), F.http.proxy(l, "iframe", 50)
        } catch (d) {
        }
    }, c.prototype.playFirst = function () {
        if (this.childData)for (var e = 0; e < this.childData.length; e++)if (console.log("playFirst", this.childData[e]), this.childData[e] && this.childData[e].dtype && "normal" == this.childData[e].dtype) {
            this.playVideo(this.childData[e].videoid);
            break
        }
    }, c.prototype.matchAvailableRate = function (e) {
        var a = 0, i = void 0;
        if (this.childData)for (var r = 0; r < this.childData.length; r++)if (this.childData[r].videoid == e) {
            a = r, i = this.childData[r];
            break
        }
        if (i) {
            for (var o = i.streams, s = [], r = 0; r < o.length; r++)s.push(o[r].definition);
            var n = T.object.clone(this.mutilrate), l = "super_dvd", a = n.indexOf(l), d = "tv";
            a > -1 && n.unshift(n.splice(a, 1)[0]), console.log("orignStream=", n);
            for (var r = n.length - 1; r > -1; r--)if (-1 != s.indexOf(n[r])) {
                d = n[r];
                break
            }
        }
        return console.log("mathrate:", d), d
    }, c.prototype.playVideo = function (e, a) {
        {
            var i = c.formatClientData(this.childDataOrigin);
            i.videos
        }
        a = a ? a : this.matchAvailableRate(e);
        var r = a ? a : this.currentRate;
        console.log("newdata", i);
        var o = -1 != window.location.href.indexOf("client_play");
        if (0 == this.childDataOrigin.down)return void(location.href = "/vplay/g-" + this.childDataOrigin.gallery_id + ".v-" + e + "/");
        try {
            F.cookie.set("_mz_mid", encodeURIComponent(window.location.href), 1 / 24 / 30)
        } catch (s) {
        }
        if (T.browser.ie && !o)try {
            var i = T.object.clone(this.childDataOrigin);
            this.initReverse && (i.videos = i.videos.reverse()), this.debug && alert("externalPlay:" + e + ",def=" + r), this.debug && alert("externalPlay:" + T.json.stringify(i)), window.external.play(e + "", r, T.json.stringify(i))
        } catch (s) {
        } else try {
            var n = "fsp://play/" + this.childDataOrigin.gallery_id + "/" + e + "/" + r;
            this.debug && alert("externalPlayFSP:" + n), console.log("json", e, r, this.childDataOrigin), console.log("fspurl:" + n);
            var l = F.client.isSupportFSP();
            if (o && !l) {
                var d = [F.config.protocol + "//www.fun.tv/subject/", this.childDataOrigin.gallery_id + "/", "#fsp=" + n].join("");
                window.open(d)
            } else F.http.proxy(n, "iframe", 50)
        } catch (s) {
        }
    }, c.playVideo = function (e, a, i, r) {
        i = i || "tv";
        {
            var o = c.formatClientData(r);
            o.videos
        }
        console.log("newdata", o);
        var s = -1 != window.location.href.indexOf("client_play");
        try {
            F.cookie.set("_mz_mid", encodeURIComponent(window.location.href), 1 / 24 / 30)
        } catch (n) {
        }
        if (T.browser.ie && !s)try {
            if (this.debug && alert("playVideo:" + a + ",def=" + i), this.initReverse) {
                var l = T.object.clone(o);
                l.videos = l.videos.reverse(), o = l
            }
            this.debug && alert("playVideo:" + T.json.stringify(o)), window.external.play(a + "", i, T.json.stringify(o))
        } catch (n) {
        } else try {
            var d = "fsp://play/" + e + "/" + a + "/" + i;
            console.log("json", a, i, r), console.log("fspurl:" + d), F.http.proxy(d, "iframe", 50)
        } catch (n) {
        }
    }, c.prototype.__onTorrentClick = function (e, a) {
        for (var i = this, r = a.getAttribute("data-id"), o = null, s = 0, n = 0; n < this.childData.length; n++)if (this.childData[n]._checked && s++, this.childData[n].videoid == r) {
            o = this.childData[n];
            break
        }
        F.config.isFsHost && !i.aggregate && T.event.get(e).stop(), 2 == i.displayMode && (i.currentRate = a.getAttribute("data-definition")), console.log("torrentclick", i, e, r, a, "isChecked", i.isChecked);
        var l = T.dom.hasClass(a, "torr-list-supply");
        if (o) {
            var c = T.query(".cb", a)[0], p = !1;
            if (c && !l)if (T.dom.hasClass(c, "cb-checked") || T.dom.hasClass(c, "_cfix2")) o._checked = !1, T.dom.removeClass(c, "cb-checked"); else {
                if (s >= d)return void alert("一次只能添加" + d + "条,请清空已经添加的项~");
                T.dom.addClass(c, "cb-checked"), o._checked = !0, p = !0
            }
            console.log("check====", p, c);
            {
                c ? c.className : ""
            }
        }
        i.options && i.options.onItemClick && !i.isChecked && (console.log("onItemClick supply", l), l || i.options.onItemClick.call(i, e, a, r))
    }, c.prototype.__setItemCheck = function (e, i, o, s, n) {
        var l, d = "cb", c = !1;
        o ? (l = a, s && n ? (l = l.replace("{CHECKED}", "cb-checked"), d = "cb cb-checked", c = !0) : l = l.replace("{CHECKED}", ""), n ? l = l.replace("{DISABLE}", "") : (l = l.replace("{DISABLE}", "cb-disabled"), d = "cb cb-disabled")) : (l = this.torrent_tpl_current, "tv" == this.mediaType && "prevue" == i.dtype && (l = r));
        var p = {
            title: e.getAttribute("data-title"),
            id: e.getAttribute("data-id"),
            definition: e.getAttribute("data-definition"),
            url: i.url
        };
        i.pic && (p.pic = -1 != i.pic.indexOf("?") ? i.pic : i.pic + "?215_120");
        var h = F.tpl.compile(l)(p);
        e.innerHTML = h, T.dom.removeClass(e, "_cfix3"), d = e.className, clearInterval(e.interval)
    }, c.prototype.setPage = function (e) {
        var a = this;
        if (T.each(a.childs, function (e) {
                clearInterval(e);
                var a = T.query(".cb", e)[0];
                a && clearInterval(a.interval), T.dom.remove(e)
            }), a.supportTabIndex()) {
            e >= a.pagecount && (e = a.pagecount);
            for (var i = a.tabpageIndex[e - 1], r = a.childs.filter(function (e) {
                return e.getAttribute("data-tabindex") == i ? !0 : !1
            }), o = 0; o < r.length; o++)T.show(r[o]), a.torrentPanel.appendChild(r[o]);
            return this.page = e, void this.updateSortUI()
        }
        var s = (e - 1) * a.pagesize, n = e * a.pagesize;
        0 >= s && (s = 0), n >= a.count && (n = a.count), this.page = e;
        var l = null;
        if (console.log("setPage", "start", s, "end", n, "page", e, "pagesize", a.pagesize), a.quirkPageGroup) {
            var d = (a.pagecount - e) * a.pagesize, c = d + a.pagesize;
            c = Math.min(c, a.count), s = a.count - c, n = a.count - d
        }
        for (var o = s; n > o; o++)if (l = a.childs[o], T.show(l), a.torrentPanel.appendChild(l), a.childData && a.childData[o]) {
            var h = a.childData[o]._matchrate;
            F.config.isFsHost && "prevue" == a.childData[o].dtype && (h = !1), a.__setItemCheck(l, a.childData[o], a.isChecked, a.childData[o]._checked, h)
        }
        this.updateSortUI(), a.options && "function" == typeof a.options.onLayout && (p || a.options.onLayout())
    }, c.prototype.supportTabIndex = function () {
        return this.tabpageIndex && this.tabpageIndex.length > 0
    }, c.prototype.drawUpdate = function () {
        var e = this, a = T.query(".torrent-updateinfo", e.target)[0];
        a && (e.childDataOrigin.update_info || e.childDataOrigin.updatetip ? a.innerHTML = e.childDataOrigin.update_info && e.childDataOrigin.updatetip ? e.childDataOrigin.update_info + " | " + e.childDataOrigin.updatetip : e.childDataOrigin.update_info || e.childDataOrigin.updatetip : T.dom.hide(a), "tv" != e.mediaType && "cartoon" != e.mediaType && T.dom.hide(a))
    }, c.prototype.drawQuality = function (e) {
        var a = this;
        if (e) {
            var i, r, o = [], s = function (e) {
                console.log("isReverse", a.isReverse), a.resetData(), a.render(a.childData, a.torrent_tpl_current, e), console.log("isReverse", a.isReverse), a.reset(a.options.filterData), a.isChecked = !0, a.toggleCheck(!0)
            }, n = function () {
                var i = function () {
                    a.uiQuality = new F.widget.combox.combox(e, {
                        itemClick: function () {
                            s(o[o.length - 1 - this.selectedIndex].value)
                        }
                    });
                    var i = [], r = 0;
                    console.log("码率列表：", o);
                    for (var n = 0, l = {
                        high_dvd: 0,
                        super_dvd: 1,
                        dvd: 2,
                        tv: 3
                    }, d = {}, c = 0; c < a.mutilrate.length; c++)d[a.mutilrate[c]] = {
                        available: 0,
                        index: l[a.mutilrate[c]],
                        label: a.mutilrate[c]
                    };
                    for (var p = a.childData.length, h = 0; p > h; h++)for (var u = a.childData[h].streams || [], g = 0; g < u.length; g++) {
                        var v = u[g].definition;
                        d[v] && d[v].available++
                    }
                    var f = [];
                    for (var m in d) {
                        var y = d[m];
                        f[y.index] = y
                    }
                    for (var b = "", c = 0; c < f.length; c++) {
                        var y = f[c];
                        if (y && y.available / p >= .9) {
                            b = y.label;
                            break
                        }
                    }
                    for (var c = o.length - 1; c >= 0; c--)i.push("<a href='javascript:;' class='item' data-value='" + o[c].value + "'>" + o[c].label + "</a>"), o[c].value == b && (r = n), n++;
                    a.uiQuality.setItems(i), 2 != a.displayMode && a.uiQuality.setSelectIndex(r)
                };
                F.isNamespace("widget.combox.combox") ? i() : F.load("widget.combox.combox", i)
            };
            if (this.mutilrate) {
                T.dom.show(a.uiQualityContainer);
                for (var l = 0; l < this.mutilrate.length; l++)i = this.mutilrate[l], r = (a.qualityMap[i] || {}).label, o.push({
                    label: r,
                    value: i
                });
                n(), this.mutilrate.length <= 1 && T.dom.hide(a.uiQualityContainer)
            }
            return void console.log("ratelist", this.mutilrate);
            var a, r, i, l, s
        }
    }, c.prototype.initPageAction = function () {
        var e = this, a = function (a) {
            if (e.supportTabIndex())return e.isReverse, e.tabpageIndex[a - 1];
            if ("number" != e.options.style)return e.isReverse ? a : a;
            var i = 0, r = 1;
            return e.quirkPageGroup ? (i = (e.pagecount - a) * e.pagesize + 1, r = i + e.pagesize - 1, r = Math.min(r, e.count), r + "-" + i) : (e.isReverse ? (r = e.count - (a - 1) * e.pagesize, i = r - e.pagesize + 1) : (i = (a - 1) * e.pagesize + 1, r = a * e.pagesize), 1 >= i && (i = 1), r >= e.count && (r = e.count), "variety" == e.mediaType ? e.isReverse ? e.pagecount - a + 1 : a : e.isReverse ? r + "-" + i : i + "-" + r)
        };
        if (!e.objPager && e.options.supportPage) {
            var i = 1;
            e.tabPageCurrent > 0 && (e.setPage(e.tabPageCurrent), i = e.tabPageCurrent);
            var r = "widget.pager.pager";
            "jpage" == e.options.pageInstance && (r = "widget.pager.jpager"), F.load(r, function () {
                var r = Math.ceil(e.count / e.pagesize), o = null;
                e.options.supportLazy && e.torrentPanel && (o = e.torrentPanel);
                var s = this;
                e.objPager = new s({
                    currentPage: i,
                    pageSize: e.pagesize,
                    total: e.count || 0,
                    pageButtonNumber: Number(e.options.tabpageSize) || 3,
                    pageGroupMode: e.options.tabpageMode,
                    renderTo: e.pagerContainer,
                    lazyTarget: o,
                    lang: {pre: "<", next: ">", n: a},
                    show: r > 3 ? {next: !0, pre: !0, more: !1} : {next: !1, pre: !1, more: !1},
                    update: function () {
                        e.setPage(this.options.currentPage)
                    }
                }), e.tabPageCurrent > 0 ? e.setPage(e.tabPageCurrent) : e.options.supportExpand || e.setPage(1)
            })
        }
    }, c.prototype.doReverse = function () {
        this.supportTabIndex() ? this.isReverse || (this.tabpageIndex.reverse(), this.childs.reverse()) : this.isReverse || this.childs.reverse(), this.childData && !this.isReverse && this.childData.reverse(), this.isReverse = !0
    }, c.prototype.doUnReverse = function () {
        this.supportTabIndex() ? this.isReverse && (this.tabpageIndex.reverse(), this.childs.reverse()) : this.isReverse && this.childs.reverse(), this.childData && this.isReverse && this.childData.reverse(), this.isReverse = !1
    }, c.prototype.doSimpleReverse = function () {
        this.supportTabIndex() ? (this.tabpageIndex.reverse(), this.childs.reverse()) : this.childs.reverse(), this.isReverse = !this.isReverse
    }, c.prototype.reverse = function () {
        var e = this;
        this.isReverse ? this.doUnReverse() : this.doReverse(), this.setPage(this.page), this.objPager && this.objPager.update({page: e.page - 1})
    }, c.prototype.resetData = function () {
        var e = this;
        this.isChecked = !1, this.isCheckAll = !1, this.page = 1;
        for (var a = this.childData.length, i = 0; a > i; i++)this.childData[i]._checked = !1;
        try {
            e.childData = baidu.extend([], e.childDataOrigin.videos)
        } catch (r) {
        }
        var o = T.query(".tool-checkall", e.target)[0];
        o && (e.isCheckAll ? T.dom.addClass(o, "tool-checkall-select") : T.dom.removeClass(o, "tool-checkall-select")), this.exitCheck()
    }, c.prototype.reset = function (e) {
        var a = this, i = null;
        e || a.resetData(), a.isReverse = a.initReverse, a.initReverse ? a.doReverse() : a.doUnReverse();
        var r = a.childs.length;
        if (r <= a.options.lineCount && (a.options.supportExpand = !1), a.options.supportExpand) {
            for (var r = a.childs.length, o = 0; r > o; o++)i = a.childs[o], o < a.options.lineCount - 1 ? T.show(i) : T.hide(i), a.torrentPanel.appendChild(i);
            a.uiExpandOn && T.dom.insertAfter(a.uiExpandOn, a.childs[a.options.lineCount - 2])
        }
        a.objPager && a.objPager.update({currentPage: 1})
    }, c.prototype.updateSortUI = function () {
        var e = this, a = T.query(".sort", this.torrentHead)[0];
        a && (T.dom.removeClass(a, "sort_cw"), T.dom.removeClass(a, "sort_acw"), this.isReverse ? (a.innerHTML = "正序", T.dom.addClass(a, "sort_cw")) : (a.innerHTML = "反序", T.dom.addClass(a, "sort_acw"))), this.objScrollBar && (this.objScrollBar.resetLazy(), this.objScrollBar.setValue(0), e.objScrollBar.redraw())
    }, c.prototype.toggle = function () {
        var e = this;
        if (e.options.supportExpand) {
            if (e.isExpand = !e.isExpand, e.isExpand) {
                e.uiExpandOff && T.show(e.uiExpandOff), e.pagesize >= e.childs.length || T.show(e.torrentHead), e.uiExpandOn.innerHTML = "<a class='expandoff'>收起<i></i></a>", T.dom.remove(e.uiExpandOn);
                var a = e.options.supportPage ? e.pagesize : e.count;
                T.each(e.childs, function (e, i) {
                    a > i && T.show(e)
                })
            } else {
                e.uiExpandOff && T.hide(e.uiExpandOff), e.torrentHead && T.hide(e.torrentHead), e.uiExpandOn.innerHTML = n[e.options.style + "Style"], e.count <= e.options.lineCount && T.hide(e.uiExpandOn);
                var i = e.childs.length;
                i <= e.options.lineCount ? T.each(e.childs, function (e) {
                    T.show(e)
                }) : T.each(e.childs, function (a, i) {
                    i < e.options.lineCount - 1 ? T.show(a) : T.hide(a)
                }), e.reset()
            }
            2 == e.displayMode && T.hide(e.torrentHead)
        }
    }, c.registry = function (e) {
        var a = T.query(".com-torrent", e);
        T.each(a, function (e) {
            new c(null, {
                target: e,
                pageSize: parseInt(e.getAttribute("data-pagesize")) || 30,
                lineCount: parseInt(e.getAttribute("data-linecount")) || 10,
                style: e.getAttribute("data-style") || "number",
                supportScrollBar: "1" == e.getAttribute("data-scrollbar") ? !0 : !1,
                supportCheck: "1" == e.getAttribute("data-check") ? !0 : !1,
                supportLazy: "1" == e.getAttribute("data-lazy") ? !0 : !1,
                supportToggleImage: "1" == e.getAttribute("data-supportimage") ? !0 : !1,
                autosize: "1" == e.getAttribute("data-autosize") ? !0 : !1,
                displayMode: e.getAttribute("data-displaymode"),
                mediaType: e.getAttribute("data-mediatype"),
                tabpageIndex: e.getAttribute("data-tabpageindex") || "",
                aggregate: "1" == e.getAttribute("data-aggregate") || "aggregate" == e.getAttribute("data-aggregate") ? !0 : !1,
                pageInstance: e.getAttribute("data-page") || ""
            })
        })
    }, T.ready(function () {
        c.registry(null)
    }), F.namespace("widget.torrent", "TorrentList", c)
}();
;!function () {
    var e = ['<div data-pagesize="10" data-reverse="0" data-expand="0" data-check="1" class="com-torrent com-torrent-complex">', '   <div class="torrent-o fix">', '       <div class="tools tool-rate">', '           <a href="javascript:;" class="rate-label combox-title">', '               <span class="label"></span>', '               <span class="icon"></span>', "           </a>", '           <div class="rate-panel combox-list z-1"></div>', "       </div>", '       <div class="tools tool-toggleimage">', '           <a class="rb rb-check">文字</a>', '           <a class="rb rb-checked">图片</a>', "       </div>", '       <div class="tools tool-check">', '           <a href="javascript:;" class="cb cb-check">批量添加剧集</a>', '           <a href="javascript:;" class="cb cb-checked">返回单集模式</a>', "       </div>", "   </div>", '   <ul class="torrent fix ">', "       <%each videos as video%>", '       <li class="torr-list" data-id="<%video.index%>" data-title="<%video.index%>">', "           <a><%video.index%></a>", "       </li>", "       <%/each%>", "   </ul>", '   <div class="torrent-q fix">', '       <a class="tools tool-checkall" href="javascript:;">', '           <span class="cb"></span>全选', "       </a>", '       <div class="tools tool-download">', '           <a class="txt" href="javascript:;">下载所选</a>', "       </div>", "   </div>", '   <div class="torrent-p">', '       <div class="torrent-pager">', "       </div>", '       <div class="torrent-sort">', '           <a href="javascript:;" class="sort sort_acw">反序</a>', "       </div>", "   </div>", "</div>"].join(""),
        a = function (a, i, s, r) {
            var o = this, l = s || e, c = !1, d = null, n = null, p = i || {};
            if (r = r || {}, console.log("渲染种子数据:", i), F.config.isFsHost) {
                for (var v = p.videos || [], g = [], u = 0; u < v.length; u++)"prevue" != v[u].dtype && g.push(v[u]), v[u].url = "javascript:;";
                p.videos = g
            }
            var b = function () {
                if (c) {
                    a.innerHTML = F.tpl.compile(l)(p);
                    var e = d = T.query(".com-torrent", a)[0], i = {
                        target: e,
                        pageSize: parseInt(e.getAttribute("data-pagesize")) || 30,
                        lineCount: parseInt(e.getAttribute("data-linecount")) || 10,
                        style: e.getAttribute("data-style") || "number",
                        supportScrollBar: "1" == e.getAttribute("data-scrollbar") ? !0 : !1,
                        supportCheck: "1" == e.getAttribute("data-check") ? !0 : !1,
                        supportToggleImage: "1" == e.getAttribute("data-supportimage") ? !0 : !1,
                        tabpageIndex: e.getAttribute("data-tabpageindex") || "",
                        autosize: "1" == e.getAttribute("data-autosize") ? !0 : !1,
                        displayMode: e.getAttribute("data-displaymode"),
                        mediaType: e.getAttribute("data-mediatype"),
                        aggregate: "1" == e.getAttribute("data-aggregate") || "aggregate" == e.getAttribute("data-aggregate") ? !0 : !1,
                        seedinfo: p
                    };
                    if (p && p.gallery_type && (r.mediaType = p.gallery_type), ("movie" == r.mediaType || "vfilm" == r.mediaType) && (r.supportCheck = !1), F.config.isFsHost && (("movie" == r.mediaType || "vfilm" == r.mediaType) && (r.displayMode = 2), "tipcard" == r.from))switch (r.mediaType) {
                        case"cartoon":
                        case"tv":
                            r.pageSize = 20;
                            break;
                        case"variety":
                            r.pageSize = 4, r.tabpageSize = 5
                    }
                    if (r)for (var s in r)void 0 != r[s] && null != r[s] && (i[s] = r[s]);
                    n = new F.widget.torrent.TorrentList(null, i), o.torrent = n
                }
            }, m = function () {
                c = !0, b()
            };
            c ? m() : F.load("widget.torrent.TorrentList", m)
        };
    F.namespace("widget.torrent.TorrentRender", a)
}();
;!function () {
    var a = function (a) {
        var e = (a.galleryid, a.gallerytype), o = (F.client.isClient(), ""), s = "", r = "", i = "",
            n = "data-mediatype=" + e, l = F.config.isFsHost ? "data-check=1" : "data-check=0", d = "data-expand=0";
        switch (e) {
            case"variety":
                o = 'data-pagesize="6"', r = F.config.isFsHost || "search_" == F.config.ctrlname ? "data-supportimage=0" : "data-supportimage=1", i = "data-autosize=1";
                break;
            case"tv":
            case"cartton":
                o = 'data-pagesize="30"', r = "data-autosize=0";
                break;
            case"movie":
                s = "data-displaymode=2"
        }
        var c = ["<div " + n + " " + o + " " + d + " " + i + " " + s + " " + r + " " + l + ' data-tabpagesize="4" class="com-torrent com-torrent-complex">', '   <div class="torrent-p">', '       <div class="torrent-pager">', "       </div>", '       <div class="torrent-updateinfo"></div>', '       <div class="torrent-sort">', '           <a class="sort sort_acw">反序</a>', "       </div>", "   </div>", '   <div class="torrent-o fix">', '       <div class="tools tool-rate">', '           <div class="rate-label combox-title">', '               <span class="label"></span>', '               <span class="icon"></span>', "           </div>", '           <div class="rate-panel combox-list z-1"></div>', "       </div>", '       <div class="tools tool-check">', '           <a class="cb cb-check">批量添加剧集</a>', '           <a class="cb cb-checked">返回单集模式</a>', "       </div>", '       <div class="tools tool-radiogroup tool-toggleimage">', '           <a class="btn checked" data-value="0"><span class="label">文字</span></a>', '           <a class="btn" data-value="1"><span class="label">图片</span></a>', "       </div>", "   </div>", '   <ul class="torrent fix ">', "       <%each videos as video%>", '       <li class="torr-list" data-id="<%video.index%>" data-title="<%video.index%>">', "           <a><%video.index%></a>", "       </li>", "       <%/each%>", "   </ul>", '   <div class="torrent-q fix">', '       <a class="tools tool-checkall" href="javascript:;">', '           <span class="cb"></span>全选', "       </a>", '       <div class="tools tool-download">', '           <a class="txt">确定批量添加</a>', "       </div>", "   </div>", "</div>"];
        return c = c.join("")
    }, e = function (e, o) {
        var s = a(o), r = function (a, e, o) {
            F.config.isFsHost && (this.playVideo(o, this.currentRate), T.event.get(a).stop())
        }, i = function () {
            var a = null;
            window.jsoncache && window.jsoncache.torrent && (a = window.jsoncache.torrent), a.data && (a = a.data);
            var i = null;
            if (a)for (var n = 0; n < a.length; n++)if (a[n] && a[n].gallery_id == o.galleryid) {
                i = a[n];
                break
            }
            if (console.log("info===============", i), i) {
                var l = F.widget.torrent.TorrentRender;
                torrentRender = new l(e, i, s, {onItemClick: r})
            } else {
                var d = F.config.q + "/ajax/vod_panel/" + o.galleryid;
                F.get(d, function (a) {
                    var o = F.widget.torrent.TorrentRender;
                    return a && 200 == a.status ? (console.log("种子数据:", a.data), void(torrentRender = new o(e, a.data, s, {onItemClick: r}))) : void console.log("*** warning: load torrentinfo error.***")
                })
            }
        };
        o.nami_state < 20 ? F.load("widget.torrent.TorrentRender", i) : console.log("*** warning 有付费权限的片不支持载入种子信息 ***")
    };
    F.renderTorrent = function (a) {
        if (!T.dom.hasClass(a, "mod-torrent"))throw new Error("*** " + a + " 不是种子模块 ***");
        var o = {
            galleryid: a.getAttribute("data-gid"),
            gallerytype: a.getAttribute("data-gtype"),
            nami_state: a.getAttribute("data-nami") || 0
        };
        new e(a, o)
    }, T.ready(function () {
        T.each(T.query(".mod-torrent"), function (a) {
            F.renderTorrent(a)
        })
    })
}();
;!function () {
    var e = function (e) {
        var n = (e.getAttribute("data-platform") || "pc", e.getAttribute("data-galleryid"), e.getAttribute("data-vids") || "", e.getAttribute("data-definition") || "", "P08"),
            d = "";
        o ? (d = "javascript:void(null);", F.config.isFsHost || (d = F.partner.getDownloadUrl(n))) : d = F.partner.getDownloadUrl(n), e.setAttribute("href", d)
    }, o = F.client.isSetup();
    T.ready(function () {
        !function () {
            if (F.config.isFsHost) {
                var e = T.query(".subject-head .download")[0];
                e && T.dom.hide(e)
            }
            var o = T.query(".download .btn")[0], n = o && o.parentNode;
            if (o && n) {
                var d = function (e) {
                    e && T.event.stop(T.event.get(e)), T.dom.hasClass(n, "download-selected") ? T.dom.removeClass(n, "download-selected") : T.dom.addClass(n, "download-selected"), T.dom.hasClass(n, "download-selected") && T.observer.send(F.EventCenter.EXPAND_ITEM_ON, {item_type: "download"})
                }, a = function (e) {
                    var o = T.event.get(e), d = T.query(".download .btn-wrap")[0];
                    d && (baidu.dom.contains(d, o.target) || o.target == d || T.dom.hasClass(n, "download-selected") && T.dom.removeClass(n, "download-selected"))
                };
                T.observer.add(F.EventCenter.EXPAND_ITEM_ON, function (e, o) {
                    o && "download" != o.item_type && (T.dom.hasClass(n, "download-selected") ? T.dom.removeClass(n, "download-selected") : "")
                }), T.un(o, "click", d), T.un(document, "click", a), T.on(o, "click", d), T.on(document, "click", a)
            }
        }(), function () {
            T.each(T.query(".download .btn-wrap a"), function (o) {
                T.dom.getAttr(o, "data-share-type");
                new e(o)
            });
            var o = T.query(".download")[0];
            o && F.Event.delegate(o, ".btn-wrap a", "click", function () {
                F.config.isFsHost && window.minfo && window.minfo.tRender && window.minfo.tRender.torrent && window.minfo.tRender.torrent.downloadAll()
            })
        }()
    })
}();
;!function () {
    var e = {itemClick: null}, i = function (i, n) {
        console.log("opt", n), this.target = i, this.target && (this.target.instance || (this.target.instance = this, this.option = T.extend(e, n || {}), this.selectedIndex = 0, this.currentItem = null, this.init()))
    };
    i.prototype.setOptions = function (i) {
        this.option = T.extend(e, i || {})
    }, i.prototype.init = function () {
        var e = this, i = this.target.getAttribute("data-itemclass") || ".btn";
        console.log("opts", e.option), F.Event.delegate(e.target, i, "click", function () {
            e.currentItem && T.dom.removeClass(e.currentItem, "checked"), e.option.itemClick && e.option.itemClick.call(null, this), this.itemClick && this.itemClick.call(e, this), e.currentItem = this, T.dom.addClass(e.currentItem, "checked")
        }), this.currentItem = T.query(".checked", this.target)[0], this.currentItem && T.dom.addClass(e.currentItem, "checked")
    }, i.register = function (e) {
        T.each(T.q("tool-radiogroup", e), function (e) {
            new i(e)
        })
    }, T.ready(function () {
        i.register()
    }), F.namespace("widget.radiogroup.radiogroup", i)
}();
;!function () {
    var e = {target: "", container: "", margin: 20},
        i = ([].join(""), ['<div class="slider-btns" bc="btn">', '	<a class="slider-pre-btn"  href="javascript:;"><i class="ico"></i></a>', '	<a class="slider-next-btn" href="javascript:;"><i class="ico"></i></a>', "</div>"].join("")),
        a = {x: 1200, y: 700}, s = {x: 800, y: 550}, r = function (a, s) {
            var r = this, o = baidu.extend(baidu.extend({}, e), s);
            if (r.options = o, r.GUID = T.lang.guid(), r.viewsize = {x: 0, y: 0}, r.size = {
                    x: 0,
                    y: 0
                }, r.target = T.g(o.target), r.target && "imgallery" != T.dom.getAttr(r.target, "data-comtype")) {
                r.target.setAttribute("data-comtype", "imgallery"), T.dom.insertHTML(r.target, "beforeEnd", i), r.container = T.g(o.container), r.firstIdx = 0;
                var n = T.dom.children(r.container);
                if (n.length) {
                    {
                        Math.floor(r.container.offsetWidth / n[0].offsetWidth), Math.floor(r.container.offsetHeight / n[0].offsetHeight)
                    }
                    if (r.maxCount = n.length, r.page = 1, r.pagesize = 1, r.pagelineCount = 1, r.pagePage = 1, r.frame = T.query(".gallery-frame")[0], r.frame && (r.frame_next = T.query(".btn-next", r.frame)[0], r.frame_prev = T.query(".btn-prev", r.frame)[0]), r.offset = 0, !r.options.itemsize || !r.options.itemsize.x) {
                        var h = T.dom.children(r.container)[0];
                        r.options.itemsize = {x: h.offsetWidth, y: h.offsetHeight}
                    }
                    r.userload = !1, r.lazypageCache = {}, r.autoInitData(), r._init()
                }
            }
        };
    r.prototype.autoInitData = function () {
        var e = this;
        e.data = [];
        T.each(T.query(".mod-img-i img", e.target), function (i) {
            i = {pic: i.getAttribute("src").replace(/\?\w+/, ""), id: i.getAttribute("data-id")}, e.data.push(i)
        })
    }, r.prototype._init = function () {
        var e, i, a, s = this, r = function () {
            s.lazypageCache = {}, s.viewsize = {
                x: s.target.offsetWidth,
                y: s.target.offsetHeight
            }, s.size = {x: s.container.offsetWidth, y: s.container.offsetHeight};
            var r = (s.page - 1) * s.pagesize + 1;
            e = s.options.itemsize.x, i = s.options.itemsize.y, a = s.options.margin;
            var o = s.maxCount * (e + a);
            s.pagesize = Math.floor((s.viewsize.x + a) / (a + e)), s.pagelineCount = Math.floor((s.viewsize.y + a) / (a + i)), s.maxPage = Math.ceil(s.maxCount / s.pagesize), s.page = Math.ceil(r / s.pagesize), T.setStyle(s.container, "width", o), s.setPage(s.page), s.layoutFrame()
        }, o = function () {
            s.lazyloadPage(s.page)
        };
        s.uiNext = T.query(".slider-next-btn", s.target)[0], s.uiPrev = T.query(".slider-pre-btn", s.target)[0], s.uiNext && T.on(s.uiNext, "click", function (e) {
            isNaN(s.maxPage) && s._resetPageInfo(), s.userload = !0, T.event.stop(e), s.next()
        }), s.uiPrev && T.on(s.uiPrev, "click", function (e) {
            isNaN(s.maxPage) && s._resetPageInfo(), s.userload = !0, T.event.stop(e), s.prev()
        }), T.platform.isIpad && F.TouchHandler.attach(s.container, {
            onTouchMove: function (e) {
                "h" == this.dir && T.event.stop(e)
            }, onTouchEnd: function () {
                var e = this.start, i = this.moved, a = this.distance;
                e.x === i.x || Math.abs(a.x) < Math.abs(a.y) || (i.x < e.x ? s.next() : s.prev())
            }
        }), T.on(window, "resize", r), T.on(window, "scroll", o), F.Event.delegate(s.target, ".mod-img-i", "click", function () {
            var e = this;
            console.log(arguments), s.currentImageIdx = 0;
            for (var i = 0; i < s.data.length; i++)if (s.data[i].id == e.getAttribute("data-id")) {
                s.currentImageIdx = i;
                break
            }
            s.enterFullScreenMode(), s.__showImageByIdx(s.currentImageIdx)
        });
        var n = T.query(".mod-vd-i", s.target);
        T.each(n, function (e, i) {
            var a = T.query("img", e)[0];
            a && T.dom.setAttr(a, "_lazyignore", 1), T.dom.setAttr(e, "a", i)
        }), r(), s.setPage(1)
    }, r.prototype.next = function () {
        this.setPage(this.page + 1)
    }, r.prototype.prev = function () {
        this.setPage(this.page - 1)
    }, r.prototype.first = function () {
        this.setPage(1)
    }, r.prototype.last = function () {
        this.setPage(this.maxPage)
    }, r.prototype.setPage = function (e) {
        var i = this;
        i.page = Math.max(1, Math.min(e, i.maxPage));
        var a = -(i.page - 1) * i.pagesize * (i.options.itemsize.x + i.options.margin),
            s = i.viewsize.x + i.options.margin - i.maxCount * (i.options.itemsize.x + i.options.margin),
            r = i.pagesize * (i.options.itemsize.x + i.options.margin);
        a = Math.min(0, Math.max(s, a)), F.tween(i.container, F.math.tweener.easeOutCubic, Math.abs(a - i.offset) / r, {left: a}), i.offset = a, i.lazyloadPage(i.page), i.updateUI(), i.userload = !1
    }, r.prototype.lazyloadPage = function (e) {
        return
    }, r.prototype.lazyload = function (e) {
    }, r.prototype.updateUI = function () {
        var e = this;
        e.maxPage <= 1 ? (T.hide(e.uiPrev), T.hide(e.uiNext)) : e.page <= 1 ? (T.hide(e.uiPrev), T.show(e.uiNext)) : e.page >= e.maxPage ? (T.show(e.uiPrev), T.hide(e.uiNext)) : (T.show(e.uiPrev), T.show(e.uiNext))
    }, r.prototype.__next = function () {
        this.__setPage(this.s_page + 1)
    }, r.prototype.__prev = function () {
        this.__setPage(this.s_page - 1)
    }, r.prototype.__nextImage = function () {
        this.currentImageIdx < this.data.length - 1 ? this.currentImageIdx += 1 : this.currentImageIdx = this.data.length - 1, this.__showImageByIdx(this.currentImageIdx)
    }, r.prototype.__showImageById = function (e) {
        console.log("showimage", e), this.currentImageIdx = 0;
        for (var i = 0; i < this.data.length; i++)if (this.data[i].id == e) {
            this.currentImageIdx = i;
            break
        }
        this.__showImageByIdx(this.currentImageIdx)
    }, r.prototype.__showImageByIdx = function (e) {
        this.currentImageIdx = e;
        var i = this.data[e];
        if (i) {
            self.s_current_item && T.dom.removeClass(self.s_current_item, "current"), this.__show(i.id, i.pic);
            var a = T.query("li[data-id=" + i.id + "]", this.sliderwrap)[0];
            a && (self.s_current_item = a, T.dom.addClass(self.s_current_item, "current"))
        }
        this.__autoSliderPos()
    }, r.prototype.__show = function (e, i) {
        var a = this;
        i = i.replace(/\?\w*/, "");
        var s = T.query("img", this.sliderview)[0];
        s && i && F.getImageSize(i, function (e) {
            a.__layoutViewImage(e), s.src = i
        })
    }, r.prototype.__layoutViewImage = function (e) {
        var i = this;
        if (this.sliderview) {
            var a = T.query("img", this.sliderview)[0];
            if (a) {
                var e = e;
                e || (e = {width: a.offsetWidth, height: a.offsetHeight});
                var s = i.sliderview.offsetWidth / 2 - e.width / 2, r = i.sliderview.offsetHeight / 2 - e.height / 2;
                T.dom.setStyles(a, {left: s, top: r})
            }
        }
    }, r.prototype.__updateUI = function () {
        var e = this;
        try {
            T.dom.removeClass(e.s_next, "btn-disable"), T.dom.removeClass(e.s_prev, "btn-disable"), e.s_page >= e.s_pagecount && T.dom.addClass(e.s_next, "btn-disable"), e.s_page <= 1 && T.dom.addClass(e.s_prev, "btn-disable")
        } catch (i) {
        }
    }, r.prototype.__setPage = function (e, i) {
        var a = this;
        a.s_page = Math.max(1, Math.min(e, a.s_pagecount));
        var s = -(a.s_page - 1) * a.s_pagesize * a.s_itemsize;
        i ? F.tween(a.sliderwrap, F.math.tweener.easeOutCubic, 0, {left: s}) : F.tween(a.sliderwrap, F.math.tweener.easeOutCubic, .5, {left: s}), a.__updateUI()
    }, r.prototype.__autoSliderSize = function () {
        var e = 0;
        this.sliderdom && this.frame_prev && (e = this.frame.offsetWidth - 2 * this.frame_prev.offsetWidth, T.dom.setStyle(this.sliderdom, "width", e)), this.s_itemsize && e && (this.s_pagesize = Math.floor(e / this.s_itemsize), this.s_pagecount = Math.ceil(this.s_count / this.s_pagesize), this.__autoSliderPos())
    }, r.prototype.__autoSliderPos = function () {
        var e = this;
        this.currentImageIdx > -1 && (e.s_page = Math.ceil(this.currentImageIdx / e.s_pagesize)), e.__setPage(e.s_page, !0)
    }, r.prototype.__resetSlider = function () {
        this.sliderdom.offsetWidth
    }, r.prototype.layoutFrame = function () {
        var e = this;
        if (e.fullscreen && e.frame) {
            var i = T.page.getViewWidth() / 2 - e.frame.offsetWidth / 2,
                a = T.page.getViewHeight() / 2 - e.frame.offsetHeight / 2 + T.page.getScrollTop();
            T.dom.setStyles(e.frame, {left: i, top: a})
        }
    }, r.prototype.setSize = function (e, i) {
        var a = this;
        a.fullscreen && (T.dom.setStyles(a.frame, {
            width: e,
            height: i
        }), T.dom.setStyle(a.sliderview, "height", i - 100), a.__autoSliderSize(), a.__layoutViewImage(), a.__updateUI())
    }, r.prototype.autoSize = function () {
        var e = this;
        if (e.frame && e.fullscreen) {
            var i = {x: T.page.getViewWidth(), y: T.page.getViewHeight()}, r = 40,
                o = {x: Math.min(a.x, e.frame.offsetWidth), y: Math.min(a.y, e.frame.offsetHeight)};
            if (console.log("viewsize", i, "wrapsize", o), o + 2 * r > i.x || o.y + 2 * r > i.y) {
                var n = Math.max(s.x, i.x - 2 * r), h = Math.max(s.y, i.y - 2 * r);
                console.log("sizeSize", n, h)
            }
            var n = Math.max(0, i.x - 2 * r), h = Math.max(0, i.y - 2 * r);
            n = Math.max(s.x, n), h = Math.max(s.y, h), n = Math.min(a.x, n), h = Math.min(a.y, h), e.setSize(n, h), F.showMomo(), e.layoutFrame()
        }
    }, r.prototype.exitFullScreenMode = function () {
        var e = this;
        e.fullscreen = !1, F.hideMomo(), e.frame && T.dom.hide(e.frame)
    }, r.prototype.enterFullScreenMode = function () {
        var e = this;
        e.fullscreen = !0, e.s_count = 0, e.s_itemsize = 0, e.s_pagesize = 1, e.s_page = 1, e.s_current_item = null, e.frame && (F.showMomo(), T.dom.show(e.frame), e.layoutFrame()), this.sliderdom = this.sliderdom || T.query(".thumbs-wrap", this.frame)[0], this.sliderwrap = this.sliderwrap || T.query(".thumbs", this.frame)[0], this.sliderview = this.sliderview || T.query(".g-view", this.frame)[0], this.sliderclose = this.sliderclose || T.query(".g-close", this.frame)[0];
        var i = ["<% each data %>", '<li data-id="<% $value.id %>" data-pic="<% $value.pic %>">', '    <a href="#"><img src="<% $value.pic %>?85_85"></a>', "</li>", "<% /each %>"].join("");
        this.sliderwrap.innerHTML = F.tpl.compile(i)({data: e.data}), e.sliderChilds = T.dom.children(this.sliderwrap), e.s_count = e.sliderChilds.length, e.s_count > 0 && (this.s_itemsize || (this.s_itemsize = e.sliderChilds[0].offsetWidth));
        var a = T.query(".thumbs", this.frame)[0];
        a && T.dom.setStyle(a, "width", this.s_itemsize * this.s_count), this.s_next || (this.s_next = T.query(".btn-next", this.frame)[0], T.on(this.s_next, "click", function () {
            e.__next()
        })), this.s_prev || (this.s_prev = T.query(".btn-prev", this.frame)[0], T.on(this.s_prev, "click", function () {
            e.__prev()
        })), this.s_init || (this.s_init = !0, T.on(window, "resize", function () {
            e.autoSize()
        }), F.Event.delegate(this.sliderwrap, "li", "click", function (i) {
            T.event.get(i).stop(), e.__showImageById(this.getAttribute("data-id"))
        }), F.Event.delegate(this.sliderview, "img", "click", function () {
            e.__nextImage()
        })), this.sliderclose && T.on(this.sliderclose, "click", function () {
            e.exitFullScreenMode()
        }), e.autoSize()
    }, r.registry = function () {
        T.each(T.query(".tool-imgallery"), function (e) {
            if ("imgallery" != T.dom.getAttr(e, "data-comtype")) {
                var i = new r(null, {target: e, container: T.q("mod-wrap-in", e)[0]});
                window.imgallery = i
            }
        })
    }, T.ready(function () {
        r.registry()
    })
}();
;!function () {
    var o = [], e = function (o) {
        if (o = "" + o, o = /^#/.test(o) ? o.substr(1) : o, 3 == o.length) {
            var e = o.split("");
            o = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]
        }
        if (6 != o.length)return [0, 0, 0];
        var s = new RegExp("\\w{2}", "ig");
        if (o = o.match(s), !o || o.length < 3)return [0, 0, 0];
        var n = parseInt(o[0], 16), i = parseInt(o[1], 16), r = parseInt(o[2], 16);
        return [n, i, r]
    }, s = function (o, e, s) {
        var n = [];
        s = Math.max(0, Math.min(1, s));
        for (var i = 0; 3 > i; i++)n[i] = Math.floor(1 * o[i] + s * (e[i] - o[i])).toString(16), n[i].length < 2 && (n[i] = "0" + n[i]);
        return n.join("")
    }, n = {
        add: function (o, e, s) {
            s = s || 0;
            var n = new this.tween(o, e);
            return s > 0 ? n.delay(s) : n.start(), n
        }, get: function (e) {
            T.isString(e) && (e = T.get(e));
            for (var s = 0; s < o.length; s++)if (o[s] == e || o[s].ele == e)return o[s];
            return null
        }, stop: function (o) {
            var e = this.get(o);
            e && e.stop()
        }, stopAll: function () {
            F.each(o, function () {
                this.stop()
            })
        }, startAll: function () {
            F.each(o, function () {
                this.start()
            })
        }, tween: function (e, s) {
            this.options = {
                method: F.math.tweener.simple,
                start: null,
                end: 0,
                prop: "",
                time: 500,
                step: 25,
                loop: 1,
                onStart: function () {
                },
                onUpdate: function () {
                },
                onComplete: function () {
                }
            }, this.map = [], this.ele = T.get(e), this.set(s), this.x = 0, this.timer = 0, this.playNum = 0, this.delayTimer = 0, -1 == T.array.indexOf(o, this) && o.push(this)
        }
    };
    n.tween.prototype.delay = function (o) {
        var e = this;
        clearTimeout(this.delayTimer), this.delayTimer = setTimeout(function () {
            e.start()
        }, o)
    }, n.tween.prototype.start = function () {
        this.pause(), function (o) {
            clearInterval(o.timer), o.timer = setInterval(function () {
                0 == o.x && T.fn.bind(o.options.onStart, o)();
                for (var e = o.map.length, n = 0, i = 0; e > i; i++)n = o.options.method(o.x, o.map[i].start, o.map[i].change, o.options.step), o.map[i].isColor && (n = "#" + s(o.map[i].startColor, o.map[i].endColor, o.x / o.options.step)), o.setStyle(o.ele, o.map[i].prop, n);
                o.x++, o.x > o.options.step ? (o.x = 0, o.playNum++, clearInterval(o.timer), T.fn.bind(o.options.onComplete, o)(), (o.options.loop < 1 || o.playNum % o.options.loop != 0) && o.start()) : o.x > 1 && T.fn.bind(o.options.onUpdate, o)(o.x, o.options.step)
            }, o.ttl)
        }(this)
    }, n.tween.prototype.pause = function () {
        clearInterval(this.timer), clearTimeout(this.delayTimer)
    }, n.tween.prototype.stop = function () {
        this.pause(), this.x = 0
    }, n.tween.prototype.getStyle = function (o, e) {
        return "scroll" == e.toString().substr(0, 6).toLowerCase() ? o[T.string.toCamelCase(e)] : T.getStyle(o, e)
    }, n.tween.prototype.setStyle = function (o, e, s) {
        return "scroll" == e.toString().substr(0, 6).toLowerCase() ? o[T.string.toCamelCase(e)] = s : T.setStyle(o, e, s)
    }, n.tween.prototype.set = function (o) {
        o = o || {}, this.options = T.object.extend(this.options, o), this.map = [];
        var s = 0, n = 0, i = !1, r = [], p = [];
        if (T.isString(this.options.prop)) i = o.start && /^#/.test(o.start.toString()) || o.end && /^#/.test(o.end.toString()) || /color$/i.test(this.options.prop), i ? (r = e(this.options.start || this.getStyle(this.ele, this.options.prop)), p = e(this.options.end), s = parseInt(r.join(""), 16), n = parseInt(p.join(""), 16)) : T.isNumber(o.start) || (this.options.start = parseFloat(this.getStyle(this.ele, this.options.prop)) || 0), this.map.push({
            prop: this.options.prop,
            start: this.options.start,
            end: this.options.end,
            change: this.options.end - this.options.start,
            isColor: i,
            startColor: r,
            endColor: p
        }); else for (var a in this.options.prop)T.isFunction(this.options.prop[a]) || (i = o.start && /^#/.test(o.start.toString()) || /^#/.test(this.options.prop[a].toString()) || /color$/i.test(a), i ? (r = e(this.getStyle(this.ele, a)), p = e(this.options.prop[a]), s = parseInt(r.join(""), 16), n = parseInt(p.join(""), 16)) : (s = parseFloat(this.getStyle(this.ele, a)) || 0, n = parseFloat(this.options.prop[a])), this.map.push({
            prop: a,
            start: s,
            end: n,
            change: n - s,
            isColor: i,
            startColor: r,
            endColor: p
        }));
        this.ttl = this.options.time / this.options.step
    }, F.namespace("widget.tween", "Tweener", n)
}();