class Bubble_sort extends Sorting {
  constructor() {
    super();
    this.setInitialColors(0, 0 ,150);
    this.algorithm = "Bubble Sort";
    this.i=0;
    this.j=0; 
    this.points = false;
  }
  
  sort() 
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
  preformsort()
  {
    for (this.i; this.i < this.n; this.i++) 
    {        
        while (!this.endsearch())
        {
          if (this.arr[this.j] > this.arr[this.j+1])
          {
            this.swap(this.j, this.j+1);
          }
          this.comparsions++;
          
          this.j++;
          if(this.points == false)
          break;
        }
        if(this.endsearch())
        {
           this.i++;
           this.j = 0;
        }
        this.arrayacess+=2;
      break;
    }
  }
  endsearch()
  {
   
    if(this.j >= this.n-this.i-1)
    return true;
    else
    return false;
  }
  swap(a, b)
  {
    this.temp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = this.temp;
  }
}
