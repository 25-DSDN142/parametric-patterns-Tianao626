//your parameter variables go here!
let w    = 200;
let h    = 200;
let boat_x =120;
let boat_y =140;
let Size   =100;
let bird_x= 100;
let bird_y= 100;
let bird_Size= 2;

function setup_wallpaper(pWallpaper) {

  pWallpaper.output_mode(GLIDE_WALLPAPER);

  pWallpaper.resolution( A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(102, 179, 255); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  //sea wave
  stroke(255)
  noFill()
 // 1st line (y = h/6)
  bezier(w*0.025, h/6, w*0.11, h/6-10, w*0.19, h/6+10, w*0.3, h/6);
  bezier(w*0.35, h/6, w*0.46, h/6-10, w*0.54, h/6+10, w*0.65, h/6);
  bezier(w*0.7, h/6, w*0.81, h/6-10, w*0.89, h/6+10, w*0.995, h/6);
  // 2nd line (y = h/2)
  bezier(w*0.025, h/2, w*0.11, h/2-10, w*0.19, h/2+10, w*0.3, h/2);
  bezier(w*0.35, h/2, w*0.46, h/2-10, w*0.54, h/2+10, w*0.65, h/2);
  bezier(w*0.7, h/2, w*0.81, h/2-10, w*0.89, h/2+10, w*0.995, h/2);
  // 3rd line (y = 5h/6)
  bezier(w*0.025, 5*h/6, w*0.11, 5*h/6-10, w*0.19, 5*h/6+10, w*0.3, 5*h/6);
  bezier(w*0.35, 5*h/6, w*0.46, 5*h/6-10, w*0.54, 5*h/6+10, w*0.65, 5*h/6);
  bezier(w*0.7, 5*h/6, w*0.81, 5*h/6-10, w*0.89, 5*h/6+10, w*0.995, 5*h/6);

    //4 boats
    draw_boat(10,80,100);
    draw_boat(120,40,80);
    draw_boat(40,150,70); 
    draw_boat(140,160,40); 
    //6 sea gulls
    draw_bird(160,130);
    draw_bird(50,10);
    draw_bird(30,40);
    draw_bird(60,120);
    draw_bird(180,200);
    draw_bird(190,10);
  
}

function draw_boat(boat_x, boat_y, Size){ 
  //boat
  noStroke()
  // The bottom of the hull
  if(Size <80){
    fill(0, 122, 204); 
  }
  if(Size>=80){
    fill(255, 77, 77);
  }
  beginShape();
  vertex(boat_x, boat_y);
  vertex(boat_x+Size, boat_y);
  vertex(boat_x+Size/12*11, boat_y+Size/6);
  vertex(boat_x+Size/12, boat_y+Size/6);
  endShape(CLOSE);
  
  fill(255);
  beginShape();
  vertex(boat_x, boat_y);
  vertex(boat_x+Size, boat_y);
  vertex(boat_x+Size/12, boat_y+Size/6);
  endShape(CLOSE);

  // The upper part of the hull
  if(Size <80){
  fill(0, 152, 204); 
  }
  if(Size>=80){
    fill(0, 102, 153);
  }
  rect(boat_x+Size/6,boat_y-Size/12,Size/3*2,Size/12);

  if(Size <80){
  fill(0, 152, 180); 
  }
  if(Size>=80){
    fill(0, 102, 120);
  }
  rect(boat_x+Size/4, boat_y-Size/24*5, Size/2, Size/8);

  if(Size <80){
  fill(0, 150, 150); 
  }
  if(Size>=80){
    fill(176, 196, 222);
  } 
  rect(boat_x+Size/3, boat_y-Size/3, Size/3, Size/8);

  stroke(255)
  line(boat_x+Size/6,boat_y-Size/12,boat_x+Size/6+Size/3*2,boat_y-Size/12);
  
  line(boat_x+Size/4, boat_y-Size/24*5,boat_x+Size/4+Size/2, boat_y-Size/24*5);

  line(boat_x+Size/3, boat_y-Size/3,boat_x+Size/3+Size/3, boat_y-Size/3);

  // window
  fill(255, 255, 204);
  stroke(0);
  ellipse(boat_x+Size/12*4, boat_y-Size/7, Size/12, Size/12);
  ellipse(boat_x+Size/12*6, boat_y-Size/7, Size/12, Size/12);
  ellipse(boat_x+Size/12*8, boat_y-Size/7, Size/12, Size/12);

  // chimney  
  noStroke();
  fill(139, 69, 19); 
  rect(boat_x+Size/24*10, boat_y-Size/24*11,Size/12, Size/8);
  rect(boat_x+Size/24*13, boat_y-Size/8*4,Size/15, Size/6);

  // smoke
  fill(153, 153, 153, 50); 
  noStroke();
  ellipse(boat_x+Size/12*7, boat_y-Size/16*9, Size/8, Size/12);
  ellipse(boat_x+Size/12*8, boat_y-Size/16*10, Size/7, Size/10);
  ellipse(boat_x+Size/12*9, boat_y-Size/16*11, Size/6, Size/8);

}
//sea gull 
function draw_bird(bird_x,bird_y){
  stroke(255);
  noFill();
  strokeWeight(1);
  // Left wing
  bezier(bird_x,bird_y,bird_x-bird_Size,bird_y-bird_Size,bird_x-bird_Size* 2,bird_y,bird_x-bird_Size* 3,bird_y-bird_Size);
  // Right wing
  bezier(bird_x,bird_y,bird_x+bird_Size,bird_y-bird_Size,bird_x+bird_Size* 2,bird_y,bird_x+bird_Size* 3,bird_y-bird_Size);
 }
