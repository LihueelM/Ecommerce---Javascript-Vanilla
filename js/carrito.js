let carrito = [];
/* Traemos todos los tbn a usar */
let main_container = document.getElementById("main_container_card");
let contenedor_carrito = document.getElementById("tbody");
let precioTotal = document.getElementById("precioTotal")

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizar_carrito();
    }
})
/* Instancio en primer lugar la pagina de incio */
let section = document.createElement("section");
section.innerHTML = `
    <section class = "container-fluid"> 
    <p class = "text-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, voluptatem maxime! Nesciunt sunt commodi laboriosam error, libero eaque exercitationem asperiores quo rerum vitae atque recusandae quod possimus architecto dignissimos assumenda.
    Ullam, quo dicta illo odio sint reprehenderit, nobis nesciunt corporis, non maxime omnis ipsam delectus repudiandae maiores id eos iste accusantium perspiciatis culpa dolores doloribus? Ratione quisquam nostrum aut ducimus.
    Blanditiis iste magni doloribus cupiditate iure ratione sed cum modi doloremque reprehenderit eius similique, dolore eum accusantium veritatis error quos cumque id laudantium accusamus culpa corrupti velit ipsa tenetur? A.
    At ipsa reprehenderit sunt inventore nesciunt odit nam quaerat molestias totam saepe vero temporibus libero nostrum obcaecati porro suscipit accusamus consequuntur assumenda quam eum, facilis, perferendis veniam incidunt? Ipsum, repudiandae.</p>
    </section>`
    main_container.appendChild(section);

/* Funciones de renderizacion */

let renderLicores = () =>{
    let licores = listaBebidas.filter(e => e.categoria == "licores");
    main_container.innerHTML = ""
    
    licores.forEach((e) => {
        let div = document.createElement("div")
        div.innerHTML=
                    `<div class="card col p-2">
                    <img src="${e.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <p class="card-text">Disponibles: ${e.stock}</p>
                            <a href="#" id = "id${e.id}" class="btn btn-primary" id="btn-añadir">Añadir al carrito</a>
                        </div>
                    </div>                       
                    `                            

        main_container.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
        btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id));   
    })
}

let renderAperitivos = () =>{
    let aperitivos = listaBebidas.filter(e => e.categoria == "aperitivo");
    main_container.innerHTML = ""
    aperitivos.forEach( (e) => {
        let div = document.createElement("div");
        div.innerHTML=
                    `<div class="card col p-2">
                    <img src="${e.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <p class="card-text">Disponibles: ${e.stock}</p>
                            <a href="#" id = "id${e.id}" class="btn btn-primary" id="btn-añadir">Añadir al carrito</a>
                        </div>
                    </div>                       
                    `                            

        main_container.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
        btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id));  

    })        
}

let renderBebidasBlancas = () =>{
    let bebidas_blancas = listaBebidas.filter(e => e.categoria == "bebidas_blancas");
    main_container.innerHTML = ""
    bebidas_blancas.forEach( (e) => {
        let div = document.createElement("div");
        div.innerHTML=
                    `<div class="card col p-2">
                    <img src="${e.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <p class="card-text">Disponibles: ${e.stock}</p>
                            <a href="#" id = "id${e.id}" class="btn btn-primary" id="btn-añadir">Añadir al carrito</a>
                        </div>
                    </div>                       
                    `                            

        main_container.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
        btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id));  
    })        
}

let renderInicio = () => {
    main_container.innerHTML = ""
    let section = document.createElement("section");
    section.innerHTML = `
        <section class = "container-fluid"> 
        <p class = "text-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, voluptatem maxime! Nesciunt sunt commodi laboriosam error, libero eaque exercitationem asperiores quo rerum vitae atque recusandae quod possimus architecto dignissimos assumenda.
        Ullam, quo dicta illo odio sint reprehenderit, nobis nesciunt corporis, non maxime omnis ipsam delectus repudiandae maiores id eos iste accusantium perspiciatis culpa dolores doloribus? Ratione quisquam nostrum aut ducimus.
        Blanditiis iste magni doloribus cupiditate iure ratione sed cum modi doloremque reprehenderit eius similique, dolore eum accusantium veritatis error quos cumque id laudantium accusamus culpa corrupti velit ipsa tenetur? A.
        At ipsa reprehenderit sunt inventore nesciunt odit nam quaerat molestias totam saepe vero temporibus libero nostrum obcaecati porro suscipit accusamus consequuntur assumenda quam eum, facilis, perferendis veniam incidunt? Ipsum, repudiandae.</p>
        </section>`
        main_container.appendChild(section);
    
}

/* Funcionalidades de la pagina */

/* funciones */
let agregar_al_carrito = (e) => {
    let test = carrito.some((item)=> item.id === e);
    if(test){
        console.log("Se repite")
        let nuevo_carrito = carrito.map(item => {
            if(item.id === e){
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
        <td class = "new_td">$${e.precio}</td>
        <td class = "new_td "><button onclick="eliminar_del_carrito(${e.id})"class="btn-danger borrar_item css_btn">#</button></td>
        <td class = "new_td "><button onclick="agregar_al_carrito(${e.id})"class="btn-warning css_btn">+</button></td>
        <td class = "new_td "><button onclick="restar_item(${e.id})"class="btn-warning css_btn">-</button></td>
        `    
        contenedor_carrito.appendChild(fila);  
        localStorage.setItem('carrito', JSON.stringify(carrito));   
    } ))
    precioTotal.innerText = carrito.reduce((acc , e ) => acc + e.precio, 0);

}

let eliminar_del_carrito = (e_id) => {
    let item = carrito.find(prod => prod.id === e_id);
    let indice = carrito.indexOf(item);
    carrito.splice(indice , 1);
    item.und = 0;

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