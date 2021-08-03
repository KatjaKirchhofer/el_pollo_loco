let level1;

function level1Init() {
    let enemies = [];
    let coins = [];
    let bottels = [];

    let x = 0;

    for (let i = 0; i < 7; i++) {
        x += 600 * Math.random();
        enemies.push(new Chicken(x));

    };

    x = 0;
    for (let i = 0; i < 5; i++) {
        x += 600 * Math.random();
        enemies.push(new Pollito(x));

    };


    enemies.push(new Endboss());

    x = 0;
    let y = 0;
    for (let i = 0; i < 7; i++) {
        x += 500 * Math.random();
        y = 100 * Math.random() + 200;
        coins.push(new Coins(x, y));
    };

    x = 0;
    y = 0;
    for (let i = 0; i < 7; i++) {
        x += 500 * Math.random();
        y = 100 * Math.random() + 200;
        bottels.push(new Bottels(x, y));
    };

    return new Level(
        enemies,

        [
            //new Cloud(),
            new Cloud(200, 20),
            new Cloud(600, 30),
            new Cloud(1000, 20),
            new Cloud(1400, 30),
            new Cloud(1800, 20),
            new Cloud(2100, 20),
            new Cloud(2600, 20)
        ],

        [
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719,),//das hinterste Bild muss oben geschrieben werden
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0,),//das hinterste Bild muss oben geschrieben werden
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
            //Hier das neue Objekt anlegen, in draw() dann zeichnen
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719,),//das hinterste Bild muss oben geschrieben werden
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),//das hinterste Bild muss oben geschrieben werden
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),
            //Hier das neue Objekt anlegen, in draw() dann zeichnen
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),//das hinterste Bild muss oben geschrieben werden
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3)
        ],

        coins,

        bottels,
     

    )
}



