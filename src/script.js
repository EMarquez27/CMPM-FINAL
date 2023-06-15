class Studio extends Phaser.Scene {
    constructor() {
        super({ key: 'studio' });
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('studio', 'studio.png');
        this.load.audio('bgm', 'bgm.mp3');
        //this.load.spritesheet("gif", "./assets/gif4.png", {frameWidth: 1200, frameHeight: 1080});
        this.load.spritesheet("gif", "./assets/TatStudio.gif", { frameWidth: 1200, frameHeight: 1080 });
        //this.load.audio('Boom', 'boom.mp3');
    }

    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        let sound = this.sound.add('bgm', { loop: true });
        sound.setVolume(0.25);
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
            this.cameras.main.fadeOut(2000, 0, 0, 0);
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

class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'menu' });
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('start', 'Start2png.png');
        this.load.image('options', 'Options2.png');
        this.load.image('title', 'Title.png');
        this.load.image('credits', 'credit.png');
        this.load.image('glitch', 'glitch.png');

    }

    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);

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

class Options extends Phaser.Scene {
    constructor() {
        super({ key: 'options' });
    }

    intialize() {
        //This variable will hold the sound value.
        this.registry.set('options', { Sound: 100 })
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('back', 'back.png');
        this.load.image('options', 'Options.png');
        this.load.image('menuopt', 'menu.png')

    }

