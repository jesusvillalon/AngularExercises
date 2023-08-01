import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ParentChildService {
  private messageFromService: string = '';

  private observableParentMessage = new Subject<string>();
  private observableChildMessage = new Subject<string>();

  sendServiceMessage(message: string) {
    this.messageFromService = message
  }

  getServiceMessage(): string {
    return this.messageFromService;
  }

  sendParentMessage(message: string) {
    this.observableParentMessage.next(message);
  }

  sendChildMessage(message: string) {
    this.observableChildMessage.next(message);
  }

  getParentObsMessage(): Observable<string> {
    return this.observableParentMessage.asObservable();
  }

  getChildObsMessage(): Observable<string> {
    return this.observableChildMessage.asObservable();
  }
}
