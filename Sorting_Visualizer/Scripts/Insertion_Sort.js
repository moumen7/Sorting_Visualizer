class Insertion_sort extends Sorting {
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
      is.colorsr[this.j + 1] = 255;
      is.colorsg[this.j + 1] = 0;
      is.colorsb[this.j + 1] = 0;
      is.colorsr[this.prevj] = 255;
      is.colorsg[this.prevj] = 255;
      is.colorsb[this.prevj] = 255;
      this.prevj = this.j + 1;
      if (this.i == this.n || this.sortedbool == true) {
        this.sortedbool = true;
        this.sorted();
      }
      if (is.j > -1 && current < is.arr[is.j]) {
        is.arr[is.j + 1] = is.arr[is.j];
        is.j--;
      }
      if (!(is.j > -1 && current < is.arr[is.j])) {
        is.arr[is.j + 1] = current;
        is.i++;
        is.j = is.i - 1;
        current = is.arr[is.i];
      }
    }
    sorted() {
      is.colorsr[this.x] = 0;
      is.colorsg[this.x] = 255;
      is.colorsb[this.x] = 0;
      this.x--;
    }
  }
  