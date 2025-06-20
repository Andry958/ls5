const api = 'http://www.omdbapi.com/?apikey=5c8baa4';
async function fetchProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
        document.getElementById("productDetails").innerText = "ID товару не передано.";
        return;
    }

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=5c8baa4&i=${id}`);
        const product = await response.json();
        console.log(product)
        document.getElementById("productDetails").innerHTML = `
        <div class="col">
        <div class="card h-100">
        <img height="300" src="${product.Poster}" class="card-img-top" alt="${product.Title}">
        <div class="card-body">
        
        <h5 class="card-title">${product.Title} (${product.Year})</h5>
        <p class="card-text"><strong>Жанр:</strong> ${product.Genre}</p>
        <p class="card-text"><strong>Режисер:</strong> ${product.Director}</p>
        <p class="card-text"><strong>Актори:</strong> ${product.Actors}</p>
        <p class="card-text"><strong>Рейтинг IMDb:</strong> ${product.imdbRating} (${product.imdbVotes} голосів)</p>
        <p class="card-text"><strong>Сюжет:</strong> ${product.Plot}</p>
        <a href="forMovie.html?id=${product.imdbID}" class="btn btn-primary">Детальніше</a>
        </div>
        <div class="card-footer">
        <small class="text-muted">Тривалість: ${product.Runtime} | Країна: ${product.Country}</small>
        <a style="margin-left:30px" href="index.html" class="btn btn-primary">x</a>
        </div>
                </div>
            </div>`;
    } catch (error) {
        console.error("Помилка при завантаженні деталей товару:", error);
        document.getElementById("productDetails").innerText = "Помилка завантаження товару.";
    }
}
document.addEventListener("DOMContentLoaded", fetchProductDetails);

const exit = document.querySelector('.exitBtn')
exit.onclick = function (e) {
    e.preventDefault();

}