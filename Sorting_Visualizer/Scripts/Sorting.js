
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

  ColorManager(){
    throw new Error("Impelemnation not found");
  }

  setInitialColors(r, g ,b)
  {
    for (let k = 0; k < this.n; k++) {
      this.colorsr.push(r);
      this.colorsg.push(g);
      this.colorsb.push(b);
    }
  }

  greenOnFinish(){
      selectedAlgo.colorsr[selectedAlgo.x] = 0;
      selectedAlgo.colorsg[selectedAlgo.x] = 255;
      selectedAlgo.colorsb[selectedAlgo.x] = 0;
      this.x--;
  }

  setIndexColor(index, r, g, b) {
        this.colorsr[index] = r;
        this.colorsg[index] = g;
        this.colorsb[index] = b;
  }

}