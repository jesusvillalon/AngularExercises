import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search-service.service';
import { Result } from '../../interfaces/music.interface';

@Component({
  selector: 'app-by-song-page',
  templateUrl: './by-song-page.component.html',
  styleUrls: ['./by-song-page.component.css'],
})
export class BySongPageComponent implements OnInit {
  public music: Result[] = [];
  public initialValue: string = '';

  constructor(private searchService: SearchService) {}
  ngOnInit(): void {}

  searchBySong(term: string): void {
    if(term){
      this.searchService.searchSongs(term).subscribe((response) => {
        this.music = response.results;
        console.log(this.music)
      });
    } else {
      this.music = []
    }
  }
}
