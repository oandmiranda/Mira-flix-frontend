export const formatDate = (date: number | undefined): string => {
  if (!date) return 'Data indisponível'; // Caso a data não seja fornecida

  const dateString = date.toString();

  const year = dateString.slice(0, 4);
  const month = dateString.slice(5, 7);
  const day = dateString.slice(8, 10);

  return `${day}/${month}/${year}`;
};
