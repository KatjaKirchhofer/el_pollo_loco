class EndbossBar extends DrawableObject{

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/Naranja/0_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/20__1.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/40_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/60_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/80_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/100_ .png'//5
    ]
    

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 500;
        this.y = 0;
        this.height = 60;
        this.width = 200;
        this.setPercentage(100);
    }

    setPercentage(percentage) {//hier könnte z.b. 50 eingesetzt werden, dann wird this.percentage zu 50
        this.percentage = percentage;//ersetzt dann durch den Wert der in der ausgeführten funktion eingesetzt ist. 
        let path = this.IMAGES[this.resolveImageIndex()];//path wird zu dem Bild aus dem Array an der Stelle die in der nächsten Funktion ermittelt wird
        this.img = this.imageCache[path];//img wird zu dem Bild welches aus dem Cache geladen wird. 
    }

    resolveImageIndex() {//wandelt prozent in Zahlen zwischen 0 und 5 um, um sie dann oben in den path einzusetzten. 
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        };


    };



}

