
class SceneEntry extends Phaser.Scene{
    constructor ()
    {
        super()
        Phaser.Scene.call(this, { key: 'sceneA' });
        
       
    }
    
preload(){
    this.load.image("bg_scene1", "assets/bg_scr1.png");
    this.load.spritesheet('Trenv2', 'assets/Trenv2.png', { frameWidth: 640, frameHeight: 500, endFrame: 3 });
    this.load.spritesheet('Gema1v2', 'assets/Gema1v2.png', { frameWidth: 128, frameHeight: 164, endFrame: 3 });
    this.load.spritesheet('Gema2', 'assets/Gema2.png', { frameWidth: 128, frameHeight: 164, endFrame: 4 });
    this.load.spritesheet('button_jugar', 'assets/button_jugarv2.png', { frameWidth: 200, frameHeight: 200, endFrame: 1 });
}
create ()
{
    this.add.image(0,0, "bg_scene1").setOrigin(0).setScale(1.33);
    this.add.sprite(280, 300, 'Trenv2', 2).setScale(0.8)
    var configGema1v2 = {
        key: 'gemaAnimation',
        frames: this.anims.generateFrameNumbers('Gema1v2', { start: 0, end: 3, first: 0 }),
        frameRate: 12,
        repeat: -1
    };
    var configGema2 = {
        key: 'gema2Animation',
        frames: this.anims.generateFrameNumbers('Gema2', { start: 0, end: 4, first: 0 }),
        frameRate: 12,
        repeat: -1
    };
    var configbutton_jugar = {
        key: 'buttonAnimation',
        frames: this.anims.generateFrameNumbers('button_jugar', { start: 0, end: 1, first: 0 }),
        frameRate: 12,
        repeat: -1
    };
  

    this.anims.create(configGema1v2);
    this.anims.create(configGema2);
    this.anims.create(configbutton_jugar);
    

    this.add.sprite(580, 100, 'Gema1v2').setScale(0.6).play('gemaAnimation');
    this.add.sprite(480, 100, 'Gema2').setScale(0.6).play('gema2Animation');
    this.add.sprite(380, 100, 'Gema1v2').setScale(0.6).play('gemaAnimation');
    this.add.sprite(280, 100, 'Gema2').setScale(0.6).play('gema2Animation');
    this.add.sprite(180, 100, 'Gema1v2').setScale(0.6).play('gemaAnimation');
    var butt=this.add.sprite(380, 500, 'button_jugar').setInteractive();
    // When hovering
butt.on('pointerover', function(e) {
  if(e){
      butt.setActive(true);
      butt.play('buttonAnimation',true, 3);
      
  }
}, this);
  butt.on('pointerout', function(e) {
    if(e){
        butt.setActive(false);
    }
}, this);

  
butt.on('pointerdown', function(){
    
    this.scene.start('sceneB');
}, this);
   
   
 
    /*
var button=this.add.dom(450, 350, 'button', 'background-color: #f469a9; width: 60px; height: 20px; color: #fdfdfd', 'start');
button.addListener('click');
button.on('click', function(){
    
    this.scene.start('sceneB');
}, this);*/

}
imprmir(){

    
}

}

class SceneMenulevel extends Phaser.Scene{
  
    constructor ()
    {
        
        
        super()
         
        Phaser.Scene.call(this, { key: 'sceneB' });
    }
    
    preload(){
      
        this.load.css('menu', '../css/style.css');
        this.load.image('bckgscrn2', 'assets/Screen2v2-1.png (1).png');
        this.load.spritesheet('doors', 'assets/doorv7.png', { frameWidth: 128, frameHeight: 128, endFrame: 10 });
        this.load.spritesheet('lucecita', 'assets/Luzv2.png', { frameWidth: 128, frameHeight: 128, endFrame: 3 });
     

    }
    create(){
      this.add.image(400,300, 'bckgscrn2');
/*
        this.add.dom(380, 280, 'div').setClassName('menu-selection-level___background');
        this.add.dom(430, 90, 'div', 'color: #000; font: 20px Arial','Level Select').setClassName('menu-selection-level___title');
        this.add.dom(300, 150, 'div').setClassName('center');
        this.add.dom(280, 200, 'div').setClassName('menu-selection-level___item ');
        this.add.dom(450, 200, 'div').setClassName('menu-selection-level___item ');
        let item1= this.add.dom(100, 200, 'div').setClassName('menu-selection-level___item');
        item1.addListener('click');
        
  
        item1.on('click', function(){
           
            this.scene.start('sceneC');
          
            
        }, this);*/
           
        var configdoor = {
            key: 'doorAnimation',
            frames: this.anims.generateFrameNumbers('doors', { start: 0, end: 10, first: 0 }),
            frameRate: 12,
            repeat: 0,
            hideOnComplete: true
        };
        var configluz = {
            key: 'luzAnimation',
            frames: this.anims.generateFrameNumbers('lucecita', { start: 0, end: 3, first: 0 }),
            frameRate: 8,
            repeat: -1,
            hideOnComplete: true
        };
        this.anims.create(configluz);
        this.add.sprite(185, 219, 'lucecita').setScale(0.2).play('luzAnimation');
        this.add.sprite(395, 219, 'lucecita').setScale(0.2).setFrame(1);
        this.add.sprite(575, 219, 'lucecita').setScale(0.2).setFrame(1);
        this.add.sprite(185, 450, 'lucecita').setScale(0.2).setFrame(1);
        this.add.sprite(405, 450, 'lucecita').setScale(0.2).setFrame(1);
        this.add.sprite(585, 450, 'lucecita').setScale(0.2).setFrame(1);
       
        this.anims.create(configdoor);
        this.door1= this.add.sprite(183, 270, 'doors');
        this.door1.setInteractive()
       this.door1.setFrame(0)
       this.door1.on('pointerdown', ()=>{
   this.door1.play("doorAnimation");

        ///this.scene.start('sceneC');
        }, this);
        this.door1.on("animationcomplete", ()=>{
           
            this.scene.start('sceneC');
        })
        this.add.sprite(393, 270, 'doors');
        this.add.sprite(573, 270, 'doors');
        this.add.sprite(183, 500, 'doors');
        this.add.sprite(403, 500, 'doors');
        this.add.sprite(585, 500, 'doors');
    
    }
 
    update(){
       
    }
    

}



