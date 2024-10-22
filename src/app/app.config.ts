import { provideRoutes } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = [
    provideRoutes(routes),
];
