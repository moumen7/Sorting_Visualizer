let is;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function setup() {
  createCanvas(500, 500);
  frameRate(100);

  is = new Insertion_sort();
  for (let i = 0; i < is.n; i++) is.arr.push(getRandomInt(500));

  current = is.arr[is.i];
}

function draw() {
  background(0);

  for (let k = 0; k < is.n; k++) {
    fill(is.colorsr[k], is.colorsg[k], is.colorsb[k]);
    rect((k * 500) / is.n, 0, 500 / is.n, is.arr[k]);
  }
  // Choosing the first element in our unsorted subarray

  // The last element of our sorted subarray
  is.sort();
}
