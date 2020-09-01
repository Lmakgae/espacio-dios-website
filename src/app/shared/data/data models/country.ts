import { State } from './state';

export interface Country {
  code2: string;
  code3: string;
  name: string;
  capital: string;
  region: string;
  subregion: string;
  states: State[];
}
