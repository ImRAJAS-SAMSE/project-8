import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() public Message = new EventEmitter();
  public userInput: string = '';
  public Button() {
    this.Message.emit(this.userInput);
  }
  @Input() public Child_comp: string = '';
}
