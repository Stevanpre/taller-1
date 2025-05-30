// Función para generar URL de búsqueda de Google
const generateGoogleSearchUrl = (title) => {
    return `https://www.google.com/search?q=${encodeURIComponent(title + ' pelicula')}`;
};

// Datos de películas en cartelera
const movieData = {
    images: [
        'https://image.tmdb.org/t/p/w500/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg',
        'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
        'https://image.tmdb.org/t/p/w500/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg',
        'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'
    ],
    titles: [
        'Spiderman-No Way Home',
        'The Shawshank Redemption',
        'Spiderman-Across The Spider Verse',
        'Avatar-The Way Of Water',
        'Shazam-Fury Of The Gods',
        'Avengers-Infinity War'
    ],
    ratings: [8.5, 9.0, 9.2, 8.7, 9.5, 8.4],
    genres: [
        'ciencia-ficcion',
        'drama',
        'drama',
        'ciencia-ficcion',
        'fantasia',
        'accion'
    ],
    get searchUrls() {
        return this.titles.map(generateGoogleSearchUrl);
    }
};

// Datos de próximos estrenos
const estrenosData = {
    images: [
        'https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
        'https://m.media-amazon.com/images/M/MV5BMmMwYmI4NzUtY2VkMi00Mzk3LTg4MWEtZjRlMTE5YjEyNGQxXkEyXkFqcGc@._V1_.jpg',
        'https://upload.wikimedia.org/wikipedia/en/c/cf/Kingdom_of_the_Planet_of_the_Apes_poster.jpg'
    ],
    titles: [
        'Kung Fu Panda 4',
        'Furiosa',
        'Kingdom of the Planet of the Apes'
    ],
    ratings: [0, 0, 0], // Sin calificación aún
    genres: [
        'accion',
        'accion',
        'ciencia-ficcion'
    ],
    get searchUrls() {
        return this.titles.map(generateGoogleSearchUrl);
    }
};

// Datos de mejores películas
const mejoresData = {
    images: [
        'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        'https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
        'https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg'
    ],
    titles: [
        'Spiderman-Across The Spider Verse',
        'El Padrino',
        'The Green Mile',
        'Schindlers List'
    ],
    ratings: [9.2, 8.9, 9.0, 9.0],
    genres: [
        'drama',
        'drama',
        'fantasia',
        'drama'
    ],
    get searchUrls() {
        return this.titles.map(generateGoogleSearchUrl);
    }
}; 