class SceneNextStation extends Phaser.Scene{
    constructor(acum)
    {
      
      let i;
      acum=0;
        super()
      i=0;
        Phaser.Scene.call(this, { key: 'sceneC' });
       
    }
  preload(){
    
      this.load.image("NewScreen4v3", "assets/NewScreen4-9v7.png");
      
      this.load.image("topscr3", "assets/paneltext.png");
      this.load.spritesheet("panel", "assets/stars_panelv4.png", { frameWidth: 90, frameHeight: 280, endFrame:1});
      this.load.spritesheet('rain', 'assets/rain6.png', { frameWidth: 256, frameHeight: 256, endFrame: 9 });

      this.load.image("oso", "assets/portada_oso.jpg");
      this.load.image("oso2", "assets/portada_oso.jpg");
      this.load.image("piece1","assets/el-oso-octavio-1.jpg");
      this.load.image("piece2","assets/el-oso-octavio-2.jpg");
      this.load.image("piece3","assets/el-oso-octavio-3.jpg");
      this.load.image("piece4","assets/el-oso-octavio-4.jpg");
      this.load.image("exa", "assets/exa2.png");
      this.load.image("spark", "assets/blue_github.png");
      this.load.spritesheet('star', 'assets/starv2.png', { frameWidth: 64, frameHeight: 64 })
      this.load.spritesheet('btnnext', 'assets/buttonnext.png', { frameWidth: 64, frameHeight: 64 })
    }
 
    create(){
    
      
    var bg= this.add.image(0,0, "NewScreen4v3").setOrigin(0);
  
     topscr3=this.add.image(395, 50, 'topscr3').setScale(0.5);
    
   
     topscr3.scaleX=1.4;
        topscr3.setInteractive();
        var configrn = {
            key: 'rainAnimation',
            frames: this.anims.generateFrameNumbers('rain', { start: 0, end: 9, first: 0 }),
            frameRate: 10,
            repeat: -1
        };
        this.anims.create(configrn);
      // let r=  this.add.sprite(320, 360, 'rain');
    r= this.add.image(390, 340, "exa" );
    // let r2=  this.add.sprite(575, 350, 'rain');
       
      r.depth=-1;
    //   r2.depth=-1;
    // r.play('rainAnimation');
    //r2.play('rainAnimation');
  
     //var image1= this.add.image(80,150, 'oso').setScale(0.2).setInteractive();
     var panelstar=this.add.image(60, 320, "panel").setScale(0.5);
     var image1= this.add.image(150,170, 'piece1').setScale(0.2).setName("img1").setInteractive();
     var image2= this.add.image(150,270, 'piece2').setScale(0.2).setName("img2").setInteractive();
     var image3= this.add.image(150,370, 'piece3').setScale(0.2).setName("img3").setInteractive();
     var image4= this.add.image(150,470, 'piece4').setScale(0.2).setName("img4").setInteractive();
     var arr=[image1, image2, image3, image4];
   
  
 
  //   var image2= this.add.image(150,450, 'oso2').setScale(0.3).setInteractive();
    item1=this.add.text(195,40, "PRÓXIMA ESTACIÓN: EL OSO OCTAVIO", {color: '#FFFAFA', fontSize:'20px', backgroundColor:'#2F4F4F',textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6'});
 /*   this.tweens.add({
        targets: item1,
        x: 50,
        duration: 3000,
        ease: 'Power2',
        yoyo: true,
        repeat: 2
    });
    */
        this.input.setDraggable(arr);
   //     this.input.setDraggable(image2);

          //  A drop zone
    var zone = this.add.zone(360, 285, 110, 110).setRectangleDropZone(110, 110);
    var zone2 = this.add.zone(475,285, 110, 110).setRectangleDropZone(110, 110);
    var zone3 = this.add.zone(360, 397, 110, 110).setRectangleDropZone(110, 110);
    var zone4 = this.add.zone(475, 397, 110, 110).setRectangleDropZone(110, 110);
   
    zone.setName("img1");
    zone2.setName("img2");
    zone3.setName("img3");
    zone4.setName("img4");
    zone.input.dropZone=true;
    zone2.input.dropZone=true;
   
  //  var zone3 = this.add.zone(300, 300, 200, 200).setRectangleDropZone(200, 200);
        console.log(zone.input)
    //  Just a visual display of the drop zone
    var graphics = this.add.graphics();
    var graphics2 = this.add.graphics();
    var graphics3 = this.add.graphics();
    var graphics4 = this.add.graphics();
    
    graphics.lineStyle(2, 0xffff00);
   graphics2.lineStyle(2, 0xFF00FF);
   graphics3.lineStyle(2, 0x0FFF00);
   graphics4.lineStyle(2, 0x0F00FF);
    graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
    graphics2.strokeRect(zone2.x - zone2.input.hitArea.width / 2, zone2.y - zone2.input.hitArea.height / 2, zone2.input.hitArea.width, zone2.input.hitArea.height);
    graphics3.strokeRect(zone3.x - zone3.input.hitArea.width / 2, zone3.y - zone3.input.hitArea.height / 2, zone3.input.hitArea.width, zone3.input.hitArea.height);
    graphics4.strokeRect(zone4.x - zone4.input.hitArea.width / 2, zone4.y - zone4.input.hitArea.height / 2, zone4.input.hitArea.width, zone4.input.hitArea.height);
    var particles = this.add.particles('spark');
    var cfgbtnxt = {
        key: 'btn_anim',
        frames: this.anims.generateFrameNumbers('btnnext', { start: 0, end: 3, first: 2 }),
        frameRate: 12,
        repeat: -1
    };
    this.anims.create(cfgbtnxt);
   
   var btn_nxt= this.add.sprite(700, 500, 'btnnext').setInteractive();
   btn_nxt.setFrame(3);
   btn_nxt.visible=false;
   btn_nxt.on('pointerdown', ()=>{
//door1.play("doorAnimation");
      
this.scene.start('sceneE');
    }, this);  

    this.input.on('dragstart', function (pointer, gameObject) {

    this.children.bringToTop(gameObject);

    }, this);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
 
        gameObject.x = dragX;
        gameObject.y = dragY;

    });
    this.input.on('dragenter', function (pointer, gameObject, dropZone) {
       
console.log("zone", zone)
        graphics.clear();
        graphics.lineStyle(2, 0x00ffff);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        graphics2.lineStyle(2, 0x00ffff);
        graphics2.strokeRect(zone2.x - zone2.input.hitArea.width / 2, zone2.y - zone2.input.hitArea.height / 2, zone2.input.hitArea.width, zone2.input.hitArea.height);
        graphics3.lineStyle(2, 0x00ffff);
        graphics3.strokeRect(zone3.x - zone3.input.hitArea.width / 2, zone3.y - zone3.input.hitArea.height / 2, zone3.input.hitArea.width, zone3.input.hitArea.height);
        graphics4.lineStyle(2, 0x00ffff);
        graphics4.strokeRect(zone4.x - zone4.input.hitArea.width / 2, zone4.y - zone4.input.hitArea.height / 2, zone4.input.hitArea.width, zone4.input.hitArea.height);
        
    });
let i;
    this.input.on('dragleave', function (pointer, gameObject, dropZone) {

        graphics.clear();
        graphics.lineStyle(2, 0xffff00);
        graphics2.lineStyle(2,0xFF00FF);
        graphics3.lineStyle(2, 0x0FFF00);
        graphics4.lineStyle(2, 0x0F00FF);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        graphics2.strokeRect(zone2.x - zone2.input.hitArea.width / 2, zone2.y - zone2.input.hitArea.height / 2, zone2.input.hitArea.width, zone2.input.hitArea.height);
        graphics3.strokeRect(zone3.x - zone3.input.hitArea.width / 2, zone3.y - zone3.input.hitArea.height / 2, zone3.input.hitArea.width, zone3.input.hitArea.height);
        graphics4.strokeRect(zone4.x - zone4.input.hitArea.width / 2, zone4.y - zone4.input.hitArea.height / 2, zone4.input.hitArea.width, zone4.input.hitArea.height);
    });
    this.input.on('drop', function ( pointer, gameObject, dropZone ) {

      
 if((gameObject.name===dropZone.name)){
  
    gameObject.x = dropZone.x;
    gameObject.y = dropZone.y;
    gameObject.setScale(0.35)
    i++;
  
    
    gameObject.input.enabled = false;
        if(i===4){
            
        particles.emitters.bringToTop(stars)
   
        var stars = particles.createEmitter({
       
        x: 420,
        y: 330,
     //   z:7,
        blendMode: 'SCREEN',
        scale: { start: 0.2, end: 0 },
        speed: 400,
        frequency:20,
        quantity: 8
        
         });
         console.log(btn_nxt)
        btn_nxt.setVisible(true)
  
        panelstar.setFrame(1);
         i=0;  
         }
         console.log(i)
       
    }     
}, i=0, this);
 
    this.input.on('dragend', function (pointer, gameObject, dropped) {
        
        console.log("dragend", dropped)
        if (!dropped)
        {
            gameObject.x = gameObject.input.dragStartX;
            gameObject.y = gameObject.input.dragStartY;
        }

        graphics.clear();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);


    });
}
 n=0;
