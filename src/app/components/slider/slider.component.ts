import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Output() value: number = 10;
  options: Options = {
    floor: 0,
    ceil: 20,
    step: 1,
    showTicks: false
  };
  constructor() { }

  ngOnInit(): void {
  }



}
