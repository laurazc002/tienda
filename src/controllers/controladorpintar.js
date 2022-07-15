export function pintarProductos(productos){

    let fila = document.getElementById("fila")
    fila.innerHTML= ""

    productos.forEach(function(producto){

    let columna = document.createElement("div")
    columna.classList.add("col")
   
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "h-100", "text-center")

    let FotoProducto = document.createElement("img")
    FotoProducto.classList.add("img-fluid","w-100")
    FotoProducto.src = producto.fotos[0]

    let nombreProducto = document.createElement("h4")
    nombreProducto.textContent = producto.nombre

    let precioProducto = document.createElement("h5")
    precioProducto.classList.add
    precioProducto.textContent ='$ '+ producto.precio + ' COP' 

    columna.addEventListener("mouseover", function(evento){
    FotoProducto.src = producto.fotos[1]
   })

    columna.addEventListener("mouseleave", function(evento){
    FotoProducto.src = producto.fotos[0]
   })
   
    tarjeta.appendChild(FotoProducto)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(precioProducto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})


}



