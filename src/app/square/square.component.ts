import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
  @Input() disabled: boolean;

  getColor() {
    if (this.value == 'X')
      return 'xColor';
    else if(this.value == 'O')
      return 'oColor';
    return '';
  }
}
