let canvas;//in init() an die Welt übergeben!!
let world;
let keyboard = new Keyboard();//in init() an die Welt übergeben!!
let chicken_sound = new Audio('audio/chicken.mp3');

//in World befinden sich die Variablen enemies und character!!

/**
 * 
 */
function init() {
    if(window.innerHeight < 600) {
       document.getElementById('overlay').classList.remove('d-none')
       document.getElementById('startscreen').classList.add('d-none');
    } else {
        showStartScreen();
        canvas = document.getElementById('canvas');
    }
   
}

function showStartScreen() {
    document.getElementById('startscreen').classList.remove('d-none');
    document.getElementById('canvas').classList.add('d-none');
}

function startGame() {
   
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('startscreen').classList.add('d-none');

    level1 = level1Init();
    //aus init() kopiert!
     //der Variablen das Canvas zuordnen. assign the canvas from html to the variable
   
    world = new World(canvas, keyboard);
    listenForTouches();
    chicken_sound.play();
}



window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    };
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    };
    if (event.keyCode == 38) {
        keyboard.UP = true;
    };
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    };
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    };
    if (event.keyCode == 68) {
        keyboard.D = true;
    }

    console.log(event);
});

window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    };
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    };
    if (event.keyCode == 38) {
        keyboard.UP = false;
    };
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    };
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    };
    if (event.keyCode == 68) {
        keyboard.D = false;
    }

    console.log(event);
});

function listenForTouches() {
    document.getElementById('button-up').addEventListener("touchstart", function (e) {
        e.preventDefault();
        keyboard.UP = true;
    });
    document.getElementById('button-up').addEventListener("touchend", function (e) {
        e.preventDefault();
        keyboard.UP = false;
    });

    //right:
    document.getElementById('button-right').addEventListener("touchstart", function (e) {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById('button-right').addEventListener("touchend", function (e) {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    //left:
    document.getElementById('button-left').addEventListener("touchstart", function (e) {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById('button-left').addEventListener("touchend", function (e) {
        e.preventDefault();
        keyboard.LEFT = false;
    });

      //throw:
      document.getElementById('button-d').addEventListener("touchstart", function (e) {
        e.preventDefault();
        keyboard.D = true;
    });
    document.getElementById('button-d').addEventListener("touchend", function (e) {
        e.preventDefault();
        keyboard.D = false;
    });
}

// window.onresize = resizeWindow()

// function resizeWindow() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }