var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var listado = document.getElementById("listado");
var cantidad = document.getElementById("cantidad");

var total = 0;

btn.onclick = function() {
   
    if (inputTarea.value == "") {
        return;
    }
    
    var elemento = inputTarea.value;
  
    var li = document.createElement("li");
    
    li.textContent = elemento;
  
    listado.appendChild(li);
    total++;
    cantidad.innerHTML = total;


   
    var btnEliminar = document.createElement("span");
    btnEliminar.textContent = "\u00d7";
    li.appendChild(btnEliminar);


    btnEliminar.onclick = function() {
        li.remove();
        total--;
        cantidad.innerHTML = total;
    }

   
    inputTarea.value = "";

}

function enableDarkMode() {
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");

    // Check if checkbox is checked or not
    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }


}