import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ParentChildService } from '../../services/parent-child.service';

@Component({
  selector: 'child-page',
  templateUrl: './child-page.component.html',
  styleUrls: ['./child-page.component.css'],
})
export class ChildPageComponent {
  @Input()
  public message: string = '';

  @Output()
  public sendChildMessage: EventEmitter<string> = new EventEmitter();

  constructor(private parentChildService: ParentChildService) {
    this.parentChildService
      .getParentObsMessage()
      .subscribe((obsMessage: string) => {
        this.message = obsMessage;
      });
  }

  showServiceMessage() {
    this.parentChildService.setChildMessage('CHILD USING SERVICE');
  }

  showOutputMessage(): void {
    this.sendChildMessage.emit('CHILD USING OUTPUT EVENT');
  }

  showChildObservableMessage() {
    this.parentChildService.setChildMessage('CHILD USING SUBJECT');
  }
}
