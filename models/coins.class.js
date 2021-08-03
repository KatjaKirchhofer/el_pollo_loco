class Coins extends MovableObject {
    width = 100;
    height = 100;

    IMAGES = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda1.png'
    ]


    constructor(x, y) {
        super();
        this.loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animateMovement(this.IMAGES);
    }
}