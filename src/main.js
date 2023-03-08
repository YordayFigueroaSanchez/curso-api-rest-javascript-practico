
async function getTrendingMoviesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();
    console.log({data});

    const movies = data.results;
    movies.forEach(movie => {
        const trendingMoviesConteiner = document.querySelector('#trendingPreview .trendingPreview-movieList');

        const movieConteiner = document.createElement('div');
        movieConteiner.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', "https://image.tmdb.org/t/p/w300" + movie.poster_path);

        movieConteiner.appendChild(movieImg);

        trendingMoviesConteiner.appendChild(movieConteiner);
    });
}

getTrendingMoviesPreview();