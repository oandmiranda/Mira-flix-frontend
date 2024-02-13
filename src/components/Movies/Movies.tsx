import { ListItem } from '@src/types/apiTypes';

export default function Movies({ title, items }: ListItem) {
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
