import {data} from "./dataProducts.js";
var app={};

function productoF(product,index){
    const panel=`
    <div class="col-sm-1 producto" id="card" >
                    <figure>
                        <img src="${product.img}" alt="figura1" >
                    </figure>
                    <div class="contenido">
                        <h6>${product.title}</h6>
                        <h6>${product.size}</h6>
                        <h7 class="precio">${product.price}</h7>
                    </div>
                </div>
    `
    console.log(index);
    document.getElementById("row").innerHTML += panel;
}
function call(){
    data.forEach(productoF)
}
call();

