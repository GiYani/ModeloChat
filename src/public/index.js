const socket = io();
const chatBox = document.getElementById('chatBox');
let log = document.getElementById ("log");
let user;

Swal.fire({
        title:"Tu Nombre",
        input:"text",
        allowOutSideClick:false, //no clickquear afuera
        inputValidator:(value)=>{
                console.log(value)
                return!value &&"Necesitas tener un Nombre de Usuario"
        }
        
}).then (result=>{
        user=result.value;
        ;

})


chatBox.addEventListener('keyup',evt=>{
   if (evt.key==="Enter"){
           if(chatBox.value.trim().length>0){//enviar al menos un simbolo
           socket.emit('message',{user, message:chatBox.value.trim()})
                chatBox.value=" ";//se guarda en el arreglo de mensajes
           }
   
        }

})
/*sockets*/
socket.on("log", data=>{  
        let messages= " "
        data.forEach(log=>{
                messages=messages + `${log.user} dice: ${log.message}<br>`
        })
        log.innerHTML= messages;
})



