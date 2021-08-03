

class Cloud extends MovableObject { //erbt von Movabel Objects
 
    height = 250;
    width = 500;
    speed = 0.15;
  

    constructor(x, y) {//Wird ausgeführt sobald ein Chicken erstellt wird
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        //this.x = Math.random() * 500; //Math.random() kreeirt eine Zahl zwischen 0 und 1. Mit 500 multipliziert ergibt sich eine Zahl zwischen 0 und 500 (minimum 200 wegen 200 +)
   
        this.x = x;
        this.y = y;
        this.animate();
}
/**
 * this funktion will move the picture 
 */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
       
    }
    
    
}