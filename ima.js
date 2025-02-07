let currmoletile;
let currplantile;
let score = 0;
let gameover = false;


window.onload = function() {
    setGame();
}

function setGame() {
    // Set up the grid for the game board in HTML
    for (let i = 0; i < 9; i++) { // i goes from 0 to 8, stops at 9
        // <div id="0-8"></div>

        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);

        
    }

    setInterval(setmole,1000);
    setInterval(setPlant,2000);
    
}

function getrandomtile(){
    let num = Math.floor(Math.random() * 9)
    return num.toString();
}

function setmole () {

    if(gameover){
        return;
    }

    if (currmoletile) {
        currmoletile.innerHTML ="";
    }

let mole = document.createElement("img");
mole.src ="./MontyMole.webp";

let num = getrandomtile();
if (currplantile && currplantile.id == num) {
    return;
}


    currmoletile = document.getElementById(num);
    currmoletile.appendChild(mole);



}
function setPlant() {

    if(gameover){
        return;
    }

    if (currplantile) {
        currplantile.innerHTML = ""; // Nettoyer le contenu précédent
    }

    const plant = document.createElement("img");
    plant.src = "./Piranha_Plant_3D_Land.webp";
    
    let num = getrandomtile();

    if (currmoletile && currmoletile.id == num) {
        return;
    }
    
       
    
    currplantile = document.getElementById(num);
    
        currplantile.appendChild(plant);

}

function selectTile() {

    if(gameover){
        return;
    }
    if (this == currmoletile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score
    } 
    else if (this == currplantile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameover = true;
    }
}

