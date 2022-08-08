import{pintarResumenCompra} from './controladorPintarResumen.js'

//accedemos a la variable local carrito 
let carrito = JSON.parse(sessionStorage.getItem('carrito'))

//crear una referencia para almacenar el contenedor

if(carrito== null){

    pintarResumenCompra('../../assets/img/carrito vacio.png','Your cart is empty', true, false, null, false, null)
    
    }

else{ //el carrito esta lleno

    //recorro el carrito de compras
    carrito.forEach(function(producto){
        pintarResumenCompra(producto.foto,producto.nombre,false, true,producto.precio,producto.cantidad)
    
    })
        
    }

//Rutina para limpiar resumen de la compra
let botonLimpiar = document.getElementById('botonLimpiar')
botonLimpiar.addEventListener("click", function(){
    sessionStorage.removeItem("carrito")
    let contenedor = document.getElementById('contenedor')
    contenedor.innerHTML= ""
    pintarResumenCompra('../../assets/img/carrito vacio.png','Your cart is empty', true, false, null, false, null)
})

