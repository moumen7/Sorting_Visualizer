class Bogo_Sort extends Sorting {
    constructor() {
      super();
      this.x = this.n-1;
      this.next = this.j + 1;
      this.prevMin = 0;
      this.setInitialColors(0, 0, 150);
      this.algorithm = "Bogo Sort";
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


     preformsort()
    {
        this.BogoSort();
    }

      BogoSort() {
      var isSorted = this.checkSorted(this.arr);
      if (isSorted){
        this.finish = true;
      }
    }
    

   checkSorted(arr){
    var sorted = true;
    for (let k = 0; k < n - 1; k++)
          {
            if (arr[k] > arr[k + 1]){
              
              return sorted = false;
            }
          }
    return sorted;
  }

ColorManager(k){
      shuffle(this.arr, true);
      this.arrayacess += 2;
      this.comparsions += 1;
      var color = 255;
      return color;
}

  }
