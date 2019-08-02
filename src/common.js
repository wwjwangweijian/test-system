(function() {
    // 控制根字体大小
    var winWidth = document.body.clientWidth;
    if ( winWidth > 640 ) {
        winWidth = 640;
    }
    document.querySelector('html').style.fontSize = winWidth/640 * 24 + 'px';
    window.addEventListener('orientationchange', function(event){
        winWidth = document.body.clientWidth;
        if ( winWidth > 640 ) {
            winWidth = 640;
        }
        document.querySelector('html').style.fontSize = winWidth/640 * 24 + 'px';
    });

})();