export const getStarRating = (voteAverage: number | undefined) => {
  if (voteAverage === undefined) return 0;
  return Math.round(voteAverage / 2);
};
