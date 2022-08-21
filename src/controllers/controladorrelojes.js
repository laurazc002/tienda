import {pintarProductos} from './controladorpintar'
import {productosBD} from '../helpers/database'
import {buscarProductos} from './controladorbuscar'
import { ampliarinfoProducto } from "./ampliarinfoproducto";

let contador = localStorage.getItem('contador')
document.getElementById('carritocontador').innerHTML = contador

let reloj=productosBD.filter(function(producto){
    return(producto.tipo=='reloj')
})
pintarProductos(reloj)
buscarProductos(reloj)

let contenedor = document.getElementById("fila");
contenedor.addEventListener("click", function (evento) {
  let producto = ampliarinfoProducto(evento);
  console.log(producto)
    


//ALMACENAR EN EL LOCAL STORAGE EL PRODUCTO SELECCIONADO
    localStorage.setItem('infoProducto',JSON.stringify(producto))
// abro nueva ventana
 window.location.href='./ampliarinfo.html'

});