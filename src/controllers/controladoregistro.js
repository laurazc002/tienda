import {getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

let boton= document.getElementById('boton')
let email = document.getElementById('exampleInputEmail1')
let password = document.getElementById('exampleInputPassword1')

boton.addEventListener('click', function(evento){
    evento.preventDefault()
    email = email.value
    password = password.value
    
    //enviando datos hacia google
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    alert('bienvenido')
     })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert('ups'+errorMessage)
     });
  
})

