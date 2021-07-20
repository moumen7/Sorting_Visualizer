let is;
let sel;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function setup() {
  createCanvas(500, 560);
  frameRate(100);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('Insertion');
  sel.option('Bubble');
  sel.selected('Insertion');
  sel.changed(mySelectEvent);
  is = new Insertion_sort();
  for (let i = 0; i < is.n; i++) is.arr.push(getRandomInt(500));

  current = is.arr[is.i];
}

function draw() {
  
  background(0);
  fill(255, 255, 255);
  text("Algorithm - " + is.algorithm +
  ", Array access - " + is.arrayacess + ", Comparsions: "
  + is.comparsions,0,550);
  for (let k = 0; k < is.n; k++) {
    fill(is.colorsr[k], is.colorsg[k], is.colorsb[k]);
    rect((k * 500) / is.n, 0, 500 / is.n, is.arr[k]);
  }
  // Choosing the first element in our unsorted subarray

  // The last element of our sorted subarray
  is.sort();
}

function mySelectEvent() {
  let item = sel.value();
  fill(255, 255, 255);
  text(item,0,520);
  if(item == 'Bubble')
  is = new Bubble_sort();
  else if(item=='Insertion')
  is=new  Insertion_sort();

  for (let i = 0; i < is.n; i++) is.arr.push(getRandomInt(500));
}
