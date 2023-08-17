import { Injectable } from '@angular/core';
import { Observable, Subject, interval, takeUntil, scan } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private count$: Observable<number>;
  private stop$ = new Subject<void>();

  private pausedValue: number = 0;

  constructor() {
    this.count$ = interval(1000).pipe(takeUntil(this.stop$));
  }

  startCounter(startNumber: number, stepNumber: number): Observable<number> {
    if (this.pausedValue === 0) {
      this.pausedValue = startNumber;
    }

    this.stop$.next();
    this.stop$ = new Subject<void>();

    return this.count$.pipe(
      scan((count) => count + stepNumber, this.pausedValue)
    );
  }

  pauseCounter() {
    this.stop$.next();
    this.pausedValue = 0;
  }
}
