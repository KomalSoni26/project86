var canvas= new fabric.canvas('myCanvas');

player_x= 10;
player_y= 10;

character_image_width= 100;
character_image_height= 100;

var character_image= "";
var background_block= "";

function character_update(){

    fabric.Image.fromURL("player.png", function(Img) {
        character_image= Img;

        character_image.scaleToWidth(150);
        character_image.scaleToHeight(140);
        character_image.set({
            top= player_y,
            left= player_x
        });
        canvas.add(character_image);
    });
}