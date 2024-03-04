export interface Results {
  adult?: boolean;
  backdrop_path?: string;
  first_air_date?: string;
  genre_ids?: number[];
  id?: number;
  name: string;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface Items {
  page?: number;
  results: Results[];
  total_pages?: number;
  total_results?: number;
}

export interface IList {
  id?: string;
  items: Items;
}
