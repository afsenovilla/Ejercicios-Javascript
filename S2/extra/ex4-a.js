function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text) {
        return i;
      }
    }
    return -1; // Devuelve -1 si el texto no se encuentra en el array
  }

const array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log(findArrayIndex(array, 'Caracol')); // 0
console.log(findArrayIndex(array, 'Salamandra')); // 2
console.log(findArrayIndex(array, 'Ajolote')); // 3
console.log(findArrayIndex(array, 'Mariposa')); // -1 (no se encuentra en el array)
