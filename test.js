// PImage bg;
let img;
let img1;
let img2;
let imgLevel2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let imgLv3;
let imgBoldUC;
let button;
let button2;
let level1;
let level2;
let level3;
let level4;
let level5;


let src1;
let src2;
let src3;
let fourscreendone;
let src4;
let src5;
let src6;
let src7;
let src8;
let src50;
let src9;
let src10;
let src11;
let src12;
let src13;
let src14;
let src15;
let src16;
let src17;
let src18;
let src19;
let src20;
let src21;
let src22;
let src23;
let src24;
let src25;
let src26;
let src27;
let src28;
let src29;
let src30;
let src31;
let src32;
let src33;

let endscreen;
let disqualified;
let level2completed;
let level3completed;
let level4completed;



let x;
let y1;
let y2;
let score; // Holds the score of the player

let points;
let textColor;


let x2, m2,y5, y6, y7, y8, z2, m5, y3, m10, opacity, changeOpacity, y9, y10, y11, y12, y13, y14, y15, y16, y17,y18,y19,y20,y21,y22,y23,y24,y25,y26,y27,y28,y29;
let y30, y31, y32,y33;
// y1 is first screen's/welcome screen's variable, y2 is rules/2nd screen's variable
// z2 and x and x2 are not being used
// m2 is 3rd screen's variable
// m10 holds the darkness of the color of the stuff in 3rd screen

// m5 is completion bar's variable // no need

// y3 is 3rd screen's variable

// opacity holds the darkness of the score in 4th screen onwards


// changeOpacity holds the opacity of the points

// y4 is 4th screen's variable
// y8 is 5th screen's variable

let firstscreen;

 let fontBold;
 let completed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // console.log(windowHeight);
  // centerCanvas();
  //canvas.position(0,0);
  img = loadImage('Mask Group 63.png');
  // button = createButton('Click here to get started');
  src1 = false;
  src2 = false;
  src20=false;
  src8 = false;
  src29=false;
  src32=false;
  // button.mousePressed(changeBG);
  // button = createImg('Group 8822.png');
  // button.style('position', 'absolute');
  // button.style('left', '50%');
  // button.style('top', '50%');
  // button.style('transform', 'translate(-50%, -50%)');
  // button.mouseClicked(endFirstScreen);
  // button.mouseOver(changeButtonImage);
  // // button2.position(800, 537);
  // button.position(windowWidth/2, 600);
  // button2 = createImg("Group 8822.png");
  
  // button2.mouseClicked(endFirstScreen);
  img1 = loadImage("Group 8822.png");
  img3 = loadImage("Group 8822@2x.png");
  img4 = loadImage("Group 4817.png")
  //img2 = loadImage("Rules_Screen.png");
  img5 = loadImage("Group 8864.png");
  img6 = loadImage("Logo.png");
  img7 = loadImage("Rectangle 7457.png");
  img8 = loadImage("Group 8862.png");
  img9 = loadImage("Group 8862@2x.png");
  imgLv3 = loadImage("Group 9030.png")
  imgLevel2 = loadImage("Group 8866.png");
  fontBold = loadFont('assets/Italic.ttf');
  fontPoppins = loadFont('Poppins/Poppins-Regular.ttf');
  imgUni =loadImage("unicorn.png");
  bigUniCorn = loadImage("BigUniCorn.png")

  //  background(img);

  x = 705; y1= windowHeight/2; y2 = windowHeight + 100; y3 = 2 * windowHeight + 100;
  y5 = windowHeight + 100; y6 = windowHeight + 100; y7 = windowHeight + 100;
  m2 = 2 * windowHeight + 100;completed = 0;m5 = -100; m10 = 200;
  opacity = 0; score = 0; points = 0; changeOpacity = 200; y4 = 3*windowHeight + 100; y8 = windowHeight/2 - 100; y9 = windowHeight + 100;

  y17 = windowHeight + 100;
  y10 = windowHeight + 100;  y11 = windowHeight + 100; y12 = windowHeight + 100; y13=windowHeight + 100;y14 = windowHeight + 100;y15 = windowHeight + 100;
  y16 = windowHeight + 100;   y17 = windowHeight + 100;   y18 = windowHeight + 100; y19 = windowHeight + 100;y20 = windowHeight/2 -100; y21 = windowHeight + 100;
  y22 = windowHeight + 100;    y23 = windowHeight + 100;  y24 = windowHeight + 100;  y25 = windowHeight + 100;  y26 = windowHeight + 100;  y27= windowHeight + 100;
  y28= windowHeight + 100;  y29= windowHeight/2 -100;  y30= windowHeight + 100;  y31= windowHeight + 100;  y32= windowHeight/2 -100;  y33= windowHeight/2 -100


  level1 = true;
  level2 = false;
  level3= false;
  level4= false;
  level2completed = false;
  level3completed = false;
  level4completed = false;

  img5.resize(windowWidth, windowHeight);
  imgLevel2.resize(windowWidth, windowHeight);
}



