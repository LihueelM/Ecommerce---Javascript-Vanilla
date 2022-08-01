let listaBebidas = [];

class bebida {
    constructor (id , nombre, precio, stock, img, categoria,und ){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.categoria = categoria;
        this.und = und;
    }
}

listaBebidas.push(new bebida (1 , "Absolut" , 3000 , 10 , "./assets/vodka.jpg" , "bebidas_blancas" , 1))
listaBebidas.push(new bebida (2 , "Fernet" , 3000 , 10 , "./assets/fernet.jpg" , "aperitivo" ,1))
listaBebidas.push(new bebida (3 , "Gancia" , 3000 , 10 , "./assets/gancia.jpg" , "aperitivo" ,1 ))
listaBebidas.push(new bebida (4 , "Martini" , 3000 , 10 , "./assets/martini.jpg" , "licores" ,1))
listaBebidas.push(new bebida (5 , "Havana club"  , 3000 , 10 , "./assets/ron.jpg" , "licores",1))
listaBebidas.push(new bebida (6 , "Bombay" , 3000 , 10 , "./assets/gin.jpg" , "bebidas_blancas",1))



console.log(listaBebidas);