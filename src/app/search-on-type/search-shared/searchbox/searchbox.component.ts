import { Component, EventEmitter, Input, OnInit, Output,OnDestroy} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'search-shared-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit, OnDestroy{
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = ""

  @Input()
  public initialValue: string = ""

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
     this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(100)
      )
      .subscribe(value =>{
        this.onDebounce.emit(value);
      })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue(value: string):void{
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string){
    this.emitValue(searchTerm)

    this.debouncer.next(searchTerm);
  }


}
