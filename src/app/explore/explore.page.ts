import { Component, OnInit } from '@angular/core';  
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  constructor() { }

  word: String = ""

  ngOnInit() {
  }

  searchWord(){
    console.log(this.word);
  }

}
