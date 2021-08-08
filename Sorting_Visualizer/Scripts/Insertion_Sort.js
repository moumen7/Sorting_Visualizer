class Insertion_Sort extends Sorting {
    constructor() {
      super();
      this.x = this.n - 1;
      this.setInitialColors(0, 0 ,150)
      this.algorithm = "Insertion Sort";
      this.points = false;
    }
    async sort() {
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
    async preformsort()
    {
      for (this.i = 1; this.i < this.n; this.i++)
      {
        this.current = this.arr[this.i];
        this.j = this.i - 1;
        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (this.j >= 0 && this.arr[this.j] > this.current)
        {
            this.comparsions++;
            this.arr[this.j + 1] = this.arr[this.j];
            this.j = this.j - 1;
            this.arrayacess+=2;
            if(!this.points)
            await this.sleep(25);
        }
        this.arrayacess++;
        this.arr[this.j + 1] = this.current;
        await this.sleep(25);

    }
    }
   
  }
  