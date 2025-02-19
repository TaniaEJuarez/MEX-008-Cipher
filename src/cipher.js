window.cipher = {
  encode : (offset, strToEncode) => {
    //convertir el string en number
    offset=parseInt(offset);
    //convertir el string en letras mayusculas
    let strToEncodeUp = strToEncode;
    //guardar el dato en una string vacia
    let strEncode="";
    //aplicar el ciclo for
    for (let i = 0; i < strToEncodeUp.length; i++) {
    //convertir el string en mayusculas
    let charToEncodeASCII = strToEncodeUp.charCodeAt(i);

    if(charToEncodeASCII >= 65 && charToEncodeASCII <= 90 ){
          // aplicar la formula de cifrado cesar (x-65+n)%26+65
      let valorEncode = (charToEncodeASCII- 65 +offset)%26 +65;
      strEncode = strEncode + String.fromCharCode(valorEncode);
        // retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33
    } else if(charToEncodeASCII >= 97 && charToEncodeASCII <= 122){
      let valorEncode = (charToEncodeASCII- 97 +offset)%26 +97;
      strEncode = strEncode + String.fromCharCode(valorEncode);
      // retornar signos y espacios con offset 33
    } else {
      strEncode = strEncode + String.fromCharCode(charToEncodeASCII)
    }

    }
    return strEncode;
  },



  decode : (offset, strToDecode) => {
    //convetir offset de string a number
  offset=parseInt(offset);
  //convertir a mayusculas
  let strToDecodeUp=strToDecode;
    //guardar el dato en una string vacia
    let strDecode="";
    //aplicar el ciclo for para recorrer caracter por caracter
    for (let i = 0; i < strToDecodeUp.length; i++) {
      let charToDecodeASCII=strToDecodeUp.charCodeAt(i);
      if(charToDecodeASCII>=65 && charToDecodeASCII<=90){
    // aplicar la formula de cifrado cesar (x+65-n)%26+65
      let valorDecode = (charToDecodeASCII+65-offset)%26+65;
      strDecode = strDecode + String.fromCharCode(valorDecode);
    // retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33
    } else if(charToDecodeASCII >= 97 && charToDecodeASCII <= 122){
      let valorDecode = (charToDecodeASCII- 122 -offset)%26 +122;
      strDecode = strDecode + String.fromCharCode(valorDecode);
      // retornar signos y espacios con offset 33
    } else {
      strDecode = strDecode + String.fromCharCode(charToDecodeASCII)
    }
  }
  return strDecode;

    }
};
