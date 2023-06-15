class Studio extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'studio' });
    }

    preload (){
        this.load.path = './assets/';
        this.load.image('studio', 'studio.png');
        this.load.audio('bgm', 'bgm.mp3');
        //this.load.spritesheet("gif", "./assets/gif4.png", {frameWidth: 1200, frameHeight: 1080});
        this.load.spritesheet("gif", "./assets/TatStudio.gif", {frameWidth: 1200, frameHeight: 1080});
        //this.load.audio('Boom', 'boom.mp3');
    }

    create ()
    {  
        this.cameras.main.fadeIn(1000, 0,0,0);
        let sound = this.sound.add('bgm', {loop: true});
        sound.play();

        this.load.spritesheet({
            key: "gif",
            url: "./assets/TatStudio.gif",
            frameConfig: {
                frameWidth: 1200,
                frameHeight: 1080,
                startFrame: 0,
                endFrame: 28
            }
        });
        //let sound2 = this.sound.add('Boom');
        //this.time.delayedCall(1000, () => {
        //    sound2.play();
        //});
       
        let studio = this.add.image(
            960,//x
            500,
            'studio',//imagename
        )
        studio.scale = 0.75;

        //this.anims.create({
        //    key: "vid",
        //    frameRate: 20,
        //    frames: this.anims.generateFrameNumbers("gif"),
        //    repeat: -1
        //});

        //this.anim = this.add.sprite(960, 540, "gif");
        //this.anim.play("vid");

        this.time.delayedCall(2000, () => {
            this.cameras.main.fadeOut(2000, 0,0,0);
        });

        this.time.delayedCall(5000, () => {
            this.scene.start('menu');
        })

        //fade in and out 
        {
            this.tweens.add({
                targets: studio,
                ease: 'Sine.easeInOut',
                repeat: -1,
                duration: 1000
            });
        

        this.input.on('pointerdown', () => this.scene.start('menu'));
    }
}
}

class MainMenu extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'menu' });
    }

    preload (){
        this.load.path = './assets/';
        this.load.image('start', 'Start2png.png');
        this.load.image('options', 'Options2.png');
        this.load.image('title', 'Title.png');
        this.load.image('credits', 'credit.png');
        this.load.image('glitch', 'glitch.png');

    }

    create ()
    {
        this.cameras.main.fadeIn(1000, 0,0,0);
       
        let title = this.add.image(
            960,//x
            500,
            'title',//imagename
        )

        let glitch = this.add.image(
            960,
            500,
            'glitch'
        )
        glitch.scale = 4;
        this.tweens.add({
            targets: glitch,
            alpha: 0,
            duration: 1000,
            ease: 'Bounce',
            repeat: -1,
        });
        let options = this.add.image(960, 700, 'options')
        options.setInteractive()
        options.on('pointerdown', () => this.scene.start('options'));

        let start = this.add.image(
            960,//x
            600,
            'start',//imagename
        )
        start.setInteractive()
        start.on('pointerdown', () => this.scene.start('intro'));

        let credit = this.add.image(
            960,//x
            800,
            'credits',//imagename
        )
        credit.setInteractive()
        credit.on('pointerdown', () => this.scene.start('credits'));

        start.scale = 0.75;
        options.scale = 0.75;
        title.scale = 0.75;
        credit.scale = 0.75;

        //fade in and out 
        this.tweens.add({
            targets: start,
            ease: 'Sine.easeInOut',
            repeat: -1,
            duration: 1000
        });
        this.tweens.add({
            targets: title,
            ease: 'Sine.easeInOut',
            repeat: -1,
            duration: 1000
        });
        this.tweens.add({
            targets: options,
            ease: 'Sine.easeInOut',
            repeat: -1,
            duration: 1000
        });
}
}

