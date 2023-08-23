import { Component } from '@angular/core';
import { ParentChildService } from '../../services/parent-child.service';

@Component({
  selector: 'parent-page',
  templateUrl: './parent-page.component.html',
  styleUrls: ['./parent-page.component.css'],
})
export class ParentPageComponent {
  public sendMessage: string = '';
  public receivedMessage: string = '';

  constructor(private parentChildService: ParentChildService) {
    this.parentChildService
      .getChildObsMessage()
      .subscribe((obsMessage: string) => {
        this.receivedMessage = obsMessage;
      });
  }

  showServiceMessage() {
    this.parentChildService.setParentMessage('PARENT USING SERVICE');
  }

  showInputMessage() {
    this.sendMessage = 'PARENT USING INPUT PROPERTY';
  }

  showObservableMessage() {
    this.parentChildService.setParentMessage('PARENT USING SUBJECT');
  }

  // Output
  receivedChildMessage(message: string): void {
    this.receivedMessage = message;
  }
}
