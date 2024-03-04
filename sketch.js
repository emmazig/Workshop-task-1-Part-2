
  let y = 0
  let a = 50
  let b = 10
  let green = 8
  let red =  15  
  let yellow = 6
    


 function setup() {
  createCanvas(400, 400);
}

 function draw() {
  background(250, 250, 250);
  
  
  
  noStroke();
  fill(40, 90, 30);
  ellipse(200, y, 100, 100);
  y = y + green
  
  if(y > 350){
    green = -8
  }
  
  if(y < 50){
    green = 8
  }
    
  
  fill(230, 120, 100);
  ellipse(350, b, 100, 100);
  b = b + red
  
  if(b > 350){
    red = -15
  }
  
  if(b < 50){
    red = 15
  }
  
  
  fill(230, 180, 70);
  ellipse(50, a, 100, 100);
  a = a + yellow
  
  if(a > 350){
    yellow = -6
  }
  
  if(a < 50){
    yellow = 6
  }
  
 }
  
  
  

 
  
