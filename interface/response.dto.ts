export default class CommonResponse<T> {
  public readonly language: string;
  public readonly timeStamp: number;
  constructor(language: string) {
    this.timeStamp = Date.now();
    this.language = language;
  }
  resultData: T | null = null;
}
