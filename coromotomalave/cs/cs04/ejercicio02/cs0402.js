//Ejercicio #02

const double1 = (array) => {
    let newArray = [];
    let length = array.length;
    for(let i = 0; i < length; i++){
      newArray.push(array[i] * 2);
    }
    return newArray;
  };

  double1([2, 4, 6, 10])