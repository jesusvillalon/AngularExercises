import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search-service.service';
import { Music } from '../../interfaces/music.interface';

@Component({
  selector: 'app-by-song-page',
  templateUrl: './by-song-page.component.html',
  styleUrls: ['./by-song-page.component.css']
})
export class BySongPageComponent implements OnInit{
  public music: Music[] = [];
  public initialValue: string = ""

  constructor(private searchService: SearchService) {}
  ngOnInit(): void {
    this.music = this.searchService.cacheStore.byArtist.music;
    this.initialValue = this.searchService.cacheStore.byArtist.term;
  }

  searchBySong(term: string): void {
    this.searchService.searchSongs(term)
      .subscribe(response => {
        this.music = response;
      });
  }
}
