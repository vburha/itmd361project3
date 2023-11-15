function init(){  
  function cursorfunction(){
    var cursorarea = document.querySelector('body');
    var cursorStyle = cursor: url(.media/sanrio-cinnamoroll.ani);
    cursorarea.style.cssText = cursorStyle;
  }
  var cursorbutton = document.getElementById('cursorbutton');
  cursorbutton.addEventListener('click', cursorfunction);
  
}
window.addEventListener('load', init);