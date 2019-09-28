window.nicePage = {
    table: "div",
    bar: "bar",
    limit: "10",
    color: "#1E9FFF",
    layout: ["count", "prev", "page", "next", "limit", "skip"],
    setCfg: function (b) {
        nicePage.table = b.table;
        nicePage.bar = b.bar;
        nicePage.limit = b.limit;
        nicePage.color = b.color;
        nicePage.layout = b.layout
    },
    returnHtml: function (g, e) {
        var h = '<ul class="clearfix">';
        for (var f in e) {
            h += " <li class='movie_theme'" + e[f] + ">"
            console.log(e[f])
        }
        h += '<i class="icon_b rb_ico"></i><a href="select.html" class="movie_img"><img src="//puui.qpic.cn/vcover_vt_pic/0/wu1e7mrffzvibjy1551239885/220"  width="183px;"/><span class="v_title">';
        for (var f in g) {
            h += "<em>" + g[f] + "</em>"
            h +='<i class="fraction"' + g[f] + "></i>"
            h += '<div class="movie_title"><p class="movie_name"><a href="#" class="name">' + g[f] + '</a><span class="status">' + g[f] + '</span></p>';
            h += '<p class="Description">' +g[f]+ '</p></div></li>'
        }
        h += '</ul>'
        return h
    },
// <div class="movie_title">
// <p class="movie_name"><a href="#" class="name">都挺好</a><span class="status">热播</span></p>
// <p class="Description">内地,家庭,都市,剧情</p>
// </div>
// </li>
// </ul>
    returnList: function (j) {
        var h = new Array();
        for (var f in j) {
            var i = "";
            for (var g in j[f]) {
                i += j[f][g] + "_"
            }
            i = i.substring(0, i.length - 1);
            h.push(i)
        }
        return h
    },
    returnTable: function (e) {
        var h = e.split("_");
        var g = "<tr>";
        for (var f in h) {
            g += "<td>" + h[f] + "</td>"
        }
        g += "</tr>";
        return g
    }
};
$(function () {
    layui.use("laypage", function () {
        var a = layui.laypage;
        a.render({
            elem: nicePage.bar,
            limit: nicePage.limt,
            theme: nicePage.color,
            count: json.length,
            layout: nicePage.layout,
            jump: function (b) {
                document.getElementById(nicePage.table).innerHTML = function () {
                    var c = [nicePage.returnHtml(nameList, widthList)],
                        d = nicePage.returnList(json).concat().splice(b.curr * b.limit - b.limit, b.limit);
                    layui.each(d, function (e, g) {
                        var f = nicePage.returnTable(g);
                        c.push(f)
                    });
                    c.push("</ul>");
                    return c.join("")
                }()
            }
        })
    })
});