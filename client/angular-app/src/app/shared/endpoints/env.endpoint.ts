import {isDevMode} from '@angular/core';
import {environment} from '../../../environments/environment';

export const EnvEndpoint = {
  base: !environment.production ? 'assets/chinook' : '/api',

  compose: (action: string): string => {
    return `${EnvEndpoint.base}/${action}${!environment.production ? '.json' : ''}`;
  }
};


