/* //-------------Login-------------

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
} */

/* Complementario n°2 implementacion de arrays*/

/* Creo la info del stock para poder tener referencia de que bebida tenemos a la venta, precio, id y stock disponible */

class Bebida{
    constructor(id,nombre,precio,stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

let listaBebidas = [];

listaBebidas.push(new Bebida (01 , "Fernet", "$1150" , 25));
listaBebidas.push(new Bebida (02 , "Gancia", "$940" , 20));
listaBebidas.push(new Bebida (03 , "Vodka", "$1300" , 28));
listaBebidas.push(new Bebida (04 , "Gin Tonic", "$1850" , 16));

for(let bebidas of listaBebidas){
    console.log(bebidas);
}










