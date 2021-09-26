class Bubble_Sort extends Sorting {
  constructor() {
    super();
    this.algorithm = "Bubble Sort";
    this.i=0;
    this.j=0; 
    this.points = false;
  }
  
  async sort() 
  {
     await this.preformsort();
     await this.sorted()
  }



 
  async preformsort()
  {
    for (this.i =0; this.i < this.n - 1; this.i++) 
    {
     
       for (this.j = 0; this.j < this.n-this.i-1; this.j++)
        {
          this.states[this.j] = 0
          if (this.arr[this.j] > this.arr[this.j+1])
          {
            if(!this.points)
            await this.sleep(this.sleepfactor); 
            this.swap(this.j, this.j+1);
          }

          this.comparsions++;
          this.arrayacess+=2;
          this.states[this.j] = -1
        }
      this.states[this.n-this.i - 1] = 1
       await this.sleep(this.sleepfactor);
    }
    this.states[0] = 1
  }
  
}
