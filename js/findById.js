const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';

export const findById = (id) => {
    fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + process.env.API_KEY + '&language=en-US')
        .then(response => response.json())
        .then(data => {
            const cardWrapper = document.querySelector('.modal__card');
            console.log(data);

           let card = `
                    <div class="modal__poster--container">
                        <img src=${imageBaseURL + data.poster_path} alt="Poster" class="modal__poster">
                    </div>
                    <div class="modal__content">
                        <div class="modal__title--wrapper">
                            <p class="modal__rate">${data.vote_average} / 10</p>
                            <h1 class="modal__title">${data.title}</h1>
                            <ul class="modal__list">
                                <li class="modal__item">Action</li>
                                <li class="modal__item">Comedy</li>
                                <li class="modal__item">Thriller</li>
                            </ul>
                            <p class="modal__releaseDate">Release date: december 2020</p>
                            <p clas="modal__runtime">Duration: ${data.runtime} minutes</p>
                        </div>
                        <div class="modal__synopsis--wrapper">
                            <h3 class="modal__overview--heading">Synopsis</h3>
                            <p class="modal__overview">${data.overview}</p>
                            <a href="${data.homepage}" target="_blank" class="modal__button">Homepage <i class="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>`;

                
            // cardWrapper.insertAdjacentHTML('beforeend', card);
            cardWrapper.innerHTML = card;
        })
        .catch(error => error)
}