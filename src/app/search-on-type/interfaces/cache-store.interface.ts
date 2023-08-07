import { Music } from "./music.interface";

export interface CacheStore{
  byArtist: TermCountries;
  bySong: TermCountries;
  byAlbum: TermCountries;
}

export interface TermCountries{
  term: string;
  music: Music[];
}
