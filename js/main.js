/* Creamos la lista de objetos que representar los productos a la venta y el carrito */
let listaBebidas = [];
let carrito = [];

class Bebida {
    constructor (id, nombre, precio, stock, img){
        this.img = img;
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }
}

listaBebidas.push(new Bebida (01 , "Gin", 2200 , 10 , "./images/gintonic.jpg"));
listaBebidas.push(new Bebida (02 , "Fernet", 1600 , 10 , "./images/fernet.jpg"));
listaBebidas.push(new Bebida (03 , "Martini Bianco", 1400 , 10, "./images/martini.jpg"));
listaBebidas.push(new Bebida (04 , "Gancia", 1000 , 10 , "./images/gancia.jpg"));
listaBebidas.push(new Bebida (05 , "Havana Club" , 2600 , 10 , "./images/Ron.jpg"));
listaBebidas.push(new Bebida (06 , "Absolut Vodka" , 3200 , 10 , "./images/vodka.jpg"));

console.log(listaBebidas);

/* Capturo el contenedor principal de las card y las creo en el DOM */
let contenedor_card = document.getElementById("contenedor_card");

listaBebidas.forEach((element) => {
    let div = document.createElement("div")
    div.innerHTML=`            
                <img src="${element.img}" alt="...">
                <h3 class ="card_title">${element.nombre}</h3>
                <p class ="price_card">$${element.precio}</p>
                <p class ="stock">Unidades disponibles:  ${element.stock} <p/>                 
                <button id="id${element.id}">Agregar al carrito</button>
                `
    contenedor_card.appendChild(div);
/* Tomo el elemento boton para luego agregarle el evento que activa la funcion de agregar_carrito */
    let boton_agregar = document.getElementById( `id${element.id}` );
    boton_agregar.addEventListener("click", () => { agregar_carrito(element.id) });
});

/* Creo una funcion que encuentre en la lista el mismo valor de id y lo agrego a carrito */
function agregar_carrito(bebidaId){
    let item = listaBebidas.find((element) => element.id === bebidaId);
    carrito.push(item);
    console.log(carrito);
}

