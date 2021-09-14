
/*
    ===== Código de TypeScript =====
*/
function queTipoSoy<T>(argumento:T){
    return argumento;
}

let soyString = queTipoSoy('Hello World');
let soyNumero = queTipoSoy(100);
let SoyArreglo = queTipoSoy([1,2,3,4,5,6]);

let soyExplicito = queTipoSoy<number>(100);