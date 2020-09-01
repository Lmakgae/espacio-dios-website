import { Track } from './track';

export interface Album {
  albumName: string;
  date: string;
  released: boolean;
  artwork: string;
  blurArtWork: string;
  allLink: string;
  appleMUrl: string;
  iTunesUrl: string;
  amaonUrl: string;
  googlePUrl: string;
  deerUrl: string;
  jooxUrl: string;
  tidalUrl: string;
  spotifyUrl: string;
  ytubeUrl: string;
  tracks: Track[];
}

