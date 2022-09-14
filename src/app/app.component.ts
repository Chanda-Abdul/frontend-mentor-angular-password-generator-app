import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  upper: boolean = false;
  lower: boolean = false;
  number: boolean = false;
  symbol: boolean = false;

  availableChars: string[] = [];

  upperChars: string[] =
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  lowerChars: string[] =
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  symbolChars: string[] =
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'];
  numChars: string[] =
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  password: string[] = ['P', '4', '$', '5', 'W', '0', 'r', 'D', '!'];
  previousCharCount: number = 0
  @Input() currentStrength: number = 0;
  @Output() currentCharCount = 8;

  // copy = '<svg width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" fill="currentColor"/></svg>'
  ngOnInit() {
    this.availableChars = []


  }

  updateUI() {
    let updatedStrength = 0
   updatedStrength =
      (this.currentCharCount >= 8 ? 2 : 0) +
      (this.upper ? 2 : 0) +
      (this.lower ? 1 : 0) +
      (this.number ? 1 : 0) +
      (this.symbol ? 2 : 0)
    this.currentStrength = updatedStrength;
    this.getAvailableChars();
  }

  updateCharCount(value: number) {
    this.currentCharCount = value;
    if (this.previousCharCount >= 8 && this.currentCharCount < 8) {
      this.currentStrength = this.currentStrength - 2
    }
    if (this.previousCharCount < 8 && this.currentCharCount >= 8) {
      this.currentStrength = this.currentStrength + 2
    }
    this.previousCharCount = this.currentCharCount;
  }

  generateNewPassword() {
    this.getAvailableChars()
    this.setPassword()
    this.availableChars = []
    this.lower = true;
  }

  getAvailableChars() {
    if (this.upper) {
      this.availableChars = [...this.upperChars];
    }
    if (this.lower) {
      this.availableChars = [...this.availableChars, ...this.lowerChars];
    }
    if (this.number) {
      this.availableChars = [...this.availableChars, ...this.numChars];
    }
    if (this.symbol) {
      this.availableChars = [...this.availableChars, ...this.symbolChars];
    }
  }

  setPassword() {
    this.password = []
    for (let i = 0; i <= this.currentCharCount; i++) {
      this.password.push(this.availableChars[Math.floor(Math.random() * this.availableChars.length)]);
    }
    this.upper = false;
    this.lower = false;
    this.number = false;
    this.symbol = false;
    this.previousCharCount = 0
    this.currentStrength = 0;
    this.currentCharCount = 8;
  }
}
