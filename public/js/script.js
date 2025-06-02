const btnShowDetails = document.querySelectorAll('.btn-show-details');
const detailFilm = document.querySelector('.pembungkus-detail-video');
const closeBtn = document.querySelector('.close-btn');

btnShowDetails.forEach(btn => {
    btn.addEventListener('click', function(){
        detailFilm.classList.add('visible');
        detailFilm.firstElementChild.classList.add('animation-active');
    });
});

closeBtn.addEventListener('click', function(){
    detailFilm.classList.remove('visible');
    detailFilm.firstElementChild.classList.remove('animation-active');
});