import { card, komponenDetailFilm } from "./komponenHTML.js";



const searchBtn = document.querySelector('.btn-search');

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    const search = document.querySelector('.text-search');
    fetch('http://www.omdbapi.com/?apikey=236a868b&s='+ search.value)
        .then(response => response.json())
        .then(response => {
            const movie = response.Search;
            const pembungkusCard = document.querySelector('.pembungkus-card');
            let cards = ``;
            movie.forEach(m => {
                cards += card(m);
            pembungkusCard.innerHTML = cards;
            });
            const btnShowDetails = document.querySelectorAll('.btn-show-details');
            btnShowDetails.forEach(btn => {
                btn.addEventListener('click', function(){
                    fetch('http://www.omdbapi.com/?apikey=236a868b&i=' + btn.dataset.imdbid)
                        .then(response => response.json())
                        .then(response => {
                            const detailFilm = response;
                            const containerDetailFilm = document.querySelector('.pembungkus-detail-video');
                            containerDetailFilm.classList.add('visible');
                            let htmlDetailFilm = ``;
                            htmlDetailFilm += komponenDetailFilm(detailFilm);
                            containerDetailFilm.innerHTML = htmlDetailFilm;
                            const closeBtn = document.querySelector('.close-btn');
                            setTimeout(() => {
                                containerDetailFilm.firstElementChild.classList.add('animation-active');
                            }, 10);
                            closeBtn.addEventListener('click', function(){
                            containerDetailFilm.classList.remove('visible');
                            containerDetailFilm.firstElementChild.classList.remove('animation-active');
                        });

                        });
                });
            });
        });
});


