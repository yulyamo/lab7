  
function init(){
  var input = document.getElementById('entryinput');
  var b1 = document.getElementById('entrybutton');
  var output = document.getElementById('textoutput');
  function myEventFunction(){
	  alert('Yulia Moiseyenko: ' + input.value);
	  output.innerHTML = input.value;
  }
  
  b1.addEventListener('click', myEventFunction);
}
window.addEventListener('load', init);