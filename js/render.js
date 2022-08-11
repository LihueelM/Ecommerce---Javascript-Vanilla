/* Captura de etiquetas */
let main_instancia = document.querySelector(".main_instancia");
let offcanvas = document.querySelector(".offcanvas_shop");
let btnOpen = document.querySelector(".btn-open");
let btnClose = document.querySelector(".btn-close");

/* Capturo los botones del carrito de compras */
btnOpen.addEventListener('click' , function(e){
    e.preventDefault();
    offcanvas.classList.add('active');
} );

btnClose.addEventListener('click' , function (e){
    e.preventDefault();
    offcanvas.classList.remove('active');
});

/* Instancio en primer lugar la pagina de incio */
let renderInicio = () => {  
    let section = document.createElement("section");
    main_instancia.innerHTML = ""
    section.innerHTML = `
    <section class = "container-fluid"> 
    <h2 class = "titulo"> LAS MEJORES BEBIDAS PARA LAS MEJORES PERSONAS </h2>
    <h3 class = "presentacion">Somos Orwell Drink's </br> Una familia dedicada a llevar las mejores bebidas para que siempre disfrutes solo o en compañia del mejor sabor. Todo al alcance de un solo click</h3>
    </section>`
    main_instancia.appendChild(section);
    
}
renderInicio();

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
                            <a href="#" id = "id${e.id}" class="btn btn-warning" id="btn-añadir">Añadir al carrito</a>
                        </div>
                    </div>                       
                    `                            

                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
         btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id));    
    })
}
/* CATEGORIA APERITIVOS */
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
                            <a href="#" id = "id${e.id}" class="btn btn-warning" id="btn-añadir">Añadir al carrito</a>
                        </div>
                    </div>                       
                    `                            

                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
         btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id));  

    })        
}
/* CATEGORIA BEBIDAS BLANCAS */
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
                            <a href="#" id = "id${e.id}" class="btn btn-warning" id="btn-añadir">Añadir al carrito</a>
                        </div>
                    </div>                       
                    `                            

                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
         btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id)); 
    })        
}
/* CATEGORIA DE TODAS LAS BEBIDAS */
let renderTodo = () => {
    main_instancia.innerHTML = ""
    listaBebidas.forEach( (e) => {
        let div = document.createElement("div");
        div.classList.add('container_card')
        div.innerHTML=
                    `<div class="card col p-2">
                    <img src="${e.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <p class="card-text">Disponibles: ${e.stock}</p>
                            <a href="#" id = "id${e.id}" class="btn btn-warning btn-compra" id="btn-añadir">Añadir al carrito</a>          
                        </div>
                    </div>         
                    `                                            

                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
         btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id)); 
    })        
}

/*CONSUMO DE API */
fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&units=metric&appid=451aa8f2fef43a3414f1c441922bdd4a')
    .then(response => response.json())
    .then(data => {
        let temperatura = data.main.temp;
        let ubicacion = data.name;
        console.log(temperatura , ubicacion)

        let p_ubicacion = document.querySelector(".temp");
        p_ubicacion.innerHTML=`<p><i class="bi bi-geo"></i> Ubicacion: ${ubicacion} - Temperatura: ${temperatura} `

    })
