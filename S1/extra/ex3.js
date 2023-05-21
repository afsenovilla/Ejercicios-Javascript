const movies = [
    { name: "Your Name", durationInMinutes: 130 },
    { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
    { name: "Origen", durationInMinutes: 165 },
    { name: "El señor de los anillos", durationInMinutes: 967 },
    { name: "Solo en casa", durationInMinutes: 214 },
    { name: "El jardin de las palabras", durationInMinutes: 40 }
  ];
  
  const smallMovies = [];
  const mediumMovies = [];
  const largeMovies = [];
  
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.durationInMinutes < 100) {
      smallMovies.push(movie);
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
      mediumMovies.push(movie);
    } else {
      largeMovies.push(movie);
    }
  }
  
  console.log("Películas pequeñas (<100 minutos):");
  console.log(smallMovies);
  console.log("Películas medianas (>=100 minutos y <200 minutos):");
  console.log(mediumMovies);
  console.log("Películas grandes (>200 minutos):");
  console.log(largeMovies);
  