function draw() {
  if (level1) {
    background (img5);

  imageMode(CORNER);
  image(img5, 0, 0, width, height);
  }
  if (!level1 && !level2 &&!level3 &&!level4 && !level5) {
    background (img5);

  imageMode(CORNER);
  image(img5, 0, 0, width, height);
  }
  else if (level2) {
    background (imgLevel2);

  imageMode(CORNER);
  image(imgLevel2, 0, 0, width, height);
  }
  else if (level3) {
    background (imgLv3);

    imageMode(CORNER);
    image(imgLv3, 0, 0, width, height);
  }
  else if (!level1 && !level2 && level2completed && !level3){
    background (imgLv3);
    imageMode(CORNER);
    image(imgLv3, 0, 0, width, height);
  }
  else if (level4) {
    background (imgLv3);

    imageMode(CORNER);
    image(imgLv3, 0, 0, width, height);
  }
  else if (!level1 && !level2 && !level2completed && !level3 && level3completed &&!level4){
    background (imgLv3);
    imageMode(CORNER);
    image(imgLv3, 0, 0, width, height);
  }
  else  if (!level1 && !level2 &&!level3 &&!level4 && level4completed && !level5) {
    background (img5);
    imageMode(CORNER);
    image(img5, 0, 0, width, height);
  }

  // background (img5);

  // imageMode(CORNER);
  // image(img5, 0, 0);
  //frameRate(30);
  // imageMode(CORNER);
  // image(img, 0, 0, width, img.height*width/img.width); // to fit width
  // var scale = 0.4;
  // button.mouseOver(changeButtonImage);
  imageMode(CENTER);

 // img6.resize(100,100);
 // img6.resize(0,100);
  image(img6, 100,80);

// position for the centered rectangle
// Define the dimensions of the rectangle
let horizontalMargin = 40; //  horizontal margin
let rectWidth = windowWidth - 2 * horizontalMargin; // Adjust the scaling factor and maximum width as needed
let rectHeight = windowHeight/2 -100 +  horizontalMargin; // Height of the rectangle
let cornerRadius = 5; // rect. radius
let rectX = (windowWidth - rectWidth) / 2; // Center the rectangle horizontally
let rectY = height/3 + 10; // Center the rectangle vertically

// Draw a transparent rectangle with a border
fill(0, 187);
rect(rectX, rectY, rectWidth, rectHeight, cornerRadius);

let textSizeValue = min(windowWidth * 0.03, 20); // Text size to be use althrough


// Transition screen
if (!level1 && !level2 && !level2completed && !level3 && !level3completed && !level4 &&!level4completed && !level5) {
  if (!endscreen) {
    fill(128, 128, 128);
  rect(windowWidth/2-40, 100, 100, 40, 20);
  image(img8, windowWidth/2-40, 120);
  fill(255);
  textSize(20);
  textStyle(NORMAL);
  text(""+score, windowWidth/2 + 20 , 120);
  }
  
  //textSize(30);
  //textStyle(NORMAL);
  // fill(0, 0, 0, opacity);
  //text("Score: "+score, windowWidth/2, 100); 
  if (opacity >= 0) {
    opacity -= 1;
    

  }
  if (opacity <= 0) {
    if (score < 25) {
      textSize(30);
      textStyle(BOLDITALIC);
      fill(255);
      text("Sorry, you're too early for us\n Come back when you have some more traction", windowWidth/2, windowHeight/2);
      
      // Create a button to link to caena academy
      let button = createButton('Learn more');
      button.position(windowWidth / 2 -100, windowHeight / 2 + 100);
      button.style('background-color', 'transparent'); 
      button.style('color', 'white'); 
      button.style('border', 'solid');
      button.style('border-radius', '10px'); 
      button.style('padding', '20px 40px'); 
      button.style('font-size', '24px');

      
      button.mousePressed(openWebsite); 
      
      endscreen = true;
    } else {
      level2= true;
      opacity = 200;
    }
  }
  
  // Function to open the website in a new tab
  function openWebsite() {
    window.open('https://caena.io/academy/', '_blank');
  }
  


  if (points != 0) {
    textSize(textSizeValue +10);
  textStyle(NORMAL);
  fill(0, 0, 0, changeOpacity);
  text("+" + points, windowWidth/2 + 100, 100);
  }
  if (changeOpacity >= 0) {
    changeOpacity -= 2;
  }
  if (changeOpacity <= 0) {
    score += points;
  points = 0;
 // level1 = false;
  }
}
//Transition from level 2 to level 3
else if (!level1 && !level2 && level2completed && !level3 && !level3completed && !level4 && !level5) {
  if (!endscreen) {
    fill(128, 128, 128);
  rect(windowWidth/2-40, 100, 100, 40, 20);
  image(img8, windowWidth/2-40, 120);
  fill(255);
  textSize(20);
  textStyle(NORMAL);
  text(""+score, windowWidth/2 + 20 , 120);
  }
  if (opacity >= 0) {
    opacity -= 1;

  }
  if (opacity <= 0) {
    if (score < 230) {
      textSize(30);
      textStyle(BOLDITALIC);
      fill(255);
      text("Unfortunately we are going to pass!\n We will be rooting for you from the sidelines, all the best! ", windowWidth/2, windowHeight/2);

      
      // Create a button to link to caena academy
      let button = createButton('Learn more');
      button.position(windowWidth / 2 -100, windowHeight / 2 + 100);
      button.style('background-color', 'transparent'); 
      button.style('color', 'white'); 
      button.style('border', 'solid');
      button.style('border-radius', '10px'); 
      button.style('padding', '20px 40px'); 
      button.style('font-size', '24px');

      
      button.mousePressed(openWebsite); 
      function openWebsite() {
        window.open('https://caena.io/academy/', '_blank');
      }
      
      endscreen = true;
    } else {
      level3 = true;
      opacity = 200;
    }
  }
  
  if (points != 0) {
    textSize(textSizeValue +10);
  textStyle(NORMAL);
  fill(0, 0, 0, changeOpacity);
  text("+" + points, windowWidth/2 + 100, 100);
  }
  if (changeOpacity >= 0) {
    changeOpacity -= 2;
  }
  if (changeOpacity <= 0) {
    score += points;
  points = 0;
 // level1 = false;
  }
  
  
}

// Transition from level3 to level4
else if (!level1 && !level2 && !level3 && level3completed && !level4 && !level5) {
  if (!endscreen) {
    fill(128, 128, 128);
    rect(windowWidth/2-40, 100, 100, 40, 20);
    image(img8, windowWidth/2-40, 120);
    fill(255);
    textSize(20);
    textStyle(NORMAL);
    text("" + score, windowWidth/2 + 20 , 120);
  }
  
  if (opacity >= 0) {
    opacity -= 1;
  }
  
  if (opacity <= 0) {
    if (score < 400) {
      textSize(30);
      textStyle(BOLDITALIC);
      fill(255);
      text("You didn't advance to the next stage\n  Keep the enthusiasm alive! Success is just ahead.!", windowWidth/2, windowHeight/2);
      // Create a button to link to caena academy
      let button = createButton('Learn more');
      button.position(windowWidth / 2 - 100, windowHeight / 2 + 100);
      button.style('background-color', 'transparent'); 
      button.style('color', 'white'); 
      button.style('border', 'solid');
      button.style('border-radius', '10px'); 
      button.style('padding', '20px 40px'); 
      button.style('font-size', '24px');

      button.mousePressed(openWebsite); 
      
      // Function to open the website in a new tab
      function openWebsite() {
        window.open('https://caena.io/academy/', '_blank');
      }
      
      endscreen = true;
    } 
    else {
      level4 = true;
      opacity = 200;
    }
  }
  
  if (points != 0) {
    textSize(textSizeValue + 10);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
  }
  
  if (changeOpacity >= 0) {
    changeOpacity -= 2;
  }
  
  if (changeOpacity <= 0) {
    score += points;
    points = 0;
  }
}

// Transition from level4 to level5
else if (!level1 && !level2 && !level3 && !level4 && level4completed && !level5 ) {
  if (!endscreen) {
    fill(128, 128, 128);
    rect(windowWidth/2-40, 100, 100, 40, 20);
    image(img8, windowWidth/2-40, 120);
    fill(255);
    textSize(20);
    textStyle(NORMAL);
    text("" + score, windowWidth/2 + 20 , 120);
  }
  
  if (opacity >= 0) {
    opacity -= 1;
  }
  
  if (opacity <= 0) {
    if (score < 420) {
      level5 = true;
      opacity = 200;
  }
}
  
  if (points != 0) {
    textSize(textSizeValue + 10);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
  }
  
  if (changeOpacity >= 0) {
    changeOpacity -= 2;
  }
  
  if (changeOpacity <= 0) {
    score += points;
    points = 0;
  }
}



if (level1) {
  fill('#FFFFFF');
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
    textSize(textSizeValue + 15);
    text("Who Wants to be a Unicorn\n", windowWidth/2, y1);

    fill(255);

    textSize(textSizeValue - 2);
    text("Do you have what it takes to raise venture capital ", windowWidth/2, y1+50);
    text("and build a world class startup? ", windowWidth/2, y1+75);
   
    // fill(textColor)
  //  .strokeWeight(0)
    // Display the logo
    //image(imgUni,  windowWidth/2 , y2);
   /*.*/textSize(textSizeValue + 10);
   fill(221,197,110);
   text(" Game Rules", windowWidth/2, y2+40); 
   fill(255);
   textSize(textSizeValue -2);
    text("You are the founder of a Seed Stage startup raising capital to grow.", windowWidth/2, y2+95);
    text("Do you have what it takes to be 1 of 2,000 startups", windowWidth/2, y2+150);
    text("that are able to raise from VCs?", windowWidth/2,y2 + 180);


    // 3rd screen
    //image(imgUni,  windowWidth/2 , y3-20);
    fill(255);
    textSize(textSizeValue + 10);
    textFont(fontPoppins )
    textStyle(BOLDITALIC);
    text("Got a Warm Referral?", windowWidth/2, y3 + 10);
    if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y3+100 && mouseY >= y3+50) {
      fill(255, 255, 255);
     textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }
    push();
    stroke(255);
    rect((width-100)/2, y3 + 50, 100, 50, 10);
    textSize(textSizeValue );
    textStyle(NORMAL);
    fill(textColor);
    text("Yes", windowWidth/2 + 5, y3+75);
  
    if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y3+175 && mouseY >= y3+125) {
      fill(255, 255, 255);
      textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
      
    }
  
    rect((width-100)/2, y3+125, 100, 50, 10);
    textSize(textSizeValue );
    textStyle(NORMAL);
    fill(textColor);
    text("No", windowWidth/2 + 5, y3+150);
    
    //next Question
   // image(imgUni,  windowWidth/2 , y3-20);
    fill(255);
    textSize(textSizeValue +10);
    textStyle(BOLDITALIC);
    text("If yes, who referred you?", windowWidth/2, y4 + 20);

    if (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y4+100 && mouseY >= y4+50) {
      fill(255, 255, 255);
      textColor = color(0); 

    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
      
    }
  
    rect((width-200)/2, y4 + 50, 200, 50, 10);
    
    textSize(textSizeValue );
    textStyle(NORMAL);
    fill(textColor);
    text("VC Partner", windowWidth/2, y4+79);

    if (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y4+180 && mouseY >= y4+130) {
      fill(255, 255, 255);
      textColor = color(0); 

    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
      
      
    }

    rect((width-200)/2, y4+130, 200, 50, 10);

    textSize(textSizeValue );
    textStyle(NORMAL);
    fill(textColor);
    text("Portfolio Company", windowWidth/2, y4+159);

    if (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y4+260 && mouseY >= y4+210) {
      fill(255, 255, 255);
      textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
      
    }
    rect((width-200)/2, y4+210, 200, 50, 10);
    textSize(20);
    textStyle(NORMAL);
    fill(textColor);
    text("LP", windowWidth/2, y4+239);
    
    textSize(textSizeValue + 10);
      textStyle(BOLDITALIC);
      fill(255);  
      text("Have you attended any accelerator?", windowWidth/2, y5);
      
      if (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y5+100 && mouseY >= y5+50) {
        fill(255, 255, 255);
        textColor = color(0); 
  
      }
      else {
        fill(255, 0, 0, 0.5); 
        textColor = color(255);
        
      }
    
      rect((width-300)/2, y5 + 50, 300, 50, 10);
      
      textSize(textSizeValue );
      textStyle(NORMAL);
      fill(textColor);
      text("YC", windowWidth/2, y5+75);
  
      if (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y5+180 && mouseY >= y5+130) {
        fill(255, 255, 255);
         textColor = color(0); 
  
      }
      else {
        fill(255, 0, 0, 0.5); 
        textColor = color(255);
        
      }
  
      rect((width-300)/2, y5+130, 300, 50, 10);
      textSize(textSizeValue );
      textStyle(NORMAL);
      fill(textColor);
      text("Techstars, SOSV, 500 startups", windowWidth/2, y5+155);
  
      if (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y5+260 && mouseY >= y5+210) {
        fill(255, 255, 255);
        textColor = color(0);
  
      }
      else {
        fill(255, 0, 0, 0.5); 
        textColor = color(255);
        
      }
  
      rect((width-300)/2, y5+210, 300, 50, 10);
  
      textSize(textSizeValue );
      textStyle(NORMAL);
      fill(textColor);
      text("Others", windowWidth/2, y5+235);
  
      if (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y5+340 && mouseY >= y5+290) {
        fill(255, 255, 255);
        textColor = color(0);
      }
      else {
        fill(255, 0, 0, 0.5); 
        textColor = color(255);;
        
      }
  
      rect((width-300)/2, y5+290, 300, 50, 10);
  
      textSize(textSizeValue );
      textStyle(NORMAL);
      fill(textColor);
      text("None", windowWidth/2, y5+315);

      
    //next Question
    //  image(imgUni,  windowWidth/2 , y6-20);
      textSize(textSizeValue + 10);
      textStyle(BOLDITALIC);
      fill(255);
      textAlign(CENTER, CENTER);
      text("Founders recorded previous exits?", windowWidth / 2, y6+20);

      let buttonWidth = min(windowWidth * 0.8, 300); // Adjust the scaling factor and maximum width as needed
      let buttonHeight = min(windowHeight * 0.05, 50); // Adjust the scaling factor and maximum height as needed
      let buttonY = y6 + buttonHeight + 10; // Adjust the vertical position as needed
      
  if (mouseX >= (windowWidth - buttonWidth) / 2 && mouseX <= (windowWidth - buttonWidth) / 2 + buttonWidth &&
      mouseY >= buttonY && mouseY <= buttonY + buttonHeight) {
        fill(255, 255, 255);
        textColor = color(0); 
       }
       else {
         fill(255, 0, 0, 0.5); 
         textColor = color(255);
       }
      rect((width-100)/2, y6 + 50, 100, 50, 10);
      textSize(textSizeValue);
      textStyle(NORMAL);
      fill(textColor);
      text(">10m", windowWidth/2 + 5, y6+75);
  
      if (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y6+180 && mouseY >= y6+130) {
        fill(255, 255, 255);
        textColor = color(0); 
       }
       else {
         fill(255, 0, 0, 0.5); 
         textColor = color(255);
       }
  
      rect((width-100)/2, y6+130, 100, 50, 10);
      textSize(textSizeValue);
      textStyle(NORMAL);
      fill(textColor);
      text("1 to 10m", windowWidth/2, y6+155);
       if (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y6+260 && mouseY >= y6+210) {
        fill(255, 255, 255);
        textColor = color(0); 
       }
       else {
         fill(255, 0, 0, 0.5); 
         textColor = color(255);
       }
      rect((width-100)/2, y6+210, 100, 50,10);
      textSize(textSizeValue);
      textStyle(NORMAL);
      fill(textColor);
      text("< 1m", windowWidth/2, y6+235);
      if (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y6+340 && mouseY >= y6+290) {
        fill(255, 255, 255);
        textColor = color(0); 
       }
       else {
         fill(255, 0, 0, 0.5); 
         textColor = color(255);
       }
  
      rect((width-100)/2, y6+290, 100, 50, 10);
      textSize(textSizeValue);
      textStyle(NORMAL);
      fill(textColor);
      text("None", windowWidth/2, y6+315);