callStar (x){
 //  x=n;


  
}
    update(){
     

    }
}
class SceneViewTrain extends Phaser.Scene{
    constructor()
    {
        super()
        Phaser.Scene.call(this, { key: 'sceneD' });
        
    }
preload(){
    this.load.image("scenary4", "assets/scenary4.jpg");
    this.load.spritesheet('cursor', "assets/cursor.png", { frameWidth: 32, frameHeight: 32})
}
create(){
  var back= this.add.image(400,300, 'scenary4').setScale(0.5);
    var configa = {
        key: 'Animation',
        frames: this.anims.generateFrameNumbers('cursor'),
        frameRate: 20,
        repeat: -1
    };
    
    this.anims.create(configa);
   var it= this.add.sprite(400, 300, 'cursor');
   it.setInteractive();
   this.input.on('pointerdown', function (event) {

    back.setX(300);

   this.scene.start('sceneE');

}, this);

    it.play('Animation');

   
}

}

class SceneTextTale extends Phaser.Scene{
    constructor(){
        
        super()
        Phaser.Scene.call(this, { key: 'sceneE' })
       
        
    }
  
    
     
    preload(){
       
        this.load.image("NewScreen4v3", "assets/NewScreen4-9v7.png");
      
        this.load.spritesheet("manito", "assets/manito.png", {frameWidth:64, frameHeight:64, startFrame:0, endFrame:3});
       this.load.image("oso_1", "assets/array imgs/el-oso-octavio-5.jpg");
       this.load.image("oso_2", "assets/array imgs/el-oso-octavio-8.jpg");
       this.load.image("oso_3", "assets/array imgs/el-oso-octavio-9.jpg");
       

    }

    create(){
    

      
        this.add.image(0,0, "NewScreen4v3").setOrigin(0);
        this.txt=this.add.text(280, 252, '', {color:'#FFFFFF', fontSize:"20px"});
        this.txt2=this.add.text(32, 32, '', {color:'#FFFFFF', fontSize:"20px"});
        var config_manit = {
            key: 'Anim',
            frames: this.anims.generateFrameNumbers('manito'),
            frameRate: 12,
            repeat:-1,
            repeatDelay: 500,
            hideOnComplete:true,
           
        };
         
        this.anims.create(config_manit);
       spr_manito=this.add.sprite(535, 350, 'manito');
     
       //creacion de arrays de imagenes del cuento
     imageoso1=this.add.image(420,130, "oso_1").setScale(0.3).setVisible(false);
     imageoso2=this.add.image(420,130, "oso_2").setScale(0.3).setVisible(false);
     imageoso3=this.add.image(420,130, "oso_3").setScale(0.3).setVisible(false);
     array_imgs.push(imageoso1);
    array_imgs.push(imageoso2);
    array_imgs.push(imageoso3);

    console.log( array_imgs,  array_imgs[0])
       
    spr_manito.setInteractive();
    
      spr_manito.on("animationrepeat", function(){
      acum++;

}, config_manit, 5)
spr_manito.on("pointerdown", function(){
    spr_manito.paused=true;
})
     
        var vctor=new Phaser.Math.Vector2(0.005,0.001);
        this.cameras.cameras[0].shake(5000,vctor, true);
      
   this.txt.setWordWrapWidth(300,true);
        console.log(this.txt.width)
    
           
         
this.nextLine();

    }

