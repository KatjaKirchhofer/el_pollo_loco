class MovableObject extends DrawableObject {//Schablone, legt fest welche Variablen in den Objecten, die davon erben enthalten sein sollen. 
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    isOnTheGround = false;
    energy = 100;
    lastHit = 0;
    jumping_sound = new Audio('audio/jump.mp3');
    //isDead = false;



    constructor() {
        super();
    }

    draw(ctx) {
        // let differeceY = 480 - window.innerHeight;
        // let yPos = this.y - differeceY;
        // let differeceX = 720 - window.innerWidth;
        // let xPos = this.x - differeceX;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveTheGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveTheGround() {
        if (this instanceof ThrowableObject) {//throwable Object soll immer fallen
            return true;
        } else {
            this.isOnTheGround = true;
            return this.y < 240;

        }
    }

    jump() {
        this.speedY = 20;
        this.jumping_sound.play();
    }

    animateMovement(images) {
        let i = this.currentImage % images.length;//dadurch wird eine Endlosschleife erzeugt. ????Warum keine for Schleife??
        this.path = images[i];//Variable um die stelle des Bildes festzuelgen. Ist am Anfang 0(siehe oben)
        this.img = this.imageCache[this.path];
        this.currentImage++;//erhöht jedes Mal um 1
    };

    moveRight() {
        this.x += this.speed;//addiert zur x-Achse
        if (this instanceof Character) {
            this.otherDirection = false;
        };
        
    }

    moveLeft() {
        this.x -= this.speed;//zieht ab von der x-Achse
    }

    isColliding(movableObject) {
        return this.x + this.width > movableObject.x &&
            this.y + this.height > movableObject.y &&
            this.x < movableObject.x &&
            this.y < movableObject.y + movableObject.height
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;//Difference in ms
        timePassed = timePassed / 1000;//Secunds
        return timePassed < 1;//dann wird true returned
    }

    isSoDead() {
        //this.dead_sound.play();
        return this.energy == 0;//?????
    }


}