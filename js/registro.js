window.addEventListener('load', function(){
    const nombre= document.getElementById("name")
    const edad= document.getElementById("edad")
    const email= document.getElementById("email")
    const pass= document.getElementById("password")
    const form= document.getElementById("form")
    const parrafo= document.getElementById("warnings")

    form.addEventListener("submit",e=>{
        e.preventDefault()
        let warnings =""
        let entrar = false
        let regexEmail = /^\e+([\.-]?\w+)*@\live.uleam.edu+([\.-]?\w+)*(\.\w{2,3})+$/
        parrafo.innerHTML=""
        if(nombre.value.length<6){
            warnings +=`El nombre no es válido <br>`
            entrar= true
        }
        if(edad.value<15 || edad.value>20){
            warnings +=`La edad no es válida <br>`
            entrar= true
        }
        console.log(regexEmail.test(email.value))
        if(!regexEmail.test(email.value)){
            warnings +=`El email no es válido <br>`
            entrar= true
        }
        if(pass.value.length<8){
            warnings +=`La contraseña no es válida <br>`
            entrar= true
        }
        if(entrar){
            parrafo.innerHTML=warnings
        }
        else{
            parrafo.innerHTML= "Enviado"
        }       
    })
          
})

