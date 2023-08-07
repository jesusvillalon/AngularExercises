import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchService} from '../../services/search-service.service';
import { Subject, Subscription, debounceTime, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Music } from '../../interfaces/music.interface';


@Component({
  selector: 'app-searcher-page',
  templateUrl: './searcher-page.component.html',
  styleUrls: ['./searcher-page.component.css']
})
export class SearcherPageComponent {
  public searchQuery!: string;
  public searchResults: Music[] = [];

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) {}

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
    this.debouncer.next(searchTerm);
  }









}
