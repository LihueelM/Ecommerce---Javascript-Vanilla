//-------------Login-------------

function login (edad) {

    if(edad >= 18){
        return true
    }
    else{
        return false
    }
}

if(login(parseInt(prompt("Ingrese su edad: ")))){
    alert("Bienvenido");
    compra(parseInt(prompt("Ingrese 1 si quiere fernet $720. Ingrese 2 si quiere gancia $640.")), parseInt(prompt("Ingrese que cantidad desea comprar:")))

}
else{
    alert("No puede ingresar");
    
}
//-------------Compra-------------

function compra (bebida, cantidad){

    if(bebida == 1){

        let resultado = "Usted comprara " + cantidad + " Unidades Fernet"
        alert(resultado);
        alert("El valor total de la compra es de: $" + cantidad * 720 );
    }
    else if(bebida == 2){

        let resultado = "Usted comprara " + cantidad + " Unidades Gancia"
        alert(resultado);
        alert("El valor total de la compra es de: $" + cantidad * 640 );
    }
    else{
        alert("Por favor seleccione una de las 2 bebidas")
        
    }
}


