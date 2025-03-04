export const getStarRating = (voteAverage: number | undefined) => {
  if (voteAverage === undefined) return 0;
  return Math.round(voteAverage / 2); // Converte 0-10 para 0-5 e arredonda
};