    nextLine=()=>{
      
        this.txt.updateText(
            this.txt.text=" "
        )   
           
        if (lineIndex === content[0].length)
        {
            //  We're finished
            array_imgs[2].setVisible(false);
          
        this.scene.start("sceneF")
            return;
        }
    
        //  Split the current line on spaces, so one word per array element
        line = content[0][lineIndex].split(' ');
        
       
        //  Reset the word index to zero (the first word in the line)
        
         wordIndex = 0;
     
         //  Call the 'nextWord' function once for each word in the line (line.length)
        // game.time.events.repeat(wordDelay, line.length, nextWord, this);
        //  Call the 'nextWord' function once for each word in the line (line.length)
       /* //---Timer Object
        let timerconfig={
            delay: 120,
            loop:false,
            repeat:line.length,
            callback:this.nextWord,
     
        } 
        let objtime=new Phaser.Time.TimerEvent(timerconfig);
        */
       //timedEvent=this.time.addEvent({delay:})
       this.time.addEvent({delay:wordDelay, repeat:line.length-1, callback:this.nextWord, callbackContext:this})
    
        //  Advance to the next line
       
            lineIndex++;    
if((lineIndex!==0)&&(lineIndex%3==0)){
acum++;
}
  
    }
    pauseTime=()=>{
        this.time.key("fir").paused=false;
        console.log(this.time.key("fir"))
    }
    nextWord=()=>{
    

    //  Add the next word onto the text string, followed by a space
    
    this.txt.text=this.txt.text.concat(line[wordIndex] + " ");

    //  Advance the word index to the next word in the line
    wordIndex++;

    //  Last word?

    if ((wordIndex === line.length))
    {
        //  Add a carriage return
        
 
         
     
        
         if(lineIndex===3){
        // this.time.paused=true;
          console.log(this.time.paused)
            array_imgs[0].setVisible(true);
            spr_manito.play("Anim").setVisible(true);
            this.time.addEvent({delay:3000,callback:this.spawn, repeat:3, callbackScope:this, args:this.config_manit});
           
          this.time.paused=false;
          spr_manito.play("Anim").setVisible(true);
           
        
            
         }
         if(lineIndex===5){
             console.log(this)
    
            array_imgs[0].setVisible(false);
            array_imgs[1].setVisible(true);
        
 
         }
         if(lineIndex===13){
            array_imgs[1].setVisible(false);
            array_imgs[2].setVisible(true);
         }
         else if(lineIndex===lineIndex.length-1){
            spr_manito.setVisible(false);
         }
         
         
   
             
          
          /*  if( objects_img_osos.image0.visible===true){
                objects_img_osos.image0.setVisible(false)
            }
            else{
                objects_img_osos.image0.setVisible(true)
            }
           */
       
        this.txt.text=this.txt.text.concat("\n");

        //  Get the next line after the lineDelay amount of ms has elapsed
  
      //spr_manito.play("Anim");
   this.timerr=  this.time.addEvent({delay:lineDelay, callback:this.nextLine, callbackContext:this, key:"fir"});
    }
 imageoso1.setInteractive();
 
      
    }
    update(){
     
     this.input.on("pointerdown", ()=>{
        this.time.paused=false;
       spr_manito.on("")
      })
            
      
   
    }
  
    spawn(config_manit){
        console.log(config_manit)
        spr_manito.play('Anim')
        this.time.paused=true;
    }
    /*if(acum%3===0){
        objects_img_osos.image0.setVisible(true)
       
    }
    else{
        objects_img_osos.image0.setVisible(false)
    }*/
}


class GMechanincs1 extends Phaser.Scene{
    constructor(){
        
        super()
        Phaser.Scene.call(this, { key: 'sceneF' })
       
        
    }
    preload(){
       this.load.image("NewScreen4v3", "assets/NewScreen4-9v7.png");
       this.load.image("RET1", "assets/ret3-2.png");
       this.load.image("RET2", "assets/RET1.png");
       this.load.image("zone", "assets/etiquetaname-2.png");
       this.load.image("fantas", "assets/fantasma.jpg");
       this.load.image("spark", "assets/blue_github.png");
       this.load.image("cloud", "assets/cloudv2.png");
       this.load.spritesheet('btnnext', 'assets/buttonnext.png', { frameWidth: 64, frameHeight: 64 })
    }
    
    create(){
      this.add.image(0,0, "NewScreen4v3").setOrigin(0);
      ret1=this.add.image(250,120, "RET1").setOrigin(0);
      ret1.setName("foca");
       this.add.image(450,120, "RET2").setOrigin(0).setName("fantas");
     console.log(this.children.list)

     // this.add.image(462,130, "RE").setOrigin(0).setScale(0.16, 0.135).setName("fantas");
      var jiji=this.add.image(315,245, "zone").setOrigin(0.5).setScale(1, 0.5).setInteractive({dropZone:true}).setName("foca");
      var juju=this.add.image(515,245, "zone").setOrigin(0.5).setScale(1, 0.5).setInteractive({dropZone:true}).setName("fantas");
      this.tweens.add(   { 
        targets: jiji,
        y: { value: 155, duration: 1500, ease: 'sine.inOut', yoyo: -1 },
        delay: 3000

    });
    
     
      this.tweens.add(   { 
        targets: juju,
        y: { value: 155, duration: 1500, ease: 'sine.inOut', yoyo: -1 },
        delay: 3000

    })
      console.log(this.children.list)
     // this.add.image(424,500, "cloud") 
      this.textt1=this.add.text( 672, 230, 'Fani', {color:'#FFFFFF', fontSize:"20px", backgroundColor:'#F45B69'});
      this.textt1.setName("foca");

      console.log(this.textt1)
     var textt2= this.add.text( 672, 330, 'Felipe', {color:'#FFFFFF', fontSize:"20px", backgroundColor:'#F45B69'}).setName("fantas");;
   
      this.textt1.setInteractive()
      textt2.setInteractive()
      this.tweens.add(
     { 
        targets: [textt2],
        y: { value: 450, duration: 1500, ease: 'sine.inOut', yoyo: -1 },
        delay: 1000

    },  
      );
      this.tweens.add(
        { 
           targets: [this.textt1],
           y: { value: 350, duration: 1500, ease: 'sine.inOut', yoyo: -1 },
           delay: 1000
   
       },  
         )

      var particles = this.add.particles('spark');
      this.input.setDraggable([this.textt1, textt2]);
        console.log(this.input.displayList)
      var btn_nxt= this.add.sprite(700, 500, 'btnnext').setInteractive();
   
      btn_nxt.setFrame(3);
      btn_nxt.visible=false;
      btn_nxt.on('pointerdown', ()=>{
        this.scene.start("sceneG");
       }, this);  
      this.input.on('dragstart', function (pointer, gameObject) {

      //  gameObject.setTint(0xff0000);

    });

  function callNextScene(arr){
console.log("incall")
      
    let acm=0;
   
   arr.map((curv)=>{
      
         if((curv.type==="Text")&&(curv.visible===false)){
             acm++;
              
         }
         
        
          }, acm)
          acm===2?btn_nxt.setVisible(true):null;
  
 
            }

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;
        gameObject.setOrigin(0.5)

    });
    this.input.on('drop', function ( pointer, gameObject, dropZone ) {
        particles.emitters.bringToTop(stars);
if((gameObject.name===dropZone.name)){

 let namego=gameObject.name;
        gameObject.x = dropZone.x;
        gameObject.y = dropZone.y;
    
            
        var stars = particles.createEmitter({
         
        x: gameObject.x,
        y: gameObject.y, 
     //   z:7,
        blendMode: 'SCREEN',
        scale: { start: 0.2, end: 0 },
        speed:200,
        frequency:20,
        quantity: 3,
         });
         let arr_ch=this.children.list;
         this.children.list.map((curv)=>{
            if((curv.name===namego))
            curv.setVisible(false);
        })
         gameObject.visible=false;
            dropZone.visible=false;
   
        gameObject.enabled=false;
        console.log("jeje");
        callNextScene(arr_ch);
        console.log("jiji")
        this.time.addEvent({delay:1000,callback:()=>{
            stars.stop()
        }, callbackScope: this});
      
    }
 
  
    }, this);


   this.input.on('dragend', function (pointer, gameObject, dropped) {
        console.log(gameObject.setOrigin())
        console.log("dragend", dropped)
        if (!dropped)
        {
           gameObject.input.dragStartX = gameObject.x ;
           gameObject.input.dragStartY  =   gameObject.y ;
           
        }
    });

    /*}
         var  graphics = this.add.graphics();
        var thickness = 4;
        var color = 0x00ff00;
        var alpha = 1;
        graphics.lineStyle(thickness, color, alpha);
    
        graphics.strokeRect(32, 32, 256, 256);
        this.add.line(300, 400, 350, 450, 500, 550,0x00ff00, alpha)
        this.add.text(500, 500, "H");
        this.add.text(530, 500, "E");
        this.add.text(550, 500, "L");
        this.add.text(570, 500, "O");
        this.add.text(590, 500, "W");*/
    }
    update(){
       
    }}
    