    create() {

        this.musicToggle = this.add.text(game.config.width/2, game.config.height/2.1, "Toggle sound 🔈")
        .setOrigin(0.5)
        .setStyle({ fontSize: 50 })
        .setInteractive({useHandCursor: true})
        .on('pointerover', () => this.musicToggle.setFontSize(55))
            .on('pointerout', () => this.musicToggle.setFontSize(50))
            .on('pointerdown', () => {
                if (game.sound.mute) {
                    game.sound.mute = false
                    this.musicToggle.setText(" Mute 🔈")
                } else {
                    game.sound.mute = true
                    this.musicToggle.setText(" Mute 🔇")
                }
            });
            
            if (game.sound.mute) {
                this.musicToggle.setText(" Mute 🔇")
            }

        if (game.sound.mute) {
            this.musicToggle.setText(" Mute 🔇")

        
        }

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

class Credits extends Phaser.Scene {
    constructor() {
        super({ key: 'credits' });
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('back', 'back.png');
        this.load.image('options', 'Options.png');
        this.load.image('credit', 'credits.png')

    }

    create() {
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
        this.add.text(game.config.width / 2, game.config.height / 2, " A distinguished veteran of war, \ncelebrated for her valor and combat abilities, \nshe was chosen to be the first test subject for an advanced cybernetic project.\n\n\n The EIGEN project")
            .setFontSize(35)
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerdown', () => this.scene.start('intro2'));
    }
}

class Intro2 extends Phaser.Scene {
    constructor() {
        super('intro2')
    }

    preload() {
        this.load.path = './assets/';
    }

    create() {
        this.add.text(game.config.width / 2, game.config.height / 2, " Our main character wakes up in a scrapyard.\n Surrounded by cyborg parts and other pieces of metal, she wonders how she ended up there.")
            .setFontSize(35)
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerdown', () => this.scene.start('Freya1'));
    }
}


class Freya1 extends Phaser.Scene {
    constructor() {
        super('Freya1')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('violet', 'Violet.png');
        this.load.image('scrapyard', 'scrapyard.jpg');
    }

    create() {
        let background = this.scrapyard = this.add.image(810, 500, 'scrapyard');
        background.setScale(2.5);
        
        //let freya = this.add.image(300, 600, "freya");
        //freya.setScale(0.3)

        let text1 = this.add.text(550,500, "???\n\nUghhh, what the hell is going on.  Where am I again?  \nAlso who am I again?  \nBest check the old wallet I guess and \nI don’t even have that fantastic. ", {fontSize: 40})
            .setInteractive()
            .on('pointerdown', () => {
                text1.setVisible(false);
                let text2 = this.add.text(550,500, "???\n\nAlright, let's look around. \nMaybe I can find something that could tell me who I am.\nWow, this place is a piece of shit, is this where I was living?\nIsn’t this a literal scrapyard?\nNo wonder I was trying to forget everything.  ", {fontSize: 40})
                    .setInteractive()
                    .on('pointerdown', () => {
                        text2.setVisible(false);
                        let text3 = this.add.text(550,500, "???\n\nYou know what,\nmaybe I’m better off not knowing anything.\nLet's just get out of here for now.\nThis place is depressing.", {fontSize: 40})
                        .setInteractive()
                        .on('pointerdown', () => {
                            text3.setVisible(false);
                            let text4 = this.add.text(550,500, "*As you walk towards what you assume is the exit, you see a mirror.", {fontSize: 30})
                                .setInteractive()
                                .on('pointerdown', () => {
                                    text4.setVisible(false);
                                    let freya = this.add.image(300, 600, "freya");
                                    freya.setScale(0.3)
                                    let text5 = this.add.text(550,500, "???\n\nGOD DAMN I am looking fine.\nHow did I mess up so bad to get here when I look this good. Hmmm.\nWell considering I have absolutely nothing to my name.\nWait, I don't even have that.\nWell regardless. I think I have an idea on what I need to do here.", {fontSize: 30})
                                        .setInteractive()
                                        .on('pointerdown', () => {
                                            text5.setVisible(false);
                                            let text6 = this.add.text(550,300, "Live in the scrapyard as the junk queen\nand assemble your army of rats and raccoons to take over the world.", {fontSize: 28})
                                                .setInteractive()
                                                .on('pointerdown', () => this.scene.start('End1'));
                                            let text7 = this.add.text(550,500, "Leave and go to town to try and mooch off some baddies.", {fontSize: 30})
                                                .setInteractive()
                                                .on('pointerdown', () => this.scene.start('Freya2'));
                                        });
                                });
                        });
                            
                    });
            });
        //.setInteractive()
        //.on('pointerdown', () => this.scene.start('menu'));
    }
}

class End1 extends Phaser.Scene {
    constructor() {
        super('End1')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');

    }

    create() {
        this.load.image('freya');
        this.load.image('violet');

        //let freya = this.add.image(300, 600, "freya");
        //freya.setScale(0.3)

        let text1 = this.add.text(50,400, "You begin your plans to take over by persuading the rats and raccoons to join by offering assorted cheeses and garbage.\nThey take your offerings and begin to work for you.\nAs you begin creating weaponry and assembling troops over the years an internal power struggle occurs.\nThey are no longer happy with your measly offerings and demand more.\nYou tell them that they are getting greedy and that this is a mistake.\nThey refuse to listen and a civil war begins.\nMany lives are lost and in the final battle you and the leader of the resistance fight one on one to the death.\nUnfortunately you suck at fighting so bad that the leader who is a literal rat just straight up beats you in a gunfight.\nAs you bleed at you wonder where it all went wrong and you begin to feel yourself go into the cold night never to return.", {fontSize: 25})



        //.setInteractive()
        //.on('pointerdown', () => this.scene.start('menu'));
    }
}

class Freya2 extends Phaser.Scene {
    constructor() {
        super('Freya2')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('city', 'city.jpg');

    }

    create() {
        this.load.image('freya');
        this.load.image('violet');
        let background = this.add.image(810,500, 'city');
        background.setScale(2.5);

        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)
        
        let text1 = this.add.text(550,500, "*You walk into town and eventually start looking around.", {fontSize: 40})
            .setInteractive()
            .on('pointerdown', () => {
                text1.setVisible(false);
                let text2 = this.add.text(550,500, "???\n\nScanning for baddies. Hmmmm.\nNo no no no no and BEEP BEEP BEEP!\nWe got a baddie all hands on deck, preparing for battle.\nFor it is time to RIZZ.", {fontSize: 40})
                    .setInteractive()
                    .on('pointerdown', () => {
                        text2.setVisible(false);
                        let text3 = this.add.text(550,500, "*You start to approach the baddie and prepare your best pick up line.", {fontSize: 40})
                        .setInteractive()
                        .on('pointerdown', () => {
                            text3.setVisible(false);
                            let text4 = this.add.text(550,300, "Hey girl, are you an imposter cuz you an angel among us.", {fontSize: 40})
                                .setInteractive()
                                .on('pointerdown', () => this.scene.start('violet1'));
                            let text5 = this.add.text(550,500, "Are you a legend cuz you are out of my league.", {fontSize: 40})
                                .setInteractive()
                                .on('pointerdown', () => this.scene.start('End2'));
                        });
                            
                    });
            });



        //.setInteractive()
        //.on('pointerdown', () => this.scene.start('menu'));
    }
}

class End2 extends Phaser.Scene {
    constructor() {
        super('End2')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');

    }

    create() {
        this.load.image('freya');
        this.load.image('violet');

        //let freya = this.add.image(300, 600, "freya");
        //freya.setScale(0.3)

        let text1 = this.add.text(50,400, "The milisecond after you finished your pick up line the baddie you approached starts convulsing and has a seizure on the floor.\nYou become panicked not knowing what to do.\nYou watch as the lights in her eyes go out and she lies there motionless and dead.\nYou hear sirens approach and police come over to arrest you.\nYou ask what for and they say its for being cringe.\nAlso first degree murder.\nDays later in court you are found guilty and given the death sentence.\nSitting in the electric chair you say biggest regret is ever playing League of Legends for if you did not none of this would have happened.\nAnd then you die.", {fontSize: 25})



        //.setInteractive()
        //.on('pointerdown', () => this.scene.start('menu'));
    }
}

class Violet1 extends Phaser.Scene {
    constructor() {
        super('violet1')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('violet', 'Violet.png');
        this.load.image('junkyard', 'Junkyard.jpg');
    }

