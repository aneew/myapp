import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class SearchstorageService {

  private _storage: Storage | null = null;

  constructor(private storage : Storage) { 
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = this.storage;
  }

  async set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  async get(key: string) {
    return this._storage?.get(key);
  }

  async getKeys() {
    // Check if storage is initialized
    if (this._storage) {
      // Use the keys() method to get all keys
      const keys = await this._storage.keys();
      return keys;
    } else {
      // Handle the case where storage is not initialized
      console.error('Storage is not initialized');
      return [];
    }
  }

}
