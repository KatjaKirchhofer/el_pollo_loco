class Endboss extends MovableObject {
    width = 400;
    height = 300;
    y = 150;
    world;
    attack = false;
    isDead = false;
    energy = 100;
    otherDirection = false;

    walking_sound = new Audio('audio/chicken_sound.mp3');
    attack_sound = new Audio('audio/attack.mp3');

    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/1.Alerta/G12.png'

    ];

    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/4.Muerte/G26.png'
    ];

    IMAGES_ATTACK = [
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/2.Ataque/G20.png'
    ];


    constructor() {
        super().loadImage('img/4.Secuencias_Enemy_gigant¢n-Do§a_Gallinota-/2.Ateci¢n-ataque/1.Alerta/G5.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 2000;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.otherDirection = this.otherDirection ? false : true;
        }, 3000);
        
        this.loop = setInterval(() => {
           
            if (this.energy <= 0) {
                this.animateMovement(this.IMAGES_DEAD);

                setTimeout(() => {
                    clearInterval(this.loop);
                    level1.enemies.splice([level1.enemies.length - 1], 1)
                    this.world.stopGame();
                    showStartScreen();
                }, 2000);

            } else if (this.attack) {
                this.animateMovement(this.IMAGES_ATTACK);
                this.attack_sound.play();
                this.attack = false;
            } else {
               
                setInterval(() => {
                        if (this.otherDirection) {
                            this.moveRight();
                        }
                        else {
                            this.moveLeft();
                        }
                    
                }, 100);

                this.animateMovement(this.IMAGES_WALKING);
                //this.walking_sound.play();
            };
        }, 200);
    }
}

