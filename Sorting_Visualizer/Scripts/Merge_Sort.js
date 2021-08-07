class Merge_Sort extends Sorting {
    constructor() {
      super();
      this.setInitialColors(0, 0 ,150);
      this.algorithm = "Merge Sort";
      this.i=1;
      this.j=0;
      this.mid = 0;
      this.index = -1;
      this.indexarr = -1;
      this.sortedbool = false;
    }
    
    sort() 
    {
      if(this.sorted())
      {
        this.ColornOnFinish(0, 255, 0);
      }
      else
      {
        this.sortedbool = true;
        
        this.preformsort();
        this.ColorManager();
      }
      
    }
  
  
    sorted() 
    { 
      if(this.i>=this.n)
        return true;
     return false;
    }
  
    ColorManager()
    {
      for (let s =0; s<this.n;s++) 
      {
        if(s == this.j + 1)
        {
          this.setIndexColor(s,255,0,0);
        }
        else if(s>=this.n - this.i)
        {
          this.setIndexColor(s,0,255,0);
        }
        else
        {
          this.setIndexColor(s,255,255,255);
        }
       
      }
    }
    preformsort()
    {
        this.mergeSort(0, this.n-1);
        fill(255,255,255);
        
    }
    endsearch()
    {
        text('end search', 10, 30);
        return true;
    }
    swap(a, b)
    {
      this.temp = this.arr[a];
      this.arr[a] = this.arr[b];
      this.arr[b] = this.temp;
    }

    mergeSort(l ,r)
   {
      
   for (this.i; this.i<=this.n-1; this.i = 2*this.i)
   {
       // Pick starting point of different subarrays of current size
       for (this.j; this.j<this.n-1; this.j += 2*this.i)
       {
           // Find ending point of left subarray. mid+1 is starting
           // point of right
           this.mid = Math.min(this.j + this.i - 1, this.n-1);
 
           var right_end = Math.min(this.j + 2*this.i - 1, this.n-1);
           // Merge Subarrays arr[left_start...mid] & arr[mid+1...right_end]
           this.utilty_merge( this.j, right_end, this.mid);
           break;
       }
        if(this.j>=this.n-1)
        {
        this.i = 2*this.i;
        this.j =0;
        }
        else
        this.j += 2* this.i;

        break;
   }
       
  }

    utilty_merge( l, r, m){
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
        }
        this.index = -1;
        for (let rightPtr = this.mid + 1; rightPtr <= r; rightPtr++)
        {
          this.arrayacess++;
            n2[++this.index] = this.arr[rightPtr];
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
            this.arrayacess++;
            this.comparsions++;
        }
    }
  }
  