import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Page5 } from '../page5/page5';
@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})

export class Page1 {
 
  name: string;
  constructor(public navCtrl: NavController, public storage: Storage) {
    this.storage.get('name').then((val) => {
      this.name = val.name;
      console.log('Your name is', val);
    });}
  getData() {
    this.storage.get('name').then((val) => {
      this.name = val;
      console.log('Your name is', val);
    });
  }
  setdata() {
    //JSON.stringify([{ "Name": "wasi" }]);
    this.storage.set('name', [{ 'name': 'wasi','age':24}]);
  }

    onLink(url: string) {
        window.open(url);
    }
  openPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(Page5);
  }
}