class GMechanincs2 extends Phaser.Scene{
    constructor(){
        
        super()
        Phaser.Scene.call(this, { key: 'sceneG' })
       
        
    }
    preload(){
       this.load.image("NewScreen4v3", "assets/NewScreen4-9v7.png");
      
      
 
       this.load.image("spark", "assets/blue_github.png");
       this.load.image("cloud", "assets/cloudv2.png");
       this.load.image("square", "assets/whitespace.png");
    }
    
    create(){
      this.add.image(0,0, "NewScreen4v3").setOrigin(0);
      this.add.text( 192,160, "Forma el nombre del personaje sacando letras de la nube", {fontSize:'24px'}).setWordWrapWidth(550)

    //  console.log(this.add.image(430, 330, "square"))
     // this.add.image(302, 330, "square")
    //  this.add.image(332, 330, "square")
     //var firstsqu= this.add.image(362, 330, "square");
     var zone3 = this.add.zone(392, 330, 32, 32).setRectangleDropZone(32, 32);
     var zone4 = this.add.zone(422, 330, 32, 32).setRectangleDropZone(32, 32);
     var zone5 = this.add.zone(452, 330, 32, 32).setRectangleDropZone(32, 32);
     var zone6 = this.add.zone(482, 330, 32, 32).setRectangleDropZone(32, 32);
     var zone2 = this.add.zone(362, 330, 32, 32).setRectangleDropZone(32, 32);
     var zone  = this.add.zone(332, 330, 32, 32).setRectangleDropZone(32, 32);
         zone.setData("pos","F");
        zone2.setData("pos","e");
        zone3.setData("pos","L");
        zone4.setData("pos","i");
        zone5.setData("pos","p");
        zone6.setData("pos","e");

console.log(zone.getData("clave"), zone2)
     var graphics  = this.add.graphics();
     var graphics2 = this.add.graphics();
     var graphics3 = this.add.graphics();
     var graphics4 = this.add.graphics();
     var graphics5 = this.add.graphics();
     var graphics6 = this.add.graphics();
      
     graphics.fillStyle(0xffff00)
   
     graphics.fillRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
    graphics2.fillStyle(0xFF00FF);
    graphics2.fillRect(zone2.x - zone2.input.hitArea.width / 2, zone2.y - zone2.input.hitArea.height / 2, zone2.input.hitArea.width, zone2.input.hitArea.height);
    graphics3.lineStyle(2, 0x0FFF00);
    graphics4.lineStyle(2, 0x0F00FF);
    graphics5.lineStyle(2, 0x0F00FF); 
    graphics6.lineStyle(2, 0x0F00FF); 

     graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
     graphics2.strokeRect(zone2.x - zone2.input.hitArea.width / 2, zone2.y - zone2.input.hitArea.height / 2, zone2.input.hitArea.width, zone2.input.hitArea.height);
     graphics3.strokeRect(zone3.x - zone3.input.hitArea.width / 2, zone3.y - zone3.input.hitArea.height / 2, zone3.input.hitArea.width, zone3.input.hitArea.height);
     graphics4.strokeRect(zone4.x - zone4.input.hitArea.width / 2, zone4.y - zone4.input.hitArea.height / 2, zone4.input.hitArea.width, zone4.input.hitArea.height);
     graphics5.strokeRect(zone5.x - zone5.input.hitArea.width / 2, zone5.y - zone5.input.hitArea.height / 2, zone5.input.hitArea.width, zone5.input.hitArea.height);
     graphics5.strokeRect(zone6.x - zone6.input.hitArea.width / 2, zone6.y - zone6.input.hitArea.height / 2, zone6.input.hitArea.width, zone6.input.hitArea.height);
     //  this.add.zone().dr
    /*
      this.add.image(392, 330, "square").setScale(1.2).setInteractive({dropZone:true});
      this.add.image(422, 330, "square").setScale(1.2).setInteractive({dropZone:true});
      this.add.image(452, 330, "square").setScale(1.2).setInteractive({dropZone:true});
      this.add.image(482, 330, "square").setScale(1.2).setInteractive({dropZone:true});
      this.add.image(512, 330, "square").setScale(1.2).setInteractive({dropZone:true});
      */

      //  ret1=  this.add.image(250,120, "RET1").setOrigin(0);
     // this.add.image(450,120, "RET1").setOrigin(0);
     // this.add.image(462,130, "fantas").setOrigin(0).setScale(0.16, 0.135);
     // this.add.image(315,245, "zone").setOrigin(0.5).setScale(1, 0.5).setInteractive({dropZone:true});
      // this.add.image(515,245, "zone").setOrigin(0.5).setScale(1, 0.5).setInteractive({dropZone:true});
     
      //this.textt1=this.add.text( 672, 230, 'Fani', {color:'#FFFFFF', fontSize:"20px", backgroundColor:'#F45B69'});
      // var textt2= this.add.text( 672, 330, 'Felipe', {color:'#FFFFFF', fontSize:"20px", backgroundColor:'#F45B69'});
      this.add.image(424,500, "cloud").setScale(1.3)

      //console.log(this.add.grid(430, 330, 192, 32, 32, 32, 0xffffff).setInteractive({dropZone:true}))

      this.f=this.add.text( 424, 514, 'F', {color:'#FFFFFF', fontSize:"28px", backgroundColor:'#F45B69'}).setInteractive(); 
      this.e=this.add.text( 400, 500, 'e', {color:'#FFFFFF', fontSize:"28px", backgroundColor:'#F45B69'}).setInteractive(); 
      this.l=this.add.text( 340, 484, 'L', {color:'#FFFFFF', fontSize:"28px", backgroundColor:'#F45B69'}).setInteractive(); 
      this.i=this.add.text( 361, 494, 'i', {color:'#FFFFFF', fontSize:"28px", backgroundColor:'#F45B69'}).setInteractive(); 
      this.p=this.add.text( 365, 474, 'p', {color:'#FFFFFF', fontSize:"28px", backgroundColor:'#F45B69'}).setInteractive(); 
      this.e2=this.add.text( 425, 454, 'e', {color:'#FFFFFF', fontSize:"28px", backgroundColor:'#F45B69'}).setInteractive(); 
      console.log(this.f.text===zone.getData("pos"))
    
      let array_letters=[this.f, this.e, this.l, this.i, this.p, this.e2]
      this.f.setInteractive()
      this.e.setInteractive()
      this.l.setInteractive()
      this.i.setInteractive()
      this.p.setInteractive()
      this.e2.setInteractive()
     // this.textt1.setInteractive()
     
      //textt2.setInteractive()
    
      var particles = this.add.particles('spark');
      this.input.setDraggable([this.f,this.e, this.l, this.i, this.p, this.e2]);
      this.input.on('dragstart', function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      //  gameObject.setTint(0xff0000);

    },this);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;
        gameObject.setOrigin(0.5)

    });
    this.input.on('drop', function ( pointer, gameObject, dropZone,  ) {
        if(gameObject.text===dropZone.getData("pos")){
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            
            gameObject.input.enabled=false;
           gameObject.setBackgroundColor("#ffffff")
         
           gameObject.setColor("#000000")
           
            console.log(gameObject.TextStyle)
            array_letters
            // = words.filter(word => word.length > 6);
            const result = array_letters.filter(letter => letter.input.enabled === false);
       console.log(result)
       if(result.length===6){
        // this.scene.setTint(0x686868)
        this.scene.stop();
        this.scene.add('myScene', SceneFirstGema, true, { x: 400, y: 300 });
       }
       
         //  this.scene.bringToTop('SceneFirstGema');
        }
        else{
            var vctor=new Phaser.Math.Vector2(0.005,0.001);
          this.cameras.cameras[0].shake(1000,vctor, true);
        }

       /* particles.emitters.bringToTop(stars);
            
        var stars = particles.createEmitter({
         
        x: gameObject.x,
        y: gameObject.y, 
     //   z:7,
        blendMode: 'SCREEN',
        scale: { start: 0.2, end: 0 },
        speed:200,
        frequency:20,
        quantity: 3,
         });
         gameObject.visible=false;
            dropZone.visible=false;
            ret1.visible=false;
        gameObject.enabled=false;
        this.time.addEvent({delay:1000,callback:()=>{
            stars.stop()
        }, callbackScope: this});*/
    }, this);
