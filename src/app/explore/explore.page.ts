import { Component, OnInit } from '@angular/core';
import { WordsapiService } from '../api/wordsapi.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  word: string = '';
  constructor(public wordsapiService: WordsapiService) {}

  ngOnInit() {}

  searchWord() {
    console.log(this.word);
    // Now you can use this.wordsapiService to call the API
    this.wordsapiService.getWord(this.word).subscribe(
      (result) => {
        console.log(result);
        // Do something with the result
      },
      (error) => {
        console.error(error);
        // Handle error
      }
    );
  }
}
