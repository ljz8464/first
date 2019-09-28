// $(function () {
//     var nav = $("#nav");
//     // var mainPage = $(".mainPage");
//     var mainTopArr = new Array();
//     for(var i=0;i<mainPage.length;i++){
//         var top = mainPage.eq(i).offset().top;
//         mainTopArr.push(top);
//     }
//     $(window).scroll(function(){
//         var scrollTop = $(this).scrollTop();
//         var k;
//         for(var i=0;i<mainTopArr.length;i++){
//             if(scrollTop>=mainTopArr[i]){
//                 k=i;
//                 }
//         }
//         nav.find("a").eq(k).addClass("active").siblings().removeClass("active");
//         var active = document.getElementsByClassName("active")[0];
//     });
    
//     nav.find("a[href^='#']").click(function(e){
//         // e.preventDefault();
//         // console.log("test");
//         // $(e.target).addClass("active");
//         // $('html, body').animate({scrollTop: $(this.hash).offset().top}, 400);
//     });
    
// });
// 回到顶部
//  function jumpTop(){
//     $("html,body").animate({scrollTop:$("#top_top").offset().top},400)
// }
// 侧边导航列表拖拽排序
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