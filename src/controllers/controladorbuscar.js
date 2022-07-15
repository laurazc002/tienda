import { productosBD } from "../helpers/database.js"
import { pintarProductos } from "./controladorpintar.js"
export function buscarProductos (){
    
    let buscador = document.getElementById("busqueda")

    buscador.addEventListener("keyup", function(evento){
        let productoBuscado = evento.target.value
        
        let filtro = productosBD.filter(function(producto){
            return (producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase()))
        })

        pintarProductos(filtro)
    })
    

}

