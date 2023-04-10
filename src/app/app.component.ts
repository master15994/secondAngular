import { Component, ErrorHandler } from '@angular/core';
import { withNavigationErrorHandler } from '@angular/router';

import { AppCounterService } from './service/counter-service';
import { NewServiceService } from './service/local-acc-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NewServiceService],
})
export class AppComponent {
  constructor(
    public appCounetrServise: AppCounterService,
    public newServiceService: NewServiceService
  ) {}
}
