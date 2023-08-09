import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraficLightService {

  private colorSubject: Subject<string> = new Subject<string>();
  private activateSubject: Subject<boolean> = new Subject<boolean>();

  getColor(): Observable<string> {
    return this.colorSubject.asObservable()
  }

  setColor(color: string): void {
    this.colorSubject.next(color)
  }

  getActivate(): Observable<boolean> {
    return this.activateSubject.asObservable()
  }

  setActivate(isActivated: boolean): void {
    return this.activateSubject.next(isActivated)
  }


}
