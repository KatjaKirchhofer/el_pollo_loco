class Level{
    enemies = [];
    clouds;
    coins;
    backgroundObjects;
    bottels;
    level_end_x = 2000;

    constructor(enemies, clouds, backgroundObjects, coins, bottels) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottels = bottels;
    }
}