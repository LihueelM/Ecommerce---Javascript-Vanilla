/* Creo la lista de productos y mediante una clase instancio los nuevos objetos */
let listaProductos = [];

class producto {
    constructor (id, nombre, stock, precio, img,cantidad){
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
        this.img = img;
        this.cantidad = cantidad;
    }
}

listaProductos.push(new producto (1,"Vodka", 10, 3200, "assets/vodka.jpg" , 1)); 
listaProductos.push(new producto (2,"Gancia", 10, 1800, "assets/gancia.jpg" , 1));
listaProductos.push(new producto (3,"Fernet", 10, 2200, "assets/fernet.jpg" , 1));
listaProductos.push(new producto (4,"Gin", 10, 3000, "assets/gin.jpg" , 1));
listaProductos.push(new producto (5,"Martini", 10, 2600, "assets/martini.jpg" , 1));
listaProductos.push(new producto (6,"Ron", 10, 3300, "assets/ron.jpg" , 1));


console.log(listaProductos);
