class Usuario{
    constructor(nombre, apellido, mascotas,libros,book){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.book = book;
        this.mascotas = mascotas;
        
    }
    getFullName(){
        return this.nombre + " " + this.apellido;
    }

    addMascotas(nombre){
        this.mascotas.push(nombre);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(book,autor){
        this.libros.[ush]({nombre:book,autor:autor});
    }

    getBooksNames(){
        return this.libros;
    }
}


const Usuario1 = new Usuario("Carlos","Actis",[],[{nombre:"El señor de los anillos",autor:"Juan NN"}],);
console.log(Usuario1.getFullName());
Usuario1.addMascotas("Morgana");
Usuario1.addMascotas("Loby");
console.log(Usuario1.countMascotas());
console.log(Usuario1.getBooksNames()); 
console.log(Usuario1)