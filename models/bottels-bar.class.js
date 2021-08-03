class BottelsBar extends DrawableObject{

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'
    ]

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 60;
        this.y = 50;
        this.height = 60;
        this.width = 200;
        this.setPercentage(0);
    }

    setPercentage(percentage) {//hier könnte z.b. 50 eingesetzt werden, dann wird this.percentage zu 50
        this.percentage = percentage;//ersetzt dann durch den Wert der in der ausgeführten funktion eingesetzt ist. 
        let path = this.IMAGES[this.resolveImageIndex()];//path wird zu dem Bild aus dem Array an der Stelle die in der nächsten Funktion ermittelt wird
        this.img = this.imageCache[path];//img wird zu dem Bild welches aus dem Cache geladen wird. 
    }

    resolveImageIndex() {//wandelt prozent in Zahlen zwischen 0 und 5 um, um sie dann oben in den path einzusetzten. 
        if (this.percentage == 0) {
            return 0;
        } else if (this.percentage < 2 ) {
            return 1;
        } else if (this.percentage < 4) {
            return 2;
        } else if (this.percentage < 6) {
            return 3;
        } else if (this.percentage < 8) {
            return 4;
        } else {
            return 5;
        };
    };



}

