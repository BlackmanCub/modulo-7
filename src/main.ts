import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LearmingComponent } from './app/componen/learming/learming';

bootstrapApplication(LearmingComponent, appConfig)
  .catch((err) => console.error(err));
