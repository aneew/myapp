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
  similarWords: string[] = [];

  constructor(public wordsapiService: WordsapiService) {}

  ngOnInit() {}

  searchWord() {
    console.log(this.word);
    
    // Now you can use this.wordsapiService to call the API
    this.wordsapiService.getWord(this.word).subscribe(
      (result) => {
        console.log(result);

        // Assuming the response has a 'similarTo' property containing the list of similar words
        this.similarWords = result.similarTo;

        // You can now do further processing or update UI based on the data
        // For example, log each similar word
        this.similarWords.forEach((word) => {
          console.log(word);
        });

        // Or update your UI to display the similar words
        // For example, if you have an element in your HTML like <ion-list>
        // you can bind the similarWords array to it in your template
      },
      (error) => {
        console.error(error);
        // Handle error
      }
    );
  }
}
