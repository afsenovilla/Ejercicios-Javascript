function swap(array, index1, index2) {
    // Verificar que los índices estén dentro del rango del array
    if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {
      // Intercambiar los valores de los índices
      const temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
    }
  
    return array;
  }

  const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

console.log(swap(array, 1, 3));
// Output: ['Mesirve', 'Ronalguiño', 'Fernando Muralla', 'Cristiano Romualdo']
