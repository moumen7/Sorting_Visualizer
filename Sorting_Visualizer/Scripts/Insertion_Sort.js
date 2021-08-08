class Insertion_Sort extends Sorting {
    constructor() {
      super();
      this.x = this.n - 1;
      this.setInitialColors(0, 0 ,150)
      this.algorithm = "Insertion Sort";
      this.points = false;
      for(let k = 0; k < this.n; k++) {
        this.states.push(-1);
      }
    }
    async sort() {
      if(this.sorted())
      {
        this.ColornOnFinish(0, 255, 0);
      }
      else
      {
        this.preformsort();
        
      }
    }
     sorted() 
    { 
      if(this.i>=this.n)
        return true;
      else
        return false;
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
      for (this.i = 1; this.i < this.n; this.i++)
      {
        this.current = this.arr[this.i];
        this.j = this.i - 1;
        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        this.states[this.i] = 1
        while (this.j >= 0 && this.arr[this.j] > this.current)
        {
            this.comparsions++;
            this.arr[this.j + 1] = this.arr[this.j];
            this.j = this.j - 1;
            this.arrayacess+=2;
            this.states[this.j] = 0;
            if(!this.points)
            await this.sleep(25);
            this.states[this.j] = -1;
        }
        
        this.arrayacess++;
        this.arr[this.j + 1] = this.current;
        await this.sleep(25);
        this.states[this.i] = -1

    }
    }
   
  }
  