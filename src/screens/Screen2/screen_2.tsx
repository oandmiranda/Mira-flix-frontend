import { useMoviesContext } from '@src/context/moviesContext';

export default function Screen2() {
  const movies = useMoviesContext();

  return (
    <>
      <div>
        {movies &&
          movies.map((movie) => (
            <div key={movie.id}>
              <h1>{movie.title}</h1>
              <p>{movie.sinopse}</p>
              <img src={movie.srcImage} />
            </div>
          ))}
      </div>
    </>
  );
}
