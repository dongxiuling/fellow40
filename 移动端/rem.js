;
(function(win) {
    var doc = win.document;
    var docEl = doc.documentElement; 
    var tid;

    function refreshRem() {
        // 获取屏幕宽度
        var width = docEl.getBoundingClientRect().width;
        var rem = width / 6.4; // 将屏幕宽度分成6.4份， 1份为1rem   320/6.4 = 50 
        // 让html的fontSize = 50px   1rem = 50px
        docEl.style.fontSize = rem + 'px';
        // 320  /6.4 = 50   html->50      1rem   50 
        // 640  /6.4 = 100  html-> 100           100
        // console.log(0.14*rem);
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);

    refreshRem();

})(window);