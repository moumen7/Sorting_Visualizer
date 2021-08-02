class Insertion_sort extends Sorting {
    constructor() {
      super();
      this.x = this.n - 1;
      this.setInitialColors(0, 0 ,150)
      this.algorithm = "Insertion Sort";
    }
    sort() {
      if(this.sorted())
      {
        this.ColornOnFinish(0, 255, 0);
      }
      else
      {
        this.preformsort();
        this.ColorManager();
      }
    }
    sorted() 
    { 
      if(this.i>=this.n)
        return true;
      else
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
        else if(s<=this.i)
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
            this.arr[this.j+1] = this.arr[this.j];
            this.j--;
            break;
          }
          if(this.endsearch())
          {
             this.arr[this.j+1] = this.current;
             this.i++;
             this.current = this.arr[this.i];
             this.j = this.i-1;
          }
          this.arrayacess+=2;
        break;
      }
    }
    endsearch()
    {
      this.comparsions++;
      this.arrayacess++;
      if(this.j <= -1 ||  (this.current >= this.arr[this.j]))
      return true;
      else
      return false;

    }
  }
  