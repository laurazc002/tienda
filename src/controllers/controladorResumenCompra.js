console.log('hola')
//accedemos a la variable local carrito 
let carrito = JSON.parse(localStorage.getItem('carrito'))

//pregunto si el carrito esta vacio
let contenedor = document.getElementById('contenedor')

//limpiar el contenedor
contenedor.innerHTML

//crear una referencia para almacenar el contenedor

if(carrito== null){
    console.log("aQUI")
    let fila = document.createElement('div')
    fila.classList.add('row')

    let columna1 = document.createElement('div')
    columna1.classList.add('col-12','col-md-4','border-end')

    let columna2 = document.createElement('div')
    columna2.classList.add('col-12', 'col-md-6','align-self-center')

    let foto = document.createElement('img')
    foto.classList.add('img-fluid', 'w-100')
    foto.src = '../../assets/img/add_to_cart-512.webp'

    let mensaje = document.createElement('h3')
    mensaje.classList.add('text-center')
    mensaje.textContent =  'Your cart is empty'

    boton = document.createElement('a')
    boton.classList.add('btn', 'btn-danger','w-100','d-block', 'mx-auto')
    boton.textContent = 'Go to Shop'
    boton.setAttribute('href','../../productos.html')

    //padres e hijos

    columna1.appendChild(foto)
    columna2.appendChild(mensaje)
    columna2.appendChild(boton)

    fila.appendChild(columna1)
    fila.appendChild(columna2)

    contenedor.appendChild(fila)

    }

else{ //el carrito esta lleno

    //recorro el carrito de compras
    carrito.forEach(function(producto){
    
        let fila = document.createElement('div')
        fila.classList.add('row','my-5')

        let columna1 = document.createElement('div')
        columna1.classList.add('col-12','col-md-4','border-end')

        let columna2 = document.createElement('div')
        columna2.classList.add('col-12', 'col-md-6', 'align-self-center')

        let foto = document.createElement('img')
        foto.classList.add('img-fluid', 'w-100')
        foto.src = producto.foto

        let nombre = document.createElement('h3')
        nombre.textContent = producto.nombre

        let precio = document.createElement('h3')
        precio.textContent = 'Precio Und = ' + producto.precio

        let cantidad = document.createElement('h3')
        cantidad.textContent = 'Cantidad = ' + producto.cantidad

        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)

        fila.appendChild(columna1)
        fila.appendChild(columna2)

        contenedor.appendChild(fila)

    
    })
        
    }