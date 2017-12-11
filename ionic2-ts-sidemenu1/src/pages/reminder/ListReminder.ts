import { Component } from '@angular/core';

import { NavController, AlertController, Platform, NavParams} from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'ListReminder-ListReminder',
  templateUrl: 'ListReminder.html'
})
export class ListReminder {
  item: string;
  pet: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

    // Let's populate this page with some filler content for funzies
    this.item = navParams.get('item');
    this.pet = "kittens";

  }

}
