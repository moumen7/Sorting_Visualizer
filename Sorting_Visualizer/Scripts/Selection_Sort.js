class Selection_Sort extends Sorting {
    constructor() {
      super();
      let minElement = this.j;
      for (let k = 0; k < this.n; k++) {
        this.colorsr.push(0);
        this.colorsg.push(0);
        this.colorsb.push(150);
      }
      this.algorithm = "Selection Sort";
    }

    
    sort() {
      //this.setInitialColors();
      if (this.j == this.n - 1 || this.sortedbool == true) {
        this.sortedbool = true;
        this.sorted();
      } 
      else {
          //find min
        minElement = this.j;
        if (this.arr[this.i] < this.arr[minElement])
               Text("inside if", 250,250);
               minElement = this.i;
               this.setIndexColor(this, minElement, 155 , 255, 110);
               this.comparsions++;
               this.arrayacess += 2;
               this.i++;
        //swap     
        
        this.swap(this.arr, minElement, this.j);
        this.arrayacess += 3;       
        this.j++;
      }

      }
    
    
 swap(xp, yp)
{
    var temp = this.arr[xp];
    this.arr[xp] = this.arr[yp];
    this.arr[yp] = this.temp;
}


setInitialColors(Sorting){
    selectedAlgo.colorsr[this.j + 1] = 255;
      selectedAlgo.colorsg[this.j + 1] = 0;
      selectedAlgo.colorsb[this.j + 1] = 0;
      selectedAlgo.colorsr[this.prevj] = 255;
      selectedAlgo.colorsg[this.prevj] = 255;
      selectedAlgo.colorsb[this.prevj] = 255;
      selectedAlgo.colorsr[this.n - this.i + 1] = 0;
      selectedAlgo.colorsg[this.n - this.i + 1 ] = 255;
      selectedAlgo.colorsb[this.n - this.i +1] = 0;
}

    
  }
  