//350
//15 2
//
 
    this.input.on('dragend', function (pointer, gameObject, dropped) {
        
        console.log("dragend", dropped)
        /*if (!dropped)
        {
            gameObject.x = gameObject.input.dragStartX;
            gameObject.y = gameObject.input.dragStartY;
           
        }*/
    }); 

    /*}
         var  graphics = this.add.graphics();
        var thickness = 4;
        var color = 0x00ff00;
        var alpha = 1;
        graphics.lineStyle(thickness, color, alpha);
    
        graphics.strokeRect(32, 32, 256, 256);
        this.add.line(300, 400, 350, 450, 500, 550,0x00ff00, alpha)
        this.add.text(500, 500, "H");
        this.add.text(530, 500, "E");
        this.add.text(550, 500, "L");
        this.add.text(570, 500, "O");
        this.add.text(590, 500, "W");*/
    }
  }

   /* class SceneFirstGema extends Phaser.Scene{
        constructor(){
        
            super()
          Phaser.Scene.call(this, { key: 'SceneFirstGemaf' })
           
            
        }
        preload(){
            this.load.spritesheet('Gema1v2', 'assets/Gema1v2.png', { frameWidth: 128, frameHeight: 164, endFrame: 3 });
            this.load.image("board", "assets/board_txt-2.png");
        }
        create(){
           let container = this.add.container(0, 300);

            var configGema1v2 = {
                key: 'gemaAnimation',
                frames: this.anims.generateFrameNumbers('Gema1v2', { start: 0, end: 3, first: 0 }),
                frameRate: 12,
                repeat: -1
            };
            this.anims.create(configGema1v2);
            this.add.image(400, 350, "board");
            this.add.sprite(400, 200, 'Gema1v2').setScale(0.6).play('gemaAnimation');
            this.add.text(280,320, "Lo lograstes!!. Obtuvistes la gema de la estación 1", {color:"#000000"}).setWordWrapWidth(280)
            
            this.time.addEvent({delay:10000,  callback:()=>{
                this.scene.stop();
                this.scene.switch("sceneB");
            }})
      
           // container.add(Gema1v2);
        }
     
    }*/

    class SceneFeedBack extends Phaser.Scene{
        constructor(){
        
            super()
          //  Phaser.Scene.call(this, { key: 'SceneFirstGema' })
           
            
        }
        preload(){
            this.load.spritesheet('cloudsad', 'assets/sprite_cloud2.png', { frameWidth: 128, frameHeight: 64, endFrame: 5 });
            this.load.image("board", "assets/board_txt-2.png");
        }
        create(){
           let container = this.add.container(0, 300);

            var configcloud = {
                key: 'cloudAnim',
                frames: this.anims.generateFrameNumbers('cloudsad', { start: 4, end: 5, first: 4 }),
                frameRate: 12,
                repeat: -1
            };
            this.anims.create(configcloud);
            this.add.image(400, 350, "board").setScale(1.2);;
            this.add.sprite(400, 274, 'cloudsad').setScale(1).play('cloudAnim');
            this.add.text(280,320, "Veo que te has equivocado repetidas veces, ¿Que tal si escuchamos nuevamente el cuento?", {color:"#000000"}).setWordWrapWidth(275)
          let button_si=  this.add.image(300, 425, "board").setScale(0.5).setOrigin(0.5).setTint(0xC5E89F);
           let button_no= this.add.image(300, 470, "board").setScale(0.5).setOrigin(0.5).setTint(0xEA9999);
            this.add.text(275,425, "Si", {color:"#000000"});
            this.add.text(275,470, "No", {color:"#000000"});
            button_si.setInteractive();
            button_no.setInteractive();
            button_si.on("pointerdown", ()=>{
                this.scene.start("sceneE")
            })
            button_no.on("pointerdown", ()=>{
                this.scene.start("sceneA")
            })
           // container.add(Gema1v2);
        }
     
    }

    class SceneFirstGema extends Phaser.Scene{
        constructor(){
        
            super()
          //  Phaser.Scene.call(this, { key: 'SceneFirstGema' })
           
            
        }
        preload(){
            this.load.spritesheet('Gema1v2', 'assets/Gema1v2.png', { frameWidth: 128, frameHeight: 164, endFrame: 3 });
            this.load.image("board", "assets/board_txt-2.png");
        }
        create(){
           let container = this.add.container(0, 300);

            var configGema1v2 = {
                key: 'gemaAnimation',
                frames: this.anims.generateFrameNumbers('Gema1v2', { start: 0, end: 3, first: 0 }),
                frameRate: 12,
                repeat: -1
            };
            this.anims.create(configGema1v2);
            this.add.image(400, 350, "board");
            this.add.sprite(400, 200, 'Gema1v2').setScale(0.6).play('gemaAnimation');
            this.add.text(280,320, "Lo lograstes!!. Obtuvistes la gema de la estación 1", {color:"#000000"}).setWordWrapWidth(280)
            
            this.time.addEvent({delay:10000,  callback:()=>{
                this.scene.stop();
                this.scene.switch("sceneB");
            }})
      
           // container.add(Gema1v2);
        }
     
    }


    class SceneTextTaleBeta extends Phaser.Scene{
        constructor(){
            
            super()
            Phaser.Scene.call(this, { key: 'sceneE' })
           
            
        }
      
        
         
        preload(){
           this.load.image("talebox", "assets/box.png");
         
           this.load.spritesheet("manito", "assets/manito.png", {frameWidth:64, frameHeight:64, startFrame:0, endFrame:3});
           this.load.image("oso_1", "assets/array imgs/el-oso-octavio-5.jpg");
           this.load.image("oso_2", "assets/array imgs/el-oso-octavio-8.jpg");
           this.load.image("oso_3", "assets/array imgs/el-oso-octavio-9.jpg");
           
    
        }
    
        create(){
        
    
          
            this.add.image(400,300, "talebox").setScale(3);
   
            this.txt=this.add.text(280, 252, '', {color:'#000000', fontSize:"35px", fontFamily: 'Nerko One'});
            this.txt2=this.add.text(32, 32, '', {color:'#000000', fontSize:"20px", fontFamily: 'Road Rage'});
            var config_manit = {
                key: 'Anim',
                frames: this.anims.generateFrameNumbers('manito'),
                frameRate: 12,
                repeat:-1,
                repeatDelay: 500,
                hideOnComplete:true,
               
            };
             
            this.anims.create(config_manit);
           spr_manito=this.add.sprite(535, 350, 'manito');
         
           //creacion de arrays de imagenes del cuento
         imageoso1=this.add.image(420,130, "oso_1").setScale(0.3).setVisible(false);
         this.tweens.add({
            targets     :  imageoso1 ,
            x: 0,
            duration: 3000,
            ease: 'Power2',
            loop: 2
            });
         imageoso2=this.add.image(420,130, "oso_2").setScale(0.3).setVisible(false);
         imageoso3=this.add.image(420,130, "oso_3").setScale(0.3).setVisible(false);
         array_imgs.push(imageoso1);
        array_imgs.push(imageoso2);
        array_imgs.push(imageoso3);
    
        console.log( array_imgs,  array_imgs[0])
           
        spr_manito.setInteractive();
        
          spr_manito.on("animationrepeat", function(){
          acum++;
    
    }, config_manit, 5)
    spr_manito.on("pointerdown", function(){
        spr_manito.paused=true;
    })
         
            var vctor=new Phaser.Math.Vector2(0.005,0.001);
            this.cameras.cameras[0].shake(5000,vctor, true);
          
       this.txt.setWordWrapWidth(300,true);
            console.log(this.txt.width)
        
               
             
    this.nextLine();
    
        }
    
        nextLine=()=>{
          
            this.txt.updateText(
                this.txt.text=" "
            )   
               
            if (lineIndex === content[0].length)
            {
                //  We're finished
                array_imgs[2].setVisible(false);
                this.tweens.add({

                    targets:  array_imgs[2],
            
            
                    scale: { value: 1.5, duration: 4000, delay: 2000, yoyo: true },
            
            
                    delay: 1000
            
                });
           // this.scene.start("sceneF")
                return;
            }
        
            //  Split the current line on spaces, so one word per array element
            line = content[0][lineIndex].split(' ');
            
           
            //  Reset the word index to zero (the first word in the line)
            
             wordIndex = 0;
         
             //  Call the 'nextWord' function once for each word in the line (line.length)
            // game.time.events.repeat(wordDelay, line.length, nextWord, this);
            //  Call the 'nextWord' function once for each word in the line (line.length)
           /* //---Timer Object
            let timerconfig={
                delay: 120,
                loop:false,
                repeat:line.length,
                callback:this.nextWord,
         
            } 
            let objtime=new Phaser.Time.TimerEvent(timerconfig);
            */
           //timedEvent=this.time.addEvent({delay:})
           this.time.addEvent({delay:wordDelay, repeat:line.length-1, callback:this.nextWord, callbackContext:this})
        
            //  Advance to the next line
           
                lineIndex++;    
    if((lineIndex!==0)&&(lineIndex%3==0)){
    acum++;
    }
      
        }
        pauseTime=()=>{
            this.time.key("fir").paused=false;
            console.log(this.time.key("fir"))
        }
        nextWord=()=>{
        
    
        //  Add the next word onto the text string, followed by a space
        
        this.txt.text=this.txt.text.concat(line[wordIndex] + " ");
    
        //  Advance the word index to the next word in the line
        wordIndex++;
    
        //  Last word?
    
        if ((wordIndex === line.length))
        {
            //  Add a carriage return
            
     
             
         
            
             if(lineIndex===3){
            // this.time.paused=true;
              console.log(this.time.paused)
                array_imgs[0].setVisible(true);
                spr_manito.play("Anim").setVisible(true);
                this.time.addEvent({delay:3000,callback:this.spawn, repeat:3, callbackScope:this, args:this.config_manit});
               
              this.time.paused=false;
              spr_manito.play("Anim").setVisible(true);
               
            
                
             }
             if(lineIndex===5){
                 console.log(this)
        
                array_imgs[0].setVisible(false);
                array_imgs[1].setVisible(true);
            
     
             }
             if(lineIndex===13){
                array_imgs[1].setVisible(false);
                array_imgs[2].setVisible(true);
             }
             else if(lineIndex===lineIndex.length-1){
                spr_manito.setVisible(false);
             }
             
             
       
                 
              
              /*  if( objects_img_osos.image0.visible===true){
                    objects_img_osos.image0.setVisible(false)
                }
                else{
                    objects_img_osos.image0.setVisible(true)
                }
               */
           
            this.txt.text=this.txt.text.concat("\n");
    
            //  Get the next line after the lineDelay amount of ms has elapsed
      
          //spr_manito.play("Anim");
       this.timerr=  this.time.addEvent({delay:lineDelay, callback:this.nextLine, callbackContext:this, key:"fir"});
        }
     imageoso1.setInteractive();
     
          
        }
        update(){
         
         this.input.on("pointerdown", ()=>{
            this.time.paused=false;
           spr_manito.on("")
          })
                
          
       
        }
      
        spawn(config_manit){
            console.log(config_manit)
            spr_manito.play('Anim')
            this.time.paused=true;
        }
        /*if(acum%3===0){
            objects_img_osos.image0.setVisible(true)
           
        }
        else{
            objects_img_osos.image0.setVisible(false)
        }*/
    }
