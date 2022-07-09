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
}
else{
    alert("No puede ingresar");
    
}

// Complementario n°2 implementacion de arrays

//Creo la info del stock para poder tener referencia de que bebida tenemos a la venta, precio, id y stock disponible

class Bebida{
    constructor(id,nombre,precio,stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

let listaBebidas = [];

listaBebidas.push(new Bebida (01 , "Fernet", 1150 , 25));
listaBebidas.push(new Bebida (02 , "Gancia", 940 , 20));
listaBebidas.push(new Bebida (03 , "Vodka", 1300 , 28));
listaBebidas.push(new Bebida (04 , "Gin Tonic", 1850 , 16));

for(let bebidas of listaBebidas){
    console.log(bebidas);
}

// Entrega de trabajo final n°1 

//En esta parte creare una funcionalidad donde el comprador podra elegir que bebida comprar y mediante un console.log se mostrara la bebida comprada.
//Tambien se mostrara el stock inicial antes de la compra y el stock luego de esa misma compra para tener un seguimiento del stock.

//-------------Compra-------------

//Seleccion de que bebida quiere comprar

let seleccion = parseInt(prompt("Elija que opcion quiere comprar: \n"+"Fernet : 1\nGancia: 2\nVodka: 3\nGin Tonic: 4 "));

    //Creo la funcion para buscar la bebida solicitada
    let buscarBebida = (bebida) => { return bebida.id == seleccion }
    
    //Traigo la seleccion
    let bebidaEncontrada = listaBebidas.find(buscarBebida);

    //Si hay stock permite que siga la compra
    if(bebidaEncontrada.stock <= 0){

        alert("No hay stock")
        
    }
    else{

        //Se informa que se esta comprando, el valor y se pregunta cuantas unidades quiere ordenar
        let compra = parseInt(prompt(( "La bebida que a elegido es: " +  bebidaEncontrada.nombre  + "\nEl valor por unidad es de: " + bebidaEncontrada.precio + "\nCuantas bebidas quiere ordenar?")));
        let verificacion = prompt("Usted va a ordernar " + compra + bebidaEncontrada.nombre + " El total es de: " + (bebidaEncontrada.precio * compra) +  " Es correcto? SI | NO").toUpperCase();
        //Se actualiza el stock
        if(verificacion == "SI"){

            let nuevoStock = bebidaEncontrada.stock - compra;
            bebidaEncontrada.stock = nuevoStock;          
            //Descuento la cantidad de unidades que se compraron.
            console.log("Nuevo stock es: " + bebidaEncontrada.stock);
            //Verifico que el objeto se haya actualizado.
            console.log(bebidaEncontrada);
        }
        else{
            alert("Se cancela la compra")
        }      

    }
    

    

    
    

    




 




