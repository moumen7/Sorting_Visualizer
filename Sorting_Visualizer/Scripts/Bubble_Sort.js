class Bubble_sort extends Sorting {
    constructor() {
      super();
      this.x = this.n - 1;
      for (let k = 0; k < this.n; k++) {
        this.colorsr.push(0);
        this.colorsg.push(0);
        this.colorsb.push(150);
      }
    }
    sort() {
      if (this.i == this.n || this.sortedbool == true) {
        this.sortedbool = true;
        this.sorted();
      } else {
        is.colorsr[this.j + 1] = 255;
        is.colorsg[this.j + 1] = 0;
        is.colorsb[this.j + 1] = 0;
        is.colorsr[this.prevj] = 255;
        is.colorsg[this.prevj] = 255;
        is.colorsb[this.prevj] = 255;
        this.prevj = this.j + 1;
  
        if (this.arr[this.j] > this.arr[this.j + 1]) {
          let temp = this.arr[this.j];
          this.arr[this.j] = this.arr[this.j + 1];
          this.arr[this.j + 1] = temp;
        }
  
        this.j++;
        if (this.j == this.n) {
          this.j = 0;
          this.i++;
        }
      }
    }
    sorted() {
      is.colorsr[this.x] = 0;
      is.colorsg[this.x] = 255;
      is.colorsb[this.x] = 0;
      this.x--;
    }
  }
  