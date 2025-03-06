export const getYear = (date: number | undefined): string => {
  if (!date) return 'Data indisponível';

  const dateString = date.toString();
  const year = dateString.slice(0, 4);

  return `${year}`;
};
