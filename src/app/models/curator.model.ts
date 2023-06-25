export interface Curator {
  id: number;
  name: string;
  alias: string;
  url: string
  new_movies: string[];
  last_update: string;
  reviews: boolean;
  status: string;
}
