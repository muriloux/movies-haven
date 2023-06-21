import { Injectable } from '@angular/core';
import { Curator } from '../models/curator.model';

@Injectable({
  providedIn: 'root'
})
export class CuratorsService {

  constructor() { }

  getCurators(): Curator[] {
    return [
      {
        id: 1,
        name: 'Not Woke Shows',
        logo: 'nws-logo.png',
        url: 'https://www.notwokeshows.com/',
        new_movies: ["Jimmy Dore", "FUBAR", "Texas Rising"],
        last_update: '13 hours ago',
        reviews: true,
        status: 'active',
      },
      {
        id: 2,
        name: 'Worth it or Woke?',
        logo: 'wiow-logo.png',
        url: 'https://worthitorwoke.com/',
        new_movies: ["Padre Pio"],
        last_update: '2 days ago',
        reviews: true,
        status: 'active',
      },
      {
        id: 3,
        name: 'NON-WOKE MOVIES AND TV SHOWS',
        logo: 'imdb-logo.png',
        url: 'https://www.imdb.com/list/ls560452969/',
        new_movies: ["Tokyo Vice"],
        last_update: '6 days ago',
        reviews: false,
        status: 'active',
      },
      {
        id: 4,
        name: 'Best Non-Woke Movies After 2018',
        logo: 'imdb-logo.png',
        url: 'https://www.imdb.com/list/ls089242752/',
        new_movies: ["The Hunt"],
        last_update: '1 month ago',
        reviews: false,
        status: 'active',
      },

    ]
  }
}
