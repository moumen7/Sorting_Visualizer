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
  sel.option('Heap');
  
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
  var h = document.documentElement.clientHeight*2/3;
  var w=  document.documentElement.clientWidth/2;
  canvas = createCanvas(w, h);
  var num = w/ 5;
  var str = num.toString();
  speedslider.style('width',str + 'px');
  sizeslider.style('width',str + 'px');
  if(num > 100)
  {
    str = '100';
  }
  sel.style('width',str + 'px');
  selmode.style('width',str + 'px');
  
  
  background(0);
  fill(255, 255, 255);
  frameRate(speedslider.value())
  var ratio =  (60 - speedslider.value()) / 60 * 10;
  selectedAlgo.sleepfactor = ratio * ratio ;
  
  Onchangesize();
  textSize(w/49);
  text("Algorithm - " + selectedAlgo.algorithm +
  ", Array access:  " + selectedAlgo.arrayacess + ", Comparsions: "
  + selectedAlgo.comparsions, 4 , h-10);
  
  for (let k = 0; k < selectedAlgo.n; k++) {
    if(selmode.value()=="Rectangles")
    {
    stroke(0);
    var color = selectedAlgo.ColorManager(k);
    fill(color);

    rect((k * w) / selectedAlgo.n, 0, window.innerWidth/2 / selectedAlgo.n, selectedAlgo.arr[k]/395 * (h-30) );
    }
    else
    {
    stroke(255, 204, 100);
    stroke('white');
    point((k * w) / selectedAlgo.n,selectedAlgo.arr[k]/395 * (h-50) );
    }
    
  }

  
  
}
function Onchangesize()
{
  if(selectedAlgo.n!=sizeslider.value() && !selectedAlgo.points)
  {
    factoryalgo(sel.value());
  }

  if(selectedAlgo.n!=sizeslider.value() * 10 && selectedAlgo.points)
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
  else if(x == 'Heap')
  selectedAlgo = new  Heap_Sort();


  
  if(selmode.value() == "Points")
  {
  selectedAlgo.points = true;
  selectedAlgo.n = sizeslider.value() * 10;
  }
  else
  {
  selectedAlgo.points = false;
  selectedAlgo.n = sizeslider.value();
  }
  
  for (let i = 0; i < selectedAlgo.n; i++) selectedAlgo.arr.push(random(400));

 

  selectedAlgo.sort();
}