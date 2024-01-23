import { Component, OnInit } from '@angular/core';
import { SearchstorageService } from '../storage/searchstorage.service';

@Component({
  selector: 'app-mybook',
  templateUrl: './mybook.page.html',
  styleUrls: ['./mybook.page.scss'],
})
export class MybookPage implements OnInit {

  storedData: Array<any> = [];

  constructor(private storage: SearchstorageService) { }

  async ngOnInit() {
    const storedData = await this.storage.getKeys();
    if (storedData) {
      this.storedData = storedData;//Object.keys(storedData);
    }
    console.log('stored data are:' + storedData);
    console.log('this stored data are:' + this.storedData);
  }
}
