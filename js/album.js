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


let search = new URLSearchParams(window.location.search);

let j = search.get(`i`);

function setUpAudio(){
    let trackNodes = document.querySelectorAll(`.track`);

    

    for (let i = 0; i < trackNodes.length; i++) { 
        console.log(i);
        let node = trackNodes[i];   
        let audio = node.querySelector(`.audio`); 
        let trackIcon = node.querySelector(`.track-icon`);
        let timeNode = node.querySelector(`.time`);
        let progress = node.querySelector(`.progress`);
        

        

        node.addEventListener(`click`, function (evt) {
            
            console.log(evt.target);
            let progressBar = node.querySelector(`.progress`);
            let progressBar1 = node.querySelector(`.progress-bar`);

            function updateProgress() {
                if (audio.currentTime < audio.duration){
                    // Нарисовать актуальное время
                    timeNode.innerHTML = `${Math.floor(audio.currentTime/60/10)}${Math.floor(audio.currentTime/60)%10}:${Math.floor(audio.currentTime%60/10)}${Math.floor(audio.currentTime)%10}`;

                    // Нужно ли вызвать её ещё раз?
                    if (node.classList.contains(`isPlaying`)) {
                        requestAnimationFrame(updateProgress);
                        node.querySelector(`.progress-bar`).style.width = `${100*audio.currentTime/audio.duration}%`;
                    }else if(node.classList.contains(`pause`)){
                        console.log(`Трек на паузе`);
                        trackIcon.src = `assets/pause.png`;
                    }
                    else{
                        timeNode.innerHTML = `${albums[j]['tracks'][i]['time']}`;
                        console.log(`ОНО ЗДЕСЬ БЫЛО`);
                        progress.classList.add(`d-none`);
                        progress.classList.remove(`d-block`)
                        trackIcon.src = `assets/4498521.png`;
                    }
                }else{
                    setTimeout(() => {
                        timeNode.innerHTML = `${albums[j]['tracks'][i]['time']}`;
                        console.log(`ОНО ЗДЕСЬ БЫЛО`);
                        progress.classList.add(`d-none`);
                        progress.classList.remove(`d-block`);
                        trackIcon.src = `assets/4498521.png`;
                    }, 2000);
                    
            }
                
                
              };

            if(evt.target != progressBar && evt.target != progressBar1){
                if (!node.classList.contains(`isPlaying`) && !node.classList.contains(`pause`)) {

                    for (let i = 0; i < trackNodes.length; i++){
                        trackNodes[i].querySelector(`.audio`).currentTime = 0;
                        trackNodes[i].querySelector(`.audio`).pause();
                        trackNodes[i].classList.remove(`isPlaying`);
                        trackNodes[i].classList.remove(`pause`);
                        trackNodes[i].querySelector(`.time`).innerHTML = `${albums[j]['tracks'][i]['time']}`;
                        trackNodes[i].querySelector(`.progress`).classList.add(`d-none`);
                        trackNodes[i].querySelector(`.progress`).classList.remove(`d-block`)
                        trackNodes[i].querySelector(`.track-icon`).src = `assets/4498521.png`;
                    }
                    console.log(`ОНО ВКЛЮЧИЛОСЬ`);
                    node.classList.add(`isPlaying`);
                    // Включить проигрывание
                    audio.play();
                    progress.classList.remove(`d-none`);
                    progress.classList.add(`d-block`);
                    
                    trackIcon.src = `assets/free-icon-music-album-4498611.png`;
                    updateProgress();
                    
                   
    
                
                } else if(!node.classList.contains(`isPlaying`) || node.classList.contains(`pause`)){
                    for (let i = 0; i < trackNodes.length; i++){
                        trackNodes[i].classList.remove(`isPlaying`);
                        trackNodes[i].classList.remove(`pause`);
                        trackNodes[i].querySelector(`.time`).innerHTML = `${albums[j]['tracks'][i]['time']}`;
                        trackNodes[i].querySelector(`.progress`).classList.add(`d-none`);
                        trackNodes[i].querySelector(`.progress`).classList.remove(`d-block`)
                        trackNodes[i].querySelector(`.track-icon`).src = `assets/4498521.png`;
                    }
                    console.log(`ОНО ВКЛЮЧИЛОСЬ`);
                    node.classList.add(`isPlaying`);
                    // Включить проигрывание
                    audio.play();
                    progress.classList.remove(`d-none`);
                    progress.classList.add(`d-block`);
                    
                    trackIcon.src = `assets/free-icon-music-album-4498611.png`;
                    updateProgress();
                }else {
                    
    
                    node.classList.remove(`isPlaying`);
                    node.classList.add(`pause`);
                    
                    
                    audio.pause();
    
                }       
            }else{
                console.log(evt.clientX);
                console.log(progressBar.getBoundingClientRect().x);
                let w1 = progressBar.clientWidth;
                let px = evt.clientX - progressBar.getBoundingClientRect().x;
                let percent = 100*px/w1;
                progressBar1.style.width = `${percent}%`
                audio.currentTime = percent*audio.duration/100;
                timeNode.innerHTML = `${Math.floor(audio.currentTime/60/10)}${Math.floor(audio.currentTime/60)%10}:${Math.floor(audio.currentTime%60/10)}${Math.floor(audio.currentTime)%10}`;
            }
            
});


        
    }
};



let trackList = document.querySelector(`.track-list`);
let description = document.querySelector(`.description`);
let musicList = document.querySelector(`.music-list`);



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
        <li class="list-group-item  track">
            <div class = "d-flex justify-content-start align-items-center">
            <img src="assets/4498521.png" alt="" class = "track-icon">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${albums[j]['tracks'][i]['trackTitle']}</div>
                ${albums[j]['tracks'][i]['autor']}
            </div>
            <p class = "time">${albums[j]['tracks'][i]['time']}</p>
            <audio class="audio" src="${albums[j]['tracks'][i]['src']}"></audio>
            </div>
            <div class="progress d-none">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style = "height: 16px; width: 0%" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </li>
        
        
    `;
};


setUpAudio();