let config = {
    width:  800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'game',
    scene: [GMechanincs1],
    dom :{
        createContainer: true
      }
      // [SceneEntry, SceneMenulevel, SceneNextStation,  SceneViewTrain, SceneTextTale,  GMechanincs1, GMechanincs2],
      //[SceneEntry, SceneMenulevel, SceneNextStation,  SceneViewTrain, SceneTextTale,  GMechanincs1, GMechanincs2, SceneFirstGema, SceneFeedBack],
      //  scene: [GMechanincs2, SceneFirstGema],
    //  scene: [SceneEntry, SceneMenulevel, SceneNextStation,  SceneViewTrain, SceneTextTale],
};
var content = [["El fantasma felipe está muy contento. ", "HOY IRÁ A LA FERIA CON SU AMIGA, LA FOCA FANI. ¡QUÉ DIVERTIDO!",
    "LA FERIA ESTÁ LLENA DE FAROLILLOS DE COLORES.",
    "¡Y HAY UN DELFÍN SONRIENTE BAÑANDOSE EN UNA FUENTE!",
 
    "FANI SE HACE UNA FOTO CON ÉL.",
    "FELIPE Y FANI SE MONTAN EN LA NORIA.",
    "",
    "¡LA FOCA ESTÁ TAN FELIZ QUE LE BRILLA LA NARIZ!",
    "EN LOS COCHES DE CHOQUE, FANI FRENA TAN FUERTE QUE EL FANTASMA FELIPE SALE DISPARADO.",
    "¿SABES DÓNDE HA ATERRIZADO? ¡EN LA CASA DEL TERROR! ¡QUÉ MIEDO!",
    "MIRA, ALLÍ ESTÁ EL LOBO FEROZ ZAMPÁNDOSE UN FILETE. CUANDO VE AL FANTASMA SE ASUSTA… ¡SE LE HA PUESTO EL FLEQUILLO DE PUNTA!",
    "EL VAMPIRO, QUE ES MUY FEO,",
    "ES FLACO COMO UN FIDEO.",
    "¿QUÉ ES ESO QUE HAY EN EL CIELO? ¡SON FUEGOS ARTIFICIALES!",
    "¡HA SIDO UN DÍA FABULOSO!",
  
],[" "]];
var line = [ ];

