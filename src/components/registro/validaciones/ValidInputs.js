
export function validarNombre(nombre) {
    const length = nombre.length;
    if (length <= 2) {
        return false;
    } else if(length === 0) {
        return false
    } else {
        return true;
    }
}

export function validarLink(link) {
    const regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    if(regex.test(link)) {
        return true;
    } else {
        return false
    }
}