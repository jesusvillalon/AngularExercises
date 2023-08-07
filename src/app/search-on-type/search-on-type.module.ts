import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchOnTypeRoutingModule } from './search-on-type-routing.module';
import { SearcherPageComponent } from './pages/searcher-page/searcher-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { FormsModule } from '@angular/forms';
import { SearchService } from './services/search-service.service';

import { ByArtistPageComponent } from './pages/by-artist-page/by-artist-page.component';
import { BySongPageComponent } from './pages/by-song-page/by-song-page.component';
import { ByAlbumPageComponent } from './pages/by-album-page/by-album-page.component';



@NgModule({
  declarations: [
    SearcherPageComponent,
    ListPageComponent,
    ByArtistPageComponent,
    BySongPageComponent,
    ByAlbumPageComponent,
  ],
  imports: [
    CommonModule,
    SearchOnTypeRoutingModule,
    FormsModule,
  ],
  providers: [SearchService]
})
export class SearchOnTypeModule { }
