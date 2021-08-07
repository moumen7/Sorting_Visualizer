class Quick_Sort extends Sorting {
    constructor() {
      super();
      this.setInitialColors(0, 0 ,150);
      this.algorithm = "Quick Sort";
      this.i=1;
      this.j=0;
      this.finish = false;
      
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
        this.ColorManager();
      }
      
    }

     async preformsort()
    {
        this.quickSort(0, this.n - 1);
    }

    ColorManager()
    {
      return true;
    }
    
    async quickSort(start, end) {
      
      if(start >= end) {
         this.finish = true;
         this.comparsions += 1;
         return;
      }
      
      let index = await this.partition(start, end);
      await Promise.all([this.quickSort(start, index-1), this.quickSort(index+1, end)]);
  }

    async partition(start, end) {  

      let pivotValue = this.arr[end];
      this.arrayacess += 1;
      let pivotIndex = start;
      
     for (let k = start; k < end; k++) {
       if (this.arr[k] < pivotValue) {
           this.comparsions += 1;
           this.arrayacess += 1;
           await this.swap(k, pivotIndex);
           pivotIndex++; 
    }

  }
     await this.swap(pivotIndex, end);
     return pivotIndex;
  }
    



  async swap(a, b) {
    await this.sleep(100);
    let t = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = t;
    this.arrayacess += 4;
 }
}
  