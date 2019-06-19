let strToEncode = document.getElementById('cifrarContraseña');
let offset = document.getElementById('offsetCifrado');
let cajaResultado = document.getElementById('contraseñaCifrada');

const btnCifrar=document.getElementById("btnCifrar");
btnCifrar.addEventListener("click", () =>{

  const strEncode = window.cipher.encode(offset.value,strToEncode.value);
  cajaResultado.value = strEncode;

})

document.getElementById("salir").addEventListener("click", ()=>{
location.href = "exit.html"
})
