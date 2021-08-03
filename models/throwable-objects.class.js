class ThrowableObject extends MovableObject {



    IMAGES = [
        'img/6.botella/Rotaci¢n/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotaci¢n/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotaci¢n/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotaci¢n/Mesa de trabajo 1 copia 6.png'
    ]

    constructor(x, y) {
        super();
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.height = 100;

       
        this.throw();
    }



    throw() {
        this.speedY = 25;//nach oben
        this.applyGravity();
        
        setInterval( () => {
            this.x += 10;//ist für die Kurve verantwortlich
        }, 50);
        setInterval( () => {
            this.animateMovement(this.IMAGES);
        }, 1);
    };
}