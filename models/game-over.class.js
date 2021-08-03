class GameOver extends MovableObject {
    width = 720;
    height = 480;
    y = 0;
    x = 0;
    IMAGES = ['img/9.Intro _ Outro Image/_Game over_ screen/2.oh no you lost!.png']


    constructor() {//diese funktion gibt es bei jeder classe und wird immer ausgeführt wenn ein Objekt neu erstellt wird. 
        super().loadImages(this.IMAGES);
        this.animate();

    }

    animate() {
       
        this.animateMovement(this.IMAGES);
        };
    

}