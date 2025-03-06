import { Star, StarContainer } from './style';

const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;

  return (
    <StarContainer>
      {Array.from({ length: totalStars }).map((_, index) => (
        <Star key={index} isActive={index < rating}>
          ★
        </Star>
      ))}
    </StarContainer>
  );
};

export default StarRating;
