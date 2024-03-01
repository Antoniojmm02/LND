const formulario = document.getElementById('formulario');
const nombre = document.getElementById('name');
const correo = document.getElementById('correo');
const telef = document.getElementById('telefono');

formulario.addEventListener("submit",e=>{
    e.preventDefault();
    let noEnviar = false;
    let EmailPass=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (nombre.value.length <=0){
        alert("Escribe  un nombre");
        noEnviar=true;
    }
    if(telef.value.length<9||telef.value.length>9){
        alert("Escribe un numero valido");
        noEnviar=true;
    }
    if(!EmailPass.test(correo.value)){
        alert("Escribe un correo valido");
        noEnviar=true;
    }

    if(noEnviar==true){
        alert("No se pudo enviar")
    }else{
        alert("Enviado :)")
    }
})