//Ejercicio #4

const intersection1 = (array, array2) => {
    let result = [];
    array.forEach(i => {
      array2.forEach(j => {
        if(i === j) {
          result.push(i);
        }
      }) 
    });
    return result;
  };
  
  intersection1(["Math", "English", "Programming"],["Geography", "Spanish", "Programming"])