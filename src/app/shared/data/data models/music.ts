import { Album } from './album';
import { Track } from './track';
import { Observable } from 'rxjs';

export interface Music {
  type: string;
  single: Track;
  album: Album;
  feature: Track;
}

export abstract class MusicData {
  abstract getListData(): Observable<Music[]>;
  abstract getData(id: string, type: string): Music;
}
