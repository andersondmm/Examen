window.addEventListener('load', function(){
    btngenerar.addEventListener('click', function(){


      
        let contenidoHTML = "<table border= '1'>"
        let contador =0;
       /* let warnings =""
        let entrar = false*/
        let fila;
        let columna;
        let su=2;
        longitud= parseInt(prompt('ingrese el limite de la tabla'));
        
        /*if(longitud.value<3 || longitud.value>10){
           
        }*/
            
        for(i=0;i<longitud;i++)
        {
        
            contenidoHTML += "<tr>"
                for(j=0; j<longitud; j++) 
                {
                    contenidoHTML += "<td>"
                    contenidoHTML += `<button class='btnnumero' value ="${i}"   title="${j}">  ${++ contador}</button>`;
                    sessionStorage.setItem("longitud", longitud);
                    contenidoHTML += "</td>"
                    //  contenidoHTML += `<button class="btnnumero"  value ="${i}"  title="${j}"> ${++ contador} </button>`;
                }
                contenidoHTML += "</tr>"

        }
        
    
        
        contenidoHTML += "</table>"
       


        divcontenedor.innerHTML= contenidoHTML


      
        document.querySelectorAll(".btnnumero").forEach(x=>{
           

            x.addEventListener('click', function(){
                alert( `Fila ${x.value} y Columna ${x.title}`);
            })
        })

    })
})
