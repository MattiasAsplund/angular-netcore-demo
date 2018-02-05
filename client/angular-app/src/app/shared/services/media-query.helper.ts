export class MediaQueryHelper {
  static get isMobile(): boolean {
    return this._isMobile;
  }

  static set isMobile(value: boolean) {
    this._isMobile = value;
  }

  private static _isMobile: boolean;
}
