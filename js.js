function validarDni(inputDni){
    /*
    *   Fucion para validar el DNI.
    *   Con sus atributos letrasValidas, dniPatron, str.   
    */

    var letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var dniPatron = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    var str = inputDni.toString().toUpperCase();

    /* Comprueba que hay un DNI */
    if (!dniPatron.test(str)) return false;

    var dni = str
    var letra = str.substr(-1);
    var posicionLetras = parseInt(dni.substr(0, 8)) % 23;

    /* ES la comprobacion de la letra para cada numero de DNI */
    if (letrasValidas.charAt(posicionLetras) === letra) return true;

    return false;
}
