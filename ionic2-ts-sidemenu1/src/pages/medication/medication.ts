import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'medication-medication',
  templateUrl: 'medication.html'
})
export class medication{
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    
    // Let's populate this page with some filler content for funzies
    console.log(navParams);
   
  }

  
}
