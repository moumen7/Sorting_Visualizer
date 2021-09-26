class Quick_Sort extends Sorting {
    constructor() {
      super();
      this.algorithm = "Quick Sort";
      this.finish = false;
      this.points = false;
      
      for(let k = 0; k < this.n; k++) {
        this.states.push(-1);
      }
    }
    
    async sort() 
    {
     
      await this.preformsort();
      await this.sorted()
    }

     async preformsort()
    {
        await this.quickSort(0, this.n - 1);
    }

    
    
    async quickSort(start, end) {
      
      if(start >= end) {
         this.finish = true;
         this.comparsions += 1;
         return;
      }
      
      let index = await this.partition(start, end);
      this.states[index] = -1;
      await this.quickSort(start, index-1);
      await this.quickSort(index+1, end);
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
           await this.sleep(this.sleepfactor);
           this.swap(k, pivotIndex);
           pivotIndex++; 
           this.states[pivotIndex] = 0;
    }

    

  }
     await this.sleep(this.sleepfactor);
     this.swap(pivotIndex, end);
     for (let k = start; k < end; k++) {
      this.states[k] = -1;
    }
     return pivotIndex;
  }

 
    
}
  