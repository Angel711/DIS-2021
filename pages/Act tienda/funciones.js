let productos = [[0,"Galletas",15],
                [1,"Sabritas",13],
                [2,"Agua",10],
                [3,"Chocolate",20],
                [4,"Cacahuates",15]];
let carrito=[];

window.addEventListener("load",cargar);

function cargar()
{
    s = document.querySelector('section');
    for(i=0;i<productos.length;i++)
    {
        s.innerHTML+="<div id='"+productos[i][0]+"'>"+
                    "<h1>"+productos[i][1]+"</h1>"+
                    "<p>$"+productos[i][2]+"</p>"+
                    "<button onclick='agregar("+productos[i][0]+")'>+</button>"+
                    "</div>";
    }
}

function agregar(id)
{
    carrito.push(id);
    document.querySelector('s').innerHTML=carrito.length;
}
function mostrarCarrito()
{
    listaProductos = document.querySelector('nav');
    for(i=0;i<carrito.length;i++)
    {
        for(j=0;j<productos.length;j++)
        {
            if(productos[j][0]==carrito[i])
            {
                listaProductos.innerHTML+="<div id='listaNav'>"+
                    "<h1>"+productos[j][1]+"</h1>"+
                    "<p>$"+productos[j][2]+"</p>"+
                    "</div>";
            }
        }
    }
    
}
function visibilidad()
{
    document.querySelector('nav').classList.toggle("visible");
    document.querySelector('section').classList.toggle("sn");
    lista = document.querySelector('nav');
    if(lista.innerHTML=="")
    {
        mostrarCarrito();
    }
    if(lista.classList=="")
    {
        lista.innerHTML="";
    }
}