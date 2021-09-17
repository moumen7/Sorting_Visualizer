/**
 * Abstract Class 
 *
 * @class Sorting
 */
 class Sorting
 {
   constructor()
   { 
     if (this.constructor == Sorting) {
       throw new Error("Abstract classes can't be instantiated.");
     } 
 
   this.arr = [];
   this.sortedbool = false;
   this.colorsr = [];
   this.colorsg = [];
   this.colorsb = [];
   this.arrayacess = 0;
   this.comparsions = 0;
   this.points = false;
   this.algorithm ="";
   this.i = 0;
   this.j = 0;
   this.n = 200;
   this.current = 0;
   this.prevj = 0;
   this.sleepfactor=25;
   this.x = this.n - 1;
   this.blinker = 0;
   this.states = [];
   
   }
    
   async sort(){
     throw new Error("Impelemenation not found");
   }
   
   ColorManager(){
     throw new Error("Impelemenation not found");
   }
 
   preformsort() {
     throw new Error("Implementaion not found");
   }
 
   async sorted(){
    for (let k = 0; k < this.n; k++) {
      this.states[k] = 2;
      await this.sleep(10);
    }
   }
 
   endsearch(){
     throw new Error("Implementaion not found");
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
       else if (this.states[k] == 2) {
         // Sorting bar
         return color = '#1cff51';
     }
       else
         return color;
 }
   async swap(a, b)
   {
     
     this.temp = this.arr[a];
     this.arr[a] = this.arr[b];
     this.arr[b] = this.temp;
     this.arrayacess+=4;
   }
   async sleep(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
    }
   
 }