// next Question
     // image(imgUni,  windowWidth/2 , y7-20);
      textSize(textSizeValue + 10);
      fill(255);  
      text("Founder Experience", windowWidth/2,y7+20);
        if (mouseX <= (width-500)/2+500 && mouseX >= (width-500)/2 && mouseY <= y7+100 && mouseY >= y7+50) {
          fill(255, 255, 255);
          textColor = color(0); 
        }
        else {
          fill(255, 0, 0, 0.5); 
          textColor = color(255);
        }
    
      rect((width-500)/2, y7 + 50, 500, 50,10);
      textSize(textSizeValue );
      textStyle(NORMAL);
      fill(textColor);
      text("Big Tech (Meta, Apple etc) or Tier 1 VC", windowWidth/2, y7+75);
  
      if (mouseX <= (width-500)/2 + 500 && mouseX >= (width-500)/2 && mouseY <= y7+180 && mouseY >= y7+130) {
        fill(255, 255, 255);
        textColor = color(0); 
       }
       else {
         fill(255, 0, 0, 0.5); 
         textColor = color(255);
       }
  
      rect((width-500)/2, y7+130, 500, 50, 10);
      textSize(textSizeValue );
      textStyle(NORMAL);
      fill(textColor);
      text("Other prominent startup or VC", windowWidth/2, y7+155);
  
      if (mouseX <= (width-500)/2+500 && mouseX >= (width-500)/2 && mouseY <= y7+260 && mouseY >= y7+210) {
        fill(255, 255, 255);
        textColor = color(0); 
        }
        else {
          fill(255, 0, 0, 0.5); 
          textColor = color(255);
        }
  
      rect((width-500)/2, y7+210, 500, 50, 10);
  
      textSize(textSizeValue);
      textStyle(NORMAL);
      fill(textColor);
      text("Other Startup experience", windowWidth/2, y7+235);
  
      if (mouseX <= (width-500)/2+500 && mouseX >= (width-500)/2 && mouseY <= y7+340 && mouseY >= y7+290) {
        fill(255, 255, 255);
        textColor = color(0); 
        }
        else {
          fill(255, 0, 0, 0.5); 
          textColor = color(255);
        }
          
      rect((width-500)/2, y7+290, 500, 50, 10);
  
      textSize(textSizeValue);
      textStyle(NORMAL);
      fill(textColor);
      text("Consulting, Investment Banking, Professional Svc", windowWidth/2, y7+315);

      if (mouseX <= (width-500)/2+500 && mouseX >= (width-500)/2 && mouseY <= y7+420 && mouseY >= y7+370) {
        fill(255, 255, 255);
        textColor = color(0); 
       }
       else {
         fill(255, 0, 0, 0.5); 
         textColor = color(255);
       }
  
      rect((width-500)/2, y7+370, 500, 50,10);
      pop();
      textSize(textSizeValue );
      textStyle(NORMAL);
      fill(textColor);
      text("Fresh Grad", windowWidth/2, y7+395);

      if (mouseX <= windowWidth/2 + 80 && mouseX >= windowWidth/2 - 80 && mouseY <= windowHeight/2 + 270 && mouseY >= windowHeight/2 + 130 && !src2) {
        image(img3, windowWidth/2,  windowHeight/2 + 140, 80, 80);
      }
    
      if (!src1) {
        image(img1, windowWidth/2, windowHeight/2 + 140, 80, 80);
      }
    

    if (src1 && !src2) {
      // image(img2, 0.5*windowWidth, 0.5*windowHeight, scale*windowWidth, 0.6*windowHeight);
      if (y1 >= -300) {
        y1-= 4;
     }
     if (y2 >= windowHeight/2 - 100) {
      y2 -= 4;
     }
    //  if (m2 >= 820) {
    //   m2 -= 4;
    // }
    if (y3 >= windowHeight + 100) {
      y3 -=4;
    }
    if (y4 >= 2 * windowHeight + 100) {
      y4 -= 4;
    }

    image(img1, windowWidth/2, windowHeight/2 + 140, 80, 80);
    // 3rd screen 'yes' button
    
    // 3rd screen 'no' button

    }

    if (src1 && src2 && y2 <= -300 && y3 <= windowHeight/2 ) {
      fill(128, 128, 128);
      rect(windowWidth/2-40, 100, 100, 40, 20);
      image(img8, windowWidth/2-40, 120);
      fill(255);
      text(""+score, windowWidth/2 + 20 , 120);
    }

    if (src1 && src2 && !src3) {

      //image(img1, windowWidth/2, 600);
      if (m2 >= windowHeight/2 - 100) {
        m2 -= 4;
      }
      if ( y1 >= -620) {
        y1-=4;
      }
      if (y2 >= -440) {
        y2-=4;
      }
      // completed = 10;
    //   if (m2 <= 300) 
    //  { 
    //   if (m5 <= 150) {
    //     m5 += 10;
    //   }
    //   textSize(20);

      if (y4 >= windowHeight + 100) {
        y4 -= 4;
      }
      if (y3 >= windowHeight/2 - 100) {
        y3 -= 4;
      }
      if (y3 <= 300) 

     { 
      if (opacity <= 200) {
        opacity += 1;
      }
      textSize(30);
      textStyle(NORMAL);
      fill(0, 0, 0, opacity);
      //text("Score: 0", 790, 100);
    }
  
      // ** Completion bar **

    // textStyle(NORMAL);
    // fill(textColor);
    // text("10% completed", 780, m5);
    // fill(0, 255, 0);
    // rect(1550/2, m5+30, ((completed/100)*200), 10, 20, 0, 0, 20);
    // fill(255, 255, 255);
    // rect(775 + ((completed/100)*200), m5+30, 200 - ((completed/100)*200), 10, 0, 20, 20, 0);
  //}
      
    }


    if (src1 && src2 && src3 && !src4) {

      if (y3 >= 200) {
        y3 -= 4;
      }
      if (y3 <= 200) {
        y3 = -500;
      }
      if (y4 >= windowHeight/2 - 100) {
        y4 -= 4;
      }
    //   if (y3 <= 300) 

    //  { 
      if (opacity <= 200) {
        opacity += 2;
      }
      // textSize(30);
      // textStyle(NORMAL);
      // fill(0, 0, 0, opacity);
      // text("Score: 0", 790, 100);
      if (points != 0) {
        textSize(textSizeValue+10);
      textStyle(NORMAL);
      fill(0, 0, 0, changeOpacity);  // First of all changeOpacity will go from 0 to 200 and then again from 200 to 0
      text("+" + points, windowWidth/2 + 100, 100);
      }
      if (changeOpacity >= 0) {
        changeOpacity -= 2;
      }
      if (changeOpacity <= 0) {
        score += points;
      points = 0;
      }
   // }
  }

    if (src1 && src2 && src3 && src4 && !src5 ) {

      if (y3 >= 200) {
        y3 -= 6;
      }
      if (y3 <= 200) {
        y3 = -500;
      }

      if (y4 >= 200) {
        y4 -= 6;
      }
      
      if (y4 <= 200) {
        y4 = -500;
      }
      if (points != 0) {
        textSize(textSizeValue+10);
      textStyle(NORMAL);
      fill(0, 0, 0, changeOpacity);
      text("+" + points, windowWidth/2 + 100, 100);
      }
      if (changeOpacity >= 0) {
        changeOpacity -= 2;
      }
      if (changeOpacity <= 0) {
        score += points;
      points = 0;
      }

      if (y5 >= windowHeight/2 - 100) {
        y5 -=6;
      }
    }

    if (src1 && src2 && src3 && src4 && src5 && !src6) {

      if (y5 >= 200) {
        y5 -= 6;
      }
      
      if (y5 <= 200) {
        y5 = -500;
      }

      if (y6 >= windowHeight/2 - 100) {
        y6 -=6;
      }

      if (points != 0) {
        textSize(textSizeValue+10);
      textStyle(NORMAL);
      fill(0, 0, 0, changeOpacity);
      text("+" + points, windowWidth/2 + 100, 100);
      }
      if (changeOpacity >= 0) {
        changeOpacity -= 2;
      }
      if (changeOpacity <= 0) {
        score += points;
      points = 0;
      }

      
    }
    if (src1 && src2 && src3 && src4 && src5 && src6 && !src7) {

      if (y6 >= 200) {
        y6 -= 6;
      }
      
      if (y6 <= 200) {
        y6 = -500;
      }

      if (y7 >= windowHeight/2 - 150) {
        y7 -=6;
      }

      if (points != 0) {
        textSize(textSizeValue+10);
      textStyle(NORMAL);
      fill(0, 0, 0, changeOpacity);
      text("+" + points, windowWidth/2 + 100, 100);
      }
      if (changeOpacity >= 0) {
        changeOpacity -= 2;
      }
      if (changeOpacity <= 0) {
        score += points;
      points = 0;
     // level1 = false;
      }

      
    }

  }



if (level2) {
        if (src8 && y8 <= -300) {
          fill(128, 128, 128);
        rect(windowWidth/2-40, 100, 100, 40, 20);
        image(img8, windowWidth/2-40, 120);
        fill(255);
        textSize(20);
        textStyle(NORMAL);
        text(""+score, windowWidth/2 + 20 , 120);
        }
        fill(255);
        textSize(textSizeValue +10);
        textStyle(BOLDITALIC);  
        text("Congratulations!", windowWidth/2, y8);
        text(" You are on to the second stage", windowWidth/2, y8 + 70);

        if (mouseX >=(width - 300) / 2 && mouseX <= (width - 300) / 2 + 300 && mouseY >=  y8 + 120 && mouseY <= y8 + 190) {
          fill(255, 255, 255);
          textColor = color(0); 
        }
        else {
          fill(255, 0, 0, 0.5); 
          textColor = color(255);
        }
        push();
        stroke(255);
        rect((width-300)/2, y8 + 120, 300, 70, 20);
        textSize(textSizeValue);
        textStyle(NORMAL);
        fill(textColor);
        text("Click here to continue", windowWidth/2, y8 + 150);

        fill(255);
        textSize(textSizeValue +10);
        textStyle(BOLDITALIC);
        text("Do you have a deck?", windowWidth/2, y9 + 20);
        
        if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y9+100 && mouseY >= y9+50) {
          fill(255, 255, 255);
          textColor = color(0); 
        }
        else {
          fill(255, 0, 0, 0.5); 
          textColor = color(255);
        }
        rect((width-100)/2, y9 + 50, 100, 50,10);
        fill(textColor);
        textSize(textSizeValue );
        textStyle(NORMAL);
       
        text("Yes", windowWidth/2 + 5, y9+75);
        
        if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y9+170 && mouseY >= y9+125){
          fill(255, 255, 255);
          textColor = color(0); 
        }
        else {
          fill(255, 0, 0, 0.5); 
          textColor = color(255);
        }
        rect((width-100)/2, y9+125, 100, 50,10);
        textSize(textSizeValue );
        textStyle(NORMAL);
        fill(textColor);
        text("No", windowWidth/2 + 5, y9+150);

        //next Question
        fill(255);
        textSize(textSizeValue +10);
        textStyle(BOLDITALIC);
        text("Are you a crypto or NFT company?", windowWidth/2, y10);
  
      if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y10+100 && mouseY >= y10+50) {
        fill(255, 255, 255);
        textColor = color(0); 
      }
      else {
        fill(255, 0, 0, 0.5); 
        textColor = color(255);
      }
      rect((width-100)/2, y10 + 50, 100, 50,10);
      textSize(textSizeValue );
      textStyle(NORMAL);
      fill(textColor);
      text("Yes", windowWidth/2 + 5, y10+75);
  
      if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y10+175 && mouseY >= y10+125){
        fill(255, 255, 255);
      textColor = color(0); 
      }
      else {
        fill(255, 0, 0, 0.5); 
        textColor = color(255);
      }
  
  rect((width-100)/2, y10+125, 100, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
  fill(textColor);
  text("No", windowWidth/2 + 5, y10+150);

  //next Question
  fill(255);
  textSize(textSizeValue +10);
  textStyle(BOLDITALIC);
  text("Are you an A.I company?", windowWidth/2, y11);
  
  if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y11+100 && mouseY >= y11+50) {
    fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }
  
  rect((width-100)/2, y11 + 50, 100, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
  fill(textColor);
  text("Yes", windowWidth/2 + 5, y11+75);
  
  if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y11+175 && mouseY >= y11+125) 
  {
    fill(255, 255, 255);
      textColor = color(0); 
      }
      else {
        fill(255, 0, 0, 0.5); 
        textColor = color(255);
      }
  
  rect((width-100)/2, y11+125, 100, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
  fill(textColor);
  text("No", windowWidth/2 + 5, y11+150);



  fill(255);
  textSize(textSizeValue +10);
  textStyle(BOLDITALIC);
  text("Are you a technology company?", windowWidth/2, y12);
  
  if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y12+100 && mouseY >= y12+50) {
    fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }
  
  rect((width-100)/2, y12 + 50, 100, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
  fill(textColor);
  text("Yes", windowWidth/2 + 5, y12+75);
  
  if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y12+175 && mouseY >= y12+125) 
  {
    fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }
  
  rect((width-100)/2, y12+125, 100, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
  fill(textColor);
  text("No", windowWidth/2 + 5, y12+150);


//next question

  fill(255);
  textSize(textSizeValue +10);
  textStyle(BOLDITALIC);
  text("How big is the founding team?", windowWidth/2, y13);
  
  if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y13+100 && mouseY >= y13+50) {
    fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }
  
  rect((width-200)/2, y13 + 50, 200, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
  fill(textColor);
  text("Solo founder", windowWidth/2 + 5, y13+75);
  
  if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y13+175 && mouseY >= y13+125) 
  {
    fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }
  
  rect((width-200)/2, y13+125, 200, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
  fill(textColor);
  text("2-3", windowWidth/2 + 5, y13+150);


  if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y13+250 && mouseY >= y13+195) 
  {
    fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }
  
  rect((width-200)/2, y13+200, 200, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
  fill(textColor);
  text("4+", windowWidth/2 + 5, y13+225);


//next question

fill(255);
textSize(textSizeValue +10);
textStyle(BOLDITALIC);
text("What’s the scale of the revenue opportunity?", windowWidth/2, y14);

if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+100 && mouseY >= y14+50) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-100)/2, y14 + 50, 100, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("$10b ", windowWidth/2 + 5, y14+75);

