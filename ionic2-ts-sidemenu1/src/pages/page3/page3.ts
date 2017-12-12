import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { lifestylemodification } from '../lifestylemodification/lifestylemodification';


import { ViewChild, ElementRef } from '@angular/core';

import { PopoverController } from 'ionic-angular';
import { PopoverPage} from '../popover/popover'


@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  topic: string[];

  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];
    this.topic = ['Heart Healthy Diet','Be Physical Active','Manage Your Weight','Stop Smoking/Tobacco','Limit your Alcohol','Reduce Stress','Take Care Of your Number','Resuming Sexual Activities','Follow Up']
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
    this.navCtrl.push(Page3, {
      item: item
    });
  }
  itemSelected(item) {
    console.log(item);
    this.navCtrl.push(lifestylemodification, {
      item: item
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
