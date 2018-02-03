import {isDevMode} from '@angular/core';

export const EnvEndpoint = {
  base: isDevMode() ? 'assets/chinook' : '/api',

  compose: (action: string): string => {
    return `${this.base}/${action}${isDevMode() ? '.json' : ''}`;
  }
};


