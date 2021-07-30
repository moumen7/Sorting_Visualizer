class Selection_Sort extends Sorting {
    constructor() {
      super();
      this.x = this.n-1;
      this.next = this.j + 1;
      this.prevMin = 0;
      this.setInitialColors(0, 0, 150);
      this.algorithm = "Selection Sort";
    }

    
    async sort() {
      
      if (this.j >= this.n || this.sortedbool == true) {
        this.sortedbool = true;
        await this.sleep(1300);
        this.greenOnFinish();
      }
      else 
      { 
       
        this.ColorManager();
        //get min
        this.getMin();
        

        if (this.next >= this.n){
          this.swap(this.minElement, this.j);
          this.j++;
          this.next = this.j + 1;
          this.minElement = this.j;
        }   
      
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
      selectedAlgo.colorsr[this.j - 1] = 255;
      selectedAlgo.colorsg[this.j - 1] = 255;
      selectedAlgo.colorsb[this.j - 1] = 255;
      this.colorsr[this.next] = 255;
      this.colorsg[this.next] = 0;
      this.colorsb[this.next] = 0;
      this.colorsr[this.next - 1] = 255;
      this.colorsg[this.next - 1] = 255;
      this.colorsb[this.next - 1] = 255;

}

OnMinSelected() {
  
  this.colorsr[this.index] = 0;
  this.colorsg[this.index] = 0;
  this.colorsb[this.index] = 200;
}

async getMin(){
  while (this.next < this.n)
  {
    if (this.arr[this.next] < this.arr[this.minElement])
          this.minElement = this.next;
          this.comparsions += 1;
          this.arrayacess += 2;
          this.next++; 
    break;
  }
  
  
}

 sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


  }
