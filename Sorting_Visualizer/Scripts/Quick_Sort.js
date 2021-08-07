class Quick_Sort extends Sorting {
    constructor() {
      super();
      this.setInitialColors(0, 0 ,150);
      this.algorithm = "Quick Sort";
      this.finish = false;
      this.points = false;
      
      for(let k = 0; k < this.n; k++) {
        this.states.push(-1);
      }
    }
    
    sort() 
    {
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
        this.quickSort(0, this.n - 1);
    }

    
    
    async quickSort(start, end) {
      
      if(start >= end) {
         this.finish = true;
         this.comparsions += 1;
         return;
      }
      
      let index = await this.partition(start, end);
      this.states[index] = -1;
      await Promise.all([this.quickSort(start, index-1), this.quickSort(index+1, end)]);
  }

    async partition(start, end) {  
      
      for (let k = start; k < end; k++) {
        this.states[k] = 1;
      }
      let pivotValue = this.arr[end];
      this.arrayacess += 1;
      let pivotIndex = start;
      this.states[pivotIndex] = 0;
      
     for (let k = start; k < end; k++) {
       if (this.arr[k] < pivotValue) {
          this.states[pivotIndex] = -1;
           this.comparsions += 1;
           this.arrayacess += 1;
           if (!this.points)
           await this.sleep(50);
           this.swap(k, pivotIndex);
           pivotIndex++; 
           this.states[pivotIndex] = 0;
    }

    

  }
     await this.sleep(50);
     this.swap(pivotIndex, end);
     for (let k = start; k < end; k++) {
      this.states[k] = -1;
    }
     return pivotIndex;
  }

  ColorManager(k)
    {
       var color = 255;
        if(this.states[k] == 0) {
            // Pivot Element
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
  