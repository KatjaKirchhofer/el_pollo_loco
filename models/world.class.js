class World {
    character = new Character();//Hat alle Eigenschaften aus dem Model character.class.js
    enemies = level1.enemies;
    backgroundObjects = level1.backgroundObjects;
    canvas; //für die draw() funktion
    ctx;//Variable definieren um dann in constructor getContext() ausführen zu können. 
    keyboard;
    camera_x = 0;
    level = level1;
    statusBar = new StatusBar();
    coins = level1.coins;
    coinbar = new CoinBar();
    collectedCoins = 0;
    clouds = level1.clouds;
    bottels = level1.bottels;
    collectetBottels = 0;
    newBottel = 1;
    bottelsBar = new BottelsBar();
    endbossBar = new EndbossBar();
    throwableObjects = [];
    endboss = level1.enemies[level1.enemies.length - 1];
    sound_coins = new Audio('audio/coins.mp3');
    sound_bottle = new Audio('audio/bottle.mp3');
    kill_sound = new Audio('audio/kill_chicken.mp3');
    gameOver = new GameOver();
    drawRequest;
    runInterval;
    chicken = new Chicken();
    chickenIntervalAnimate;
    chickenIntervalMove = Chicken.chickenIntervalMove;
    characterIntervalAnimate;
    characterIntervalMove;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');//damit wir auf das Canvas malen können. 
        this.canvas = canvas; //Damit wird die Variable canvas aus Zeile 10 mit der Variable der constructior funktion verknüpft
        this.keyboard = keyboard;
        this.draw();//this brauchen wir für die Variablen aus diesem Object
        this.setWorld();//um die Variablen aus World an die Movable objects weiter zu geben
        this.run();
    }

    setWorld() {
        this.character.world = this;//world ist undifined!!!!?????
        this.endboss.world = this;//enboss ist undifined!!!!
        this.level.enemies.forEach(enemy => enemy.world = this);//world ist undifined!!
        
    }

    run() {
        this.runInterval = setInterval(() => {
            this.checkCollision();
            this.checkTrowObjects();
            this.checkCollisionForCollecting();
            this.checkCoinsCollisionForCollecting();
            this.checkCollisionEndboss();
            this.killChicken();
        }, 200);
    }

    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveTheGround() && !enemy.isDead) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    killChicken() {
        this.level.enemies.forEach((enemy, index) => {

            if(!enemy.isDead) {
                if (this.character.isColliding(enemy) && this.character.isAboveTheGround()) {
                    console.log('Chicken killed');
                    enemy.isDead = true;
                    this.kill_sound.play();
                   
                    setTimeout(() => {
                        let position = this.level.enemies.indexOf(enemy);
                        this.level.enemies.splice(position, 1)
                    }, 2000); 
                }
            }
        });}
    

    checkTrowObjects() {
        if (this.keyboard.D && this.collectetBottels > 0) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 50);
            this.throwableObjects.push(bottle);
            this.collectetBottels--;
            this.bottelsBar.setPercentage(this.collectetBottels);
        }
    }

    checkCollisionForCollecting() {
        this.runInterval = setInterval(() => {
            this.bottels.forEach((bottle, x) => {
                if (this.character.isColliding(bottle)) {
                    //console.log('Character is colling a bottle:')
                    this.collectetBottels++;
                    this.sound_bottle.play();
                    console.log(this.collectetBottels);
                    this.bottels.splice(this.x, 1);
                    this.bottelsBar.setPercentage(this.collectetBottels);
                }
            });
        }, 200);
    }

    checkCollisionEndboss() {
        this.throwableObjects.forEach(throwableObject => {
            if (this.endboss.isColliding(throwableObject)) {
                this.endboss.attack = true;
                console.log(this.endboss.attack);
                this.endboss.energy -= 10;
                console.log(this.endboss.energy);
                this.endbossBar.setPercentage(this.endboss.energy);
            }
        });
    }

    checkCoinsCollisionForCollecting() {
        this.coins.forEach((coin, x) => {
            if (this.character.isColliding(coin)) {
                //console.log('Character is colling a bottle:')
                this.collectedCoins++;
                this.sound_coins.play();
                this.coins.splice(this.x, 1);
                this.coinbar.setPercentage(this.collectedCoins);
            }
        });
    }

    // checkCollisionsWithCollectibles(array) {
    //     array.forEach(element, index  => {
    //         if(this.character.isColliding(element)) {
    //             array.splice(index, 1);

    //         }
    //     });
    // }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);//Diese Zeile sorgt dafür, dass das alte CAnvas gelöscht wird wenn ein neues gezeichnet wird.
        //um das Canvas zu verschieben
        this.ctx.translate(this.camera_x, 0);//translate funktion verschiebt um camera_x 

        this.addObjectsToMap(this.backgroundObjects);


        //um Arrays zu malen diese Funktion: 
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.coins);
        this.addObjectsToMap(this.bottels);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);//malt Pepe über eine weitere Funktion

        //um das canvas nachdem alle Bilder gezeichnet wurden wieder zurück zu schieben
        this.ctx.translate(-this.camera_x, 0)//schließt das translate. Alles was innerhalb der zwei zeilen steht wird mit verschoben.


        //-------------space for fixed objects------------
        this.addToMap(this.statusBar);//wird nicht verschoben, weil außerhalb der translate funktion!!
        this.addToMap(this.bottelsBar);
        this.addToMap(this.coinbar);
        this.addToMap(this.endbossBar);
        if(this.character.isSoDead()) {
        this.addToMap(this.gameOver);
        }

        let self = this;//asynchrone funktion, wird erst aufgefufen wenn die obere Zeile ausgeführt wurde
        this.drawRequest = requestAnimationFrame(function () {
            self.draw();
        });

    }
    /**
     * this function draws an object to the canvas. 
     * @param {*} movableObject (img, x, y, widht, height)
     */
    addToMap(movableObject) {//diese Funktion ersetzt die Zeile in den einzelnen draw-Zeilen. Dazu muss nur die jeweilige Variable übergeben werden. 
        if (movableObject.otherDirection) {
            this.mirrowCharacter(movableObject);
        }
        movableObject.draw(this.ctx);
        movableObject.drawFrame(this.ctx);

        if (movableObject.otherDirection) {
            this.mirrowReset(movableObject);
        }
    }
    /**
    * this funktion creats a forEachLoop for the Array in the (Array here) 
    * @param {arrays} objects 
    */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });

    }


    /**
     * this function mirrows the img
     * @param {*} movableObject 
     */
    mirrowCharacter(movableObject) {//um Bild  zu spiegeln 
        if (movableObject.otherDirection) {//prüft ob das objekt eine andere Richtung hat
            this.ctx.save();//speichern die aktuelle Einstellung um später wieder gerade einzufügen
            this.ctx.translate(movableObject.width, 0);//verschiebt das Bild im seine eigene Breite nach links (auf der x-Achse) damit das bild an der selben Stelle angezeigt wird
            this.ctx.scale(-1, 1);//spiegeln an der y-achse, x wird gedreht, y bleibt gleich
            movableObject.x = movableObject.x * -1;//um die x-Koordinate auch umzudrehen
        }

    };
    /**
     * 
     * this function resets the mirrowing 
     * @param {*} movableObject 
     */
    mirrowReset(movableObject) {
        if (movableObject.otherDirection) {//Wenn andere Richtung gesetzt wurde, dann wird jetzt wieder die urprüngliche Variante eingestellt
            movableObject.x = movableObject.x * -1;
            this.ctx.restore();//setzt die Einstellungen wieder zurück wie in zeile 66 gespeichert
        }
    }

    stopGame() {
        cancelAnimationFrame(this.drawRequest);
        clearInterval(this.runInterval);
        clearInterval(this.chickenIntervalAnimate);//ist undifined
        clearInterval(this.chickenIntervalMove);//ist undifined
        clearInterval(this.character.characterIntervalAnimate);
        clearInterval(this.character.characterIntervalMove);

        this.level.enemies.forEach( enemy => {
            clearInterval(enemy.chickenIntervalMove);
            clearInterval(enemy.chickenIntervalAnimate);
        } );

        chicken_sound.pause();
        this.character.walking_sound.pause();
        this.sound_coins.pause();

        
        // this.level.enemies.forEach( enemy => {
        //     if(enemy instanceof Chicken) {
        //         enemy.chicken_sound.pause();
        //     } if (enemy instanceof Endboss) {
        //         enemy.walking_sound.pause();
        //         enemy.attack_sound.pause();
        //     }
        // });
    }

   
}
