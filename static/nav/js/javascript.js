$(function () {
var $nav = $('#nav');
$(window).scroll(function () {
  nav();
});

function nav() {
    if ($('#m_2544').offset().top <= $(this).scrollTop()) {
     $nav.css({top: 72});
   } else {
     $nav.css({top: 638});
   }
 };
 nav();
});

// #a2ha1.12325017.0.i2
// .focus-wrap
$(function () {
    var nav = $("#nav");
    var mainPage = $(".h");
    var mainTopArr = new Array();
    for(var i=0;i<mainPage.length;i++){
        var top = mainPage.eq(i).offset().top;
        mainTopArr.push(top);
    }
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        var k;
        for(var i=0;i<mainTopArr.length;i++){
            if(scrollTop<=mainTopArr[i]){
                k=i;
                break;
            }
        }
        // nav.find("a").eq(k).addClass("active").siblings().removeClass("active");
    });
    nav.find("a[href^='#']").click(function(e){
        e.preventDefault();
        console.log(e.target);
        $(".active").removeClass("active");
        $(e.target).addClass("active");
        var href = $(e.target).attr("href");
        console.log(href);
        $('html, body').animate({scrollTop: $(href).offset().top}, 400);
    });

});
// 回到顶部
 function jumpTop(){
    $("html,body").animate({scrollTop:$("#page1").offset().top},400)
}
//侧边导航列表拖拽排序
 function dragDrop(){
    Sortable.create(dragDropItem, {
        group: "words",
        animation: 150,
        store: {
            get: function (sortable) {
                var order = localStorage.getItem(sortable.options.group);
                return order ? order.split('|') : [];
            },
            set: function (sortable) {
                var order = sortable.toArray();
                localStorage.setItem(sortable.options.group, order.join('|'));
            }
        },
        onAdd: function (evt){},
        onUpdate: function (evt){},
        onRemove: function (evt){},
        onStart:function(evt){},
        onSort:function(evt){},
        onEnd: function(evt){}
            });
 }
