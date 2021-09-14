
/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string,
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'josep'
}

const pasajero2: Pasajero = {
    nombre: 'Luis',
    hijos: ['ambar', 'lucas']
}

function imprimeHijos(pasajero: Pasajero): void{
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasajero2);