export {card, komponenDetailFilm};

function card(m){
    return `<div class="w-1/2 px-2 mb-5 md:w-1/3 xl:w-1/4">
                <div class="rounded-xl shadow-lg overflow-hidden bg-sky-50 box-border">
                    <div class="foto overflow-hidden h-[250px] bg-white"><img src="${m.Poster}" alt="gambar film" class="w-full"></div>
                    <div class="div m-2">
                        <h3 class="text-xl font-bold text-slate-900">${m.Title}</h3>
                        <p class="text-slate-700">${m.Year}</p>
                        <button class="bg-sky-600 px-5 py-2 rounded-lg shadow-md my-2 ring-1 ring-sky-200 text-white cursor-pointer hover:bg-sky-500 hover:ring-sky-800 active:bg-sky-800 btn-show-details" data-imdbid="${m.imdbID}">Show Details</button>
                    </div>
                </div>
            </div>`;
}


function komponenDetailFilm(detailFilm){
    return `<div class="container-detail-video bg-white w-[90vw] min-h-[200px] max-h-[75vh] overflow-y-auto py-3 px-4 rounded-md shadow-md no-scrollbar transition-all duration-300 lg:w-[75vw] scale-0 opacity-0">
                <div class="judul mb-3">
                    <h2 class="font-bold text-sky-600 lg:text-xl">Detail Film</h2>
                </div>
                <div class="konten flex flex-col mb-3 px-2 lg:flex-row lg:gap-6">
                    <div class="gambar mx-auto w-1/2 h-[35vh] md:h-[40vh] md:w-1/4 overflow-hidden lg:w-1/3">
                        <img src="${detailFilm.Poster}" alt="gambar film" class="w-full object-center">
                    </div>
                    <div class="keterangan-film my-3">
                        <h1 class="text-2xl font-bold text-sky-600 text-center lg:text-4xl">${detailFilm.Title}</h1>
                        <div class="director flex gap-4">
                            <p class="font-bold w-1/6  md:w-1/12 text-slate-900">Director </p>
                            <p class="w-5/6 text-justify md:w-11/12 text-slate-500">${detailFilm.Director}</p>
                        </div>
                        <div class="actors flex gap-4">
                            <p class="font-bold w-1/6  md:w-1/12 text-slate-900">Actors </p>
                            <p class="w-5/6 text-justify md:w-11/12 text-slate-500">${detailFilm.Actors}</p>
                        </div>
                        <div class="plot flex gap-4">
                            <p class="font-bold w-1/6 md:w-1/12 text-slate-900">Plot </p>
                            <p class="w-5/6 text-justify md:w-11/12 text-slate-500">${detailFilm.Plot}</p>
                        </div>
                    </div>
                </div> 
                <button class="close-btn px-7 py-2 bg-sky-600 rounded-md shadow-md text-white text-sm font-bold cursor-pointer float-right ring-1 ring-sky-200 hover:bg-sky-500 hover:ring-sky-800 active:bg-sky-800">Close</button>
            </div>`;
}
