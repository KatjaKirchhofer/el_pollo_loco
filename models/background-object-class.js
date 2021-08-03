class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);//Variable für die Bilder, den Pfad kann ich beim anlegen in World in die Klammer einfügen
        this.x = x;
        this.y = 480 - this.height;
    }
}