/*************************************************************************
    (*)Rooms of My Dream House
          (*)by Emily Farrow

    (*)Overview - Website containing pages of my dream house with use of variables, arrays, and else/ if statements. 
 
**************************************************************************/


// variable that is a function 
var drawFunction;

// rounded corner variable
var crnr = 4;

//image variables
var livingRoomAssets = [];
var kitchenAssets = [];
var diningRoomAssets = [];
var bedroomAssets = [];
var bathroomAssets = [];
var laundryroomAssets = [];

var imageX = 0;
var imageY = 0; 


//navigation instruction bar variables
var xNav = 470;
var yNav = 70;
var hNav = 40;
var wNav = 240;

var navTextSize = 26;
var strings = ['use keys to navigate'];

//bounding box navigation key  variables
var bnd = 40;
var bndSpcr = 51; //spacer between keys

//nav box placements
var boxX1 = 500;
var boxY1 = 100;

var boxX2 = 500;
var boxY2 = 150;

//navigation text placement variables
var x1 = (520);
var y1 = (130);

var x2 = (520);
var y2 = (180);

//navigation key array
var navKey = [];

//room title bounding box variables
var xStartOne = 400;
var yStartOne = 550;
var xEndOne = 185;
var yEndOne = 40;
var titleFill = 0;

//room title variables
var textXPos = (xStartOne + (590 - xStartOne)/2);
var textYPos = (yStartOne + (yEndOne/2) + 9);

