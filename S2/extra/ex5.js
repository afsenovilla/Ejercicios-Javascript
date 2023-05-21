function rollDice(numFaces) {
    const min = 1; // Valor mínimo del dado
    const max = numFaces; // Valor máximo del dado
  
    // Generar un número aleatorio entre el valor mínimo y máximo
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return randomNumber;
  }
  

const numFaces = 6; // Dado de 6 caras
const result = rollDice(numFaces);
console.log(`Resultado de la tirada: ${result}`);