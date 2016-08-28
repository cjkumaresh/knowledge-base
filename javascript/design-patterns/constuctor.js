/**
 * Constructor Pattern without prototype
 */
 function Car (model, year, miles) {
   this.model = model;
   this.year = year;
   this.miles = miles;

   this.toString = function () {
     return this.model + " has done " + this.miles + " miles";
   };
 }

 // Usage:

 // We can create new instances of the car
 var civic = new Car ("Mercedes Benz SLR", 2009, 20000);
 var mondeo = new Car ("Chevrolet Cruz", 2010, 5000);

 // and then open our browser console to view the
 // output of the toString() method being called on
 // these objects
 console.log( civic.toString() );
 console.log( mondeo.toString() );

/**
 * Constructor Pattern with prototype
 */
 function Car (model, year, miles) {
   this.model = model;
   this.year = year;
   this.miles = miles;
 }

Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};
