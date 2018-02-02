import {EnvEndpoint} from './env.endpoint';

export class Endpoint {
  get albums() {
    return `${EnvEndpoint.base}/albums`;
  }

  albumById(id: any) {
    return `${EnvEndpoint.base}/albumsbygenre/${id}`;
  }

  tracksByAlbum(id: any) {
    return `${EnvEndpoint.base}/tracksbyalbum/${id}`;
  }
}
