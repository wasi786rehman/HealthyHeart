import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'lifestylemodification-lifestylemodification',
  templateUrl: 'lifestylemodification.html'
})
export class lifestylemodification{
  item: string;
  exercise: string;
  exercises = ['Walking', 'Jogging', 'Cycling', 'Stairs Climbing', 'Huff-Coughing', 'ROM', 'Pursed lip Breathing', 'Diaphragmatic breathing', 'Incentive spirometry', 'Deep breathing', 'Bridging', 'Single leg raises', 'Quadriceps','Warm up and cool down']
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.item = navParams.get('item');
    this.exercise = navParams.get('exercise');
    // Let's populate this page with some filler content for funzies
    
   
  }
  itemSelected(item) {
    console.log(item);
    this.navCtrl.push(lifestylemodification, {
      exercise: item
    });
  }

  
}