var wordIndex = 0;
var lineIndex = 0;

//var wordDelay = 240;
var wordDelay = 600;
var lineDelay = 500;
let txt;
 /* scene: [SceneEntry, SceneMenulevel, SceneNextStation,  SceneViewTrain, SceneTextTale],*/
let game = new Phaser.Game(config);


let relojin=  new Phaser.Time.TimerEvent();
let x=0, item1;
let spr_manito;
let array_imgs=[];
let imageoso1, imageoso2, imageoso3; 
var timerr;
let acum=0;
let   timedEvent, door1, r, cam1,topscr3, n=0, item1_1, textt1, ret1, f, e , l, i , p,e2;


/*
class SceneGame1 extends Phaser.Scene{
  

    preload(){
        this.load.setPath("assets/");
        this.load.image("scen_4", "scenary4.png");
        this.load.spritesheet("cursor", "cursor.png")
    }
    create(){
        this.add.dom(300, 600, 'div').setClassName('menu-selection-level___background');
        this.add.dom(330, 120, 'div').setClassName('menu-selection-level___title');
        this.add.dom(300, 150, 'div').setClassName('center');
       let item1= this.add.dom(280, 200, 'div').setClassName('menu-selection-level___item');
        this.add.dom(450, 200, 'div').setClassName('menu-selection-level___item');
        this.add.dom(100, 200, 'div').setClassName('menu-selection-level___item');
        item1.addListener('click');
        item1.addListener('mouseover');
        item1.on('mouseover', function(){
         
        })
        item1.on('click', function(){
            console.log("clic");
           });
    }

}*/