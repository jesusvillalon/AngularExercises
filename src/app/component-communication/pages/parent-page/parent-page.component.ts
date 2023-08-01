import { Component } from '@angular/core';
import { ParentChildService } from '../../services/parent-child.service';

@Component({
  selector: 'parent-page',
  templateUrl: './parent-page.component.html',
  styleUrls: ['./parent-page.component.css'],
})
export class ParentPageComponent {
  public sendMessage: string = '';

  // mensaje del output
  public receivedMessage: string = '';

  constructor(private parentChildService: ParentChildService) {
    this.parentChildService
      .getParentObsMessage()
      .subscribe((obsMessage: string) => {
        this.sendMessage = obsMessage;
      });

    this.receivedMessage = this.parentChildService.getServiceMessage();
  }

  showServiceMessage() {
   this.parentChildService.sendParentMessage('PARENT USING SERVICE');
  }

  showInputMessage() {
    this.sendMessage = 'PARENT USING INPUT PROPERTY';
  }
  showObservableMessage() {
    // Setear el mensaje y luego obtenerlo mediante el subscribe.
    this.parentChildService.sendParentMessage('PARENT USING SUBJECT');
  }

  // Output
  receivedChildMessage(message: string): void {
    this.receivedMessage = message;
  }
}
