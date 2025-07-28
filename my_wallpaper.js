//your parameter variables go here!
let w    = 200;
let h    = 200;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(GLIDE_WALLPAPER);

  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(164, 214, 227); //light honeydew green colour
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

  //dolphin
  

  
}


