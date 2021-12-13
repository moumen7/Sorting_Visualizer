
class Heap_Sort extends Sorting {
    constructor() {
        
        super();
         this.colorArray = ['#ff002f', '#90ee90', '#1cff51', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC']
        this.algorithm = "Heap Sort";
        this.l = 0;
        this.r = -1;
        this.i = 0;
        this.j = 0;
        this.states = [];

        this.points = false;
    }

    async parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    async leftChildIndex(index) {
        return (2 * index + 1);
    }

    async rightChildIndex(index) {
        return (2 * index + 2);
    }
    async swap(a, b) {
        let temp = this.arr[a];
        this.arr[a] = this.arr[b];
        this.arr[b] = temp;
        this.arrayacess+=2;
    }

    async insert(item) {

        this.r++;
        this.arr[this.r] =item;
        var index = this.r;
        var parent = await this.parentIndex(index);
        while ( this.arr[parent] && this.arr[parent] < this.arr[index]) {
            this.comparsions++;
            this.arrayacess+=2;
            if(!this.points)
            {
            await this.sleep(this.sleepfactor);
            }
            this.swap(parent, index);
            index = await this.parentIndex(index);
            parent = await this.parentIndex(index);
        }
        this.states[this.r - 1] = parseInt(Math.log2(this.r))+11
        
    }
    async deletee() {
        
        await this.swap(this.r,this.l)
        this.r--;
        var index = this.l;
        var leftChild = await this.leftChildIndex(index) ;
        var rightChild =await this.rightChildIndex(index);
        while ((leftChild <= this.r) && (this.arr[leftChild] && this.arr[leftChild] > this.arr[index] || this.arr[rightChild] > this.arr[index])) {
            this.comparsions+=2;
            this.arrayacess+=2;
            var max = leftChild;
            if(!this.points)
            {
                    await this.sleep(this.sleepfactor);
            }
            if (this.arr[rightChild] && rightChild <= this.r  && this.arr[rightChild] > this.arr[max]) {
                this.comparsions++;
                this.arrayacess+=2;
                max = rightChild
            }
            await this.swap(max, index);
            index = max;
            leftChild = await this.leftChildIndex(max);
            rightChild = await this.rightChildIndex(max);
            
        }
        this.states[this.r + 1] = 2        
    }
  
     ColorManager(k)
     {
        var color = 255;
         if(this.states[k] >= 0 && this.states[k] <= 20 ) {
             // Pivot Element
             return color = this.colorArray[this.states[k]];
         }
         else
           return color;
   }
    async sort() {
        await this.preformsort();
        await this.sorted()
    }
    async preformsort() {

        for (this.i = 0; this.i < this.n; this.i++) {
            await this.insert(this.arr[this.i]);
            await this.sleep(this.sleepfactor);
        }
        this.states[this.r ] =this.states[this.r-1]

        for (this.i = 0; this.i <= this.n; this.i++) {
            await this.deletee();
            await this.sleep(this.sleepfactor);
        }
    }

}
