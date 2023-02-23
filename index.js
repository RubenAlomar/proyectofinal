const email = document.getElementById('email');
const button = document.getElementById('button');
const form = document.getElementById('form');



   function validarEmail(){
                
      var campoEmail = document.getElementById('email');
      
      var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
   
            if( validEmail.test(campoEmail.value) ){
         alert('Gracias por contactarte conmigo')
         return true;
      }else{
         alert('correo incorrecto');
         return false;
      }
   }


button.addEventListener('click', validarEmail)

button.addEventListener('click', function() {
   form.reset();})