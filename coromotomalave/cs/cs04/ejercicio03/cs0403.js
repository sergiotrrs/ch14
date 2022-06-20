//Exercise #3

const sumArray1 = (array) => {
    let result = 0;
    let length = array.length;
    for(let i = 0; i < length; i++){
      result += array[i];
    }
    return result;
  };

  sumArray1([4, 8, 6, 10])