/* Creo el array de carrito y selecciono las etiquetas que voy a usar */
let carrito = [];
let contenedor_productos = document.getElementById("contenedor_productos");
let contenedor_carrito = document.getElementById("tbody")
/* ------ Instancio los productos que tengo disponibles ------*/
listaProductos.forEach((e) => {
    let div = document.createElement("div")
    div.innerHTML=
                `<div class="card col p-2">
                <img src="${e.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${e.nombre}</h5>
                        <p class="card-text">$${e.precio}</p>
                        <p class="card-text">Disponibles: ${e.stock}</p>
                        <button id = "id${e.id}" class = "btn-warning btn_item">Agregar al carrito</button>
                    </div>
                </div>                       
                `
    contenedor_productos.appendChild(div);
    let btn_borrar = document.getElementById(`id${e.id}`);
    btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id));   
})


/* funciones */
let agregar_al_carrito = (e) => {
    let test = carrito.some((item)=> item.id === e);
    if(test){
        console.log("Se repite")
        let nuevo_carrito = carrito.map(item => {
            if(item.id === e){
                item.cantidad++
            }
        })
    }
    else{
        console.log("Se agrega por primera vez")
        let item = listaProductos.find((prod)=> prod.id === e)
        carrito.push(item);
    }
    actualizar_carrito();
    console.log(carrito)
}

let actualizar_carrito = () => {
    contenedor_carrito.innerHTML = "";
    carrito.forEach((e => {
        let fila = document.createElement("tr")
        fila.innerHTML = `
        <td class = "new_td"><img src = "${e.img}" ></td>
        <td class = "new_td">${e.nombre}</td>
        <td class = "new_td">${e.cantidad}</td>
        <td class = "new_td">$${e.precio}</td>
        <td class = "new_td"><button onclick="eliminar_del_carrito(${e.id})"class="btn-danger borrar_item">Borrar</button></td>
        <td class = "new_td"><button onclick="agregar_al_carrito(${e.id})"class="btn-warning">+</button></td>
        <td class = "new_td"><button onclick="restar_item(${e.id})"class="btn-warning">-</button></td>
        `    
        contenedor_carrito.appendChild(fila);  
        localStorage.setItem('carrito', JSON.stringify(carrito));   
    } ))
}

let eliminar_del_carrito = (e_id) => {
    let item = carrito.find(prod => prod.id === e_id);
    let indice = carrito.indexOf(item);
    carrito.splice(indice , 1);

    actualizar_carrito();
}
/* Todavia tengo que corregir un error sobre esta funcion */
let restar_item = (e) => {
    let test = carrito.some((item)=> item.id === e);
    if(test){
        console.log("Se repite")
        let nuevo_carrito = carrito.map(item => {
            if(item.id === e && item.cantidad > 1){
                item.cantidad--
            }
            else{
                eliminar_del_carrito()
            }
        })
    }
    actualizar_carrito();
    console.log(carrito)
}






























/* let agregar_al_carrito = (e) =>{  
    
    let existe =  carrito.some((prod) => prod.id === e);
    
    if(existe){
        let nuevo_carrito = carrito.map((e) => e.cantidad);
        if(nuevo_carrito == 1){
            let nuevo = nuevo_carrito++;
            console.log(nuevo);
        }
        
        

        
    }else{
        let item = listaProductos.find((prod) => prod.id === e)
        carrito.push(item);
        console.log(carrito)
        
    }
    
    
  
}

let mostrar_carrito = (item) => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
    <td class = "new_td"><img src = "${item.img}" ></td>
    <td class = "new_td">${item.nombre}</td>
    <td class = "new_td">${item.cantidad}</td>
    <td class = "new_td">$${item.precio}</td>
    <td class = "new_td"><button class="btn-danger borrar_item">Borrar</button></td>`

    let tabla = document.getElementById("tbody");
    tabla.appendChild(fila);

    let boton_borrar = document.querySelectorAll(".borrar_item");
    for (boton of boton_borrar){
        boton.addEventListener("click", borrar_item);
    }
}

let borrar_item = (e) => {
    let item = carrito.find ((prod) => prod.id === e);
    let indice = carrito.indexOf(item);
    carrito.splice(indice, 1);

    let fila = e.target.parentNode.parentNode;
    fila.remove();
}


 */