    create() {
        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let violet = this.add.image(1600, 600, "violet");
        violet.setScale(0.3)

        let text1 = this.add.text(550,500, "Baddie\n\nWow that line almost didn’t make me want to kill myself.", {fontSize: 40})
            .setInteractive()
            .on('pointerdown', () => {
                text1.setVisible(false);
                let text2 = this.add.text(550,500, "???\n\nSo is that like good?", {fontSize: 40})
                    .setInteractive()
                    .on('pointerdown', () => {
                        text2.setVisible(false);
                        let text3 = this.add.text(550,500, "Baddie\n\nYou know how sad I am to admit that this was in fact the best one I’ve heard so far.", {fontSize: 40})
                        .setInteractive()
                        .on('pointerdown', () => {
                            freya.setScale(0.3)
                            let text4 = this.add.text(550,500, "*Internally-Damn I’m good.", {fontSize: 40})
                                .setInteractive()
                                .on('pointerdown', () => {
                                    text4.setVisible(false);
                                    let text5 = this.add.text(550,500, "Bianca\n\nWell, I’m Bianca, what's your name?", {fontSize: 40})
                                        .setInteractive()
                                        .on('pointerdown', () => {
                                            text5.setVisible(false);
                                            let text6 = this.add.text(550,300, "???\n\n*Internally-Shit I totally forgot I have dementia.\nUhhh it’s uhhhh.", {fontSize: 40})
                                                .setInteractive()
                                                .on('pointerdown', () => {
                                                    text6.setVisible(false);
                                                    let text7 = this.add.text(550,300, "???\n\n*You look around and find an incredibly obvious sign that says Freya.", {fontSize: 40})
                                                        .setInteractive()
                                                        .on('pointerdown', () => {
                                                            text6.setVisible(false);
                                                            let text7 = this.add.text(550,300, "Bianca\n\nDid you just say your name like you aren’t sure.", {fontSize: 40})
                                                            .setInteractive()
                                                            .on('pointerdown', () => {
                                                                text6.setVisible(false);
                                                                let text7 = this.add.text(550,300, "Freya\n\nNo.", {fontSize: 40})
                                                            });
                                                        });
                                                });
                                        });
                                });
                        });
                            
                    });
            });
    }
}

class Violet2 extends Phaser.Scene {
    constructor() {
        super('violet2')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('violet', 'Violet.png');
    }

    create() {
        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let violet = this.add.image(1600, 600, "violet");
        violet.setScale(0.3)

        this.add.text(810,500, " aslgjgl");
    }
}

class Violet3 extends Phaser.Scene {
    constructor() {
        super('violet3')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('violet', 'Violet.png');
    }

    create() {
        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let violet = this.add.image(1600, 600, "violet");
        violet.setScale(0.3)

        this.add.text(810,500, " aslgjgl");
    }
}

class Violet4 extends Phaser.Scene {
    constructor() {
        super('violet4')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('violet', 'Violet.png');
    }

    create() {
        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

       let violet = this.add.image(1600, 600, "violet");
        violet.setScale(0.3)

        this.add.text(810,500, " aslgjgl");
    }
}

class Bianca1 extends Phaser.Scene {
    constructor() {
        super('Bianca1')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
    }

    create() {
        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let bianca = this.add.image(1650, 600, "bianca");
        bianca.setScale(0.3)

        this.add.text(810,500, " aslgjgl");
    }
}

class Bianca2 extends Phaser.Scene {
    constructor() {
        super('Bianca2')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
    }

    create() {
        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let bianca = this.add.image(1650, 600, "bianca");
        bianca.setScale(0.3)

        this.add.text(810,500, " aslgjgl");
    }
}

class Bianca3 extends Phaser.Scene {
    constructor() {
        super('Bianca3')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
    }

    create() {
        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let bianca = this.add.image(1650, 600, "bianca");
        bianca.setScale(0.3)

        this.add.text(810,500, " aslgjgl");

    }
}

class Bianca4 extends Phaser.Scene {
    constructor() {
        super('Bianca4')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
    }

    create() {
        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let bianca = this.add.image(1650, 600, "bianca");
        bianca.setScale(0.3)

        this.add.text(810,500, " aslgjgl");
    }
}

class VioletEnding extends Phaser.Scene {
    constructor() {
        super('violetending')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('violet', 'Violet.png');
    }

    create() {
        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let violet = this.add.image(1600, 600, "violet");
        violet.setScale(0.3) 

        this.add.text(810,500, " aslgjgl");
    }
}

class BiancaEnding extends Phaser.Scene {
    constructor() {
        super('biancaending')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
    }

    create() {
        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let bianca = this.add.image(1650, 600, "bianca");
        bianca.setScale(0.3)

        this.add.text(810,500, " aslgjgl");
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
    //scene: [Studio, MainMenu, Options, Credits, Intro, Intro2, Freya1, Freya2, Violet1, Violet2, Violet3, Violet4, Bianca1, Bianca2, Bianca3, Biana4, VioletEnding, BiancaEnding]
    scene: [Freya1, End1, Freya2],
});