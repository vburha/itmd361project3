function init(){ 
  //Trying to make a custom cursor but it's not working
  function cursorfunction(){
    document.querySelectorAll('body').style = cursor: crosshair;
    //cursorarea.style.cursor = url('.media/cinnamoroll.png'), crosshair;
  }
  var cursorbutton = document.getElementById('cursorbutton');
  cursorbutton.addEventListener('click', cursorfunction);
  
}
window.addEventListener('load', init);