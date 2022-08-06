class pelicula {
    constructor(sinopsis, actores, productores, titulo, directores, genero, estadisticas) {
        this._sinopsis = sinopsis;
        this._actores = actores;
        this._productores = productores;
        this._titulo = titulo;
        this._directores = directores;
        this._genero = genero
    }

    set establecerPeli(valor) {

        this._titulo = valor;
    }

    get regresatitulo() {
        return this._titulo;
    }
    caracteristicasPelicula() {
        console.log("Actores:" + " " + this._actores + " " + "Productores: " + " " + this._productores + " " + "Directores:" + " " + this._directores + " " + "Genero:" + " " + this._genero )
    }

}

let objetoPelicula = new pelicula ("Sé testigo de una batalla campal entre piratas, marines, los Siete Señores de la Guerra y el Ejército Revolucionario con motivo del Festival de los Piratas","Luffy,Zoro,Namy,Sanji,Usoop","Takashi Ōtsuka","One Piece","Takashi Ōtsuka","Aventura/Fantasía")
let objetoPelicula1 = new pelicula ("Siguiendo las huellas de su padre y con la esperanza de construir ese vínculo familiar que tanto ansía, un Rusty Griswold ya mayor decide dar una sorpresa a su mujer y a sus dos hijos con un viaje: atravesar el país hasta llegar al parque de atracciones favorito de las familias estadounidenses, Walley World","Ed Helms,Christina Applegat","Warner Bros. ","Vacaciones","John Francis Daley, Jonathan Goldstein","Comedia/Aventura")

objetoPelicula.caracteristicasPelicula();
objetoPelicula1.caracteristicasPelicula();