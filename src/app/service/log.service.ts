import { Injectable } from '@angular/core';
import { NewServiceService } from './local-acc-service.service';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  log(text: any) {
    console.log(`Log: ${text}`);
  }
}
