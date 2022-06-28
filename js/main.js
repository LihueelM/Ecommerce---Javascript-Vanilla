const ingreso = () => {

    let edad = parseInt(prompt("Ingrese su edad:"));

    if(edad >= 18 ) {
        return true;

    }else{
        return false;
    }
}

let resultado = ingreso();

const validacion = () => {

    if (resultado == true){        
        alert("Puede ingresar")
        let usuario = prompt("Ingrese su usuario");
        alert("Bienvenido: " + usuario);    

    }else{
        alert("Debe ser mayor de 18 para ingresar.")
    }
}


validacion();

