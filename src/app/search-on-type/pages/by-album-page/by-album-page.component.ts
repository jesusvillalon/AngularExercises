import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search-service.service';
import { Result } from '../../interfaces/music.interface';

@Component({
  selector: 'app-by-album-page',
  templateUrl: './by-album-page.component.html',
  styleUrls: ['./by-album-page.component.css'],
})
export class ByAlbumPageComponent implements OnInit {
  public music: Result[] = [];
  public initialValue: string = '';

  constructor(private searchService: SearchService) {}
  ngOnInit(): void {}

  searchByAlbum(term: string): void {
    if(term){
      this.searchService.searchAlbums(term).subscribe((response) => {
        this.music = response.results;
      });
    } else {
      this.music = []
    }
  }
}
