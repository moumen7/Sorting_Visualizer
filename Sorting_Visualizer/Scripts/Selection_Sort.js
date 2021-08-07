class Selection_Sort extends Sorting {
    constructor() {
      super();
      this.x = this.n-1;
      this.next = this.j + 1;
      this.prevMin = 0;
      this.setInitialColors(0, 0, 150);
      this.algorithm = "Selection Sort";
      this.min_idx = 0;
      this.points = false;
      for(let k = 0; k < this.n; k++) {
        this.states.push(-1);
      }
    }
    

    sort(){

      if(this.finish)
      {
        this.ColornOnFinish(0, 255, 0);
      }
      else
      { 
        this.preformsort();
      }
    }


    async preformsort()
    {
        this.SelctionSort();
    }

     async SelctionSort() {

      
      for (let k  = 0; k < this.n-1; k++)
      {
        //being sorted now
        this.states[k] = 1;
        this.min_idx = k;
        let min = await this.getMin(k);
        this.states[min] = 0;
        if (!this.points)
          await this.sleep(100);
        if (this.points)
          await this.sleep(25);
        this.swap(min, k);
        this.states[k] = -1;
        this.states[min] = -1;
      }
      this.finish = true;
    }
    





async getMin(k){
  for (let c = k + 1; c < this.n; c++){
    if (this.arr[c] < this.arr[this.min_idx])
        this.min_idx = c;
        this.comparsions += 1;
        this.arrayacess += 2;
    }
    return this.min_idx;
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

  }
