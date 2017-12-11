import { Component } from '@angular/core';

import { NavController, NavParams, IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';

import { AddReminder } from '../AddReminder/AddReminder';
import { ListReminder } from '../reminder/ListReminder';



@Component({
  selector: 'reminder-reminder',
  templateUrl: 'reminder.html'
})
export class Reminder{
  items: string;
  tab1Root = AddReminder;
  tab2Root = ListReminder;
  constructor(public navCtrl: NavController) {
    // If we navigated to this page, we will have an item available as a nav param
    
    // Let's populate this page with some filler content for funzies
    
   
  }
  add(item) {
    this.navCtrl.push(ListReminder, {item:item});
  }
  list()
  {
    this.navCtrl.push(ListReminder);
  }

  
}




