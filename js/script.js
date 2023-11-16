function init(){ 
  //Trying to make a custom cursor but it's not working
  function cursorfunction(){
    var cursorarea = document.querySelector('body');
    var cursorStyle = cursor: url(.media/sanrio-cinnamoroll.ani);
    cursorarea.style.cssText = cursorStyle;
  }
  var cursorbutton = document.getElementById('cursorbutton');
  cursorbutton.addEventListener('click', cursorfunction);
  
  //Fullscreen option
  window.requestFullscreen(auto);
}
window.addEventListener('load', init);