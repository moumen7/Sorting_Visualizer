class Bubble_Sort extends Sorting {
  constructor() {
    super();
    this.setInitialColors(0, 0 ,150);
    this.algorithm = "Bubble Sort";
    this.i=0;
    this.j=0; 
    this.points = false;
  }
  
  async sort() 
  {
    if(this.sorted())
    {
      this.ColornOnFinish(0, 255, 0);
    }
    else
    {
      this.preformsort();
      if(this.points == false)
      this.ColorManager();
    }
  }


  sorted() 
  { 
    if(this.i>=this.n)
      return true;
   return false;
  }

  ColorManager()
  {
   for (let s =0; s<this.n;s++) 
  {
    if(s == this.j + 1)
    {
      this.setIndexColor(s,255,0,0);
      }
       else if(s>=this.n - this.i)
       {
         this.setIndexColor(s,0,255,0);
       }
      else
      {
        this.setIndexColor(s,255,255,255);
     }
     
   }
   }
   ColorManager(k){
    var color = 255;
      if(this.states[k] == 0) {
          // min element
          return color = '#ff002f';
      }
      else if (this.states[k] == 1) {
          // Sorting bar
          return color = '#1cff51';
      }
      else
        return color;
  }
  async preformsort()
  {
    text("fuck ayman", 80 , 450);
    for (this.i =0; this.i < this.n - 1; this.i++) 
    {
     
       for (this.j = 0; this.j < this.n-this.i-1; this.j++)
        {
          this.states[this.j] = 0
          if (this.arr[this.j] > this.arr[this.j+1])
          {
            if(!this.points)
            await this.sleep(25); 
            this.swap(this.j, this.j+1);
          }

          this.comparsions++;
          this.arrayacess+=2;
          this.states[this.j] = -1
        }
      this.states[this.n-this.i - 1] = 1
       await this.sleep(25);
    }
    this.states[0] = 1
  }
  
}
