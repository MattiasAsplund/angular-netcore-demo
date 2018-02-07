export class MediaQueryHelper {
  private static _isMobile: boolean;

  static get isMobile(): boolean {
    return this._isMobile;
  }

  static set isMobile(value: boolean) {
    this._isMobile = value;
  }
}
