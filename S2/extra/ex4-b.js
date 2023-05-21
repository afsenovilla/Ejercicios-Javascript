function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }

const array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log(removeItem(array, 'Salamandra')); // Output: ['Caracol', 'Mosquito', 'Ajolote']
console.log(removeItem(array, 'Mosquito')); // Output: ['Caracol', 'Ajolote']
console.log(removeItem(array, 'Rana')); // Output: ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
