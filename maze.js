window.onload = function() {
    $("start").onclick = start;
    $("end").onmouseover = gameOver;
    $("maze").onmouseleave = hitWall;
    var walls= $$("div#maze div.boundary");
    for (var i = 0; i < walls.length; i++) {
        walls[i].onmouseover = hitWall;
    }
};

var hit = false;

function hitWall() {
    hit = true;
    var walls = $$("div#maze div.boundary");
    for (var i = 0; i < walls.length; i++) {
        walls[i].addClassName("youlose");
        //gameOver();
    }
}

function start() {
    hit = false;
    var walls = $$("div#maze div.boundary");
    for (var i = 0; i < walls.length; i++) {
        walls[i].removeClassName("you lose");
    }
}

function gameOver() {
    if(hit) {
        alert("You lose!");
    } 
    else {
        alert("You win!");
    }
}