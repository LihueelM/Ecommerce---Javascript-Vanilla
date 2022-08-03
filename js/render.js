/* Captura de etiquetas */
let main_instancia = document.querySelector(".main_instancia");
/* Etiquetas carrito */
let offcanvas = document.querySelector(".offcanvas_shop");
let btnOpen = document.querySelector(".btn-open");
let btnClose = document.querySelector(".btn-close");

btnOpen.addEventListener('click' , function(e){
    e.preventDefault();
    offcanvas.classList.add('active');
} );

btnClose.addEventListener('click' , function (e){
    e.preventDefault();
    offcanvas.classList.remove('active');
});

/* Instancio en primer lugar la pagina de incio */
let section = document.createElement("section");
section.innerHTML = `
    <section class = "container-fluid"> 
    <h2 class = "titulo"> LAS MEJORES BEBIDAS PARA LAS MEJORES PERSONAS </h2>
    <p class = "presentacion">Somos Orwell Drink's </br> Una familia dedicada a llevar las mejores bebidas para que siempre disfrutes solo o en compañia del mejor sabor. Todo al alcance de un solo click</p>
    </section>`
    main_instancia.appendChild(section);

/* Render de las categorias */
let renderLicores = () =>{
    let licores = listaBebidas.filter(e => e.categoria == "licores");
    main_instancia.innerHTML = ""
    
    licores.forEach((e) => {
        let div = document.createElement("div")
        div.classList.add('container_card')
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

                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
         btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id));    
    })
}
/* ------ */
let renderAperitivos = () =>{
    let aperitivos = listaBebidas.filter(e => e.categoria == "aperitivo");
    main_instancia.innerHTML = ""
    aperitivos.forEach( (e) => {
        let div = document.createElement("div");
        div.classList.add('container_card')
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

                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
         btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id));  

    })        
}
/* ------- */
let renderBebidasBlancas = () =>{
    let bebidas_blancas = listaBebidas.filter(e => e.categoria == "bebidas_blancas");
    main_instancia.innerHTML = ""
    bebidas_blancas.forEach( (e) => {
        let div = document.createElement("div");
        div.classList.add('container_card')
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

                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
         btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id)); 
    })        
}

let renderInicio = () => {
    
}