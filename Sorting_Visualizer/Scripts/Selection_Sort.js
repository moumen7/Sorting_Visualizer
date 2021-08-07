class Selection_Sort extends Sorting {
    constructor() {
      super();
      this.x = this.n-1;
      this.next = this.j + 1;
      this.prevMin = 0;
      this.setInitialColors(0, 0, 150);
      this.algorithm = "Selection Sort";
      this.indx = 0;;
      
    }

    
    async sort() {
      this.setIndexColor(this.indx, 255, 255,255);
      
      if (this.j >= this.n || this.sortedbool == true) {
        this.next = 0;
        this.sortedbool = true;
        
        this.ColornOnFinish(0, 255, 0);
      }
      else 
      { 
        if(this.points == false) 
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
      
      this.setIndexColor(this.j, 255,0,0);
      this.setIndexColor(this.j-1, 255,255,255);
      this.setIndexColor(this.next, 255, 0, 0);
      this.setIndexColor(this.next - 1, 255, 255, 255);
      if (this.next >= this.n -1)
      {
        this.setIndexColor(this.n - 1, 255, 255, 255);
      }
}



async getMin(){
  
  while (this.next < this.n)
  {
    if (this.arr[this.next] < this.arr[this.minElement])
          this.minElement = this.next;
          this.comparsions += 1;
          this.arrayacess += 2;
          this.next++;
    if(this.points == false) 
    break;
  }
  this.indx = this.minElement;
  this.blink(this.indx, 255, 169,0);
}

 sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


  }
