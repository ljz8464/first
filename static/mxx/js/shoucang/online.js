!function (i) {
    var w = {
        FLASH_PLAYER_URL: "http://www.iqiyi.com/common/flashplayer/20190321/1746f98c2359.swf",
        FLASH_PLAYER_ZURL: "http://www.iqiyi.com/common/flashplayer/20190321/1746af8f6df.swf",
        FLASH_P2P_URL: "http://www.iqiyi.com/common/flashplayer/20180620/14002a1b82aa.swf",
        FLASH_BARRAGE_URL: "http://www.iqiyi.com/common/flashplayer/20180810/0949c72eeb6.swf",
        FLASH_PRELOADER_URL: "http://www.iqiyi.com/common/flashplayer/20190220/16065aa9a57.swf",
        FLASH_PRELOADER_URL_TW: "http://www.iqiyi.com/common/flashplayer/20180529/1508c9cdf8a4.swf",
        FLASH_PRELOADER_VIP: "http://www.iqiyi.com/common/flashplayer/20190220/160684b0df09.swf",
        FLASH_PRELOADER_VIP_TW: "http://www.iqiyi.com/common/flashplayer/20171129/1530df83b9a5.swf",
        FLASH_PRELOADER_PRODUCE: "http://www.iqiyi.com/common/flashplayer/20190220/1606561520f8.swf",
        FLASH_PRELOADER_PRODUCE_TW: "http://www.iqiyi.com/common/flashplayer/20180529/15085e1d0a85.swf",
        FLASH_PRELOADER_EXCLUSIVE: "http://www.iqiyi.com/common/flashplayer/20190220/160621793893.swf",
        FLASH_PRELOADER_EXCLUSIVE_TW: "http://www.iqiyi.com/common/flashplayer/20180529/1508dc809b19.swf",
        FLASH_PRELOADER_ICON: "http://www.iqiyi.com/common/flashplayer/20171129/1530c314a0aa.swf",
        FLASH_PRELOADER_ICON_TW: "http://www.iqiyi.com/common/flashplayer/20171129/15307da15813.swf",
        FLASH_PRELOADER_ICON_PRODUCE: "http://www.iqiyi.com/common/flashplayer/20171129/1530925a82d4.swf",
        FLASH_PRELOADER_ICON_PRODUCE_TW: "http://www.iqiyi.com/common/flashplayer/20171129/1530151837af.swf",
        FLASH_PRELOADER_ICON_EXCLUSIVE: "http://www.iqiyi.com/common/flashplayer/20171129/153013651bd2.swf",
        FLASH_PRELOADER_ICON_EXCLUSIVE_TW: "http://www.iqiyi.com/common/flashplayer/20171129/153077057f2.swf",
        FLASH_TIP_XML: "http://static-s.iqiyi.com/ext/common/Tipdatavod_201809131013.xml",
        H5_PLAYER_URL: "http://static.iqiyi.com/js/player_v1/pcweb.wonder.js",
        H5_P2P_URL: "http://static.iqiyi.com/js/player_v1/res/20190102/17522a1b82aa.js",
        H5_P2P_ABS_URL: "http://static.iqiyi.com/js/player_v1/res/20190312/1830d7127c9f.js",
        H5_ARES_URL: "http://static.iqiyi.com/js/player_v1/res/20190318/1925aa12997c.js",
        H5_ARES_PAD_URL: "http://static.iqiyi.com/js/player_v1/res/20190314/18314d3ef161.js"
    };
    i.QiyiPlayerConfig = i.QiyiPlayerConfig || {};
    for (var a in w)w[a] && (i.QiyiPlayerConfig[a] = w[a])
}(window);