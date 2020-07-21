window.addEventListener('load', function(){
    btngenerar.addEventListener('click', function(){


      
        let contenidoHTML = "<table border= '1'>"
        let contador =0;
       /* let warnings =""
        let entrar = false*/
       
        longitud= parseInt(prompt('ingrese el limite de la tabla'));
        
        /*if(longitud.value<3 || longitud.value>10){
           
        }*/
        
                          //************** 
                          function diagonalMatriz(n){
                            var matrix = [], row
                            for (var i = n; i > 0; i--) {
                                var x = i*(i-1)/2 + 1, dx = i
                                matrix.push(row = [])
                                for (var j = n; j > 0; j--) {
                                row.push(x)
                                x += (i < j ? ++dx : dx--)
                                }
                            }
                            return matrix
                            }
                
                            var matrix = diagonalMatriz(+prompt('Ingrese el limite para mostrar la matriz en secuencia diagonal:'))
                
                            console.log(beautify(matrix))
                            console.log(matrix)
                            // For visualization purposes
                            function beautify (matrix) {
                            return matrix.map(function (e) {
                                return e.join('\t')
                            }).join('\n\n\n\n')
                            }
                            //***********************
                
         
            for(i=1;i<=longitud;i++)
            {
            
                contenidoHTML += "<tr>"
                    for(j=1;j<=longitud;j++)
                    
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
