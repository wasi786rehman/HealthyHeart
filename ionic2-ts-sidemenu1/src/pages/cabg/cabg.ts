import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';

import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover'

@Component({
  selector: 'cabg-cabg',
  templateUrl: 'cabg.html'
})
export class cabg{
  items: string;
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.items = navParams.get('item');
    // Let's populate this page with some filler content for funzies
    
   
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
