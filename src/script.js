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

        //this.anim = this.add.sprite(960, 530, "gif");
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


class One extends Phaser.Scene {
    constructor() {
        super('one')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
        this.load.image('scrapyard', 'scrapyard.jpg');
        this.load.audio('lofi', 'BGMLOFI.mp3');
    }

    create() {
        
        //let bgm = this.add.audio('lofi', { loop: true });
        //music = new Phaser.Sound('lofi',1,true);
        //music.play();

        let background = this.scrapyard = this.add.image(810, 500, 'scrapyard');
        background.setScale(2.5);
        
        //let freya = this.add.image(300, 600, "freya");
        //freya.setScale(0.3)

        let text1 = this.add.text(550,500, "???\n\nUghhh, what the hell is going on.  Where am I again?  \nAlso who am I again?  \nBest check the old wallet I guess and \nI don’t even have that fantastic. ", {fontSize: 30})
            .setInteractive()
            .on('pointerdown', () => {
                text1.setVisible(false);
                let text2 = this.add.text(550,500, "???\n\nAlright, let's look around. \nMaybe I can find something that could tell me who I am.\nWow, this place is a piece of shit, is this where I was living?\nIsn’t this a literal scrapyard?\nNo wonder I was trying to forget everything.  ", {fontSize: 30})
                    .setInteractive()
                    .on('pointerdown', () => {
                        text2.setVisible(false);
                        let text3 = this.add.text(550,500, "???\n\nYou know what,\nmaybe I’m better off not knowing anything.\nLet's just get out of here for now.\nThis place is depressing.", {fontSize: 30})
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
                                                .on('pointerdown', () => this.scene.start('Two'));
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

        let text1 = this.add.text(50,300, "You begin your plans to take over by persuading the rats and raccoons to join by offering assorted cheeses and garbage.\nThey take your offerings and begin to work for you.\nAs you begin creating weaponry and assembling troops over the years an internal power struggle occurs.\nThey are no longer happy with your measly offerings and demand more.\nYou tell them that they are getting greedy and that this is a mistake.\nThey refuse to listen and a civil war begins.\nMany lives are lost and in the final battle you and the leader of the resistance fight one on one to the death.\nUnfortunately you suck at fighting so bad that the leader who is a literal rat just straight up beats you in a gunfight.\nAs you bleed at you wonder where it all went wrong and you begin to feel yourself go into the cold night never to return.", {fontSize: 25})



        //.setInteractive()
        //.on('pointerdown', () => this.scene.start('menu'));
    }
}

class Two extends Phaser.Scene {
    constructor() {
        super('two')
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
        
        let text1 = this.add.text(550,500, "*You walk into town and eventually start looking around.", {fontSize: 30})
            .setInteractive()
            .on('pointerdown', () => {
                text1.setVisible(false);
                let text2 = this.add.text(550,500, "???\n\nScanning for baddies. Hmmmm.\nNo no no no no and BEEP BEEP BEEP!\nWe got a baddie all hands on deck, preparing for battle.\nFor it is time to RIZZ.", {fontSize: 30})
                    .setInteractive()
                    .on('pointerdown', () => {
                        text2.setVisible(false);
                        let text3 = this.add.text(550,500, "*You start to approach the baddie\nand prepare your best pick up line.", {fontSize: 30})
                        .setInteractive()
                        .on('pointerdown', () => {
                            text3.setVisible(false);
                            let text4 = this.add.text(550,300, "Hey girl, are you an imposter cuz you an angel among us.", {fontSize: 30})
                                .setInteractive()
                                .on('pointerdown', () => this.scene.start('three'));
                            let text5 = this.add.text(550,500, "Are you a legend cuz you are out of my league.", {fontSize: 30})
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

        let text1 = this.add.text(50,300, "The milisecond after you finished your pick up line the baddie you approached starts convulsing and has a seizure on the floor.\nYou become panicked not knowing what to do.\nYou watch as the lights in her eyes go out and she lies there motionless and dead.\nYou hear sirens approach and police come over to arrest you.\nYou ask what for and they say its for being cringe.\nAlso first degree murder.\nDays later in court you are found guilty and given the death sentence.\nSitting in the electric chair you say biggest regret is ever playing League of Legends for if you did not none of this would have happened.\nAnd then you die.", {fontSize: 25})



        //.setInteractive()
        //.on('pointerdown', () => this.scene.start('menu'));
    }
}

class Three extends Phaser.Scene {
    constructor() {
        super('three')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
        this.load.image('junkyard', 'Junkyard.jpg');
        this.load.image('city', 'city.jpg');
    }

    create() {
        let background = this.add.image(810,500, 'city');
        background.setScale(2.5);

        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let bianca = this.add.image(1600, 600, "bianca");
        bianca.setScale(0.3)

        let text1 = this.add.text(550,500, "Baddie\n\nWow that line almost didn’t make me want to kill myself.", {fontSize: 30})
            .setInteractive()
            .on('pointerdown', () => {
                text1.setVisible(false);
                let text2 = this.add.text(550,500, "???\n\nSo is that like good?", {fontSize: 30})
                    .setInteractive()
                    .on('pointerdown', () => {
                        text2.setVisible(false);
                        let text3 = this.add.text(550,500, "Baddie\n\nYou know how sad I am to admit\nthat this was in fact the best one I’ve heard so far.", {fontSize: 30})
                        .setInteractive()
                        .on('pointerdown', () => {
                            text3.setVisible(false);
                            let text4 = this.add.text(550,500, "???\n\n*Internally-Damn I’m good.", {fontSize: 30})
                                .setInteractive()
                                .on('pointerdown', () => {
                                    text4.setVisible(false);
                                    let text5 = this.add.text(550,500, "Bianca\n\nWell, I’m Bianca, what's your name?", {fontSize: 30})
                                        .setInteractive()
                                        .on('pointerdown', () => {
                                            text5.setVisible(false);
                                            let text6 = this.add.text(550,500, "???\n\n*Internally-Shit I totally forgot I have dementia\nUhhh it’s uhhhh.", {fontSize: 30})
                                                .setInteractive()
                                                .on('pointerdown', () => {
                                                    text6.setVisible(false);
                                                    let text7 = this.add.text(550,500, "???\n\n*You look around and find an incredibly obvious sign that says Freya.", {fontSize: 30})
                                                        .setInteractive()
                                                        .on('pointerdown', () => {
                                                            text7.setVisible(false);
                                                            let text8 = this.add.text(550,500, "Bianca\n\nDid you just say your name like you aren’t sure.", {fontSize: 30})
                                                            .setInteractive()
                                                            .on('pointerdown', () => {
                                                                text8.setVisible(false);
                                                                let text9 = this.add.text(550,500, "Freya\n\nNo.", {fontSize: 30})
                                                                    .setInteractive()
                                                                    .on('pointerdown', () => {
                                                                        text9.setVisible(false);
                                                                        let text10 = this.add.text(550,500, "Bianca\n\nOk well I watched you look at that sign behind me\nthat literally says Freya on it.", {fontSize: 30})
                                                                            .setInteractive()
                                                                            .on('pointerdown', () => {
                                                                                text10.setVisible(false);
                                                                                let text11 = this.add.text(550,500, "Freya\n\nOk, say maybe I forgot my name so what.", {fontSize: 30})
                                                                                    .setInteractive()
                                                                                    .on('pointerdown', () => {
                                                                                        text11.setVisible(false);
                                                                                        let text12 = this.add.text(550,500, "Bianca\n\nWell now I am concerned.", {fontSize: 30})
                                                                                            .setInteractive()
                                                                                            .on('pointerdown', () => {
                                                                                                text12.setVisible(false);
                                                                                                let text13 = this.add.text(550,500, "Freya\n\nWell can you really blame a fellow for\nforgetting their entire life and name?", {fontSize: 30})
                                                                                                    .setInteractive()
                                                                                                    .on('pointerdown', () => {
                                                                                                        text13.setVisible(false);
                                                                                                        let text14 = this.add.text(550,500, "Bianca\n\nI really don’t know the correct response to that.", {fontSize: 30})
                                                                                                            .setInteractive()
                                                                                                            .on('pointerdown', () => {
                                                                                                            text14.setVisible(false);
                                                                                                            let text15 = this.add.text(550,500, "Freya\n\nWell neither do I so I guess we are in the same boat.", {fontSize: 30})
                                                                                                                .setInteractive()
                                                                                                                .on('pointerdown', () => {
                                                                                                                text15.setVisible(false);
                                                                                                                let text16 = this.add.text(550,500, "Bianca\n\nYou are interesting in all the wrong ways.", {fontSize: 30})
                                                                                                                    .setInteractive()
                                                                                                                    .on('pointerdown', () => {
                                                                                                                    text16.setVisible(false);
                                                                                                                    let text17 = this.add.text(550,500, "Freya\n\nAt this point I’ll take it.", {fontSize: 30})
                                                                                                                        .setInteractive()
                                                                                                                        .on('pointerdown', () => {
                                                                                                                        text17.setVisible(false);
                                                                                                                        let text18 = this.add.text(550,500, "Bianca\n\nSo what exactly is your plan here?", {fontSize: 30})
                                                                                                                            .setInteractive()
                                                                                                                            .on('pointerdown', () => {
                                                                                                                            text18.setVisible(false);
                                                                                                                            let text19 = this.add.text(550,300, "I am going to steal the moon.", {fontSize: 30})
                                                                                                                                .setInteractive()
                                                                                                                                .on('pointerdown', () => this.scene.start('End3'));
                                                                                                                            let text20 = this.add.text(550,500, "I am going to steal your wallet.", {fontSize: 30})
                                                                                                                            .setInteractive()
                                                                                                                            .on('pointerdown', () => this.scene.start('four'));                                                                                                                                                                          
                                                                                                                            });                                                                                                                                                                                 
                                                                                                                        });                                                                                                                                                                                   
                                                                                                                    });                                                                                                                                                                                        
                                                                                                                });                                                                                                                                                                                           
                                                                                                            });                                                                                                                                                                                               
                                                                                                     });                                                                                                
                                                                                                });
                                                                                     });
                                                                                });
                                                                        });
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

class End3 extends Phaser.Scene {
    constructor() {
        super('End3')
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

        let text1 = this.add.text(50,300, "You begin to morph into the shape of a tall skinny man with a pointy nose and a funny accent.\nChild sized yellow tic tacs appear and begin to construct a rocket ship.\nYou get on the ship and start to fly only to realize that you didn’t\nfigure out how to land and end up crashing into the moon and dying.\nThe moon begins to shatter and parts of it fall into the atmosphere killing millions.\nMaking you truly one of the greatest villains of all time.", {fontSize: 25})



        //.setInteractive()
        //.on('pointerdown', () => this.scene.start('menu'));
    }
}

class Four extends Phaser.Scene {
    constructor() {
        super('four')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
        this.load.image('city', 'city.jpg');
    }

    create() {
        let background = this.add.image(810,500, 'city');
        background.setScale(2.5);

        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let bianca = this.add.image(1600, 600, "bianca");
        bianca.setScale(0.3)

        let text1 = this.add.text(550,500, "Bianca\n\nSo why would you tell me that.", {fontSize: 30})
            .setInteractive()
            .on('pointerdown', () => {
                text1.setVisible(false);
                let text2 = this.add.text(550,500, "Freya\n\nI didn’t think about that part.", {fontSize: 30})
                    .setInteractive()
                    .on('pointerdown', () => {
                        text2.setVisible(false);
                        let text3 = this.add.text(550,500, "Bianca\n\nDo you even think at all?", {fontSize: 30})
                        .setInteractive()
                        .on('pointerdown', () => {
                            text3.setVisible(false);
                            let text4 = this.add.text(550,500, "Freya\n\nThat’s rude.\nI’ll have you know I thought you were a baddie\nand decided to hit on you.", {fontSize: 30})
                                .setInteractive()
                                .on('pointerdown', () => {
                                    text4.setVisible(false);
                                    let text5 = this.add.text(550,500, "Bianca\n\nDid you think anything beyond that.", {fontSize: 30})
                                        .setInteractive()
                                        .on('pointerdown', () => {
                                            text5.setVisible(false);
                                            let text6 = this.add.text(550,500, "Freya\n\nTouche.", {fontSize: 30})
                                                .setInteractive()
                                                .on('pointerdown', () => {
                                                    text6.setVisible(false);
                                                    let text7 = this.add.text(550,500, "Bianca\n\nAt least you are entertaining.", {fontSize: 30})
                                                        .setInteractive()
                                                        .on('pointerdown', () => {
                                                            text7.setVisible(false);
                                                            let text8 = this.add.text(550,500, "Freya\n\nI knew it I got rizz.", {fontSize: 30})
                                                            .setInteractive()
                                                            .on('pointerdown', () => {
                                                                text8.setVisible(false);
                                                                let text9 = this.add.text(550,500, "Bianca\n\nI definitely did not insinuate that", {fontSize: 30})
                                                                    .setInteractive()
                                                                    .on('pointerdown', () => {
                                                                        text9.setVisible(false);
                                                                        let text10 = this.add.text(550,500, "Freya\n\nOh but I know.  I know", {fontSize: 30})
                                                                            .setInteractive()
                                                                            .on('pointerdown', () => {
                                                                                text10.setVisible(false);
                                                                                let text11 = this.add.text(550,500, "Bianca\n\nI’m not sure how you are still alive.", {fontSize: 30})
                                                                                    .setInteractive()
                                                                                    .on('pointerdown', () => {
                                                                                        text11.setVisible(false);
                                                                                        let text12 = this.add.text(550,500, "Freya\n\nNeither do I, but here I am.", {fontSize: 30})
                                                                                            .setInteractive()
                                                                                            .on('pointerdown', () => {
                                                                                                text12.setVisible(false);
                                                                                                let text13 = this.add.text(550,500, "Bianca\n\nSo do you wanna do something?", {fontSize: 30})
                                                                                                    .setInteractive()
                                                                                                    .on('pointerdown', () => {
                                                                                                        text13.setVisible(false);
                                                                                                        let text14 = this.add.text(550,300, "You", {fontSize: 30})
                                                                                                            .setInteractive()
                                                                                                            .on('pointerdown', () => this.scene.start('End4'));
                                                                                                        let text15 = this.add.text(550,500, "Wanna get a bite to eat?", {fontSize: 30})
                                                                                                            .setInteractive()
                                                                                                            .on('pointerdown', () => {
                                                                                                                text14.setVisible(false);
                                                                                                                text15.setVisible(false);
                                                                                                                let text16 = this.add.text(550,500, "Bianca\n\nThat was quite possibly the most normal thing I’ve heard you say so far.", {fontSize: 30})
                                                                                                                    .setInteractive()
                                                                                                                    .on('pointerdown', () => {
                                                                                                                        text16.setVisible(false);
                                                                                                                        let text17 = this.add.text(550,500, "Freya\n\nSo is that a yes or what.", {fontSize: 30})
                                                                                                                            .setInteractive()
                                                                                                                            .on('pointerdown', () => {
                                                                                                                                text17.setVisible(false);
                                                                                                                                let text18 = this.add.text(550,500, "Bianca\n\nEhh sure, eating alone all the time gets boring.  You seem like you’d be entertaining enough.", {fontSize: 30})
                                                                                                                                .setInteractive()
                                                                                                                                .on('pointerdown', () => {
                                                                                                                                    text18.setVisible(false);
                                                                                                                                    let text19 = this.add.text(550,500, "Freya\n\n*Internally-Another W Rizz for Freya.  LETS FUCKING GOOOOOOOOOOOOOOOO.", {fontSize: 30})
                                                                                                                                    .setInteractive()
                                                                                                                                    .on('pointerdown', () => this.scene.start('five'));
                                                                                                                                }); 
                                                                                                                            }); 
                                                                                                                    });                                                                                                                                                                                   
                                                                                                             });                                                                                                                                                                                           
                                                                                                     });                                                                                                
                                                                                                });
                                                                                     });
                                                                                });
                                                                        });
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

class End4 extends Phaser.Scene {
    constructor() {
        super('End4')
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

        let text1 = this.add.text(50,300, "That was a test.\nYou failed.\nStop being so horny.\nThis is not even related to anything in game you just lost because you were horny.\nDoes this fourth wall break need further explanation?\nBecause in my opinion it doesn't.", {fontSize: 25})



        //.setInteractive()
        //.on('pointerdown', () => this.scene.start('menu'));
    }
}

class Five extends Phaser.Scene {
    constructor() {
        super('five')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
        this.load.image('cafe', 'cafe.jpg');
    }

    create() {

        let background = this.add.image(900,500, 'cafe');
        background.setScale(1.8);

        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let violet = this.add.image(1600, 600, "bianca");
        violet.setScale(0.3)
        


        let text1 = this.add.text(550,500, "Bianca\n\nSo what are you thinking of getting?", {fontSize: 30})
            .setInteractive()
            .on('pointerdown', () => {
                text1.setVisible(false);
                let text2 = this.add.text(550,500, "Freya\n\nWell probably something food related.", {fontSize: 30})
                    .setInteractive()
                    .on('pointerdown', () => {
                        text2.setVisible(false);
                        let text3 = this.add.text(550,500, "Bianca\n\nThat literally tells me nothing.", {fontSize: 30})
                        .setInteractive()
                        .on('pointerdown', () => {
                            text3.setVisible(false);
                            let text4 = this.add.text(550,300, "Two number 9’s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda.", {fontSize: 30})
                                .setInteractive()
                                .on('pointerdown', () => this.scene.start('end5'));
                            let text5 = this.add.text(550,500, "A water cup.", {fontSize: 30})
                                .setInteractive()
                                .on('pointerdown', () => this.scene.start('six'));
                        });
                            
                    });
            });
    }
}

class End5 extends Phaser.Scene {
    constructor() {
        super('End5')
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

        let text1 = this.add.text(50,300, "Bianca\n\nYou know this is a cafe not McDonalds.\n\nFreya\n\nYou don’t understand I need this.  Why are they repressing food from the public!?\n\nAs you question the establishment, mafia men come and approach you in a menacing way.\nThe leader of the group asks where their burgers are and you say that you don’t have it yet,\nbut you know you're good for it and beg for more time.\nThey tell you not this time.\nThey then proceed to murder you and throw you in a\n nearby lake after tying cinder blocks to your corpse.", {fontSize: 25})



        //.setInteractive()
        //.on('pointerdown', () => this.scene.start('menu'));
    }
}

class Six extends Phaser.Scene {
    constructor() {
        super('six')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
        this.load.image('cafe', 'cafe.jpg');
    }

    create() {
        let background = this.add.image(900,500, 'cafe');
        background.setScale(1.8);
        
        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let bianca = this.add.image(1600, 600, "bianca");
        bianca.setScale(0.3)

        let text1 = this.add.text(550,500, "Bianca\n\nWhy did you ask to come to a cafe for a water cup?", {fontSize: 30})
            .setInteractive()
            .on('pointerdown', () => {
                text1.setVisible(false);
                let text2 = this.add.text(550,500, "Freya\n\nI wanted food, but I forgot that I don’t have any money\nso I was planning on eating whatever you didn’t eat.", {fontSize: 30})
                    .setInteractive()
                    .on('pointerdown', () => {
                        text2.setVisible(false);
                        let text3 = this.add.text(550,500, "Bianca\n\nI would say I’m disappointed in you,\nbut honestly that was the smartest thing\nyou’ve done this entire evening\nso I’m gonna let it slide.", {fontSize: 30})
                        .setInteractive()
                        .on('pointerdown', () => {
                            text3.setVisible(false);
                            let text4 = this.add.text(550,500, "Freya\n\nNice.\nSo that means you’re gonna let me eat your scraps right?", {fontSize: 30})
                                .setInteractive()
                                .on('pointerdown', () => {
                                    text4.setVisible(false);
                                    let text5 = this.add.text(550,500, "Bianca\n\n…", {fontSize: 30})
                                        .setInteractive()
                                        .on('pointerdown', () => {
                                            text5.setVisible(false);
                                            let text6 = this.add.text(550,500, "Freya\n\nI’m not hearing a no.", {fontSize: 30})
                                                .setInteractive()
                                                .on('pointerdown', () => {
                                                    text6.setVisible(false);
                                                    let text7 = this.add.text(550,500, "Bianca\n\n…", {fontSize: 30})
                                                        .setInteractive()
                                                        .on('pointerdown', () => {
                                                            text7.setVisible(false);
                                                            let text8 = this.add.text(550,500, "Freya\n\nImma just take that as a yes,\norder something with fries\nwould ya that sounds great right about now.", {fontSize: 30})
                                                            .setInteractive()
                                                            .on('pointerdown', () => {
                                                                text8.setVisible(false);
                                                                let text9 = this.add.text(550,500, "*Bianca slowly eats her meal as you steal her fries.\nShe just gives you the death stare the entire time\nand says absolutely nothing.\nAt least she was nice enough to get fries though.", {fontSize: 30})
                                                                    .setInteractive()
                                                                    .on('pointerdown', () => {
                                                                        text9.setVisible(false);
                                                                        let text10 = this.add.text(550,500, "Freya\n\nSo now what?\nCan I crash at your place or something?\nI think I’m about to hit that food coma\nand I would prefer not to fall asleep on a public bench.", {fontSize: 30})
                                                                            .setInteractive()
                                                                            .on('pointerdown', () => {
                                                                                text10.setVisible(false);
                                                                                let text11 = this.add.text(550,500, "Bianca\n\nYou have no idea how badly I want to say no,\nbut somehow your life seems so depressing that\nI feel like I won’t be able to sleep at night if I say no.", {fontSize: 30})
                                                                                    .setInteractive()
                                                                                    .on('pointerdown', () => {
                                                                                        text11.setVisible(false);
                                                                                        let text12 = this.add.text(550,500, "Freya\n\n I see this as a win.", {fontSize: 30})
                                                                                            .setInteractive()
                                                                                            .on('pointerdown', () => {
                                                                                                text12.setVisible(false);
                                                                                                let text13 = this.add.text(550,500, "Bianca\n\nYou really shouldn’t.", {fontSize: 30})
                                                                                                    .setInteractive()
                                                                                                    .on('pointerdown', () => {
                                                                                                        text13.setVisible(false);
                                                                                                        let text14 = this.add.text(550,500, "Freya\n\nHey, I’ll take what I can get at this point.\nBetter than sleeping in a scrapyard.", {fontSize: 30})
                                                                                                            .setInteractive()
                                                                                                            .on('pointerdown', () => {
                                                                                                            text14.setVisible(false);
                                                                                                            let text15 = this.add.text(550,500, "Bianca\n\nWait, do you live in a scrapyard?", {fontSize: 30})
                                                                                                                .setInteractive()
                                                                                                                .on('pointerdown', () => {
                                                                                                                text15.setVisible(false);
                                                                                                                let text16 = this.add.text(550,500, "Freya\n\n*sweating* Nooooooooooo?", {fontSize: 30})
                                                                                                                    .setInteractive()
                                                                                                                    .on('pointerdown', () => {
                                                                                                                    text16.setVisible(false);
                                                                                                                    let text17 = this.add.text(550,500, "Bianca\n\n*Sighs* Alright come on.\n*Whispers*\nFeels like I’m picking up some stray cat or something at this point.", {fontSize: 30})
                                                                                                                        .setInteractive()
                                                                                                                        .on('pointerdown', () => this.scene.start('seven'));                                                                                                                                                                                    
                                                                                                                    });                                                                                                                                                                                        
                                                                                                                });                                                                                                                                                                                           
                                                                                                            });                                                                                                                                                                                               
                                                                                                     });                                                                                                
                                                                                                });
                                                                                     });
                                                                                });
                                                                        });
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



class Seven extends Phaser.Scene {
    constructor() {
        super('seven')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('freya', 'Freya.png');
        this.load.image('bianca', 'Bianca.png');
        this.load.image('apt', 'apartment.jpg');
    }

    create() {
        let background = this.add.image(900,500, 'apt');
        background.setScale(1.8);

        let freya = this.add.image(300, 600, "freya");
        freya.setScale(0.3)

        let bianca = this.add.image(1650, 600, "bianca");
        bianca.setScale(0.3)

        let text1 = this.add.text(550,500, "Bianca\n\nSo what are you thinking of getting?", {fontSize: 30})
            .setInteractive()
            .on('pointerdown', () => {
                text1.setVisible(false);
                let text2 = this.add.text(550,500, "Freya\n\nWell probably something food related.", {fontSize: 30})
                    .setInteractive()
                    .on('pointerdown', () => {
                        text2.setVisible(false);
                        let text3 = this.add.text(550,500, "Bianca\n\nThat literally tells me nothing.", {fontSize: 30})
                        .setInteractive()
                        .on('pointerdown', () => {
                            text3.setVisible(false);
                            let text4 = this.add.text(550,300, "Two number 9’s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda.", {fontSize: 30})
                                .setInteractive()
                                .on('pointerdown', () => this.scene.start('end5'));
                            let text5 = this.add.text(550,500, "A water cup.", {fontSize: 30})
                                .setInteractive()
                                .on('pointerdown', () => this.scene.start('six'));
                        });
                            
                    });
            });
    }
}

class Eight extends Phaser.Scene {
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

class Nine extends Phaser.Scene {
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


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1900,
        height: 1000
    },

    type: Phaser.AUTO,
    //scene: [Studio, MainMenu, Options, Credits, Intro, Intro2, Freya1, Freya2, Violet1, Violet2, Violet3, Violet4, Bianca1, Bianca2, Bianca3, Biana4, VioletEnding, BiancaEnding]
    //scene: [Studio, MainMenu, Options, Credits, Intro, Intro2, One, Two, End1, End2],
    //scene: [One, Two, Three, Four, End1, End2 ]
    scene: [Six]
});