

function forEachCustom(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  }
  
  const myArray = [1, 2, 3, 4];
  
  forEachCustom(myArray, (element, index) => {
    console.log(`Element at index ${index}: ${element}`);
  });
  