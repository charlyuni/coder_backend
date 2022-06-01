const perro ={
    nombre:"Mily",
    juguetes: ["hueso","pelota", "peluche"],
    mostrarJuguetes(){
        this.juguetes.forEach(
            (juguete) =>{
        console.log("ONO DE LOS JUEGUETES DE "+ this.nombre + " ES " +  juguete)    
    });
}
}

perro.mostrarJuguetes()