if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+175 && mouseY >= y14+125) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-100)/2, y14+125, 100, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("$3b", windowWidth/2 + 5, y14+150);


if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+250 && mouseY >= y14+195) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-100)/2, y14+200, 100, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("$1b", windowWidth/2 + 5, y14+225);

if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+325 && mouseY >= y14+270) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-100)/2, y14+275, 100, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("100m", windowWidth/2 + 5, y14+300);


if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+400 && mouseY >= y14+345) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-100)/2, y14+350, 100, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("<$100m", windowWidth/2 + 5, y14+375);


//Next Question
fill(255);
textSize(textSizeValue +10);
textStyle(BOLDITALIC);
text("What is your business model?", windowWidth/2, y15);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+100 && mouseY >= y15+50) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y15 + 50, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Too early to say how we will make money ", windowWidth/2 + 5, y15+75);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+175 && mouseY >= y15+125) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y15+125, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Subscription (SaaS) ", windowWidth/2 + 5, y15+150);


if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+250 && mouseY >= y15+195) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y15+200, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Marketplace", windowWidth/2 + 5, y15+225);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+325 && mouseY >= y15+270) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y15+275, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Commission", windowWidth/2 + 5, y15+300);


if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+400 && mouseY >= y15+345) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y15+350, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Advertising", windowWidth/2 + 5, y15+375);


//next Question
fill(255);
textSize(textSizeValue +10);
textStyle(BOLDITALIC);
text("How will you succeed against competition?", windowWidth/2, y16);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+100 && mouseY >= y16+50) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y16 + 50, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Effective distribution", windowWidth/2 + 5, y16+75);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+175 && mouseY >= y16+125) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y16+125, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Proprietary technology", windowWidth/2 + 5, y16+150);


if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+250 && mouseY >= y16+195) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y16+200, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Superior product", windowWidth/2 + 5, y16+225);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+325 && mouseY >= y16+270) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y16+275, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("We will win on price", windowWidth/2 + 5, y16+300);


if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+400 && mouseY >= y16+345) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y16+350, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("First mover advantage ", windowWidth/2 + 5, y16+375);


// next question
fill(255);
  textSize(textSizeValue +10);
  textStyle(BOLDITALIC);
  text("What are your unit economics", windowWidth/2, y17);
  
  if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y17+100 && mouseY >= y17+50) {
    fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }
  
  rect((width-500)/2, y17 + 50, 500, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
  fill(textColor);
  text("Too early, we don’t have a model!", windowWidth/2 + 5, y17+75);
  
  if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y17+175 && mouseY >= y17+125) 
  {
    fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }
  
  rect((width-500)/2, y17+125, 500, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
  fill(textColor);
  text("Evidence of positive unit economics ", windowWidth/2 + 5, y17+150);


  if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y17+250 && mouseY >= y17+195) 
  {
    fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }
  
  rect((width-500)/2, y17+200, 500, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
  fill(textColor);
  text("Link to financial model summary\n(powered by Caena)", windowWidth/2 + 5, y17+225);

// next question

fill(255);
textSize(textSizeValue +10);
textStyle(BOLDITALIC);
text("What is your MRR?", windowWidth/2, y18);

if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y18+100 && mouseY >= y18+50) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-100)/2, y18 + 50, 100, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("$50k+", windowWidth/2 + 5, y18+75);

if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y18+175 && mouseY >= y18+125) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-100)/2, y18+125, 100, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("$5k+", windowWidth/2 + 5, y18+150);


if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y18+250 && mouseY >= y18+195) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }


rect((width-100)/2, y18+195,100, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("$1k", windowWidth/2 + 5, y18+225);


// next question

fill(255);
textSize(textSizeValue +10);
textStyle(BOLDITALIC);
text("What's the primary Use of Funds?", windowWidth/2, y19);

if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+100 && mouseY >= y19+50) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-200)/2, y19 + 50, 200, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Sales & Marketing ", windowWidth/2 + 5, y19+75);

if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+175 && mouseY >= y19+125) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-200)/2, y19+125, 200, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Develop MVP", windowWidth/2 + 5, y19+150);


if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+250 && mouseY >= y19+195) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-200)/2, y19+200, 200, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Hire Support Team", windowWidth/2 + 5, y19+225);

if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+325 && mouseY >= y19+270) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-200)/2, y19+275, 200, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Repay Debt", windowWidth/2 + 5, y19+300);


if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+400 && mouseY >= y19+345) 
{
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-200)/2, y19+350, 200, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Refine Product", windowWidth/2 + 5, y19+375);

/* if (mouseX <= windowWidth/2 + 80 && mouseX >= windowWidth/2 - 80 && mouseY <= windowHeight/2 + 270 && mouseY >= windowHeight/2 + 130 && !src2) {
  image(img3, windowWidth/2,  windowHeight/2 + 200);
} */

/* 
if (mouseX <= windowWidth/2 + 80 && mouseX >= windowWidth/2 - 80 && mouseY <= windowHeight/2 + 270 && mouseY >= windowHeight/2 + 130 && !src9) {
  image(img3, windowWidth/2,  windowHeight/2 + 200);
} */

pop();


  if (src8 && !src9) {
    if (y8 >= -300) {
      y8 -= 4;
    }
    if (y9 >= windowHeight/2 - 100) {
      y9 -= 4;
    }
  
    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }
  }


  if (src8 && src9 && !src10) {
    if (disqualified) {
      if (y9 >= 200) {
        y9 -= 3;

      }
      if (y9 <= 200) {
        y9 = -500;
      }
      if (opacity >= 0) {
        opacity -= 1;
        
    
      }
      if (opacity <= 0) {
       // if (score < 25) {
          textSize(20);
          textStyle(BOLDITALIC);
          fill(255);
          text(" hmm... who are you?", windowWidth/2, windowHeight/2);
          text("Steve Jobs II? Come back when you're ready!", windowWidth/2, windowHeight/2 + 50);
          let button = createButton('Learn more');
          button.position(windowWidth / 2 -100, windowHeight / 2 + 100);
          button.style('background-color', 'transparent'); 
          button.style('color', 'white'); 
          button.style('border', 'solid');
          button.style('border-radius', '10px'); 
          button.style('padding', '20px 40px'); 
          button.style('font-size', '24px');
          button.mousePressed(openWebsite); 

          
      }
    }

    else {
      // if (opacity <= 200) {
      //   opacity +=2;
      // }

      if (points != 0) {
      textSize(30);
      textStyle(NORMAL);
      fill(0, 0, 0, changeOpacity);
      text("+" + points, windowWidth/2 + 100, 100);
      }
      if (changeOpacity >= 0) {
        changeOpacity -= 2;
      }
      if (changeOpacity <= 0) {
        score += points;
      points = 0;
      }


      if (y9 >= 200) {
        y9 -= 6;

      }
      if (y9 <= 200) {
        y9 = -500;
      }
      if (y10 >= windowHeight/2 - 100) {
        y10 -= 6;
      }
    }
    
function openWebsite() {
  window.open('https://caena.io/academy/', '_blank');
}
  }

  if (src8 && src9 && src10 &&!src11) {
    if (disqualified) {
      if (y10 >= 200) {
        y10 -= 6;

      }
      if (y10 <= 200) {
        y10 = -500;
      }
      if (opacity >= 0) {
        opacity -= 1;
        
    
      }
      if (opacity <= 0) {
       // if (score < 25) {
          textSize(20);
          textStyle(BOLDITALIC);
          fill(255);
          text("  Oh, you missed that boat by a few months!", windowWidth/2, windowHeight/2);
          text("We may be back to that soon so don’t give up", windowWidth/2, windowHeight/2 + 50);
        
        let button = createButton('Learn more');
        button.position(windowWidth / 2 -100, windowHeight / 2 + 100);
        button.style('background-color', 'transparent'); 
        button.style('color', 'white'); 
        button.style('border', 'solid');
        button.style('border-radius', '10px'); 
        button.style('padding', '20px 40px'); 
        button.style('font-size', '24px');
        button.mousePressed(openWebsite); 

      }
    }

    else {
      // if (opacity <= 200) {
      //   opacity +=2;
      // }

      if (points != 0) {
        textSize(30);
      textStyle(NORMAL);
      fill(0, 0, 0, changeOpacity);
      text("+" + points, windowWidth/2 + 100, 100);
      }
      if (changeOpacity >= 0) {
        changeOpacity -= 2;
      }
      if (changeOpacity <= 0) {
        score += points;
      points = 0;
      }


      if (y10 >= 200) {
        y10 -= 6;

      }
      if (y10 <= 200) {
        y10= -500;
      }
      if (y11 >= windowHeight/2 - 100) {
        y11 -= 6;
      }
    }
    function openWebsite() {
      window.open('https://caena.io/academy/', '_blank');
    }
  }





  if (src8 && src9 && src10 && src11 && !src12) {
    if (y11 >= 200) {
      y11 -= 6;

    }
    if (y11 <= 200) {
      y11 = -500;
    }
    if (y12 >= windowHeight/2 - 100) {
      y12 -=6;
    }
    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }
  
  }


  if (src8 && src9 && src10 && src11 && src12 &&!src13) {
    if (y12 >= 200) {
      y12 -= 3;

    }
    if (y12<= 200) {
      y12 = -500;
    }
    if (y13 >= windowHeight/2 - 100) {
      y13 -=4;
    }
    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }
  
  }

  if (src8 && src9 && src10 && src11 && src12 &&src13 &&!src14) {
    if (y13 >= 200) {
      y13 -= 3;

    }
    if (y13<= 200) {
      y13 = -500;
    }
    if (y14 >= windowHeight/2 - 100) {
      y14 -=4;
    }
    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }
  
  }
  if (src8 && src9 && src10 && src11 && src12 && src13 &&src14 &&!src15) {

    if (y14 >= 200) {
      y14 -= 6;
    }
    
    if (y14 <= 200) {
      y14 = -500;
    }
  
    if (y15 >= windowHeight/2 - 100) {
      y15 -=6;
    }
    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }


}
if (src8 && src9 && src10 && src11 && src12 && src13 &&src14 &&src15 &&!src16) {

  if (y15 >= 200) {
    y15 -= 6;
  }
  
  if (y15 <= 200) {
    y15 = -500;
  }

  if (y16 >= windowHeight/2 - 100) {
    y16 -=4;
  }
  if (points != 0) {
    textSize(30);
  textStyle(NORMAL);
  fill(0, 0, 0, changeOpacity);
  text("+" + points, windowWidth/2 + 100, 100);
  }
  if (changeOpacity >= 0) {
    changeOpacity -= 2;
  }
  if (changeOpacity <= 0) {
    score += points;
  points = 0;
  }


}

