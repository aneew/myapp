import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsapiService {
  private apiUrl = 'https://wordsapiv1.p.rapidapi.com/words/{word}/similarTo'; 
  private rapidApiKey = 'e88c1fdaf4msh700984fb3ed153dp15570ajsn4abb57d26447';

  constructor(public http: HttpClient) { }

  getWord(word: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.rapidApiKey,
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    });

    // Replace '{word}' in the URL with the input word
    const url = this.apiUrl.replace('{word}', word);
    return this.http.get(url, { headers });
  }
}
