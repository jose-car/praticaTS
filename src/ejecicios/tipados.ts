

/*
    ===== Código de TypeScript =====
*/

interface superHeroe{
    nombre: string;
    edad: number;
    direccion:Direccion,
    mostrarDireccion: () => string;
}

interface Direccion{
    calle:string;
    pais:string;
    ciudad:string;
}

const superHeroe = {
    nombre: 'Iroman',
    edad: 25,
    direccion:{
      calle: 'silicon',
      pais: 'USA',
      ciudad: 'NY'
    },

    mostrarDireccion(){
        return this.nombre + ' , ' + this.direccion.ciudad + ' , ' + this.direccion.pais;
    }

}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
