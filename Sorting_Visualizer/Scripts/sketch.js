let selectedAlgo;
let sel;

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


function setup() {
  createCanvas(500, 460);
  frameRate(30);
  sel = createSelect();
  sel.position(275, 67);
  sel.option('Insertion');
  sel.option('Bubble');
  sel.option('Selection');

  sel.selected('Insertion');
  sel.changed(mySelectEvent);
  selectedAlgo = new Insertion_sort();

  //generating values;
  for (let i = 0; i < selectedAlgo.n; i++) selectedAlgo.arr.push(random(395));
  current = selectedAlgo.arr[selectedAlgo.i];
}

function draw() {
  
  //ui
  
  background(0);
  fill(255, 255, 255);
  text("Algorithm - " + selectedAlgo.algorithm +
  ", Array access:  " + selectedAlgo.arrayacess + ", Comparsions: "
  + selectedAlgo.comparsions, 10 , 450);
  //generating rects
  for (let k = 0; k < selectedAlgo.n; k++) {
    fill(selectedAlgo.colorsr[k], selectedAlgo.colorsg[k], selectedAlgo.colorsb[k]);
    rect((k * 500) / selectedAlgo.n, 0, 500 / selectedAlgo.n, selectedAlgo.arr[k]);
  }
 

  //invoke sorting method
  selectedAlgo.sort();
}

function mySelectEvent() {

  //combo box
  let item = sel.value();
  fill(255, 255, 255);
  

  //algorithm selection
  if (item == 'Bubble')
  selectedAlgo = new Bubble_sort();
  else if(item == 'Insertion')
  selectedAlgo = new  Insertion_sort();
  else if(item == 'Selection')
  selectedAlgo = new  Selection_Sort();
  //pushing random values
  for (let i = 0; i < selectedAlgo.n; i++) selectedAlgo.arr.push(random(400));
}

