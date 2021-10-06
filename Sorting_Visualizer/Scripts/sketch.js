let selectedAlgo;
let sel;
let selmode;
let speedslider;
let sizeslider;


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
  speedslider.class("speedSlider");
}

function setsizeslider(min,max,value,step)
{
  sizeslider = createSlider(min, max, value,step);
  sizeslider.class("sizeSlider");
  sizeslider.style('width', '170px');
}
function setAlgocombo()
{
  sel = createSelect();
  sel.class("algoCombo");
  
  sel.option('Insertion');
  sel.option('Bubble');
  sel.option('Selection');
  sel.option('Merge');
  sel.option('Quick');
  
  sel.selected('Insertion');
  
  sel.changed(OnchangeAlgo);
}
function setmodecombo()
{
  selmode = createSelect();
  selmode.class("modeCombo");
 

  selmode.option('Points');
  selmode.option('Rectangles');
  selmode.selected('Rectangles');

  selmode.changed(OnchangeMode);
}
function invokesizeslider()
{
  var min = 30,max = 200,val=50,step=2;
  if(selmode.value() == "Points")
  {
    min = 200;
    max = 6000;
    val = 600;
    step = 20;
  }

  setsizeslider(min,max,val,step);
}

function setup() 
{
  var h = window.innerHeight*2/3;
  var w= window.innerWidth/2;
  canvas = createCanvas(w, h);
  canvas.class("sortingCanvas");
  frameRate(30);
  fill(255, 255, 255);
  text("Speed",10,10)
  setAlgocombo();
  setmodecombo();
  setspeedslider();
  invokesizeslider();
  selectedAlgo = new Insertion_Sort();
  selectedAlgo.n = sizeslider.value();

  //generating values;
  for (let i = 0; i < selectedAlgo.n; i++) selectedAlgo.arr.push(random(395));
  current = selectedAlgo.arr[selectedAlgo.i];

  selectedAlgo.sort();
}
function draw() {
  
  //ui
  var h = window.innerHeight*2/3;
  var w= window.innerWidth/2;
  canvas = createCanvas(w, h);
  background(0);
  fill(255, 255, 255);
  frameRate(speedslider.value())
  var ratio =  (60 - speedslider.value()) / 60 * 10;
  selectedAlgo.sleepfactor = ratio * ratio ;
  
  Onchangesize();
  text("Algorithm - " + selectedAlgo.algorithm +
  ", Array access:  " + selectedAlgo.arrayacess + ", Comparsions: "
  + selectedAlgo.comparsions, 10 , h-10);
  
  for (let k = 0; k < selectedAlgo.n; k++) {
    if(selmode.value()=="Rectangles")
    {
    stroke(0);
    var color = selectedAlgo.ColorManager(k);
    fill(color);

    rect((k * window.innerWidth/2) / selectedAlgo.n, 0, window.innerWidth/2 / selectedAlgo.n, selectedAlgo.arr[k]/395 * (h-20) );
    }
    else
    {
    stroke(255, 204, 100);
    stroke('white');
    point(k/selectedAlgo.n * 500,selectedAlgo.arr[k] );
    }
    
  }

  
  
}
function Onchangesize()
{
  if(selectedAlgo.n!=sizeslider.value())
  {
    
    factoryalgo(sel.value());
  }
}


function OnchangeAlgo() 
{
  //combo box
  let item = sel.value();
  fill(255, 255, 255);
  //algorithm selection
  factoryalgo(item)
  //pushing random values
 
}


function onChange()
{
  onselectmode();
  //change n
  setup();
}
function OnchangeMode() 
{
  var max = 200;
  var min = 20;
  var mid = 50;
  if(selmode.value()=="Points")
  {
    min = 200;
    max = 6000;
    mid = 250;
  }
  fill(255, 255, 255);
  sizeslider.remove();
  sizeslider = createSlider(min, max, mid, 2);
  sizeslider.position(1070, 300);
  sizeslider.style('width', '170px');
  //algorithm selection
  factoryalgo(sel.value());
}


function factoryalgo(x)
{
  if (x == 'Bubble')
  selectedAlgo = new Bubble_Sort();
  else if(x == 'Insertion')
  selectedAlgo = new  Insertion_Sort();
  else if(x == 'Selection')
  selectedAlgo = new  Selection_Sort();
  else if(x == 'Merge')
  selectedAlgo = new  Merge_Sort();
  else if(x == 'Quick')
  selectedAlgo = new  Quick_Sort();
  else if(x == 'Bogo')
  selectedAlgo = new  Bogo_Sort();

  selectedAlgo.n = sizeslider.value();
  
  for (let i = 0; i < selectedAlgo.n; i++) selectedAlgo.arr.push(random(400));

  if(selmode.value() == "Points")
  selectedAlgo.points = true;
  else
  selectedAlgo.points = false;

  selectedAlgo.sort();
}