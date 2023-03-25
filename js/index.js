

let template = `
    <a href="albumbrain.html" class = "title">
        <div class="card" style="width: 18rem;">
            <img src="assets/1.avif" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Во время работы</h5>
            </div>
        </div>
    </a>
`;

let musicContainer = document.querySelector(`.music-container`);

for (let i = 0; i < albums.length; i++){
    musicContainer.innerHTML += `
        <a href="album.html?i=${i}" class = "title">
            <div class="card" style="width: 18rem;">
                <img src="${albums[i]['img']}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${albums[i]['title']}</h5>
                </div>
            </div>
        </a>
    `
}