//preload images in array
function preload() {

  //livingroom images
  livingRoomAssets[0] = loadImage('assets/livingroomplant.png');
  livingRoomAssets[1] = loadImage('assets/livingroomrug.png');
  livingRoomAssets[2] = loadImage('assets/livingroomcouch.png');
  livingRoomAssets[3] = loadImage('assets/livingroomchair.png');

 //kitchen images
  kitchenAssets[0] = loadImage('assets/kitchencounter.png');
  kitchenAssets[1] = loadImage('assets/kitchenisland.png');
  
  //dining room images
  diningRoomAssets[0] = loadImage('assets/diningroomwallart.png');
  diningRoomAssets[1] = loadImage('assets/diningroomtable.png');
  
  //bedroom images
  bedroomAssets[0] = loadImage('assets/bedroommirror.png');
  bedroomAssets[1] = loadImage('assets/bed.png');
  bedroomAssets[2] = loadImage('assets/footofbed.png');

  //bathroom images
  bathroomAssets[0] = loadImage('assets/bathroom1.png');
  bathroomAssets[1] = loadImage('assets/bathroom2.png');

  //laundry room images
  laundryroomAssets[0] = loadImage('assets/washerdryer.png');
  laundryroomAssets[1] = loadImage('assets/laundryroomsorter.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(28);
  noStroke();

  //setting the navigation key array
  navKey[0] = ('[l]');
  navKey[1] = ('[k]');
  navKey[2] = ('[d]');
  navKey[3] = ('[r]');
  navKey[4] = ('[b]');
  navKey[5] = ('[a]');

  // startup room
  drawFunction = drawLivingRoom;

}

//calls your state machine function
function draw() {
  drawFunction();
}

//draws images from livingRoomAssets array
drawLivingRoom = function() {
   background(255);

   //images in array
   image(livingRoomAssets[0], imageX, imageY);  //plant
   image(livingRoomAssets[1], imageX, imageY);  //rug
   image(livingRoomAssets[2], imageX, imageY);  //couch
   image(livingRoomAssets[3], imageX, imageY);  //chair
   
   //text bounding box
   fill(130, 171, 59);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //room title
   fill(titleFill);
   text('[l]iving room', textXPos, textYPos); 

   //nav keys
   //bounding position one
   fill(225, 49, 24);
   rect(boxX1, boxY1, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text('[k]', x1, y1);
  
  //bounding position two
   fill(91, 111, 50);
   rect(boxX2, boxY2, bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text('[a]', x2, y2);  

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], xNav, yNav);
}

//draws images from kitchenAssets array
drawKitchen = function() {
  background(255);  

   //images in array
   image(kitchenAssets[0], imageX, imageY);  //counter and shelves
   image(kitchenAssets[1], imageX, imageY); //island
   
   //text bounding box
   fill(225, 49, 24);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //room title
   fill(titleFill);
   text('[k]itchen', textXPos, textYPos);

   //nav keys
   //bounding position one
   fill(182, 90, 24);
   rect(boxX1, boxY1, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text('[d]', x1, y1); 
  
  //bounding position two
   fill(130, 171, 59);
   rect(boxX2, boxY2, bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text('[l]', x2, y2);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], xNav, yNav);
}

//draws images from diningRoomAssets array
drawDiningRoom = function() {
 background(255);

   //images in array
   image(diningRoomAssets[0], imageX, imageY);  //tiled floor png
   image(diningRoomAssets[1], imageX, imageY);  //left chair
   
   //text bounding box
   fill(182, 90, 24);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //room title
   fill(titleFill);
   text('[d]ining room', textXPos, textYPos);

   //nav keys
   //bounding position one
   fill(232, 86, 139);
   rect(boxX1, boxY1, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text('[r]', x1, y1); 
  
   //bounding position two
   fill(225, 49, 24);
   rect( boxX2, boxY2 , bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text('[k]', x2, y2);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], xNav, yNav);
}

//draws images from bedroomAssets array
drawBedroom = function() {
 background(255); 

   //images in array
   image(bedroomAssets[0], imageX, imageY);  //mirror
   image(bedroomAssets[1], imageX, imageY);  //bed
   image(bedroomAssets[2], imageX, imageY);  //foot of bed
  
   //text bounding box
   fill(232, 86, 139);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //room title
   fill(titleFill);
   text('bed[r]oom', textXPos, textYPos);

   //nav keys
   //bounding position one
   fill(180, 156, 220);
   rect(boxX1, boxY1, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text('[b]', x1, y1); 
  
   //bounding position two
   fill(182, 90, 24);
   rect( boxX2, boxY2 , bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text('[d]', x2, y2);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], xNav, yNav);
}

//draws images from bathroomAssets array
drawBathroom = function() {
   background(255);

   //images in array
   image(bathroomAssets[0], imageX, imageY);   //tub
   image(bathroomAssets[1], imageX, imageY);  //plant
  
   //text bounding box
   fill(180, 156, 220);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //room title
   fill(titleFill);
   text('[b]athroom', textXPos, textYPos);

   //nav keys
   //bounding position one
   fill(91, 111, 50);
   rect(boxX1, boxY1, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text('[a]', x1, y1); 
  
   //bounding position two
   fill(232, 86, 139);
   rect( boxX2,  boxY2 , bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text('[r]', x2, y2);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], xNav, yNav);  
}

//draws images from the laundryroomAssets array
drawLaundryroom = function() {
   background(255);

   //images in array
   image(laundryroomAssets[0], imageX, imageY);  //tiled floor png
   image(laundryroomAssets[1], imageX, imageY);  //desk
  
   //text bounding box
   fill(91, 111, 50);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //room title
   fill(titleFill);
   text('l[a]undryroom', textXPos, textYPos);

  //nav keys
   //bounding position one
   fill(130, 171, 59);
   rect(boxX1, boxY1, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text('[l]', x1, y1); 
  
   //bounding position two
   fill(180, 156, 220);
   rect( boxX2,  boxY2 , bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text('[b]', x2, y2);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], xNav, yNav);
}



// Change the drawFunction variable based on your interaction
function keyPressed() {
  // shows which was types
  //print(key);
  print(keyCode);

   // living room [l]
  if( drawFunction === drawLivingRoom ) {
    if( key === 'k' ) {
      drawFunction = drawKitchen;
    }
    if( key === 'a' ) {
      drawFunction = drawLaundryroom;
    }
  } 

  // Kitchen [k] 
  else if( drawFunction === drawKitchen ) {
      if( key === 'd' ) {
      drawFunction = drawDiningRoom;
    }
    else if( key === 'l' ) {
      drawFunction = drawLivingRoom;
    }
  }

    // Dining Room [d]
  else if( drawFunction === drawDiningRoom ) {

      if( key === 'r' ) {
      drawFunction = drawBedroom;
    }
      else if( key === 'k' ) {
      drawFunction = drawKitchen;
    }
  }

      // Bedroom [r]
  else if( drawFunction === drawBedroom ) {
      if( key === 'b' ) {
      drawFunction = drawBathroom;
    }
      else if( key === 'd' ) {
      drawFunction = drawDiningRoom;
    }
  }

    // Bathroom [b]
  else if( drawFunction === drawBathroom ) {
      if( key === 'a') {
      drawFunction = drawLaundryroom;
    }
      else if( key === 'r' ) {
      drawFunction = drawBedroom;
    }
  }

  // Laundry Room [a]
  else if( drawFunction === drawLaundryroom ) {
      if( key === 'l' ) {
      drawFunction = drawLivingRoom;
    }
      else if( key === 'b' ) {
      drawFunction = drawBathroom;
    }
  }
}