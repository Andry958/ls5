const api = 'http://www.omdbapi.com/?apikey=5c8baa4';
const seachBtn = document.querySelector("#s");
const seachInput = document.querySelector("#ss");
const grid = document.querySelector('#card-grid');

async function loadProducts(query_) {
    try{
        const response = await fetch(api + `&s=${query_}&page=${pagination.page}`);
        const data = await response.json();
        console.log(data);
        pagination.total = parseInt(data.totalResults);
        data.Search.forEach(i => addProductToHtml(i))
        
    }
    catch(ex){
        alert("Введіть пошуковий запит")
    }
}

function addProductToHtml(i) {
    grid.innerHTML += `<div class="col">
                        <div class="card h-100">
                            <img height="200" src="${i.Poster}"
                                class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${i.Title}</h5>
                                <p class="card-text">${i.Year}</p>
                                <a class = "a_" href="forMovie.html?id=${i.imdbID}">Детальніше</a>
                            </div>

                        </div>
                    </div>`
}
seachBtn.onclick = (e) => {
    e.preventDefault();
    search()
}
async function search(){
    const query = seachInput.value; 
    const response = await fetch(api + `&s=${query}&page=${pagination.page}`);
    const data = await response.json();


    grid.innerHTML = '';
    console.log(data);
    pagination.total = parseInt(data.totalResults);
    data.Search.forEach(i => addProductToHtml(i))
}
document.addEventListener('DOMContentLoaded', () => {
    
})


loadMoreBtn.onclick = () => {
    const query = seachInput.value; 

    pagination.next();
    loadProducts(query);
}