
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
  this.algorithm ="";
  this.i = 1;
  this.j = 0;
  this.n = 50;
  this.current = 0;
  this.prevj = 0;
  
  }
   
  sort(){
    throw new Error("Impelemnation not found");
  }

  setInitialColors(Sorting){
    throw new Error("Impelemnation not found");
  }

  sorted(){
    this.x = this.n - 1;
    this.setIndexColor(this, this.x, 0 , 255, 0);
    this.x--;
  }

  setIndexColor(Sorting, index, r, g, b) {
      Sorting.colorsr[index] = r;
        Sorting.colorsg[index] = g;
        Sorting.colorb[index] = b;
  }

}