let templateTrack = `
    <li class="list-group-item d-flex justify-content-start align-items-center track">
        <img src="assets/4498521.png" alt="" class = "track-icon">
        <div class="ms-2 me-auto">
            <div class="fw-bold">Experience</div>
            Ludovico Einaudi, Daniel Hope, I Virtuosi Italiani
        </div>
        <p class = "time">5:12</p>
    </li>
`;

let templateDescription = `
<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="assets/1.avif" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Во время работы</h5>
                <p class="card-text">Описание альбома, прочитав которое, вы просто не сможете устоять перед прослушиванием.</p>
                <p class="card-text"><small class="text-muted">Сборник выпущен в 2022 году</small></p>
            </div>
        </div>
    </div>
</div>
`;


let trackList = document.querySelector(`.track-list`);
let description = document.querySelector(`.description`);
let content = document.querySelector(`.content`);

let search = new URLSearchParams(window.location.search);

let j = search.get(`i`);

description.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${albums[j]['img']}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${albums[j]['title']}</h5>
                    <p class="card-text">${albums[j]['description']}</p>
                    <p class="card-text"><small class="text-muted">${albums[j]['year']}</small></p>
                </div>
            </div>
        </div>
    </div>
`;

for (let i = 0; i < albums[j]['tracks'].length; i++){
    trackList.innerHTML += `
        <li class="list-group-item d-flex justify-content-start align-items-center track">
            <img src="assets/4498521.png" alt="" class = "track-icon">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${albums[j]['tracks'][i]['trackTitle']}</div>
                ${albums[j]['tracks'][i]['autor']}
            </div>
            <p class = "time">${albums[j]['tracks'][i]['time']}</p>
        </li>
    `
};

