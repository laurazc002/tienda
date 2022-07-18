export function ampliarinfoproducto (evento){

   
    

    let producto = {foto : evento.target.parentElement.querySelector('img').src,
                    nombre : evento.target.parentElement.querySelector('h4').textContent,
                    precio : evento.target.parentElement.querySelector('h5').textContent,
                    descripcion : evento.target.parentElement.querySelector('p').textContent
    
}

return producto

}



