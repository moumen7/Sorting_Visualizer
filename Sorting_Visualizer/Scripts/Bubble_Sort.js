class Bubble_sort extends Sorting {
    constructor() {
      super();
      this.x = this.n - 1;
      for (let k = 0; k < this.n; k++) {
        this.colorsr.push(0);
        this.colorsg.push(0);
        this.colorsb.push(150);
        this.algorithm = "Bubble Sort";
      }
      
    }
    sort() {
      if (this.i == this.n || this.sortedbool == true) {
        this.sortedbool = true;
        this.greenOnFinish();
      } 
      else {
        selectedAlgo.colorsr[this.j + 1] = 255;
        selectedAlgo.colorsg[this.j + 1] = 0;
        selectedAlgo.colorsb[this.j + 1] = 0;
        selectedAlgo.colorsr[this.prevj] = 255;
        selectedAlgo.colorsg[this.prevj] = 255;
        selectedAlgo.colorsb[this.prevj] = 255;
        this.prevj = this.j + 1;
        selectedAlgo.colorsr[this.n - this.i + 1] = 0;
        selectedAlgo.colorsg[this.n - this.i+ 1 ] = 255;
        selectedAlgo.colorsb[this.n - this.i+1] = 0; 
        if (this.arr[this.j] > this.arr[this.j + 1]) {
          let temp = this.arr[this.j];
          this.arr[this.j] = this.arr[this.j + 1];
          this.arr[this.j + 1] = temp;
          this.arrayacess+=5;
          this.comparsions++;
        }
  
        this.j++;
        if (this.j == this.n - this.i) {
          this.j = 0;
          this.i++;
        }
      }
    }
    greenOnFinish() {
      selectedAlgo.colorsr[this.x] = 0;
      selectedAlgo.colorsg[this.x] = 255;
      selectedAlgo.colorsb[this.x] = 0;
      this.x--;
    }
  }
  