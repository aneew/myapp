import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  // constructor() { }

  constructor(private router: Router) {}

  goToExplorePage() {
    this.router.navigate(['/tabs/explore']);
  }

  goToAboutPage() {
    this.router.navigate(['/tabs/about']);
  }

  goToMyBookPage() {
    this.router.navigate(['/tabs/mybook']);
  }

  ngOnInit() {
  }

}
