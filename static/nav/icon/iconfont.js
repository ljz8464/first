! function (l) {
    var e, d = '<svg><symbol id="icon-shang" viewBox="0 0 1024 1024"><path d="M81.522712 687.094854c14.471596 14.285355 37.747719 14.2127 52.071959-0.224104l377.321648-380.777353 382.585535 379.158483c14.471596 14.32424 37.748742 14.217816 52.112891-0.218988 14.33038-14.477736 14.217816-37.787628-0.218988-52.118008L538.761504 229.962485c-0.62831-0.623193-1.438769-0.769526-2.061962-1.359974-0.152473-0.145309-0.185218-0.330528-0.332575-0.477884-7.181563-7.108908-16.57756-10.683317-25.928532-10.683317-9.463536 0-18.96698 3.647063-26.148543 10.902304L81.33647 634.977869C66.973344 649.453558 67.084884 672.765497 81.522712 687.094854L81.522712 687.094854zM81.522712 687.094854"  ></path></symbol><symbol id="icon-paixu" viewBox="0 0 1024 1024"><path d="M416.64 927.104H259.584V364.224H67.84l348.8-299.968v862.848zM610.56 97.088h157.056v560.128h191.744l-348.8 299.904V97.088z"  ></path></symbol></svg>',
        t = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
    if (t && !l.__iconfont__svg__cssinject__) {
        l.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }! function (e) {
        if (document.addEventListener)
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(e, 0);
            else {
                var t = function () {
                    document.removeEventListener("DOMContentLoaded", t, !1), e()
                };
                document.addEventListener("DOMContentLoaded", t, !1)
            }
        else document.attachEvent && (n = e, o = l.document, i = !1, c = function () {
            i || (i = !0, n())
        }, (d = function () {
            try {
                o.documentElement.doScroll("left")
            } catch (e) {
                return void setTimeout(d, 50)
            }
            c()
        })(), o.onreadystatechange = function () {
            "complete" == o.readyState && (o.onreadystatechange = null, c())
        });
        var n, o, i, c, d
    }(function () {
        var e, t, n, o, i, c;
        (e = document.createElement("div")).innerHTML = d, d = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", n = t, (o = document.body).firstChild ? (i = n, (c = o.firstChild).parentNode.insertBefore(i, c)) : o.appendChild(n))
    })
}(window);