import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WordsapiService {
  private apiUrl = 'https://wordsapiv1.p.rapidapi.com/words/young/similarTo';
  private rapidApiKey = 'e88c1fdaf4msh700984fb3ed153dp15570ajsn4abb57d26447';

  constructor(public http: HttpClient) { }

  getWord(word: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.rapidApiKey,
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    });

    const url = `${this.apiUrl}?input=${word}`;
    return this.http.get(url, { headers });
  }
}
