function init(){  
  function cursorfunction(){
    var cursorarea = document.querySelector('body');
    cursorarea.style.cursor = 'url(http://www.rw-designer.com/cursor-extern.php?id=175574), auto';
  }
  var cursorbutton = document.getElementById('cursorbutton');
  cursorbutton.addEventListener('click', cursorfunction);
}
window.addEventListener('load', init);