if (src8 && src9 && src10 && src11 && src12 && src13 &&src14 &&src15 &&src16 &&!src17) {

  if (y16>= 200) {
    y16 -= 3;
  }
  
  if (y16 <= 200) {
    y16 = -500;
  }

  if (y17 >= windowHeight/2 - 100) {
    y17 -=4;
  }
  if (points != 0) {
    textSize(30);
  textStyle(NORMAL);
  fill(0, 0, 0, changeOpacity);
  text("+" + points, windowWidth/2 + 100, 100);
  }
  if (changeOpacity >= 0) {
    changeOpacity -= 2;
  }
  if (changeOpacity <= 0) {
    score += points;
  points = 0;
  }


}


if (src8 && src9 && src10 && src11 && src12 && src13 &&src14 &&src15 &&src16 &&src17 &&!src18) {
  if (disqualified) {
    if (y17 >= 200) {
      y17 -= 3;

    }
    if (y17 <= 200) {
      y17 = -500;
    }
    if (opacity >= 0) {
      opacity -= 1;
      
  
    }
    if (opacity <= 0) {
        textSize(20);
        textStyle(BOLDITALIC);
        fill(255);
        text(" It is important to have a model", windowWidth/2, windowHeight/2);
        text("Come back when you're ready!", windowWidth/2, windowHeight/2 + 50);
        let button = createButton('Learn more');
        button.position(windowWidth / 2 -100, windowHeight / 2 + 100);
        button.style('background-color', 'transparent'); 
        button.style('color', 'white'); 
        button.style('border', 'solid');
        button.style('border-radius', '10px'); 
        button.style('padding', '20px 40px'); 
        button.style('font-size', '24px');
        button.mousePressed(openWebsite); 

            }
  }

  else {

    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }


    if (y17 >= 200) {
      y17 -= 3;

    }
    if (y17 <= 200) {
      y17 = -500;
    }
    if (y18 >= windowHeight/2 - 100) {
      y18 -= 4;
    }
  }
  function openWebsite() {
    window.open('https://caena.io/academy/', '_blank');
  }

}
if (src8 && src9 && src10 && src11 && src12 && src13 &&src14 &&src15 &&src16 &&src17 &&src18 &&!src19) {

  if (y18>= 200) {
    y18 -= 3;
  }
  
  if (y18<= 200) {
    y18 = -500;
  }

  if (y19 >= windowHeight/2 - 150) {
    y19 -=4;
  }
  if (points != 0) {
    textSize(30);
  textStyle(NORMAL);
  fill(0, 0, 0, changeOpacity);
  text("+" + points, windowWidth/2 + 100, 100);
  }
  if (changeOpacity >= 0) {
    changeOpacity -= 2;
  }
  if (changeOpacity <= 0) {
    score += points;
  points = 0;
  }

  
}



}


if (level3){

  if (src20 && y20 <= -300) {
  rect(windowWidth/2-40, 100, 100, 40, 20);
  image(img8, windowWidth/2-40, 120);
  fill(255);
  textSize(20);
  textStyle(NORMAL);
  text(""+score, windowWidth/2 + 20 , 120);
  }
  fill(255);
  textSize(30);
  textStyle(BOLDITALIC);  
  text("congratulations! \n You are on to the next stage", windowWidth/2, y20);
  textSize(18);
  text("You’re meeting the partner who is expert in your industry\n your goal is to convince them to take a bet on you", windowWidth/2, y20 + 70);


  if (mouseX >=(width - 300) / 2 && mouseX <= (width - 300) / 2 + 300 && mouseY >=  y20 + 120 && mouseY <= y20 + 190) {
    fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

  push();
  stroke(255);
  rect((width-300)/2, y20 + 120, 300, 70, 10);
  textSize(textSizeValue);
  textStyle(NORMAL);
  fill(textColor);
  text("Continue", windowWidth/2, y20 + 150);

  fill(255);
  textSize(textSizeValue +10);
  textStyle(BOLDITALIC);
  text("Why you?", windowWidth/2, y21);

  if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y21+100 && mouseY >= y21+50) {
   fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

  rect((width-500)/2, y21 + 50, 500, 50, 10);
  // textAlign(CENTER, CENTER);
  textSize(textSizeValue );
  textStyle(NORMAL);
fill(textColor);
  text("Personally frustrated  with the problem ", windowWidth/2 + 5, y21+75);

  if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y21+175 && mouseY >= y21+125) {
   fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

  rect((width-500)/2, y21+125, 500, 50, 10);
  // textAlign(CENTER, CENTER);
  textSize(textSizeValue );
  textStyle(NORMAL);
fill(textColor);
  text("Always wanted to build a large startup ", windowWidth/2 + 5, y21+150);

  if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y21+250 && mouseY >= y21+200) {
   fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

  rect((width-500)/2, y21+200, 500, 50, 10);
  // textAlign(CENTER, CENTER);
  textSize(textSizeValue );
  textStyle(NORMAL);
fill(textColor);
  text("Domain expertise", windowWidth/2 + 5, y21+225);

//next Question

  fill(255);
  textSize(textSizeValue +10);
  textStyle(BOLDITALIC);
  text("Why now? ", windowWidth/2, y22);

  if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+100 && mouseY >= y22+50) {
   fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

  rect((width-500)/2, y22 + 50, 500, 50, 10);
  // textAlign(CENTER, CENTER);
  textSize(textSizeValue );
  textStyle(NORMAL);
fill(textColor);
  text("Technology advancement ", windowWidth/2 + 5, y22+75);

  if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+175 && mouseY >= y22+125) {
   fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

  rect((width-500)/2, y22+125, 500, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
fill(textColor);
  text("Recent shift  in customer behaviour", windowWidth/2 + 5, y22+150);

  if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+250 && mouseY >= y22+200) {
   fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

  rect((width-500)/2, y22+200, 500, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
fill(textColor);
  text("Regulatory change", windowWidth/2 + 5, y22+225);

  if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+325&& mouseY >= y22+275) {
   fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

  rect((width-500)/2, y22+275, 500, 50, 10);
  // textAlign(CENTER, CENTER);
  textSize(textSizeValue );
  textStyle(NORMAL);
fill(textColor);
  text("Economic trends", windowWidth/2 + 5, y22+300);

  if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+400 && mouseY >= y22+350) {
   fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

  rect((width-500)/2, y22+350, 500, 50, 10);
  textSize(textSizeValue );
  textStyle(NORMAL);
  fill(textColor);
  text("Time to disrupt large incumbents ", windowWidth/2 + 5, y22+375);


//next question

fill(255);
textSize(textSizeValue +10);
textStyle(BOLDITALIC);
text("What’s your hiring plan? ", windowWidth/2, y23);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+100 && mouseY >= y23+50) {
  fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-500)/2, y23 + 50, 500, 50, 10);
// textAlign(CENTER, CENTER);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Scale the team to boost growth ", windowWidth/2 + 5, y23+75);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+175 && mouseY >= y23+125) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y23+125, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Sales & marketing ", windowWidth/2 + 5, y23+150);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+250 && mouseY >= y23+200) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y23+200, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Tech team", windowWidth/2 + 5, y23+225);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+325&& mouseY >= y23+275) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y23+275, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("HR and finance", windowWidth/2 + 5, y23+300);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+400 && mouseY >= y23+350) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y23+350, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Find a co-founder ", windowWidth/2 + 5, y23+375);



//next Question

fill(255);
textSize(textSizeValue +10);
textStyle(BOLDITALIC);
text("What’s your moat?", windowWidth/2, y24);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+100 && mouseY >= y24+50) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y24 + 50, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Product Innovation ", windowWidth/2 + 5, y24+75);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+175 && mouseY >= y24+125) {
  fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-500)/2, y24+125, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Network Effects", windowWidth/2 + 5, y24+150);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+250 && mouseY >= y24+200) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y24+200, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Intellectual Property", windowWidth/2 + 5, y24+225);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+325&& mouseY >= y24+275) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y24+275, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("All of the above", windowWidth/2 + 5, y24+300);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+400 && mouseY >= y24+350) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y24+350, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("None of the above", windowWidth/2 + 5, y24+375);


//next Question

fill(255);
textSize(textSizeValue +10);
textStyle(BOLDITALIC);
text("Do customers love your solution?", windowWidth/2, y25);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+100 && mouseY >= y25+50) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y25 + 50, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Yes, we’ve got great feedback", windowWidth/2 + 5, y25+75);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+175 && mouseY >= y25+125) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }
rect((width-500)/2, y25+125, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Yes, our retention is very high at >90%", windowWidth/2 + 5, y25+150);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+250 && mouseY >= y25+200) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y25+200, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Yes, growing >10%  M-o-M organically ", windowWidth/2 + 5, y25+225);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+325&& mouseY >= y25+275) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y25+275, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Yes they do", windowWidth/2 + 5, y25+300);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+400 && mouseY >= y25+350) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }
rect((width-500)/2, y25+350, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("It’s hard to say ", windowWidth/2 + 5, y25+375);


// next Question

fill(255);
textSize(textSizeValue +10);
textStyle(BOLDITALIC);
text("What’s your core value proposition?", windowWidth/2, y26);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+100 && mouseY >= y26+50) {
  fill(255, 255, 255);
  textColor = color(0); 
  }
  else {
    fill(255, 0, 0, 0.5); 
    textColor = color(255);
  }

rect((width-500)/2, y26 + 50, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Saves them money ", windowWidth/2 + 5, y26+75);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+175 && mouseY >= y26+125) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-500)/2, y26+125, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Saves them time ", windowWidth/2 + 5, y26+150);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+250 && mouseY >= y26+200) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-500)/2, y26+200, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Eliminates intermediaries", windowWidth/2 + 5, y26+225);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+325&& mouseY >= y26+275) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-500)/2, y26+275, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Meets emotional needs ", windowWidth/2 + 5, y26+300);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+400 && mouseY >= y26+350) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-500)/2, y26+350, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Others ", windowWidth/2 + 5, y26+375);


