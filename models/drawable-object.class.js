class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 300;
    height = 150;
    width = 100;


       /**
     * function to load image in character and cicken
     * @param {} path 
     */
    loadImage(path) {//Wird in der Unterklasse mit dem Pfad des Bildes ausgeführt
        this.img = new Image();//entspicht einem HTML <img> tag
        this.img.src = path; //statt dem Pfad schreiben wir hier eine Variable. Der path wird in der ausführenden Funktion mit dem Pfad zum Bild ersetzt
    }

        /**
     * function to load array with images
     */
    loadImages(arr) {//Nur um die Bilder zu laden! Im Array, zu finden in character.class.js in loadImages(wird hiermit verknüpft)befinden sich nur strings. Mit dieser Funktion werden daraus einzelne Bilder erstellt
        arr.forEach((path) => {//hier wird das Array geladen, läuft 6 mal durch um alle Bilder zu laden
        this.img = new Image();//mit dieser Zeile wird ein img erstellt
        this.img.src = path;//weist dem Bild den Pfad zu
        this.imageCache[path] = this.img;//pusht das neue Bild in das Array
    });
    }

    /**
     * function to draw an image 
     * @param {} ctx 
     */
    draw(ctx) {
        // let differeceY = 480 - window.innerHeight;
        // let yPos = this.y - differeceY;
        // let differeceX = 720 - window.innerWidth;
        // let xPos = this.x - differeceX;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if(this instanceof Character || this instanceof Chicken || this instanceof Pollito || this instanceof Endboss || this instanceof ThrowableObject) {
        ctx.beginPath();
        ctx.lineWidth = '3';
        ctx.strokeStyle = 'blue';
        // let differeceY = 480 - window.innerHeight;
        // let yPos = this.y - differeceY;
        // let differeceX = 720 - window.innerWidth;
        // let xPos = this.x - differeceX;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        };
    }
}