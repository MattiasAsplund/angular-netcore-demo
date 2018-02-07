import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'propEmptyPlaceholder'
})
export class PropEmptyPlaceholderPipe implements PipeTransform {

  transform(value: any, placeholder?: any): any {
    return !value
      ? null
      : this.setPlaceholder(value, placeholder ? placeholder : 'N/A');
  }

  setPlaceholder(value: any, placeholder: string): any {
    if (!Array.isArray(value))
      return value = value ? value : placeholder;

    return value.map(x => {
      return this.setValueIfPropEmpty(x, placeholder);
    });
  }

  setValueIfPropEmpty(val: any, placeholder: string) {
    for (let key in val)
      if (val.hasOwnProperty(key))
        val[key] = val[key] ? val[key] : placeholder;
    return val;
  }
}
