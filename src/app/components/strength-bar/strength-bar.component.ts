import { Component, Input, OnInit } from '@angular/core';
import { StrengthUpdateService } from './strengthUpdate.service';
// interface level {

// }
@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.scss'],
  providers:[StrengthUpdateService]
})

export class StrengthBarComponent implements OnInit {
  strengthLevel = ['','too weak!','too weak!','weak',
    'weak','weak','medium','medium','strong'
  ];

  @Input() strength: number = 4;
level: string = this.strength >= 8 ? 'strong':
this.strength < 8 && this.strength > 4 ? 'medium':
this.strength < 5 && this.strength > 2 ? 'weak':
this.strength < 3 && this.strength > 0 ? 'too weak!':
'';

  constructor() { }

  ngOnInit(): void {

  }
updateLevel(){
    this.strength >= 8 ? 'strong':
    this.strength < 8 && this.strength > 4 ? 'medium':
    this.strength < 5 && this.strength > 2 ? 'weak':
    this.strength < 3 && this.strength > 0 ? 'too weak!':
    '';

    console.log(this.level)
  }
}