//next Question
fill(255);
textSize(textSizeValue +10);
textStyle(BOLDITALIC);
text("What’s the most important element of your GTM strategy?", windowWidth/2, y27);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+100 && mouseY >= y27+50) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-500)/2, y27 + 50, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("What’s GTM? ", windowWidth/2 + 5, y27+75);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+175 && mouseY >= y27+125) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-500)/2, y27+125, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Strategic Partnerships", windowWidth/2 + 5, y27+150);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+250 && mouseY >= y27+200) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-500)/2, y27+200, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Paid Ads ", windowWidth/2 + 5, y27+225);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+325&& mouseY >= y27+275) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-500)/2, y27+275, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Product Led Growth", windowWidth/2 + 5, y27+300);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+400 && mouseY >= y27+350) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-500)/2, y27+350, 500, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Social Media", windowWidth/2 + 5, y27+375);



//next Question

fill(255);
textSize(textSizeValue +10);
textStyle(BOLDITALIC);
text("What are the biggest risks to your vision? ", windowWidth/2, y28);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+100 && mouseY >= y28+50) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-300)/2, y28 + 50, 300, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("There are zero risks", windowWidth/2 + 5, y28+75);

if (mouseX <= (width-500)/2 +300  && mouseX >= (width-500)/2 && mouseY <= y28+175 && mouseY >= y28+125) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-300)/2, y28+125, 300, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Competition", windowWidth/2 + 5, y28+150);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+250 && mouseY >= y28+200) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-300)/2, y28+200, 300, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Talent", windowWidth/2 + 5, y28+225);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+325&& mouseY >= y28+275) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-300)/2, y28+275, 300, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Regulation", windowWidth/2 + 5, y28+300);

if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+400 && mouseY >= y28+350) {
 fill(255, 255, 255);
    textColor = color(0); 
    }
    else {
      fill(255, 0, 0, 0.5); 
      textColor = color(255);
    }

rect((width-300)/2, y28+350, 300, 50, 10);
textSize(textSizeValue );
textStyle(NORMAL);
fill(textColor);
text("Adoption", windowWidth/2 + 5, y28+375);

pop();


  if (src20 && !src21) {
    if (y20 >= -300) {
      y20 -= 6;
    }
    if (y21 >= windowHeight/2 - 100) {
      y21 -= 6;
    }
  
    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }
  
  }
  
  if (src20 && src21 && !src22) {
    if (y21 >=200) {
      y21 -= 6;
    }
    if (y21 <= 200) {
      y21 = -500;
    }
    if (y22 >= windowHeight/2 - 100) {
      y22 -= 6;
    }
  
    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }
  
  }

  if (src20 && src21 && src22 &&!src23) {
    if (y22 >=200) {
      y22 -= 6;
    }
    if (y22 <= 200) {
      y22 = -500;
    }
    if (y23 >= windowHeight/2 - 100) {
      y23-= 6;
    }
  
    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }
  
  }
  

  if (src20 && src21 && src22 &&src23 &&!src24) {
    if (y23 >=200) {
      y23 -= 6;
    }
    if (y23 <= 200) {
      y23 = -500;
    }
    if (y24 >= windowHeight/2 - 100) {
      y24-= 6;
    }
  
    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }
  
  }

  if (src20 && src21 && src22 &&src23 &&src24 &&!src25) {
    if (y24 >=200) {
      y24 -= 6;
    }
    if (y24 <= 200) {
      y24 = -500;
    }
    if (y25 >= windowHeight/2 - 100) {
      y25 -= 6;
    }
  
    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }
  
  }
  if (src20 && src21 && src22 &&src23 &&src24 &&src25 &&!src26) {
    if (y25 >=200) {
      y25 -=6;
    }
    if (y25 <= 200) {
      y25 = -500;
    }
    if (y26 >= windowHeight/2 - 100) {
      y26 -= 6;
    }
  
    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }
  
  }
  if (src20 && src21 && src22 &&src23 &&src24 &&src25 &&src26 &&!src27) {
    if (y26 >=200) {
      y26 -= 3;
    }
    if (y26 <= 200) {
      y26 = -500;
    }
    if (y27 >= windowHeight/2 - 100) {
      y27 -= 4;
    }
  
    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }
  
  }


  if (src20 && src21 && src22 &&src23 &&src24 &&src25 &&src26 &&src27 &&!src28) {

    if (y27>= 200) {
      y27 -= 3;
    }
    
    if (y27<= 200) {
      y27 = -500;
    }
  
    if (y28 >= windowHeight/2 - 150) {
      y28 -=4;
    }
    if (points != 0) {
      textSize(30);
    textStyle(NORMAL);
    fill(0, 0, 0, changeOpacity);
    text("+" + points, windowWidth/2 + 100, 100);
    }
    if (changeOpacity >= 0) {
      changeOpacity -= 2;
    }
    if (changeOpacity <= 0) {
      score += points;
    points = 0;
    }
  
    
  }
}

if(level4){
  if (src29 && y29 <= -300) {
    rect(windowWidth/2-40, 100, 100, 40, 20);
    image(img8, windowWidth/2-40, 120);
    fill(255);
    textSize(20);
    textStyle(NORMAL);
    text(""+score, windowWidth/2 + 20 , 120);
    }
    fill(255);
    textSize(textSizeValue +10);
    textStyle(BOLDITALIC);  
    text("Congratulations, you are here! ", windowWidth/2, y29);
    text("Term Sheet Negotiation & Signing ", windowWidth/2, y29 + 70);
  
    if (mouseX >=(width - 300) / 2 && mouseX <= (width - 300) / 2 + 300 && mouseY >=  y29+ 120 && mouseY <= y29 + 190) {
      fill(255, 255, 255);
      textColor = color(0); 
      }
      else {
        fill(255, 0, 0, 0.5); 
        textColor = color(255);
      }
  
    push();
    stroke(255);
    rect((width-300)/2, y29 + 120, 300, 70, 10);
    textSize(textSizeValue);
    textStyle(NORMAL);
    fill(textColor);
    text("Click here to continue", windowWidth/2, y29 + 150);


    fill(255);
    textSize(textSizeValue +10);
    textStyle(BOLDITALIC);
    text("Happy to offer you a choice from the following:", windowWidth/2, y30);

      if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y30+100 && mouseY >= y30+50) {
      fill(255, 255, 255);
        textColor = color(0); 
        }
        else {
          fill(255, 0, 0, 0.5); 
          textColor = color(255);
        }

      rect((width-500)/2, y30 + 50, 500, 50, 10);
      textSize(textSizeValue );
      textStyle(NORMAL);
      fill(textColor);
      text("$5 million at $20 million valuation \n + 1x liquidation preference ", windowWidth/2 + 5, y30+75);

      if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y30+175 && mouseY >= y30+125) {
      fill(255, 255, 255);
        textColor = color(0); 
        }
        else {
          fill(255, 0, 0, 0.5); 
          textColor = color(255);
        }

          rect((width-500)/2, y30+125, 500, 50, 10);
          // textAlign(CENTER, CENTER);
          textSize(textSizeValue );
          textStyle(NORMAL);
          fill(textColor);
          text("$5 million at $25 million valuation \n + 2x liquidation preferenc ", windowWidth/2 + 5, y30+150);

          if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y30+250 && mouseY >= y30+200) {
          fill(255, 255, 255);
            textColor = color(0); 
            }
            else {
              fill(255, 0, 0, 0.5); 
              textColor = color(255);
            }

          rect((width-500)/2, y30+200, 500, 50, 10);
          textSize(textSizeValue );
          textStyle(NORMAL);
          fill(textColor);
          text("$50 million valuation", windowWidth/2 + 5, y30+225);

        //next Question

          fill(255);
          textSize(textSizeValue +10);
          textStyle(BOLDITALIC);
          text("Which of the following Information Rights are you comfortable with?", windowWidth/2,y31);

          if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y31+100 && mouseY >=y31+50) {
          fill(255, 255, 255);
            textColor = color(0); 
            }
            else {
              fill(255, 0, 0, 0.5); 
              textColor = color(255);
            }

          rect((width-500)/2,y31 + 50, 500, 50, 10);
          // textAlign(CENTER, CENTER);
          textSize(textSizeValue );
          textStyle(NORMAL);
        fill(textColor);
          text("Monthly investor updates ", windowWidth/2 + 5,y31+75);

          if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y31+175 && mouseY >=y31+125) {
          fill(255, 255, 255);
            textColor = color(0); 
            }
            else {
              fill(255, 0, 0, 0.5); 
              textColor = color(255);
            }

          rect((width-500)/2,y31+125, 500, 50, 10);
          textSize(textSizeValue );
          textStyle(NORMAL);
        fill(textColor);
          text("Quarterly investor updates", windowWidth/2 + 5,y31+150);

          if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y31+250 && mouseY >=y31+200) {
          fill(255, 255, 255);
            textColor = color(0); 
            }
            else {
              fill(255, 0, 0, 0.5); 
              textColor = color(255);
            }

          rect((width-500)/2,y31+200, 500, 50, 10);
          textSize(textSizeValue );
          textStyle(NORMAL);
        fill(textColor);
          text("No updates", windowWidth/2 + 5,y31+225);

        pop();

      
        if (src29 && !src30) {
          if (y29 >= -300) {
            y29 -= 6;
          }
          if (y30 >= windowHeight/2 - 100) {
            y30 -= 6;
          }
        
          if (points != 0) {
            textSize(30);
          textStyle(NORMAL);
          fill(0, 0, 0, changeOpacity);
          text("+" + points, windowWidth/2 + 100, 100);
          }
          if (changeOpacity >= 0) {
            changeOpacity -= 2;
          }
          if (changeOpacity <= 0) {
            score += points;
          points = 0;
          }
        
        }

        if (src29 && src30 && !src31) {
          if (y30 >=200) {
            y30 -= 6;
          }
          if (y30 <= 200) {
            y30 = -500;
          }
          if (y31 >= windowHeight/2 - 100) {
            y31 -= 6;
           
          }
        
          if (points != 0) {
            textSize(30);
          textStyle(NORMAL);
          fill(0, 0, 0, changeOpacity);
          text("+" + points, windowWidth/2 + 100, 100);
          }
          if (changeOpacity >= 0) {
            changeOpacity -= 2;
          }
          if (changeOpacity <= 0) {
            score += points;
          points = 0;
          }
          level4= false;
          level5=true;
        }

  


}

if(level5){
  if (src32 && y32 <= -300) {
    rect(windowWidth/2-40, 100, 100, 40, 20);
    image(img8, windowWidth/2-40, 120);
    fill(255);
    textSize(20);
    textStyle(NORMAL);
    text(""+score, windowWidth/2 + 20 , 120);
    }
    fill(255);
    textSize(textSizeValue +10);
    textStyle(BOLDITALIC);  
    text("Congrats on completing 'Who Wants to Be a Unicorn'!  ", windowWidth/2, y32);
    textSize(textSizeValue);
    text("You've shown the qualities of a true unicorn'!  ", windowWidth/2, y32+50);
    textSize(textSizeValue);
    text(" Get ready for thrilling updates, including your special offer.", windowWidth/2, y32 + 100);

    if  (mouseX >=(width - 300) / 2 && mouseX <= (width - 300) / 2 + 300 && mouseY >=  y32+ 120 && mouseY <= y32+ 190) {
      fill(255, 255, 255);
      textColor = color(0); 
      }
      else {
        fill(255, 0, 0, 0.5); 
        textColor = color(255);
      }
  
    push();
    stroke(255);
    rect((width-300)/2, y32+ 200, 300, 70, 10);
    textSize(textSizeValue);
    textStyle(NORMAL);
    fill(textColor);
    text("Learn More", windowWidth/2, y32 + 230);


    pop();
  
    if (src32 && !src33) {
      if (y32>= -300) {
        y32 -= 6;
      }
      if (y33 >= windowHeight/2 - 100) {
        y33 -= 6;
      }
    
      if (points != 0) {
        textSize(30);
      textStyle(NORMAL);
      fill(0, 0, 0, changeOpacity);
      text("+" + points, windowWidth/2 + 100, 100);
      }
      if (changeOpacity >= 0) {
        changeOpacity -= 2;
      }
      if (changeOpacity <= 0) {
        score += points;
      points = 0;
      }
    
    }

       
  


}




}

