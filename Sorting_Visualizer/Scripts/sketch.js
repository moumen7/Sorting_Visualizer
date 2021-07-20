let selectedAlgo;
let sel;


function setup() {
  createCanvas(500, 560);
  frameRate(100);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('Insertion');
  sel.option('Bubble');
  sel.selected('Insertion');
  sel.changed(mySelectEvent);
  selectedAlgo = new Insertion_sort();

  for (let i = 0; i < selectedAlgo.n; i++) selectedAlgo.arr.push(random(height));
  current = selectedAlgo.arr[selectedAlgo.i];
}

function draw() {
  
  background(0);
  fill(255, 255, 255);
  text("Algorithm - " + selectedAlgo.algorithm +
  ", Array access - " + selectedAlgo.arrayacess + ", Comparsions: "
  + selectedAlgo.comparsions,0,550);
  for (let k = 0; k < selectedAlgo.n; k++) {
    fill(selectedAlgo.colorsr[k], selectedAlgo.colorsg[k], selectedAlgo.colorsb[k]);
    rect((k * 500) / selectedAlgo.n, 0, 500 / selectedAlgo.n, selectedAlgo.arr[k]);
  }
  // Choosing the first element in our unsorted subarray

  // The last element of our sorted subarray
  selectedAlgo.sort();
}

function mySelectEvent() {

  //combo box
  let item = sel.value();
  fill(255, 255, 255);
  text(item, 0, 520);

  //algorithm selection
  if (item == 'Bubble')
  selectedAlgo = new Bubble_sort();
  else if(item=='Insertion')
  selectedAlgo = new  Insertion_sort();

  //pushing random values
  for (let i = 0; i < selectedAlgo.n; i++) selectedAlgo.arr.push(random(height));
}
