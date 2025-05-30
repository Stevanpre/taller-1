const ITEMS_PER_PAGE = 6;
let currentPage = 1;
let filteredMovies = [...Array(movieData.titles.length).keys()];

function createStarRating(rating) {
    const stars = Math.round(rating / 2);
    let html = '';
    for (let i = 0; i < 5; i++) {
        if (i < stars) {
            html += '<i class="fas fa-star"></i>';
        } else {
            html += '<i class="far fa-star"></i>';
        }
    }
    return html;
}

function createMovieCard(index, data, showRating = true) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    let ratingHtml = '';
    if (showRating && data.ratings[index] > 0) {
        ratingHtml = `
            <div class="rating">
                ${createStarRating(data.ratings[index])}
                <span>(${data.ratings[index]})</span>
            </div>
        `;
    }

    card.innerHTML = `
        <div class="movie-image" style="background-image: url('${data.images[index]}')"></div>
        <div class="movie-info">
            <h3>${data.titles[index]}</h3>
            ${ratingHtml}
            <span class="genre">${data.genres[index]}</span>
            ${!showRating ? '<p style="margin-top: 1rem;">Próximamente</p>' : ''}
        </div>
    `;

    card.addEventListener('click', () => {
        window.open(data.searchUrls[index], '_blank');
    });

    return card;
}

function displayMovies(containerId, data, showRating = true) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < data.titles.length; i++) {
        container.appendChild(createMovieCard(i, data, showRating));
    }
}

function updatePagination() {
    const totalPages = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // Botón anterior
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Anterior';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayMovies();
        }
    });
    pagination.appendChild(prevButton);
    
    // Números de página
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.toggle('active', i === currentPage);
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayMovies();
        });
        pagination.appendChild(pageButton);
    }
    
    // Botón siguiente
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Siguiente';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayMovies();
        }
    });
    pagination.appendChild(nextButton);
}

function filterMovies() {
    const container = document.getElementById('moviesContainer');
    if (!container) return;

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedGenre = document.getElementById('genreFilter').value.toLowerCase();
    
    container.innerHTML = '';
    
    for (let i = 0; i < movieData.titles.length; i++) {
        const matchesSearch = movieData.titles[i].toLowerCase().includes(searchTerm);
        const matchesGenre = !selectedGenre || movieData.genres[i] === selectedGenre;
        
        if (matchesSearch && matchesGenre) {
            container.appendChild(createMovieCard(i, movieData));
        }
    }
}

// Inicializar eventos de filtrado en la página principal
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');

if (searchInput && genreFilter) {
    searchInput.addEventListener('input', filterMovies);
    genreFilter.addEventListener('change', filterMovies);
}

// Inicializar la página
displayMovies(); 