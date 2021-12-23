class Comb_Sort extends Sorting {
    constructor() {
      super();
      this.algorithm = "Comb Sort";
      this.i=0;
      this.j=0; 
      this.points = false;
      this.gap = this.n;
      this.SHRINK_FACTOR = 1.3;
      
    }
    
    async sort() 
    {
       await this.preformsort();
       await this.sorted()
    }
  

    async preformsort()
    {   
      await this.combSort();
    }


    async combSort(){

        this.gap = await this.getNextGap(this.n);
        while (this.gap != 1){

            await this.sleep(this.sleepfactor);
            this.gap = await this.getNextGap(this.gap);
           
            
            for (this.i = 0; this.i < this.n - this.gap; this.i++)
            {
                await this.sleep(this.sleepfactor);
                this.states[this.i] = 5;
                this.comparsions++;
                if (this.arr[this.i] > this.arr[this.i + this.gap]){
                    this.states[this.i] = 4;
                    this.states[this.i + this.gap] = 3;
                    this.arrayacess += 2;
                    await this.sleep(this.sleepfactor); 
                    this.swap(this.i, this.i + this.gap);
                    this.comparsions += 1;
                }
                this.states[this.i] = 5;
                this.states[this.i + this.gap] = 5;
                    
            }
    
          }
    
    }

    async getNextGap(g){
        await this.sleep(this.sleepfactor);
        var returner = g/this.SHRINK_FACTOR;
        return parseInt(returner);
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
           return color = '#90ee90';
       }
       //2 is resrved for green when finishing sorting
       else if (this.states[k] == 4) {
         // first element in gap
         return color = '#FBFF00';
     }
     else if (this.states[k] == 3) {
        // first element in gap
        return color = '#0071FF';
    }
    else if (this.states[k] == 2) {
        // Sorted bar
        return color = '#1cff51';
    }
       else
         return color;
 }
    
  }
  