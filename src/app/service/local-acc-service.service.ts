import { Injectable } from '@angular/core';

@Injectable()
export class NewServiceService {
  counter = 0;

  increase() {
    this.counter++;
  }
  decrease() {
    this.counter--;
  }
  constructor() {}
}
