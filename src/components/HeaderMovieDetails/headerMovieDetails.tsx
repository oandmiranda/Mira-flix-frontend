import { IList } from '@src/types/apiTypes';

export default function HeaderMovieDetails({ items, id }: IList) {
  const movie = items.results.find((movie) => movie.id == id);
  console.log(movie);

  return <div>{movie && <h3>{movie.name || movie.title}</h3>}</div>;
}
