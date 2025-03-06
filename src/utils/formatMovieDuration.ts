export function formatMovieDuration(runtime: number = 0): string {
  if (runtime < 0) return 'Duração não fornecida';

  const hours = Math.floor(runtime / 60);
  const remainingMinutes = runtime % 60;

  if (hours > 0) {
    return `${hours}h${remainingMinutes}m`;
  } else {
    return `${remainingMinutes}m`;
  }
}
