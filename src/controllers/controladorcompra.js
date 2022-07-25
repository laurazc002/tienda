console.log(JSON.parse(localStorage.getItem("infoProducto")))
let producto = JSON.parse(localStorage.getItem('infoProducto'))


let carrito
//revisar si hay productos en el carrito
if (JSON.parse(localStorage.getItem('carrito')) == null){

    carrito = []

    }
else{
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

console.log(JSON.parse(localStorage.getItem('carrito')))

let foto = document.getElementById('foto')
foto.src = producto.foto

let nombre = document.getElementById('nombre')
nombre.textContent = producto.nombre

let precio = document.getElementById('precio')
precio.textContent = producto.precio

let descripcion = document.getElementById('descripcion')
descripcion.textContent = producto.descripcion

// capturar la cantidad del producto seleccionado
// capturamos el value del input

//let cantidad = document.getElementById('cantidad').value

// agrego a un atributo (cantidad) al objeto producto
producto.cantidad = cantidad
//console.log(producto)

// Agrego la cantidad cuando el cliente seleccione añadir carrito
let botonagregar = document.getElementById('agregar')

//agregamos carrito de compras

agregar.addEventListener('click', function(){

    let alerta = document.getElementById('alerta')
    alerta.classList.remove('invisible')

    setTimeout(function(){
        alerta.classList.add('invisible')
    },3000)

    let cantidad = document.getElementById('cantidad').value
    producto.cantidad = cantidad

    carrito.push(producto)

    // almaceno el carrito en el localstorage
    localStorage.setItem('carrito',JSON.stringify(carrito))


})

