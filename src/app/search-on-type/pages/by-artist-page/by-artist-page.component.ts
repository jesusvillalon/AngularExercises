import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search-service.service';
import { Result } from '../../interfaces/music.interface';

@Component({
  selector: 'app-by-artist-page',
  templateUrl: './by-artist-page.component.html',
  styleUrls: ['./by-artist-page.component.css'],
})
export class ByArtistPageComponent implements OnInit {
  public music: Result[] = [];
  public initialValue: string = '';

  constructor(private searchService: SearchService) {}
  ngOnInit(): void {}

  searchByArtist(term: string): void {
    if(term){
      this.searchService.searchArtists(term).subscribe((response) => {
        this.music = response.results;
      });
    } else {
      this.music = []
    }
  }
}
