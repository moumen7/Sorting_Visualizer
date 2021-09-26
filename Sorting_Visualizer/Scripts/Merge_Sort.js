class Merge_Sort extends Sorting {
    constructor() {
      super();
      this.algorithm = "Merge Sort";
      this.i=1;
      this.j=0;
      this.mid = 0;
      this.index = -1;
      this.indexarr = -1;
    }
    
    async sort() 
    {   
        await this.preformsort();
        await this.sorted();
    }
    
    async preformsort()
    {
        await this.mergeSort(0, this.n-1);
    }

  async mergeSort(l ,r)
   {
      
   for (this.i=1; this.i<=this.n-1; this.i = 2*this.i)
   {
       // Pick starting point of different subarrays of current size
       for (this.j=0; this.j<this.n-1; this.j += 2*this.i)
       {
           // Find ending point of left subarray. mid+1 is starting
           // point of right
           this.mid =  Math.min(this.j + this.i - 1, this.n-1);
 
           var right_end = Math.min(this.j + 2*this.i - 1, this.n-1);
           // Merge Subarrays arr[left_start...mid] & arr[mid+1...right_end]
           await this.utilty_merge( this.j, right_end, this.mid);
           if(!this.points)
           await this.sleep(this.sleepfactor);
       }
       await this.sleep(this.sleepfactor);
   }
       
  }

    async utilty_merge( l, r, m){
        var n1Size = m - l  + 2;
        var n2Size = r - ( m+ 1) +2;
        var n1 = new Array(n1Size);
        var n2 = new Array(n2Size);
        n1[n1Size - 1] = Number.MAX_VALUE;
        n2[n2Size - 1] = Number.MAX_VALUE;
        this.index = -1;
        //copying values
        for (let leftPtr = l; leftPtr <= this.mid; leftPtr++)
        {
          this.arrayacess++;
            n1[++this.index] = this.arr[leftPtr];
            this.states[leftPtr] = 0
            if(!this.points)
            await this.sleep(this.sleepfactor);
        }
        this.index = -1;
        for (let rightPtr = this.mid + 1; rightPtr <= r; rightPtr++)
        {
          this.arrayacess++;
            n2[++this.index] = this.arr[rightPtr];
            this.states[rightPtr] = 1
           
            await this.sleep(this.sleepfactor);
        }
        //
        this.indexarr = l-1;
        var indexn1 = 0;
        var indexn2 = 0;

        for (let k = l; k <= r ; k++)
        {
            if(n1[indexn1] < n2[indexn2])
            {
                this.arr[++this.indexarr] = n1[indexn1];
                indexn1++;
            }
            else
            {
                this.arr[++this.indexarr] = n2[indexn2];
                indexn2++;
            }
            this.states[this.indexarr] = -1
            this.arrayacess++;
            this.comparsions++;
            if(!this.points)
            await this.sleep(this.sleepfactor);
        }
    }
  }
  