const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
let i = 0;
while (i < 2) {
    const q1 = prompt('Один из последних фильмов?');
    const q2 = prompt('На сколько оцените его?')
    personalMovieDB.movies[q1] = q2;
    i++;
}

console.log(personalMovieDB);