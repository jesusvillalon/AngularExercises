import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent implements OnDestroy {
  public counter: boolean = false;
  public value: number = 0;
  public startNumber: number = 0;
  public stepNumber: number = 1;

  public counterSubscription!: Subscription;

  constructor(private counterService: CounterService) {}

  isStarted() {
    if (this.counter) {
      this.counterSubscription = this.counterService
        .startCounter(this.value, this.stepNumber)
        .subscribe((count) => {
          this.value = count;
        });
    } else {
      this.counterSubscription = this.counterService
        .startCounter(this.startNumber, this.stepNumber)
        .subscribe((count) => {
          this.value = count;
        });
    }
  }

  isPaused() {
    this.counter = true;
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
    this.counterService.pauseCounter();
  }

  resetCounter() {
    this.counter = false;
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
    this.value = 0;
  }

  countingUp() {
    this.value++;
  }

  countingDown() {
    this.value--;
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
