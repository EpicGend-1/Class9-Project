
function setup() {
  createCanvas(400,400);
  background(51);
  person = createSprite(200,200,30,30);
 

}

function preload(){
  
}

function draw() 
{

  drawSprites();


 

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  if (keyIsDown(RIGHT_ARROW)){
    background("red")
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }



}

