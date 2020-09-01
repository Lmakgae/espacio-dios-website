export class LyricsOptions {
  title: string;
  feat: string;
  body: string[];

  constructor(tit: string, fe: string, bo: string[]) {
    this.title = tit;
    this.feat = fe;
    this.body = bo;
  }
}
