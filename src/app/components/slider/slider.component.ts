import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Output() newCharValueEvent = new EventEmitter<number>();
  value: number = 8;
  options: Options = {
    floor: 1,
    ceil: 20,
    step: 1,
    showTicks: false
  };
  constructor() { }

  ngOnInit(): void {
  }

  updateValue(value: number) {
    this.newCharValueEvent.emit(value);
  }

}
