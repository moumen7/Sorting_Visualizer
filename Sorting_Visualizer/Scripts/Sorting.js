
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
  this.x = this.n - 1;
  this.blinker = 0;
  
  }
   
   sort(){
    throw new Error("Impelemenation not found");
  }

  ColorManager(){
    throw new Error("Impelemenation not found");
  }

  preformsort() {
    throw new Error("Implementaion not found");
  }

  sorted(){
    throw new Error("Implementaion not found");
  }

  endsearch(){
    throw new Error("Implementaion not found");
  }

  setInitialColors(r, g ,b)
  {
    for (let k = 0; k < this.n; k++) {
      this.colorsr.push(r);
      this.colorsg.push(g);
      this.colorsb.push(b);
    }
  }

  ColornOnFinish(r, g, b){
      this.setIndexColor(this.x, r, g, b);
      this.x--;
  }

  setIndexColor(index, r, g, b) {
        this.colorsr[index] = r;
        this.colorsg[index] = g;
        this.colorsb[index] = b;
  }

  
  blink(index, r ,g ,b){
    this.blinker++;

  if (this.blinker % 5 === 0)
  	  this.setIndexColor(index, r,g,b);
  else
      this.setIndexColor(index, 0,0, 150);
  }
  
}