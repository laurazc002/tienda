console.log(JSON.parse(localStorage.getItem("infoProducto")))
let producto = JSON.parse(localStorage.getItem('infoProducto'))


let carrito
//revisar si hay productos en el carrito
if (JSON.parse(localStorage.getItem('carrito')) == null){

    carrito = []

}else{
    carrito = JSON.parse(localStorage.getItem('carrito'))
    let contador = localStorage.getItem('contador')
    document.getElementById('carritocontador').innerHTML = contador

}

console.log(JSON.parse(localStorage.getItem('carrito')))

let foto = document.getElementById('foto')
foto.src = producto.foto

let nombre = document.getElementById('nombre')
nombre.textContent = producto.nombre

let precio = document.getElementById('precio')
precio.textContent = producto.precio

let Description = document.getElementById('Description')
Description.textContent = producto.Description

//poner case
let popularidad = document.getElementById('icono')
popularidad.textContent = producto.popularidad

// capturar la cantidad del producto seleccionado
// capturamos el value del input

//let cantidad = document.getElementById('cantidad').value

// agrego a un atributo (cantidad) al objeto producto
//producto.cantidad = cantidad
//console.log(producto)

// Agrego la cantidad cuando el cliente seleccione añadir carrito
let botonagregar = document.getElementById('agregar')

//agregamos carrito de compras

let contadorcarrito = 0

agregar.addEventListener('click', function(){

    
    let alerta = document.getElementById('alerta')
    alerta.classList.remove('invisible')

    setTimeout(function(){
        alerta.classList.add('invisible')
    },3000)

    /*let cantidad = document.getElementById('cantidad').value
    producto.cantidad = cantidad*/
    

    carrito.push(producto)
    
    //Longitud del arrgelo carrito(cuento cuntos elementos tiene mi arreglo)
    contadorcarrito = carrito.length
    localStorage.setItem('contador', contadorcarrito)
    

    // almaceno el carrito en el localStorage
    localStorage.setItem('carrito',JSON.stringify(carrito))

    //recorrer el arreglo carrito y capturar la cantidad 
    //carrito.forEach(function(producto){
        //console.log(producto.cantidad)
    //})

    let contador = localStorage.getItem('contador')
    document.getElementById('carritocontador').innerHTML = contador
    


})

