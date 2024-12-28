let content = document.querySelector(".content");
let cards = document.querySelector(".cards");
let pageTitle = document.querySelector(".page-title");



let allgame = [];

async function getGames() {
    const options = {
        method: "GET",
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': '8574823d8cmshf3a9d0b11089231p1e6684jsn9f42c39cbc59',
        },
    };
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter`, options);
    const response = await api.json();
    allgame = response;
    displayData();
    console.log(response);
}
getGames();

function displayData() {
    let cartona = ``;
    for (let i = 0; i < allgame.length; i++) {
        cartona += `
        <div class="col-12 col-md-4 d-flex">
          <div class="card" data-index="${i}">
            <div class="layerr">
              <img class="w-100 d-block" src="${allgame[i].thumbnail}" alt="">
              <div class="row">
                <div class="col-9">
                  <h3 class="h6 mt-3 text-white">${allgame[i].title}</h3>
                </div>
                <div class="col-2">
                  <h4 class="text-bg-primary fit-content h6 mt-3 p-1 rounded-2">Free</h4>
                </div>
              </div>
              <p style="color: #919395;" class="lg-font position-relative pg text-center">${allgame[i].short_description}</p>
            </div>
            <footer class="mt-2">
              <div class="row">
                <div class="col-4">
                  <h5 style="background-color: #32383E;" class="mt-3 sm-font text-white text-center rounded-1 fit-content p-1 fw-bold">${allgame[i].genre}</h5>
                </div>
                <div class="col-8 d-flex justify-content-end">
                  <h5 style="background-color: #32383E;" class="mt-3 sm-font text-white text-center rounded-1 fit-content p-1 fw-bold">${allgame[i].platform}</h5>
                </div>
              </div>
            </footer>
          </div>
        </div>
        `;
    }
    document.getElementById('showData').innerHTML = cartona;

    let cardsList = document.querySelectorAll('.card');
    cardsList.forEach(card => {
        card.addEventListener('click', function () {
            let index = this.getAttribute('data-index');
            showGameDetails(index);
        });
    });
}

function showGameDetails(index) {
    content.classList.add("d-none");
    pageTitle.classList.remove("d-none");
    // btnClose.classList.remove("d-none")

    let game = allgame[index];
    
    let box = `
    <div class="container">
            <button id ="close-btn" class="close-btn text-white">X</button>
      <h2 class="text-white">Details Game</h2>
    </div>
    <div class="row d-flex p-4">
      <div class="col-md-4 col-12">
        <img class="d-block w-100 ms-4" src="${game.thumbnail}" alt="">
      </div>
      <div class="col-md-6 col-12">
        <header class="text-white mt-4 ms-3">
          <h3>Title: <span>${game.title}</span></h3>
          <h4 class="h6 my-4">Category: <span class="title-game">${game.genre}</span></h4>
          <h4 class="h6 my-4">Platform: <span class="title-game">Windows</span></h4>
          <h4 class="h6 my-4">Status: <span class="title-game">Live</span></h4>
          <p class="datils-game">
            Tarisland is a free-to-play cross-platform MMORPG developed by Level Infinite and Published by Tencent. Available on PC and mobile devices, the game allows players to easily move between both, taking the game with them when they can’t be at their desk. The game is designed to appeal to players of MMOs like World of Warcraft, offering players nine playable classes and 18 specializations. Each class features an extensive talent tree system and can be customized. Players of existing MMOs will be familiar with the standard tank, DPS, and healer lineup, necessary for the game’s classic raid and dungeon system. Explore a vast game world and solve mysteries. Pick up various trades such as gathering, mining, and crafting, and sell your items on the auction house.
          </p>
        </header>
        <a href=""><button style="border: 1px solid #FFC107;" class="bg-transparent btn rounded-2 text-white">Show Game</button></a>
      </div>
    </div>
    `;
    pageTitle.innerHTML = box;
    let btnClose = document.querySelector("#close-btn")
    console.log(btnClose );
}
  
// btnClose.addEventListener("click", function() {
  //     pageTitle.classList.add("d-none");
//     content.classList.replace("d-none", "d-");
// });
// window.onload = function() {
  //     document.getElementById("loader-container").style.display = "flex";
  //     setTimeout(function() {
    //         document.getElementById("loader-container").style.display = "none";
//         document.getElementById("content").style.display = "block";  
//     }),2000;
// };
