class Insertion_sort extends Sorting {
    constructor() {
      super();
      this.x = this.n - 1;
      for (let k = 0; k < this.n; k++) {
        this.colorsr.push(0);
        this.colorsg.push(0);
        this.colorsb.push(150);
        this.algorithm = "Insertion Sort";
      }
      
    }
    sort() {

      selectedAlgo.colorsr[this.j + 1] = 255;
      selectedAlgo.colorsg[this.j + 1] = 0;
      selectedAlgo.colorsb[this.j + 1] = 0;
      selectedAlgo.colorsr[this.prevj] = 255;
      selectedAlgo.colorsg[this.prevj] = 255;
      selectedAlgo.colorsb[this.prevj] = 255;
      this.prevj = this.j + 1;
      if (this.i == this.n || this.sortedbool == true) {
        this.sortedbool = true;
        this.sorted();
        this.greenOnFinish();
      }
      else
      {
      if (selectedAlgo.j > -1 && current < selectedAlgo.arr[selectedAlgo.j]) {
        selectedAlgo.arr[selectedAlgo.j + 1] = selectedAlgo.arr[selectedAlgo.j];
        this.arrayacess+=3;
        this.comparsions++;
        selectedAlgo.j--;
      }
      if (!(selectedAlgo.j > -1 && current < selectedAlgo.arr[selectedAlgo.j])) {
        selectedAlgo.arr[selectedAlgo.j + 1] = current;
        selectedAlgo.i++;
        selectedAlgo.j = selectedAlgo.i - 1;
        current = selectedAlgo.arr[selectedAlgo.i];
        this.arrayacess+=3;
        this.comparsions++;
      }
    }
    }
    sorted() {
      selectedAlgo.colorsr[this.x] = 0;
      selectedAlgo.colorsg[this.x] = 255;
      selectedAlgo.colorsb[this.x] = 0;
      this.x--;
    }
  }
  