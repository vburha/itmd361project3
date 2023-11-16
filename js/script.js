function init(){ 
  //Trying to make a custom cursor but it's not working
  function cursorfunction(){
    var cursorarea = document.querySelector('body');
    cursorarea.style.cursor = url('http://www.rw-designer.com/cursor-extern.php?id=114440'), url('.media/sanrio-cinnamoroll.ani'), help;
  }
  var cursorbutton = document.getElementById('cursorbutton');
  cursorbutton.onclick(cursorfunction);
  
}
window.addEventListener('load', init);