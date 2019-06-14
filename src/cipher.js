window.cipher = {
  encode : () => {
    let strToEncode=  document.getElementById('cifrarContraseña').value;
    let offset = document.getElementById('offsetCifrado').value;
    let cajaResultado = document.getElementById('contraseñaCifrada');
    //convertir el string en letras mayusculas
    let strToEncodeUp = strToEncode.toUpperCase();
    //guardar el dato en una string vacia
    let strEncode="";
    //aplicar el ciclo for
    for (var i = 0; i < strToEncodeUp.length; i++) {
    // aplicar la formula de cifrado cesar
    // (x+n)%26
      let valorEncode = (i+offset)%26;
      let charToEncodeASCII = strToEncodeUp.charCodeAt(i)+valorEncode;
      strEncode = strEncode + String.fromCharCode(charToEncodeASCII);
    }
    cajaResultado.value = strEncode;

  },
  decode : () => {
  let strToDecode=  document.getElementById('descifrarContraseña').value;
  let offset = document.getElementById('offsetDescifrado').value;
  let cajaResultado = document.getElementById('contraseñaDescifrada');
    //guardar el dato en una string vacia
    let strDecode="";
    //aplicar el ciclo for
    for (var i = 0; i < strToDecode.length; i++) {
    // aplicar la formula de cifrado cesar
    // (x+n)%26
      let valorDecode = (i+offset)%26;
      let charToDecodeASCII = strToDecode.charCodeAt(i)-valorDecode;
      strDecode = strDecode + String.fromCharCode(charToDecodeASCII);
  }
  cajaResultado.value = strDecode;
}
};
