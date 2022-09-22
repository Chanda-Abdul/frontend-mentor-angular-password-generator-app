import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { PasswordGenerationService } from './passwordGeneration.service';


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



  @Input() currentStrength: number = 0;

  previousCharCount: number = 0
  @Output() currentCharCount = 8;

  /* Clipboard */
password: string = 'P4$5W0rD!';
passwordUpdated = false;
copied = false;


  constructor(private passwordGenerationService: PasswordGenerationService, private clipboard: Clipboard) { }

  ngOnInit() {
    this.passwordGenerationService.availableChars = [];
    this.previousCharCount = 0
    this.currentStrength = 0;
    this.currentCharCount = 8;
    this.lower = true;
  }


  generateNewPassword() {
    this.passwordGenerationService.getAvailableChars(this.upper, this.lower, this.number, this.symbol)
    this.password = this.passwordGenerationService.setPassword(this.currentCharCount);
    this.passwordUpdated = true;
    console.log(this.password)
  }

  updatestrength() {
    let updatedStrength = 0;

    updatedStrength =
      (this.currentCharCount >= 8 ? 2 : 0) +
      (this.upper ? 2 : 0) +
      (this.lower ? 1 : 0) +
      (this.number ? 1 : 0) +
      (this.symbol ? 2 : 0)
    this.currentStrength = updatedStrength;

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

  copyPasswordToClipboard(){
    this.clipboard.copy(this.password);
    //TO DO => add setTimeout?
    this.copied = true;
  }

}
