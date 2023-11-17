function init(){ 
  //Trying to make a custom cursor but it's not working
  function cursorfunction() {
    document.querySelectorAll('body').style.cursor = 'url(".media/kurousa.cur")', 'pointer';
  }
  var cursorbutton = document.getElementById('cursorbutton');
  cursorbutton.addEventListener('click', cursorfunction);
  
  //
  
}
window.addEventListener('load', init);