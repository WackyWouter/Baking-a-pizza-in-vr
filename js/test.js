window.onload = function(){
  console.log("hello");

  var boek = document.getElementById("boek2");
  var camera2 = document.getElementById("camera2");

  //andere camera
  boek.addEventListener("mouseenter", function()
  {
	  console.log("hello2");
    camera2.setAttribute('camera', 'active', true);
	document.getElementById("pizzaKitchen").setAttribute("visible", "true")
  });

}
