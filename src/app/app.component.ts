import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Output() upper: boolean = false;
  @Output() lower: boolean = true;
  @Output() number: boolean = false;
  @Output() symbol: boolean = false;

  availableChars: string[] = []
  upperChars: string[]  = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  lowerChars: string[]  = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  symbolChars: string[]  = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+']
  numChars: string[]  = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  password: string[]  = ['P', '4', '$', '5', 'W', '0', 'r', 'D', '!']
  @Output() strength: number = 1;

  // copy = '<svg width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" fill="currentColor"/></svg>'
  ngOnInit() {
    // console.log(this.upper, this.lower, this.number, this.symbol)
    this.availableChars = []
    this.setStrength()
    this.getAvailableChars()
    this.setPassword()
  }

  setUpperCase() {
    // console.log(this.upper);
    if (this.upper === false) {
      this.upper = true
      this.strength = this.strength + 2
    } else {
      this.upper = false
      this.strength = this.strength - 2
    }

    // console.log(this.upper, this.strength);
    this.getAvailableChars()
    this.setPassword()


  }

  setLowerCase() {
    // console.log(this.lower);

    if (this.lower === false) {
      this.lower = true
      this.strength = this.strength + 1
    } else {
      this.lower = false
      this.strength = this.strength - 1
    }
    // console.log(this.lower, this.strength);
    this.getAvailableChars()
    this.setPassword()
  }

  setNumber() {
    // console.log(this.number);

    if (this.number === false) {
      this.number = true
      this.strength = this.strength + 1
    } else {
      this.number = false
      this.strength = this.strength - 1
    }
    // console.log(this.number, this.strength);
    this.getAvailableChars()
    this.setPassword()
  }
  setSymbol() {
    // console.log(this.symbol);

    if (this.symbol === false) {
      this.symbol = true
      this.strength = this.strength + 2
    } else {
      this.symbol = false
      this.strength = this.strength - 2
    }
    // console.log(this.symbol, this.strength);
    this.getAvailableChars()
    this.setPassword()
  }

  setStrength() {
    if (this.password.length >= 8) {
      this.strength = this.strength + 2
    } else {
      this.strength = this.strength - 2
    }
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
    console.log(this.availableChars, this.strength);
  }
  getRandomChar() {
    return this.availableChars[Math.floor(Math.random()*this.availableChars.length)]
    // console.log(this.availableChars, this.strength);
  }
  setPassword(){
    this.password = []
    for(let i = 0; i <= 10;i++){
      this.password.push( this.getRandomChar());
    }
    console.log(this.password.join(""));
  }
}
