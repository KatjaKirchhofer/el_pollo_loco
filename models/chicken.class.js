//chicken ist in World definiert

class Chicken extends MovableObject {//erbt dadruch von Movable-Object
    width = 60;
    height = 60;
    y = 380;
    speed = 0;
    isDead = false;
    world;
    chickenIntervalMove;
    chickenIntervalAnimate;
   

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_b†sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_b†sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_b†sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'

    ];

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_b†sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];


    constructor(x) {//Wird ausgeführt sobald ein Chicken erstellt wird

        super().loadImage('img/3.Secuencias_Enemy_b†sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x; //Math.random() kreeirt eine Zahl zwischen 0 und 1. Mit 500 multipliziert ergibt sich eine Zahl zwischen 0 und 500 (minimum 200 wegen 200 +)
        this.speed = 0.15;
       
        this.animate();

    }

    animate() {

        this.chickenIntervalMove = setInterval(() => {
            if (!this.isDead) {
                this.moveLeft();
            }
        }, 1000 / 60);

        this.chickenIntervalAnimate = setInterval(() => {
            if(this.isDead) {
                this.animateMovement(this.IMAGES_DEAD);
            } else {
                this.animateMovement(this.IMAGES_WALKING);
                
            }
        }, 200);

    }


    // animate() {
    //     this.chickenIntervalMove = setInterval(() => {
    //         if (!this.isDead)
    //             this.moveLeft();
    //     }, 1000 / 60);
    //     this.chickenIntervalAnimate = setInterval(() => {
    //         if (this.isDead)
             
    //         else
           
    //     }, 200);
    // }


}