class Options extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'options' });
    }

    intialize (){
        //This variable will hold the sound value.
        this.registry.set('options', {Sound: 100})
    }

    preload (){
        this.load.path = './assets/';
        this.load.image('back', 'back.png');
        this.load.image('options', 'Options.png');
        this.load.image('menuopt', 'menu.png')

    }

    create ()
    {
        let options = this.add.text(
            810,//x
            500,
            "Turn OFF Sound",
        )
        .setScale(2)
        
        options.setInteractive()
        options.on('pointerdown', () => sound.pause());
        
        let back = this.imageObject = this.add.image(
            200,
            200,
            'back',
        )
        back.setScale(0.2)
        back.setInteractive()
        back.on('pointerdown', () => this.scene.start('menu'));
    }
}

class Credits extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'credits' });
    }

    preload (){
        this.load.path = './assets/';
        this.load.image('back', 'back.png');
        this.load.image('options', 'Options.png');
        this.load.image('credit', 'credits.png')

    }

    create ()
    {
        let options = this.imageObject = this.add.image(
            960,//x
            600,
            'credit',//imagename
        )
        let back = this.imageObject = this.add.image(
            200,
            200,
            'back',
        )
        options.setScale(0.6)
        back.setScale(0.2)
        back.setInteractive()
        back.on('pointerdown', () => this.scene.start('menu'));
    }
}


class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    preload() {
        this.load.path = './assets/'; 
    }

    create() {
        this.add.text(game.config.width/2, game.config.height/2, "Freya Amara was a distinguished veteran of war, \ncelebrated for her valor and combat abilities, \nshe was chosen to be the first test subject for an advanced cybernetic project.\n\n\n The EIGEN project")
            .setFontSize(35)
            .setOrigin(0.5)
        .setInteractive()
        .on('pointerdown', () => this.scene.start('Freya1'));
    }
}


class Freya1 extends AdventureScene {
    constructor() {
        super('Freya1')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
    }

    onEnter() {
        this.load.image('freya');
        this.load.image('violet');
        //.setInteractive()
        //.on('pointerdown', () => this.scene.start('menu'));
    }
}

class Freya2 extends AdventureScene {
    constructor() {
        super('Freya2')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
    }

    onEnter() {
        this.load.image('freya');
        this.load.image('violet');
        //.setInteractive()
        //.on('pointerdown', () => this.scene.start('menu'));
    }
}

class Violet1 extends AdventureScene {
    constructor() {
        super('violet1')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('violet', 'Violet.png');
    }

    onEnter() {
        this.load.image('freya');
        this.load.image('violet');
    }
}

class Violet2 extends AdventureScene {
    constructor() {
        super('violet2')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('violet', 'Violet.png');
    }

    onEnter() {
        this.load.image('freya');
        this.load.image('violet');
    }
}

class Violet3 extends AdventureScene {
    constructor() {
        super('violet3')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('violet', 'Violet.png');
    }

    onEnter() {
        this.load.image('freya');
        this.load.image('violet');
        
    }
}

class Violet4 extends AdventureScene {
    constructor() {
        super('violet4')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('violet', 'Violet.png');
    }

    onEnter() {
        this.load.image('freya');
        this.load.image('violet');
    }
}

class Bianca1 extends AdventureScene {
    constructor() {
        super('Bianca1')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
    }

    onEnter() {
        this.load.image('freya');
    }
}

class Bianca2 extends AdventureScene {
    constructor() {
        super('Bianca2')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
    }

    onEnter() {
        this.load.image('freya');
    }
}

class Bianca3 extends AdventureScene {
    constructor() {
        super('Bianca3')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
    }

    onEnter() {
        this.load.image('freya');
    }
}

class Bianca4 extends AdventureScene {
    constructor() {
        super('Bianca4')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
    }

    onEnter() {
        this.load.image('freya');
    }
}

class VioletEnding extends AdventureScene {
    constructor() {
        super('violetending')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('violet', 'Violet.png');
    }

    onEnter() {
        this.load.image('freya');
        this.load.image('violet');
    }
}

class BiancaEnding extends AdventureScene {
    constructor() {
        super('biancaending')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
    }

    onEnter() {
        this.load.image('freya');
        this.load.image('bianca');
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
    //scene: [Studio, MainMenu, Credits, Options, Intro, Freya1],
    scene: [Freya1],
});