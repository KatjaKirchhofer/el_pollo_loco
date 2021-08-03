//Character ist in World definiert

class Character extends MovableObject { //erbt dadruch von Movable-Object
    width = 100;
    height = 200;
    y = 50;
    speed = 10;
    dead_sound = new Audio('audio/dead.mp3');
    hit_sound = new Audio('audio/hit.mp3');
    isDead = false;
    gameOver;
    characterIntervalAnimate;
    characterIntervalMove;

    world;



    IMAGES_WALKING = [//Array für die walking Bilder
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/3.Secuencia_salto/J-40.png'
    ];
    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/4.Herido/H-43.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/2.Secuencia_caminata/W-21.png'
    ];
    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-correcci¢n/5.Muerte/D-57.png'
    ];


    world;//verknüpfung zu world um auf die Variablen zuzugreifen
    walking_sound = new Audio('audio/running.mp3');

    constructor() {//diese funktion gibt es bei jeder classe und wird immer ausgeführt wenn ein Objekt neu erstellt wird. 
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcci¢n/2.Secuencia_caminata/W-21.png') //super(). zeigt, dass es zur übergeordnete Class gehört! Die Variable path ersetzte ich mit dem Pfad den IMG
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);

        this.applyGravity();
        this.animate();

    }

    animate() {
        this.characterIntervalMove = setInterval(() => {//wird 1 mal pro Sekunde ausgeführt, so wird 1 X pro Sec ein neues Bild geladen
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {//wird nur bei -> ausgeführt
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -500) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.play();

            }
            if (this.world.keyboard.UP && !this.isAboveTheGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 150;//sorgt dafür, dass sich die Camera bzw. das canvas nach links verschiebt wenn die taste RIGTH gedrückt ist. das +100 verschiebt die Kamera 100px nach rechts
        }, 1000 / 60)

        this.characterIntervalAnimate = setInterval(() => {
            if (this.isSoDead()) {
                this.animateMovement(this.IMAGES_DEAD);
                this.isDead = true;
                clearInterval(this.characterInterval);
                this.world.stopGame();
                setTimeout(() => {
                    showStartScreen();
                }, 2000);
               
               
                //this.dead_sound.play();

            } else if (this.isAboveTheGround()) {
                this.animateMovement(this.IMAGES_JUMPING);

            } else if (this.isHurt() && !this.isDead) {
                this.animateMovement(this.IMAGES_HURT);
                this.hit_sound.play();


            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.animateMovement(this.IMAGES_WALKING)
            }
        }, 50);

    };



}