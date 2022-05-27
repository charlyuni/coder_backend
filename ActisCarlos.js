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

    addBook(nombre, autor) {
        let book = {nombre: nombre, autor: autor };
        this.libros.push(book);
    }

    getBooksNames(){
        console.log(`Cantidad de Libros: ${this.libros.length}`);
        this.libros.map((libro) => {
            console.log(`Nombre del libro: ${libro.nombre}`);
            console.log(`Autor del libro: ${libro.autor}`);
        });
    }
}


const Usuario1 = new Usuario("Carlos","Actis",[],[],);
console.log(Usuario1.getFullName());
Usuario1.addMascotas("Morgana");
Usuario1.addMascotas("Loby");
Usuario1.addBook("El señor de los anillos","J.R.R. Tolkien");
Usuario1.addBook("El señor de los anillos 2","J.R.R. Tolkien");
console.log(Usuario1.countMascotas());
console.log(Usuario1.getBooksNames()); 
console.log(Usuario1)