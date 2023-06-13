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

class Rae1 extends Phaser.Scene {
    constructor() {
        super('rae1')
    }

    preload() {
        
    }

    create() {

    }
}

class Rae2 extends Phaser.Scene {
    constructor() {
        super('rae2')
    }

    preload() {
        
    }

    create() {

    }
}

class Violet1 extends Phaser.Scene {
    constructor() {
        super('violet1')
    }

    preload() {
        
    }

    create() {

    }
}

class Violet2 extends Phaser.Scene {
    constructor() {
        super('violet2')
    }

    preload() {
        
    }

    create() {

    }
}

class Violet3 extends Phaser.Scene {
    constructor() {
        super('violet3')
    }

    preload() {
        
    }

    create() {

    }
}

class Violet4 extends Phaser.Scene {
    constructor() {
        super('violet4')
    }

    preload() {
        
    }

    create() {

    }
}

class Nero1 extends Phaser.Scene {
    constructor() {
        super('nero1')
    }

    preload() {
        
    }

    create() {

    }
}

class Nero2 extends Phaser.Scene {
    constructor() {
        super('nero2')
    }

    preload() {
        
    }

    create() {

    }
}

class Nero3 extends Phaser.Scene {
    constructor() {
        super('nero3')
    }

    preload() {
        
    }

    create() {

    }
}

class Nero4 extends Phaser.Scene {
    constructor() {
        super('nero4')
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