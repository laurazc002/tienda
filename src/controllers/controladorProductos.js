import { productosBD } from "../helpers/database.js"
console.log(productosBD)

import { pintarProductos } from "./controladorpintar.js"
pintarProductos(productosBD)


import { buscarProductos } from "./controladorbuscar.js"
buscarProductos(productosBD)