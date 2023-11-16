function init(){ 
  //Trying to make a custom cursor but it's not working
  function cursorfunction(){
    var cursorarea = document.querySelectorAll('body');
    document.querySelectorAll('body').style.cursor = url('.media/cinnamoroll.png'), crosshair;
  }
  var cursorbutton = document.getElementById('cursorbutton');
  cursorbutton.addEventListener('click', cursorfunction);
  
}
window.addEventListener('load', init);