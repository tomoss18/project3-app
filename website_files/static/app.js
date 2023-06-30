const base_url = "https://api.jikan.moe/v4/anime";

function searchAnime(event){

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");

    fetch(`${base_url}?q=${query}&sfw`)
    .then(res=>res.json())
    .then(updateDom)
    .catch(err=>console.warn(err.message));
}

function updateDom(data){

    const searchResults = document.getElementById('search-results');

    const animeByCategories = data.data
      .reduce((acc, anime) => {

          const {type} = anime;
          if(acc[type] === undefined) acc[type] = [];
          acc[type].push(anime);
          return acc;

      }, {});

     searchResults.innerHTML = Object.keys(animeByCategories).map(key=> {
    
        const animesHTML = animeByCategories[key]
        .sort((a,b)=>a.episodes-b.episodes)
        .map(anime=>{
          console.log(anime)
          return `
              <div class="card">
                <div class="card-image">
                    <img src="${anime.images.jpg.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p>${anime.synopsis}</p>
                </div>
               <div class="card-action">
                    <a href="${anime.url}">Find out more</a>
                </div>
              </div>
           `
        }).join("");

          return `
              <section>
                  <h3>${key.toUpperCase()}</h3>
                  <div class="row">${animesHTML}</div>
              </section>
        `
      }).join(""); 
}

function pageLoaded() {
   const form = document.getElementById("search_form");
   form.addEventListener("submit", searchAnime);
}

window.addEventListener("load", pageLoaded);