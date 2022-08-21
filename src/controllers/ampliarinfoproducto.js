export function ampliarinfoproducto (evento){

   
    

    let producto = {foto : evento.target.parentElement.querySelector('img').src,
                    nombre : evento.target.parentElement.querySelector('h4').textContent,
                    precio : evento.target.parentElement.querySelector('h5').textContent,
                    Description : evento.target.parentElement.querySelector('p').textContent,
                    popularidad : evento.target.parentElement.querySelector('div')
                    
    
}

return producto

}





