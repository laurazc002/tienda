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
    precioProducto.textContent ='$'+ producto.precio + 'COP' 

    let compra = document.createElement("button")
    compra.classList.add("w-50","align-self-center", "text-center","btn", "btn-dark", "mb-3")
    compra.textContent = 'Añadir a la cesta'

    let Description= document.createElement("p")
    Description.classList.add("d-none")
    Description.textContent = producto.Description

    let popularidad = document.createElement("div")
    popularidad.classList.add("d-none")
    popularidad.textContent = producto.popularidad
    

    columna.addEventListener("mouseover", function(evento){
    FotoProducto.src = producto.fotos[1]
   })

    columna.addEventListener("mouseleave", function(evento){
    FotoProducto.src = producto.fotos[0]
   })
   
    tarjeta.appendChild(FotoProducto)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(precioProducto)
    tarjeta.appendChild(compra)
    tarjeta.appendChild(Description)
    tarjeta.appendChild(popularidad)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})

}




