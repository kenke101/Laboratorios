// Interaccion 1
console.log('Interaccion 1');

const getAllDirectors = (movies) => {
  let directoresSFiltrar = movies.map((pelicula) => pelicula.director);

  let directoresFiltrados = directoresSFiltrar.filter((director, index)=>{
    return directoresSFiltrar.indexOf(director) === index;
  });
console.log(directoresFiltrados);
return directoresFiltrados;
};
getAllDirectors(movies);

// Interaccion 2
console.log('Interaccion 2');

const howManyMovies = (movies) => {
  let stevendrama = movies.filter((pelicula) => {
    return (
      pelicula.director === "Steven Spielberg" && 
      pelicula.genre.includes("Drama")
    );
  });
console.table(stevendrama);
return stevendrama.length;
};
howManyMovies(movies);

//Interaccion 3
console.log('Interaccion 3');

const scoresAverage = (movies) =>{
  if (movies.length === 0) return 0;
  let puntuacion = movies.reduce((acumulador, valoractual) => {
    if(valoractual.score){
      return acumulador + valoractual.score;
    } else {
      return acumulador;
    }
  },0);
  let average = (puntuacion / movies.length).toFixed(2);
 console.log(Number(average));
  return Number(average);
};
scoresAverage(movies);

// Iteration 4
console.log('Interaccion 4');

const dramaMoviesScore = (movies) => {
  if(movies.length === 0) return 0;
  let dramamovies = movies.filter((pelicula)=> pelicula.genre.includes("Drama")
  );
console.log(scoresAverage(dramamovies));
return scoresAverage(dramamovies)
};
alert(dramaMoviesScore(movies));

// Iteration 5
console.log('Interaccion 5');

const orderByYear = (movies) => {
  let peliculas =movies.map((pelicula) => pelicula);

  peliculas.sort((peliA, peliB) => {
    if(peliA.year > peliB.year) return peliA.year - peliB.year;
    if(peliA.year < peliB.year) return peliA.year - peliB.year;
    else return peliA.title.localeCompare(peliB.title);
  });
console.log(peliculas);
  return peliculas;
};
orderByYear(movies);

// Iteration 6
console.log('Interaccion 6');

const orderAlphabetically = (movies) => {
  return movies.map((pelicula) => pelicula.title).sort().slice(0,20);
};
console.table(orderAlphabetically(movies));

