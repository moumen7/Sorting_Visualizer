class Insertion_Sort extends Sorting {
    constructor() {
      super();
      this.x = this.n - 1;
      this.algorithm = "Insertion Sort";
      this.points = false;
      for(let k = 0; k < this.n; k++) {
        this.states.push(-1);
      }
    }
    async sort() {
        await this.preformsort();
        await this.sorted();
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
            await this.sleep(this.sleepfactor);
            this.states[this.j] = -1;
        }
        
        this.arrayacess++;
        this.arr[this.j + 1] = this.current;
        await this.sleep(this.sleepfactor);
        this.states[this.i] = -1

    }
    }
   
  }
  