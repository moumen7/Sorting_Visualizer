class Selection_Sort extends Sorting {
    constructor() {
      super();
      this.x = this.n-1;
      this.setInitialColors(255, 255, 255);
      this.algorithm = "Selection Sort";
    }

    
    async sort() {
      if (this.j == this.n || this.sortedbool == true) {
        this.sortedbool = true;
        await this.sleep(1300);
        this.greenOnFinish();
      }
      else 
      { 
        this.ColorManager();

        if (this.j < this.n - 1){
        this.next = this.j + 1;
        this.minElement = this.j;
        //get min
        while (this.next < this.n){
            if (this.arr[this.next] < this.arr[this.minElement])
                 this.minElement = this.next;
                  this.comparsions += 2;
                  this.arrayacess += 2;
                  this.OnSwapColors();
           this.next++;                
        }
        //swap
        this.swap(this.minElement, this.j);     
      }
      this.j++;
    }

    }
    
    
 swap(a, b)
{
  this.temp = this.arr[a];
  this.arr[a] = this.arr[b];
  this.arr[b] = this.temp;
}


ColorManager(){
      selectedAlgo.colorsr[this.j] = 255;
      selectedAlgo.colorsg[this.j] = 0;
      selectedAlgo.colorsb[this.j] = 0;
      this.colorsr[this.next] = 214;
      this.colorsg[this.next] = 78;
      this.colorsb[this.next] = 9;
}

OnSwapColors() {
  this.colorsr[this.minElement] = 23;
  this.colorsg[this.minElement] = 192;
  this.colorsb[this.minElement] = 195;
  this.colorsr[this.next] = 20;
  this.colorsg[this.next] = 194;
  this.colorsb[this.next] = 97;
}

 sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


  }
