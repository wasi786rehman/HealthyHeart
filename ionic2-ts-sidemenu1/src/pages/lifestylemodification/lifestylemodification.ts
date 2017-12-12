import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';

import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover'
@Component({
  selector: 'lifestylemodification-lifestylemodification',
  templateUrl: 'lifestylemodification.html'
})
export class lifestylemodification{
  item: string;
  exercise: string;
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  exercises = ['Walking', 'Jogging', 'Cycling', 'Stairs Climbing', 'Huff-Coughing', 'ROM', 'Pursed lip Breathing', 'Diaphragmatic breathing', 'Incentive spirometry', 'Deep breathing', 'Bridging', 'Single leg raises', 'Quadriceps','Warm up and cool down']
  constructor(public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController) {
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

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }
}
