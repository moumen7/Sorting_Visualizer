let selectedAlgo;
let sel;
let selmode;
let speedslider;
let sizeslider;


function draw() {
  let val = speedslider.value();
  background(val, 100, 100, 1);
}
window.onload = function() {
  Particles.init({
    selector: '.background'
  });
  Particles.init( {
    color: '#FFFFFF'
  });
  Particles.init( {
    connectParticles: true
  });
  Particles.init( {
    speed: 0.25
  });
};

function setspeedslider()
{
  speedslider = createSlider(1, 60, 30, 2);
  speedslider.position(300, 300);
  speedslider.style('width', '170px');

}
function setsizeslider()
{
  sizeslider = createSlider(20, 200, 50, 2);
  sizeslider.position(1100, 300);
  sizeslider.style('width', '170px');
}
function setAlgocombo()
{
  sel = createSelect();
  sel.position(275, 67);
  sel.option('Insertion');
  sel.option('Bubble');
  sel.option('Selection');
  sel.option('Merge');
  sel.selected('Insertion');
  sel.changed(mySelectEvent);
}
function setmodecombo()
{
  selmode = createSelect();
  selmode.position(1175, 67);
  selmode.option('Points');
  selmode.option('Rectangles');

  selmode.selected('Rectangles');
  selmode.changed(onselectmode);
}
function setup() {

  createCanvas(500, 460);
  frameRate(30);
  fill(255, 255, 255);
  text("Speed",10,10);
  setspeedslider();
  setsizeslider();
  setAlgocombo();
  setmodecombo();
  selectedAlgo = new Insertion_sort();

  //generating values;
  for (let i = 0; i < selectedAlgo.n; i++) selectedAlgo.arr.push(random(395));
  current = selectedAlgo.arr[selectedAlgo.i];
}

function draw() {
  
  //ui
  background(0);
  fill(255, 255, 255);
  frameRate(speedslider.value())
  if(selectedAlgo.n!=sizeslider.value())
  {
   factoryalgo(sel.value());
   selectedAlgo.n = sizeslider.value();
   for (let i = 0; i < selectedAlgo.n; i++) selectedAlgo.arr.push(random(395));
  }
  text("Algorithm - " + selectedAlgo.algorithm +
  ", Array access:  " + selectedAlgo.arrayacess + ", Comparsions: "
  + selectedAlgo.comparsions, 10 , 450);
  //generating rects
  for (let k = 0; k < selectedAlgo.n; k++) {
    if(selmode.value()=="Rectangles")
    {
      stroke(0);
    fill(selectedAlgo.colorsr[k], selectedAlgo.colorsg[k], selectedAlgo.colorsb[k]);
    rect((k * 500) / selectedAlgo.n, 0, 500 / selectedAlgo.n, selectedAlgo.arr[k]);
    }
    else
    {
    stroke(255);
    point(k/selectedAlgo.n * 500,selectedAlgo.arr[k] );
    }
  }
 

  //invoke sorting method
  selectedAlgo.sort();
  
}

function mySelectEvent() 
{

  //combo box
  let item = sel.value();
  fill(255, 255, 255);
  

  //algorithm selection
  factoryalgo(item)

  //pushing random values
  for (let i = 0; i < selectedAlgo.n; i++) selectedAlgo.arr.push(random(400));
}
function onselectmode() 
{
  //algorithm selection
  factoryalgo(sel.value());
  var max = 200;
  var min = 20;
  var mid = 50;
  selectedAlgo.points= false;
  if(selmode.value()=="Points")
  {
    min = 200;
    max = 20000;
    mid = 250;
    selectedAlgo.points= true;
  }
  fill(255, 255, 255);
  sizeslider.remove();
  sizeslider = createSlider(min, max, mid, 2);
  sizeslider.position(1100, 300);
  sizeslider.style('width', '170px');
  selectedAlgo.n = sizeslider.value();

  //pushing random values
  for (let i = 0; i < selectedAlgo.n; i++) selectedAlgo.arr.push(random(400));
}
function factoryalgo(x)
{
  if (x == 'Bubble')
  selectedAlgo = new Bubble_sort();
  else if(x == 'Insertion')
  selectedAlgo = new  Insertion_sort();
  else if(x == 'Selection')
  selectedAlgo = new  Selection_Sort();
  else if(x == 'Merge')
  selectedAlgo = new  Merge_Sort();

  if(selmode.value() == "Points")
  selectedAlgo.points = true
  else
  selectedAlgo.points = false;
}
