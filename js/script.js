import {data} from "./dataProducts.js";
function call(){
    data.forEach(productoF)
}

call();



function productoF(item,index){
    const panel=
    `
                <div class="col-sm-3 producto" id="card" >
                <figure>
                    <img src="${item.img}" alt="figura1" >
                </figure>
                <div class="contenido">
                    <h6>${item.title}</h6>
                    <h6>${item.size}</h6>
                    <h7 class="precio">${item.price}</h7>
                </div>
            </div>
        `
        console.log(index);
        document.getElementById("row").innerHTML += panel;
}



