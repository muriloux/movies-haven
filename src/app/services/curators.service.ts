import { Injectable } from '@angular/core';
import { Curator } from '../models/curator.model';

@Injectable({
  providedIn: 'root',
})
export class CuratorsService {
  constructor() {}

  getCurators(): Curator[] {
    return [
      {
        id: 1,
        name: 'Not Woke Shows',
        alias: 'nws',
        url: 'https://www.notwokeshows.com/',
        new_movies: ['Jimmy Dore', 'FUBAR', 'Texas Rising'],
        last_update: '13 hours ago',
        reviews: true,
        total_movies: null,
        status: 'Active',
      },
      {
        id: 2,
        name: 'Worth it or Woke?',
        alias: 'wiow',
        url: 'https://worthitorwoke.com/',
        new_movies: ['Padre Pio'],
        last_update: '2 days ago',
        reviews: true,
        total_movies: null,
        status: 'Active',
      },
      {
        id: 3,
        name: 'NON-WOKE MOVIES AND TV SHOWS',
        alias: 'imdb',
        url: 'https://www.imdb.com/list/ls560452969/',
        new_movies: ['Tokyo Vice'],
        last_update: '6 days ago',
        reviews: false,
        total_movies: null,
        status: 'Active',
      },
      {
        id: 4,
        name: 'Best Non-Woke Movies After 2018',
        alias: 'imdb',
        url: 'https://www.imdb.com/list/ls089242752/',
        new_movies: ['The Hunt'],
        last_update: '1 month ago',
        reviews: false,
        total_movies: null,
        status: 'Active',
      },
      {
        id: 5,
        name: 'TV (television) Shows non-woke (non woke) 2016 to 2023',
        alias: 'imdb',
        url: 'https://www.imdb.com/list/ls561971329/',
        new_movies: ['Psycho-Pass'],
        last_update: '3 months ago',
        reviews: false,
        total_movies: null,
        status: 'Active',
      },
    ];
  }
}
