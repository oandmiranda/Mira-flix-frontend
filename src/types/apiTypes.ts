export interface Results {
  adult?: boolean;
  backdrop_path?: string;
  first_air_date?: string;
  genre_ids?: number[];
  id?: number;
  name: string;
  title: string;
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
  id?: number | string | string[];
  title?: string;
  slug?: string;
  hasCarousel?: boolean;
  items: Items;
}

export interface IMovie {
  id?: number;
  title?: string;
  name?: string;
  overview?: string;
  poster_path?: string;
}
