import { IList } from '@src/types/apiTypes';

// This component loops the "results" array and accesses its values
export default function Movies({ title, items }: IList) {
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {items.results.length > 0 &&
          items.results.map((item, key) => <img key={key} src={`${baseUrlPathImage}${item.poster_path}`} />)}
      </div>
    </div>
  );
}
