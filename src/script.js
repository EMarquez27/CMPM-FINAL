class Title extends Phaser.Scene{
    constructor() {
        super('title')
    }

    preload() {
        
    }

    create() {

    }
}

class Settings extends Phaser.Scene {
    constructor() {
        super('settings')
    }

    preload() {
        
    }

    create() {

    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    preload() {
        
    }

    create() {

    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro')
    }

    preload() {
        
    }

    create() {

    }
}

const game = new Phaser.Game({
    scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1900,
    height: 1000
    },

    type: Phaser.AUTO,
    scene: [Title, Settings, Intro, Outro]
})