// se trae los datos de los productos (Conusltar la BD)
import { productosBD } from "../helpers/database.js"
console.log(productosBD)

//llamamos al metodo encargado de ampliar traversing y pintar la tineda
import { pintarProductos } from "./controladorpintar.js"
pintarProductos(productosBD)

// Llamamos al metodo encargado de buscar productos por texto coincidente
import { buscarProductos } from "./controladorbuscar.js"
buscarProductos(productosBD)

import {ampliarinfoproducto} from './ampliarinfoproducto.js'

let contenedor = document.getElementById ('fila')
contenedor.addEventListener('click', function(evento){
    let producto = ampliarinfoproducto(evento);

    
console.log(producto)

localStorage.setItem("infoProducto",JSON.stringify(producto))
console.log(localStorage.getItem("infoProducto"))

window.location.href = "./src/views/ampliarinfo.html"

})




