import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ParentChildService } from '../../services/parent-child.service';
import { Subscription } from 'rxjs';

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

  private subscription?: Subscription;

  constructor(private parentChildService: ParentChildService) {
    this.subscription = this.parentChildService
    .getChildObsMessage()
    .subscribe((obsMessage: string) => {
      this.message = obsMessage;
    });

  }

  showServiceMessage() {
    this.parentChildService.sendChildMessage('CHILD USING SERVICE');
  }

  showOutputMessage(): void {
    this.sendChildMessage.emit('CHILD USING OUTPUT EVENT');
  }

  showChildObservableMessage() {
    this.parentChildService.sendChildMessage('CHILD USING SUBJECT');

  }
}
