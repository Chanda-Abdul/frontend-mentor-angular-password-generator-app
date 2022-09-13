import { Component, OnInit } from '@angular/core';
interface  level {
  strength: ''|'too weak!' | 'weak' | 'medium' | 'strong';
}
@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.scss']


})


export class StrengthBarComponent implements OnInit {
  currentStrength: level["strength"] = '';

  constructor() { }

  ngOnInit(): void {

  }

}
