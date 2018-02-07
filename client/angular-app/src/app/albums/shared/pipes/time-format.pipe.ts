import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(ms: number): any {
    if (ms > 0) return this.convertMilliseconds(ms);
    return null;
  }

  convertMilliseconds(ms: number) {
    return `${Math.floor((ms / 1000 / 60) << 0)}:${Math.floor((ms / 1000) % 60)}`;
  }
}
