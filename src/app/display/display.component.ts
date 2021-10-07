import { Component, OnInit } from '@angular/core';
import { PassCounterService } from '../pass-counter.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  numeral: number;
  constructor(private _passCounter: PassCounterService) {}

  ngOnInit() {
    this._passCounter.cast.subscribe((numeral) => (this.numeral = numeral));
  }
}
