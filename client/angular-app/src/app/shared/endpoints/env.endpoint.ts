import {environment} from '../../../environments/environment';

export const EnvEndpoint = {
  base: !environment.production ? 'assets/chinook' : '/api',
};


