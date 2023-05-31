const nombre = document.querySelector('#nombre');
const enviar = document.querySelector('#enviar');
const resultados = document.querySelector('.resultados');
const apellidos = document.querySelector('#apellidos');
const nombredelrancho = document.querySelector('#nombredelrancho');
const domicilio = document.querySelector('#domicilio');
const cuidad = document.querySelector('#cuidad');
const estado = document.querySelector('#estado');
const telefono = document.querySelector('#telefono');
const mensaje = document.querySelector('#mensaje');



const fvalida = document.querySelector('.fvalida');
enviar.addEventListener('click', valida_envia);

function valida_envia()
{
    if (nombre.value.length<=2)
    {
        resultados.innerHTML="Debes escribir un nombre con al menos 6 caracteristicas";
        nombre.focus(); //ubica el cursor en la caja nombre 
        return 0; //nom avanza a commit
    } 

    //validacion de nombre
    var regex = /^[a-zA-Z\s]{3,20}$/;
    if (!regex.test(nombre.value)){
        resultados.innerHTML = "No debe contener números";
        nombre.focus()
        return 0;
    }

    //validacion del apellidos
    if (apellidos.value.length<=2)
    {
        resultados.innerHTML="Debe escribir sus apellidos";
        apellidos.focus(); //ubica el cursor en la caja nombre 
        return 0; //nom avanza a commit
    } 

    //validacion de nombre
    var regex = /^[a-zA-Z\s]{3,20}$/;
    if (!regex.test(apellidos.value)){
        resultados.innerHTML = "No debe contener números";
        apellidos.focus()
        return 0;
    }
   

    //validación del correo
    var s = correo.value;
    var filtro = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filtro.test(s))
    {
        resultados.innerHTML='Introdusca un email válido';
        correo.focus();
        return 0;
    }

    //validacion del nombre del rancho 
 
    if (nombre.value.length<=2)
    {
        resultados.innerHTML="Poner el nombre de su rancho ";
        nombre.focus(); //ubica el cursor en la caja nombre 
        return 0; //nom avanza a commit
    } 

    
    //validacion del domicilio del rancho
    if (domicilio.value.length<=2)
    {
        resultados.innerHTML="Debes escribir el nombre del rancho";
        domicilio.focus(); //ubica el cursor en la caja nombre 
        return 0; //nom avanza a commit
    } 
    //validacion de la cuidad
    if (cuidad.value.length<=2)
    {
        resultados.innerHTML="Debes escribir una cuidad";
        cuidad.focus(); //ubica el cursor en la caja nombre 
        return 0; //nom avanza a commit
    } 

    //validacion del estado
    if (estado.value.length<=2)
    {
        resultados.innerHTML="Debes escribir el Estado";
        estado.focus(); //ubica el cursor en la caja nombre 
        return 0; //nom avanza a commit
    } 

     //validación teléfono
     var t = telefono.value;
     var er_tel = /^([0-9]{10})+$/;
 
     if (!er_tel.test(t))
     {
         resultados.innerHTML="Campo teléfono no válido.";
         return 0;
     }

     //validacion del mensaje 
     if (mensaje.value.length<=2)
     {
         resultados.innerHTML="Debes escribir un mensaje";
         mensaje.focus(); //ubica el cursor en la caja nombre 
         return 0; //nom avanza a commit
     } 
    
        resultados.style.backgroundColor = 'green';
        resultados.innerHTML = "Muchas gracias por enviar el formulario";
        //El formulario se envia usando el método submit() activandolo desde aqui
        function greetings(){ fvalida.submit();}
        //Agregamos un tiempo de espera para simular la que se va la información
        setTimeout(greetings, 2000); 
}