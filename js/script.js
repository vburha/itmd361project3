function init(){  
  function cursorfunction(){
    var cursorarea = document.querySelector('body');
    var cursorStyle = cursor:
      url(http://www.rw-designer.com/cursor-extern.php?id=175574);
    cursorarea.style.cssText = cursorStyle;
  }
  var cursorbutton = document.getElementById('cursorbutton');
  cursorbutton.addEventListener('click', cursorfunction);
  
}
window.addEventListener('load', init);