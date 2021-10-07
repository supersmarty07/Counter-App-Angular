import { Component, OnInit } from '@angular/core';
import { PassCounterService } from '../pass-counter.service';

@Component({
  selector: 'app-button-row',
  templateUrl: './button-row.component.html',
  styleUrls: ['./button-row.component.css'],
})
export class ButtonRowComponent implements OnInit {
  numeral: number;

  constructor(private _passCounter: PassCounterService) {}
  ngOnInit() {
    this._passCounter.cast.subscribe((numeral) => (this.numeral = numeral));
  }

  resetBtn() {
    this._passCounter.updatenumeral(0);
    //this.numeral = 0;
  }

  plusOne() {
    //this.numeral = this.numeral + 1;
    this._passCounter.updatenumeral(this.numeral + 1);
  }

  minusOne() {
    //this.numeral = this.numeral - 1;
    this._passCounter.updatenumeral(this.numeral - 1);
  }
}
