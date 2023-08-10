import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ParentChildService {


  private parentMessage = new Subject<string>();
  private childMessage = new Subject<string>();


  setParentMessage(message: string) {
    this.parentMessage.next(message);
  }

  setChildMessage(message: string) {
    this.childMessage.next(message);
  }

  getParentObsMessage(): Observable<string> {
    return this.parentMessage.asObservable();
  }

  getChildObsMessage(): Observable<string> {
    return this.childMessage.asObservable();
  }
}
