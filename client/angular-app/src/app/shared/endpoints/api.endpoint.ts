import {EnvEndpoint} from './env.endpoint';

export const Endpoint = {
  get albums(): string {
    return `${EnvEndpoint.base}/albums`;
  },

  get genres() : string {
    return EnvEndpoint.compose('/genres');
  },

  albumById(id: any) : string{
    return `${EnvEndpoint.base}/albumsbygenre/${id}`;
  },

  tracksByAlbum(id: any): string {
    return `${EnvEndpoint.base}/tracksbyalbum/${id}`;
  }
};

