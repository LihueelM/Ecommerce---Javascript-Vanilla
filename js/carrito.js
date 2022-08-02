let carrito = [];
let contenedor_carrito = document.getElementById('tbody')
/* LocalStorage */
document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizar_carrito();
    }
})
/* funciones */
let agregar_al_carrito = (e) => {
    let test = carrito.some((item)=> item.id === e);
    if(test){
        console.log("Se repite")
        let nuevo_carrito = carrito.map(item => {
            if(item.id === e ){
                item.und++
            }
        })
    }
    else{
        console.log("Se agrega por primera vez")
        let item = listaBebidas.find((prod)=> prod.id === e)
        carrito.push(item);
    }
    actualizar_carrito();
    console.log(carrito)
}

let actualizar_carrito = () => {
    contenedor_carrito.innerHTML = "";
    carrito.forEach((e => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
        <td class = "new_td"><img src = "${e.img}" ></td>
        <td class = "new_td">${e.nombre}</td>
        <td class = "new_td">${e.und}</td>
        <td class = "new_td">$${e.precio * e.und}</td>
        <td class = "new_td "><button onclick="eliminar_del_carrito(${e.id})"class=" borrar_item css_btn">#</button></td>
        <td class = "new_td "><button onclick="agregar_al_carrito(${e.id})"class=" css_btn">+</button></td>
        <td class = "new_td "><button onclick="restar_item(${e.id})"class=" css_btn">-</button></td>
        `    
        contenedor_carrito.appendChild(fila);  
        localStorage.setItem('carrito', JSON.stringify(carrito));   
    } ))
    precioTotal.innerText = carrito.reduce((acc , e ) => acc + e.precio * e.und, 0);

}

let eliminar_del_carrito = (e_id) => {
    let item = carrito.find(prod => prod.id === e_id);
    let indice = carrito.indexOf(item);
    carrito.splice(indice , 1);
    item.und - 1;
    actualizar_carrito();
}

let restar_item = (e) => {
    let test = carrito.some((item)=> item.id === e);
    if(test){
        console.log("Se repite")
        let nuevo_carrito = carrito.map(item => {
            if(item.id === e && item.und > 1){
                item.und--                
            }
            else if(item.id === e && item.und < 1){
                eliminar_del_carrito();
            }
        })
    }
    actualizar_carrito();
    console.log(carrito)
}