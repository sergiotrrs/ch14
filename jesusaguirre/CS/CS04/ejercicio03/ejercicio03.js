/* Write a program to compute the sum and product (multiplication) of an array of 
numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */
function sumaProducto() {
    this.suma =0;
    this.product =1;
  }
  sumaProducto.prototype.add = function(array) {
    array.forEach(function(entry) {
      this.suma += entry;
      this.product *=entry;
    }, this);
  };
  let obj = new sumaProducto();
  let arr=[1, 2, 3, 4];
  obj.add(arr);
  console.log(`arreglo ${arr}`);
  console.log(`la suma de los valores del arreglo es ${obj.suma}`);
  console.log(`el producto de los valores del arreglo es ${obj.product}`);
  
  