function init(){ 
  //Trying to make a custom cursor but it's not working
  function cursorfunction(){
    document.body.style.cursor = url('.media/cinnamoroll.png'), help;
  }
  var cursorbutton = document.getElementById('cursorbutton');
  cursorbutton.addEventListener('click', cursorfunction);
  
}
window.addEventListener('load', init);