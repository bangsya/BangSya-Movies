import { updateUICard, updateUIDetails } from "./komponenHTML.js";
import { getMovies, getDetailsMovie } from "./functionFetch.js";



const searchBtn = document.querySelector('.btn-search');

searchBtn.addEventListener('click', async function(e){
    e.preventDefault();
    try{
        const searchKeyworrd = document.querySelector('.text-search');
        const movies = await getMovies(searchKeyworrd.value);
        updateUICard(movies);
    }catch (err){
        alert(err);
    }
});


// Even binding
document.addEventListener('click', async function(e){
    if ( e.target.classList.contains('btn-show-details') ){
        const detailsFilm = await getDetailsMovie(e.target.dataset.imdbid);
        updateUIDetails(detailsFilm);
    }
})


