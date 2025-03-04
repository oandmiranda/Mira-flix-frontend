const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;

  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: totalStars }).map((_, index) => (
        <span key={index} style={{ color: index < rating ? 'gold' : 'lightgray', fontSize: '17px' }}>
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
