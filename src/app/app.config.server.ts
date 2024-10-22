import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

export const serverConfig: ApplicationConfig = {
    providers: [
        provideServerRendering(),
    ],
};

export const fullAppConfig: ApplicationConfig = {
    providers: appConfig,
};

// Merge the fullAppConfig and serverConfig into a single config
export const config = mergeApplicationConfig(fullAppConfig, serverConfig);
