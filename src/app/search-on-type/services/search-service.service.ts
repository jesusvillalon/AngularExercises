
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Music } from './../interfaces/music.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

private apiUrl = 'https://itunes.apple.com/search'


constructor(private http: HttpClient) {};


searchArtists(term: string): Observable<Music> {
  const url = `${this.apiUrl}?term=${encodeURIComponent(term)}&entity=musicArtist`
  return this.http.get<Music>(url)

}

searchSongs(term: string): Observable<Music> {
  const url = `${this.apiUrl}?term=${encodeURIComponent(term)}&entity=song`
  return this.http.get<Music>(url)

}

searchAlbums(term: string): Observable<Music> {
  const url = `${this.apiUrl}?term=${encodeURIComponent(term)}&entity=album`
  return this.http.get<Music>(url)
}
}
