console.log("hola")

import {pintarProductos} from './controladorpintar.js'
import {productosBD} from '../helpers/database.js'
import {buscarProductos} from './controladorbuscar.js'
import { ampliarinfoproducto } from './ampliarinfoproducto.js';

let contador = localStorage.getItem('contador')
document.getElementById('carritocontador').innerHTML = contador

console.log(contador)

let joya=productosBD.filter(function(producto){
    return(producto.tipo=='joya')
})

pintarProductos(joya)
buscarProductos(joya)

let contenedor = document.getElementById ('fila')
contenedor.addEventListener('click', function(evento){

    let producto = ampliarinfoproducto(evento);
    
 localStorage.setItem("infoProducto",JSON.stringify(producto))
 console.log(localStorage.getItem("infoProducto"))

  window.location.href = "./src/views/ampliarinfo.html"

});

