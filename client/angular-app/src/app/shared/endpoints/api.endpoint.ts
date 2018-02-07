import {EnvEndpoint} from './env.endpoint';
import {environment} from '../../../environments/environment';

export const Endpoint = {
  get albums(): string {
    return EnvEndpoint.base
      + (environment.production
        ? ChinookEndpoint_PROD.albums
        : ChinookEndpoint_DEV.albums);
  },

  get genres(): string {
    return EnvEndpoint.base
      + (environment.production
        ? ChinookEndpoint_PROD.genres
        : ChinookEndpoint_DEV.genres);
  },

  albumsByGenre(genreId: any): string {

    if (genreId === 0) return Endpoint.albums;

    return EnvEndpoint.base
      + (environment.production
        ? ChinookEndpoint_PROD.albumsByGenre + genreId
        : ChinookEndpoint_DEV.albumsByGenre);
  },

  tracksByAlbum(albumId: any): string {
    return EnvEndpoint.base
      + (environment.production
        ? ChinookEndpoint_PROD.tracksByAlbum + albumId
        : ChinookEndpoint_DEV.tracksByAlbum);
  }
};

export const ChinookEndpoint_PROD = {
  albums: '/albums',
  genres: '/genres',
  albumsByGenre: '/albumsByGenre/',
  tracksByAlbum: '/tracksByAlbum/',
};

export const ChinookEndpoint_DEV = {
  albums: '/albumsByGenre.json',
  genres: '/genres.json',
  albumsByGenre: '/albumsByGenre.json',
  tracksByAlbum: '/tracksByAlbum_v2.json'
};
