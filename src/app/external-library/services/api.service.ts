import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trades } from '../interfaces/graphic.interface';
import { apiKey } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://financialmodelingprep.com/api/v3';

  constructor(private http: HttpClient) {}

  getTradesInformation(): Observable<Trades[]> {
    const url = `${this.apiUrl}/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=30&apikey=${apiKey}`;
    return this.http.get<Trades[]>(url);
  }
}
