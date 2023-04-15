

function operacion(){
    var opera = document.getElementById('resultado').value;
    if(opera == 0){
        document.getElementById('resultado').value= "Sin operacion";
    } else{
        document.getElementById('resultado').value = eval(opera);
    }

}

function resetear(){
    document.getElementById("resultado").value = " ";
}
function numeros(valor){
    document.getElementById('resultado').value += valor;
}
function enableDarkMode() {
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");
}
if (document.getElementById('checkitem').checked) {
    console.log("checked");
} else {
    console.log("NOT checked");
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
