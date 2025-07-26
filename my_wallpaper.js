//your parameter variables go here!
let rect_width  = 20;
let rect_height = 60;
let shape_Size  = 50;
let shape_X     = 50;
let shape_Y     = 50;

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
  background(141, 154, 155); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
// noStroke()
// bezier(0,100,50,0,150,200,200,100)
// fill(0)
// bezier(100,0,0,50,200,150,100,200)

// fill(0)
// ellipse(150,50,50,50)

// fill(255)
// ellipse(50,150,50,50)


}
