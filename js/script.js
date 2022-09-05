import { data } from "./dataProducts.js";
function call() {
    data.forEach(productoF)
}

call();

function productoF(item, index) {
    if (item.discount != "") {
        const card =
            `
            <div class="col-sm-1 producto" id="card" >
                            <div class="discount">
                            <h1>${item.discount}</h1>
                            </div>
                            <div class="favorito">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                            </figure>
                            </div>
                            <figure>
                                <img src="${item.img}" alt="figura1" >
                            </figure>
                            <div class="contenido">
                                <h6>${item.title}</h6>
                                <h6>${item.size}</h6>
                                <h7 class="precio">${item.price}</h7>
                            </div>
                            <button class="boton">Añadir a la cesta</button>
                            
                        </div>
            
            
            `
        console.log(index);
        document.getElementById("row").innerHTML += card;
    }
    else {
        const panel =
            `
        
        <div class="col-sm-3 producto" id="card" >
        
        <figure>
            <img src="${item.img}" alt="figura1" >
        </figure>
        
        

        <div class="contenido">
        
            <h6 style="font-family:sans-serif;font-size:12px;font-weight:bold;">${item.title}</h6>
            <h6 style="font-size:10px;">${item.size}</h6>
            <h7 class="precio" style="color:green;font-weight:bold;">${item.price}</h7>
            
        </div>
        <br>
        <br>
        <a class="btn btn-primary" style="font-size:10px;width:200px;height:30px;background-color:#efa229;border:1px solid white;border-radius:50px;text-align:center;color: white;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                                </svg>

        Anadir a la cesta
        </a>
    </div>
            `

        console.log(index);
        document.getElementById("row").innerHTML += panel;


    }

}


