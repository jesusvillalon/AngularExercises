
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Music } from './../interfaces/music.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

private apiUrl = 'https://itunes.apple.com/search'

public cacheStore: CacheStore = {
  byArtist: {term: '', music: []},
  bySong: {term: '', music: []},
  byAlbum: {term: '', music: []},
}

constructor(private http: HttpClient) {
  this.loadFromLocalStorage()
};

private saveToLocalStorage() {
  localStorage.setItem("cacheStore", JSON.stringify(this.cacheStore))
}

private loadFromLocalStorage() {
  if(!localStorage.getItem("cacheStore")) return;

  this.cacheStore = JSON.parse(localStorage.getItem("cacheStore")!);
}

private getMusicRequest(url: string): Observable<Music[]> {
  return this.http.get<Music[]>(url)
  .pipe(
    catchError(() => of([]))
  )
}


searchArtists(term: string): Observable<Music[]> {
  const url = `${this.apiUrl}?term=${encodeURIComponent(term)}&entity=musicArtist`
  return this.http.get<Music[]>(url)
    .pipe(
      tap(music => this.cacheStore.byArtist = {term, music}),
      tap(() => this.saveToLocalStorage())
    )
}

searchSongs(term: string): Observable<Music[]> {
  const url = `${this.apiUrl}?term=${encodeURIComponent(term)}&entity=song`
  return this.http.get<Music[]>(url)
    .pipe(
      tap(music => this.cacheStore.bySong = {term, music}),
      tap(() => this.saveToLocalStorage())
    )
}

searchAlbums(term: string): Observable<Music[]> {
  const url = `${this.apiUrl}?term=${encodeURIComponent(term)}&entity=album`
  return this.http.get<Music[]>(url)
    .pipe(
      tap(music => this.cacheStore.byAlbum = {term, music}),
      tap(() => this.saveToLocalStorage())
    )
}

}
