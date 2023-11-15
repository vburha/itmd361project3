function init(){
  var cursorbutton = document.getElementById('cursorbutton');
  cursorbutton.addEventListener('click', cursorfunction);
  
  function cursorfunction(){
    var cursorarea = document.querySelectorAll('body');
    cursorarea.style.cursor = 'url('http://www.rw-designer.com/cursor-extern.php?id=175574)')';
  }
}
window.addEventListener('load', init);