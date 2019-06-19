window.cipher = {
  encode : (offset, strToEncode) => {
    //convertir el string en number
    offset=parseInt(offset);
    //convertir el string en letras mayusculas
    let strToEncodeUp = strToEncode.toUpperCase();
    //guardar el dato en una string vacia
    let strEncode="";
    //aplicar el ciclo for
    for (let i = 0; i < strToEncodeUp.length; i++) {
    //convertir el string en mayusculas
      let charToEncodeASCII = strToEncodeUp.charCodeAt(i);
    // aplicar la formula de cifrado cesar (x-65+n)%26+65
      let valorEncode = (charToEncodeASCII- 65 +offset)%26 +65;
      strEncode = strEncode + String.fromCharCode(valorEncode);
    }
    return strEncode;
  },

// retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33
// condicionar si ingresa minusculas, regresar minusculas

  decode : () => {
  let strToDecode=  document.getElementById('descifrarContraseña').value;
  let offset = document.getElementById('offsetDescifrado').value;
  offset=parseInt(offset);
  let cajaResultado = document.getElementById('contraseñaDescifrada');
    //guardar el dato en una string vacia
    let strDecode="";
    //aplicar el ciclo for
    for (let i = 0; i < strToDecode.length; i++) {
    // aplicar la formula de cifrado cesar
    // (x+n)%26
      let valorDecode = (i+offset)%26;
      let charToDecodeASCII = strToDecode.charCodeAt(i)-valorDecode;
      strDecode = strDecode + String.fromCharCode(charToDecodeASCII);
  }
  cajaResultado.value = strDecode;
}
};




// document.getElementById("salir").addEventListener("click", ()=>{
//   location.href = "exit.html"
// })