function endFirstScreen() {
   src1 = true;
  //  button2.position(750, 537);
  // while (y1 >= 200) {
  //   y1 -= 2;
  // }
  // y1 -= 200;
}
function changeButtonImage() {
  // button2.position(400, 400);
  // image(img3, 750, 437);
  // button.position(500, 400);
  redraw();

}

function endSecondScreen() {
  src2 = true;
}


function mousePressed() {

  if (mouseX <= 150 && mouseX >= 50 && mouseY <= 150 && mouseY >= 40) {
    window.location.href = 'https://www.caena.io';
  }
  else {
    if (level1) {

  // if (mouseX <= windowWidth/2 + 80 && mouseX >= windowWidth/2 - 80 && mouseY <= windowHeight/2 + 270 && mouseY >= windowHeight/2 + 130) 
  // {
    if (!src1) {
    if (mouseX <= windowWidth/2 + 80 && mouseX >= windowWidth/2 - 80 && mouseY <= windowHeight/2 + 270 && mouseY >= windowHeight/2 + 130) 
    // window.location.href = 'https://www.caena.io';
    src1 = true;
  }
  else if (src1 && !src2) {
    if (mouseX <= windowWidth/2 + 80 && mouseX >= windowWidth/2 - 80 && mouseY <= windowHeight/2 + 270 && mouseY >= windowHeight/2 + 130)
    src2 = true;
    button.remove();
  }
//}

  else if (src1 && src2 && !src3) 
  {
    if ((mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y3+100 && mouseY >= y3+50) ||
     (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y3+175 && mouseY >= y3+125)) {

    if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y3+100 && mouseY >= y3+50) {
      points = 10;
      src3 = true;
    }
    else if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y3+175 && mouseY >= y3+125) {
      src3 = true;
      src4 = true;
      y4 = -500;
    }
    changeOpacity = 200;
    
  }
}
else if (src1 && src2 && src3 && !src4) {
  if  ((mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y4+100 && mouseY >= y4+50) || 
  (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y4+180 && mouseY >= y4+130) || 
      (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y4+260 && mouseY >= y4+210))    {

      if (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y4+100 && mouseY >= y4+50){
        points = 15;

      }
      else if (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y4+180 && mouseY >= y4+130) {
        points = 5;
      }
      else if (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y4+260 && mouseY >= y4+210) {
        points = 10;
      }
      
        src4 = true;
        changeOpacity = 200;

  }
}
else if (src1 && src2 && src3 && src4 && !src5) {
  if  ((mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y5+100 && mouseY >= y5+50) || 
  (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y5+180 && mouseY >= y5+130) || 
  (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y5+260 && mouseY >= y5+210) || 
  (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y5+340 && mouseY >= y5+290))    {

      if (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y5+100 && mouseY >= y5+50){
        points = 25;

      }
      else if (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y5+180 && mouseY >= y5+130) {
        points = 15;
      }
      else if (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y5+260 && mouseY >= y5+210) {
        points = 5;
      }
      else if (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y5+340 && mouseY >= y5+290) {
        points = 0;
      }
        src5 = true;
        changeOpacity = 200;

  }
}

else if (src1 && src2 && src3 && src4 && src5 && !src6) {
  if  ((mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y6+100 && mouseY >= y6+50) || 
  (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y6+180 && mouseY >= y6+130) || 
  (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y6+260 && mouseY >= y6+210) || 
  (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y6+340 && mouseY >= y6+290))    {

      if (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y6+100 && mouseY >= y6+50){
        points = 10;

      }
      else if (mouseX <= (width-300)/2 + 300 && mouseX >= (width-300)/2 && mouseY <= y6+180 && mouseY >= y6+130) {
        points = 5;
      }
      else if (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y6+260 && mouseY >= y6+210) {
        points = 1;
      }
      else if (mouseX <= (width-300)/2+300 && mouseX >= (width-300)/2 && mouseY <= y6+340 && mouseY >= y6+290) {
        points = 0;
      }
        src6 = true;
        changeOpacity = 200;

  }
}

else if (src1 && src2 && src3 && src4 && src5 && src6 && !src7) {
  if  ((mouseX <= (width-500)/2+500 && mouseX >= (width-500)/2 && mouseY <= y7+100 && mouseY >= y7+50) || 
  (mouseX <= (width-500)/2 + 500 && mouseX >= (width-500)/2 && mouseY <= y7+180 && mouseY >= y7+130) || 
  (mouseX <= (width-500)/2+500 && mouseX >= (width-500)/2 && mouseY <= y7+260 && mouseY >= y7+210) || 
  (mouseX <= (width-500)/2+500 && mouseX >= (width-500)/2 && mouseY <= y7+340 && mouseY >= y7+290) ||
  (mouseX <= (width-500)/2+500 && mouseX >= (width-500)/2 && mouseY <= y7+420 && mouseY >= y7+370))    {

      if (mouseX <= (width-500)/2+500 && mouseX >= (width-500)/2 && mouseY <= y7+100 && mouseY >= y7+50){
        points = 25;

      }
      else if (mouseX <= (width-500)/2 + 500 && mouseX >= (width-500)/2 && mouseY <= y7+180 && mouseY >= y7+130) {
        points = 10;
      }
      else if (mouseX <= (width-500)/2+500 && mouseX >= (width-500)/2 && mouseY <= y7+260 && mouseY >= y7+210) {
        points = 2;
      }
      else if (mouseX <= (width-500)/2+500 && mouseX >= (width-500)/2 && mouseY <= y7+340 && mouseY >= y7+290) {
        points = 1;
      }
      else if (mouseX <= (width-500)/2+500 && mouseX >= (width-500)/2 && mouseY <= y7+420 && mouseY >= y7+370) {
        points = 5;
      }
        src7 = true;
        level1 = false;
        changeOpacity = 200;
        opacity = 200;

  }
}

}
}

