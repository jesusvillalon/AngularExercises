import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search-service.service';
import { Music } from '../../interfaces/music.interface';

@Component({
  selector: 'app-by-artist-page',
  templateUrl: './by-artist-page.component.html',
  styleUrls: ['./by-artist-page.component.css']
})
export class ByArtistPageComponent implements OnInit{
  public music: Music[] = [];
  public initialValue: string = ""

  constructor(private searchService: SearchService) {}
  ngOnInit(): void {
    this.music = this.searchService.cacheStore.byArtist.music;
    this.initialValue = this.searchService.cacheStore.byArtist.term;
  }

  searchByArtist(term: string): void {
    this.searchService.searchArtists(term)
      .subscribe(response => {
        this.music = response;
      });
  }
}
