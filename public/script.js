let buscar = document.getElementById("search-buscador");
let original = buscar.style.backgroundColor;




buscar.addEventListener("click", function() {
  let color = button.style.backgroundColor;
  
  if (color === original) {
    buscar.style.backgroundColor = "green";
  } else {
    buscar.style.backgroundColor = original;
  }
});


