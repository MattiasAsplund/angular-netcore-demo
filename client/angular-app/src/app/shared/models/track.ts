export interface Track {
  trackId: number;
  trackName: string;
  composer: string;
  milliseconds: number;
  artistName: string;
  albumName: string;
}

export interface TracksByAlbum {
  albumId: number;
  albumName: string;
  artistName: string;

  tracks: Track[];
}
