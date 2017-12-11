import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class Page4 {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  person: {height:0,weight:0};
  bmi: number;
  flag: number;
  height: number;
  weight: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.bmi = navParams.get('bmi');
    this.flag = navParams.get('flag');
    console.log(this.bmi);
    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page4, {
      item: item
    });
  }
  cal()
  {
    console.log(this.height);
    console.log(this.weight);
    this.bmi = this.weight / (this.height * this.height);
    console.log(this.bmi);

    this.navCtrl.push(Page4, {
      flag: 1,bmi:this.bmi
    });
    
  }
}