if (level2) {
  if (!src8) {
    if  (mouseX >=(width - 300) / 2 && mouseX <= (width - 300) / 2 + 300 && mouseY >=  y8 + 120 && mouseY <= y8 + 190) {
      src8 = true;
    }

    
  }
  else if (src8 && !src9) {
    if  ( (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y9+100 && mouseY >= y9+50) || 
    (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y9+170 && mouseY >= y9+125) )    {
      if   (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y9+100 && mouseY >= y9+50) {
        points = 25;
        
      }
      else if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y9+170 && mouseY >= y9+125) {
        points = 0;
        disqualified = true;

      }
     opacity = 200;
      src9 = true;
      changeOpacity = 200;


    }
  }

  else if (src8 &&src9 &&!src10) {
    if  ((mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y10+100 && mouseY >= y10+50) || 
    (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y10+175 && mouseY >= y10+125)
 
    )
    
    
    {
      if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y10+100 && mouseY >= y10+50) {
        points = 0;
        disqualified = true;        

      }
      else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y10+175 && mouseY >= y10+125){
        points = 25;
    

      }
      opacity = 200;
      src10 = true;
      changeOpacity = 200;

    }
  }

  else if (src8 &&src9 &&src10 &&!src11) {
    if  ((mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y11+100 && mouseY >= y11+50) || 
    (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y11+175 && mouseY >= y11+125)
 
    )
    
    
    {
      if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y11+100 && mouseY >= y11+50) {
        points = 10;
        
      }
      else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y11+175 && mouseY >= y11+125){
        points = 0;

      }
      src11 = true;
      changeOpacity = 200;

    }
  }

  else if (src8 &&src9 &&src10 &&src11 && !src12) {
    if  ((mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y12+100 && mouseY >= y12+50) || 
    (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y12+175 && mouseY >= y12+125)
 
    )
    
    
    {
      if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y12+100 && mouseY >= y12+50) {
        points = 15;
        
      }
      else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y12+175 && mouseY >= y12+125){
        points = 0;

      }
      src12 = true;
      changeOpacity = 200;

    }
  }

  else if (src8 &&src9 &&src10 &&src11 && src12 &&!src13) {
    if  ((mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y13+100 && mouseY >= y13+50) || 
    (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y13+175 && mouseY >= y13+125)||
    (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y13+250 && mouseY >= y13+195) 
 
    )
    
    
    {
      if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y13+100 && mouseY >= y13+50) {
        points = 5;
        
      }
      else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y13+175 && mouseY >= y13+125){
        points = 25;

      }
      else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y13+250 && mouseY >= y13+195){
        points = -25;

      }
      src13 = true;
      changeOpacity = 200;

    }
  }
  else if (src8 &&src9 &&src10 &&src11 && src12 &&src13 &&!src14) {
    if  ((mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+100 && mouseY >= y14+50) || 
    (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+175 && mouseY >= y14+125)||
    (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+250 && mouseY >= y14+195) ||
    (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+325 && mouseY >= y14+270) ||
    (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+400 && mouseY >= y14+345) 
 
    )
    
    
    {
      if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+100 && mouseY >= y14+50) {
        points = 25;
        
      }
      else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+175 && mouseY >= y14+125){
        points = 10;

      }
      else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+250 && mouseY >= y14+195){
        points = 5;

      }

      else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+325 && mouseY >= y14+270) 
      {
        points = -10;

      }
      else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y14+400 && mouseY >= y14+345) 
      {
        points = -25;

      }

      src14 = true;
      changeOpacity = 200;

    }
  }

  else if (src8 &&src9 &&src10 &&src11 && src12 &&src13 &&src14 &&!src15) {
    if  ((mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+100 && mouseY >= y15+50) || 
    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+175 && mouseY >= y15+125)||
    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+250 && mouseY >= y15+195) ||
    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+325 && mouseY >= y15+270) ||
    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+400 && mouseY >= y15+345) 
 
    )
    
    
    {
      if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+100 && mouseY >= y15+50) {
        points = -25;
        
      }
      else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+175 && mouseY >= y15+125){
        points = 25;

      }
      else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+250 && mouseY >= y15+195){
        points = 15;

      }

      else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+325 && mouseY >= y15+270) 
      {
        points = 5;

      }
      else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y15+400 && mouseY >= y15+345) 
      {
        points = -5;

      }

      src15 = true;
      changeOpacity = 200;

    }
  }

  else if (src8 &&src9 &&src10 &&src11 && src12 &&src13 &&src14 &&src15 &&!src16) {
    if  ((mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+100 && mouseY >= y16+50) || 
    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+175 && mouseY >= y16+125)||
    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+250 && mouseY >= y16+195) ||
    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+325 && mouseY >= y16+270) ||
    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+400 && mouseY >= y16+345) 
 
    )
    
    
    {
      if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+100 && mouseY >= y16+50) {
        points = 25;
        
      }
      else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+175 && mouseY >= y16+125){
        points = 15;

      }
      else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+250 && mouseY >= y16+195){
        points = 15;

      }

      else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+325 && mouseY >= y16+270) 
      {
        points = -15;

      }
      else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y16+400 && mouseY >= y16+345) 
      {
        points = 0;

      }
      src16 = true;
      changeOpacity = 200;
    }
  
      src16 = true;
      changeOpacity = 200;

    }

    else if (src8 &&src9 &&src10 &&src11 && src12 &&src13 &&src14 &&src15 &&src16 &&!src17) {
      if  ((mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y17+100 && mouseY >= y17+50) || 
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y17+175 && mouseY >=y17+125)|| 
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y17+250 && mouseY >=y17+195)
   
      )
      
      
      {
        if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y17+100 && mouseY >=y17+50) {
          points = 0;
          disqualified = true;
          
        }
        else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y17+175 && mouseY >=y17+125){
          points = 5;
  
        }
        else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y17+250 && mouseY >=y17+195){
          points = 25;
  
        }
        src17 = true;
        changeOpacity = 200;
        opacity= 200;
      }
    }
    

    else if (src8 &&src9 &&src10 &&src11 && src12 &&src13 &&src14 &&src15 &&src16 &&src17 &&!src18 ) {
      if  ((mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <=y18+100 && mouseY >= y18+50) || 
      (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <=y18+175 && mouseY >=y18+125)||
      (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <=y18+250 && mouseY >=y18+195)
   
      )

      {
        if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <=y18+100 && mouseY >=y18+50) {
          points = 25;
          
        }
        else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <=y18+175 && mouseY >=y18+125){
          points = 10;
  
        }
        else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <=y18+250 && mouseY >=y18+195){
          points = 2;
  
        }
        src18 = true;
        changeOpacity = 200;
  
      }
    }
    else if (src8 &&src9 &&src10 &&src11 && src12 &&src13 &&src14 &&src15 &&src16 &&src17 &&src18 &&!src19) {
      if  ((mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+100 && mouseY >= y19+50) || 
      (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+175 && mouseY >= y19+125)||
      (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+250 && mouseY >= y19+195) ||
      (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+325 && mouseY >= y19+270) ||
      (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+400 && mouseY >= y19+345) 
   
      )
      
      {
        if (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+100 && mouseY >= y19+50) {
          points = 25;
          
        }
        else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+175 && mouseY >= y19+125){
          points = -25;
  
        }
        else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+250 && mouseY >= y19+195){
          points = 5;
  
        }
  
        else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+325 && mouseY >= y19+270) 
        {
          points = -100;
  
        }
        else if  (mouseX <= (width-200)/2 + 200  && mouseX >= (width-200)/2 && mouseY <= y19+400 && mouseY >= y19+345) 
        {
          points = -10;
  
        }
          src19=true;
          level2 = false;
          level2completed = true;
          changeOpacity = 200;
          opacity = 200;
      }
    }

  }

  if (level3) {
    if (!src20) {
      if  (mouseX >=(width - 300) / 2 && mouseX <= (width - 300) / 2 + 300 && mouseY >=  y20 + 120 && mouseY <= y20 + 190) {
        src20 = true;
      }
    }


    else if (src20 && !src21) {
      if  ( (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y21+100 && mouseY >= y21+50) || 
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y21+175 && mouseY >= y21+125) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y21+250 && mouseY >= y21+200) )    {
        if   (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y21+100 && mouseY >= y21+50) {
          points = 25;
          
        }
        else if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y21+175 && mouseY >= y21+125) {
          points = 5;
  
        }

        else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y21+250 && mouseY >= y21+200){
          points = 15;
  
        }

        src21 = true;
        changeOpacity = 200;
  
  
      }
    }
    else if (src20 && src21 &!src22) {
      if  ( (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+100 && mouseY >= y22+50) || 
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+175 && mouseY >= y22+125) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+250 && mouseY >= y22+200) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+325&& mouseY >= y22+275)  ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+400 && mouseY >= y22+350) )
          {
        if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+100 && mouseY >= y22+50) {
          points = 10;
          
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+175 && mouseY >= y22+125)  {
          points = 15;
  
        }

        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+250 && mouseY >= y22+200){
          points = 10;
  
        }
        else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+325&& mouseY >= y22+275){
          points = 15;
  
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y22+400 && mouseY >= y22+350) {
          points = -10;
  
        }

        src22 = true;
        changeOpacity = 200;
  
  
      }
    }
    else if (src20 && src21 &&src22 &&!src23) {
      if  ( (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+100 && mouseY >= y23+50) || 
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+175 && mouseY >= y23+125) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+250 && mouseY >= y23+200) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+325&& mouseY >= y23+275)  ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+400 && mouseY >= y23+350) )
          {
        if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+100 && mouseY >= y23+50) {
          points = -25;
          
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+175 && mouseY >= y23+125)  {
          points = 25;
  
        }

        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+250 && mouseY >= y23+200){
          points = 10;
  
        }
        else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+325&& mouseY >= y23+275){
          points = 5;
  
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y23+400 && mouseY >= y23+350) {
          points = -10;
  
        }

        src23 = true;
        changeOpacity = 200;
  
  
      }
    }
  
    else if (src20 && src21 &&src22 &&src23 &&!src24) {
      if  ( (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+100 && mouseY >= y24+50) || 
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+175 && mouseY >= y24+125) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+250 && mouseY >= y24+200) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+325&& mouseY >= y24+275)  ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+400 && mouseY >= y24+350) )
          {
        if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+100 && mouseY >= y24+50) {
          points = 10;
          
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+175 && mouseY >= y24+125)  {
          points = 25;
  
        }

        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+250 && mouseY >= y24+200){
          points = 10;
  
        }
        else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+325&& mouseY >= y24+275){
          points = 5;
  
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y24+400 && mouseY >= y24+350) {
          points = 0;
  
        }

        src24 = true;
        changeOpacity = 200;
  
  
      }
    }

    else if (src20 && src21 &&src22 &&src23 &&src24 &&!src25) {
      if  ( (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+100 && mouseY >= y25+50) || 
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+175 && mouseY >= y25+125) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+250 && mouseY >= y25+200) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+325&& mouseY >= y25+275)  ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+400 && mouseY >= y25+350) )
          {
        if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+100 && mouseY >= y25+50) {
          points = 10;
          
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+175 && mouseY >= y25+125)  {
          points = 15;
  
        }

        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+250 && mouseY >= y25+200){
          points = 15;
  
        }
        else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+325&& mouseY >= y25+275){
          points = 0;
  
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y25+400 && mouseY >= y25+350) {
          points = -10;
  
        }

        src25 = true;
        changeOpacity = 200;
  
  
      }
    }
    else if (src20 && src21 &&src22 &&src23 &&src24 &&src25 &&!src26) {
      if  ( (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+100 && mouseY >= y26+50) || 
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+175 && mouseY >= y26+125) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+250 && mouseY >= y26+200) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+325&& mouseY >= y26+275)  ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+400 && mouseY >= y26+350) )
          {
        if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+100 && mouseY >= y26+50) {
          points = 10;
          
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+175 && mouseY >= y26+125)  {
          points = 10;
  
        }

        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+250 && mouseY >= y26+200){
          points =25;
  
        }
        else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+325&& mouseY >= y26+275){
          points = 25;
  
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y26+400 && mouseY >= y26+350) {
          points = 0;
  
        }

        src26 = true;
        changeOpacity = 200;
  
  
      }
    }
    else if (src20 && src21 &&src22 &&src23 &&src24 &&src25 &&src26 &&!src27) {
      if  ( (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+100 && mouseY >= y27+50) || 
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+175 && mouseY >= y27+125) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+250 && mouseY >= y27+200) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+325 && mouseY >= y27+275)  ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+400 && mouseY >= y27+350) )
          {
        if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+100 && mouseY >= y27+50) {
          points = -25;
          
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+175 && mouseY >= y27+125)  {
          points = 15;
  
        }

        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+250 && mouseY >= y27+200){
          points = -10;
  
        }
        else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+325&& mouseY >= y27+275){
          points = 15;
  
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y27+400 && mouseY >= y27+350) {
          points = 5;
  
        }

        src27 = true;
        changeOpacity = 200;
  
  
      }
    }
    else if (src20 && src21 &&src22 &&src23 &&src24 &&src25 &&src26 &&src27 &&!src28) {
      if  ( (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+100 && mouseY >= y28+50) || 
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+175 && mouseY >= y28+125) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+250 && mouseY >= y28+200) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+325&& mouseY >= y28+275)  ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+400 && mouseY >= y28+350) )
          {
        if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+100 && mouseY >= y28+50) {
          points = -25;
          
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+175 && mouseY >= y28+125)  {
          points = 10;
  
        }

        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+250 && mouseY >= y28+200){
          points = 10;
  
        }
        else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+325&& mouseY >= y28+275){
          points = 10;
  
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y28+400 && mouseY >= y28+350) {
          points = 10;
  
        }

        src28 = true;
        level3completed = true;
        level3= false;
        changeOpacity = 200;
        opacity = 200;
     
      }
    }
  }

  if (level4) {
    if (!src29) {
      if  (mouseX >=(width - 300) / 2 && mouseX <= (width - 300) / 2 + 300 && mouseY >=  y29 + 120 && mouseY <= y29 + 190) {
        src29 = true;
      }
    }


    else if (src29 && !src30) {
      if  ( (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y30+100 && mouseY >= y30+50) || 
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y30+175 && mouseY >= y30+125) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y30+250 && mouseY >= y30+200) )    {
        if   (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y30+100 && mouseY >= y30+50) {
          points = 50;
          
        }
        else if (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y30+175 && mouseY >= y30+125) {
          points = 10;
  
        }

        else if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <= y30+250 && mouseY >= y30+200){
          points = 0;
  
        }

        src30 = true;
        changeOpacity = 200;
  
  
      }
    }
    else if (src29 && src30 &!src31) {
      if  ( (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y31+100 && mouseY >=y31+50) || 
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y31+175 && mouseY >=y31+125) ||
      (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y31+250 && mouseY >=y31+200))
          {
        if  (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y31+100 && mouseY >=y31+50) {
          points = 10;
          
        }
        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y31+175 && mouseY >=y31+125)  {
          points = 50;
  
        }

        else if    (mouseX <= (width-500)/2 + 500  && mouseX >= (width-500)/2 && mouseY <=y31+250 && mouseY >=y31+200){
          points = 0;
  
        }
        src31 = true;
        level4completed = true;
        level4= false;
        changeOpacity = 200;
        opacity = 200;     
      }
    }
   
  }
  

  if (level5) {
    if (!src32) {
      if  (mouseX >=(width - 300) / 2 && mouseX <= (width - 300) / 2 + 300 && mouseY >=  y32+ 120 && mouseY <= y32+ 190) {
      src32= true;
//      opacity = 200;
      window.location.href = 
      'https://caena.io/academy/';
      }
    
    }
     
  }
  
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 //  img.resize(windowWidth, 0);
//   canvas.position(0,0);
//  // background (0,100,200);
//   image(img, 40, 40);
//centerCanvas();
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    src1 = true; src2 =true; src3 = true;
  } 
}
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
//   ellipse(50,50,80,80);
// }
