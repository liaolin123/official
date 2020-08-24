(function(){
    let html= document.documentElement;
    function onwindowresize(){
        html.style.fontSize=html.getBoundingClientRect().width/19.20+'px'
    }
    window.addEventListener('resize',onwindowresize)
    onwindowresize()
    console.log(1);
    
})();