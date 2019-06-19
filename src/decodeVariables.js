let strToDecode=  document.getElementById('descifrarContraseña');
let offset = document.getElementById('offsetDescifrado');
let cajaResultado = document.getElementById('contraseñaDescifrada');

const btnDescifrar=document.getElementById("btnDescifrar");
btnDescifrar.addEventListener("click", () =>{

  const strDecode = window.cipher.decode(offset.value,strToDecode.value);
  cajaResultado.value = strDecode;

})

document.getElementById("salir").addEventListener("click", ()=>{
location.href = "exit.html"
})
