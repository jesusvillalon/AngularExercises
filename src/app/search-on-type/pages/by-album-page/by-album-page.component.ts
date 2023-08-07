import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search-service.service';
import { Music } from '../../interfaces/music.interface';

@Component({
  selector: 'app-by-album-page',
  templateUrl: './by-album-page.component.html',
  styleUrls: ['./by-album-page.component.css']
})
export class ByAlbumPageComponent implements OnInit{
  public music: Music[] = [];
  public initialValue: string = ""

  constructor(private searchService: SearchService) {}
  ngOnInit(): void {
    this.music = this.searchService.cacheStore.byArtist.music;
    this.initialValue = this.searchService.cacheStore.byArtist.term;
  }

  searchByAlbum(term: string): void {
    this.searchService.searchAlbums(term)
      .subscribe(response => {
        this.music = response;
      });
  }
}
