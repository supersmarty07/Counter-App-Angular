import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PassCounterService {
  private numeral = new BehaviorSubject<number>(0);
  cast = this.numeral.asObservable();
  counter: number = 0;
  constructor() {}
  updatenumeral(value) {
    this.numeral.next(value);
  }

  getCounter() {
    return this.counter;
  }
}
