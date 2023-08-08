import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearcherPageComponent } from './pages/searcher-page/searcher-page.component';
import { ByArtistPageComponent } from './pages/by-artist-page/by-artist-page.component';
import { BySongPageComponent } from './pages/by-song-page/by-song-page.component';
import { ByAlbumPageComponent } from './pages/by-album-page/by-album-page.component';

const routes: Routes = [
  {
    path: 'searcher',
    component: SearcherPageComponent,
    children: [
      { path: 'by-artist', component: ByArtistPageComponent },
      { path: 'by-song', component: BySongPageComponent },
      { path: 'by-album', component: ByAlbumPageComponent },
      { path: '**', redirectTo: 'by-artist'}
    ],
  },
  {
    path: '**',
    redirectTo: 'searcher',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchOnTypeRoutingModule {}
