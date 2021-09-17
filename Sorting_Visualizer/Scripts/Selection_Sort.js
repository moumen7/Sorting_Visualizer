class Selection_Sort extends Sorting {
    constructor() {
      super();
      this.x = this.n-1;
      this.next = this.j + 1;
      this.prevMin = 0;
      this.algorithm = "Selection Sort";
      this.min_idx = 0;
      this.points = false;
      for(let k = 0; k < this.n; k++) {
        this.states.push(-1);
      }
    }
    

    async sort(){
        await this.preformsort();
        await this.sorted()
    }


    async preformsort()
    {
        await this.SelctionSort();
    }

     async SelctionSort() {
      for (let k  = 0; k < this.n-1; k++)
      {
        //being sorted now
        this.states[k] = 1;
        this.min_idx = k;
        let min = await this.getMin(k);
        this.states[min] = 0;
        await this.sleep(this.sleepfactor);
        this.swap(min, k);
        this.states[k] = -1;
        this.states[min] = -1;
      }
      this.finish = true;
    }
    


async getMin(k){
  for (let c = k + 1; c < this.n; c++){
    this.states[c] = 0;
    if (this.arr[c] < this.arr[this.min_idx])
    {
      if(this.min_idx!=k)
      {
        this.states[this.min_idx] = -1;
      }
        this.min_idx = c;
        this.states[this.min_idx] = 0;
    }

    this.comparsions += 1;
    this.arrayacess += 2;
    if (!this.points)
    await this.sleep(this.sleepfactor);
    if(c!=this.min_idx)
      this.states[c] = -1;
    
    }
    
    return this.min_idx;
}


  }
