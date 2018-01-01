import { Component } from '@angular/core';

import { NavController, NavParams ,AlertController} from 'ionic-angular';
import { cabg } from '../cabg/cabg';
import { Platform } from 'ionic-angular';
//import { LocalNotifications } from '@ionic-native/local-notifications';
//import { BackgroundMode } from '@ionic-native/background-mode';
//import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  topic: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alt: AlertController,private platform: Platform) {


    

    //platform.ready().then(() => {
    //  this.localNotifications.schedule({
    //    text: 'Delayed ILocalNotification',
    //    at: new Date(new Date().getTime() + 3600),
        
    //    sound: null
    //  });
    //});

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.topic = ['WHAT IS CORONARY ARTERY BYPASS GRAFTING (CABG)?', 'RECOVERY','CONTINUE TAKING CARE OF YOUR HEART']
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
    this.navCtrl.push(Page2, {
      item: item
    });
  }
  openPage(item) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(cabg, {
      item: item
    });
  }

  not()
  {

    //this.noif.requestPermission().then(
    //  (permission) => {
    //    if (permission === 'granted') {

    //      // Create the notification
    //      this.noif.create('My Title', {
    //        tag: 'message1',
    //        body: 'My body',
    //        icon: 'assets/icon/favicon.ico'
             
    //      });
          

    //    }
    //  }
    //);



    //let v: any;
    //this.localNotifications.hasPermission().then((data) => {
    //  v = data.valueOf.toString;
    //})
    //let alert = this.alt.create({
    //  title: v,
    //  subTitle: '10% of battery remaining',
    //  buttons: ['Dismiss']
    //});
    //alert.present();
    //this.backgroundMode.enable();
    //this.backgroundMode.on('activate').subscribe(() => {

    //  console.log('backgroundMode --> activate')


    //  let notification = {
    //    id: 999,
    //    title: 'Hey!',
    //    text: 'You put me into background :(',
    //    at: new Date(new Date().getTime() + (5 * 1000)),
    //    every: '0'
    //  };
    //  this.localNotifications.registerPermission();
    //  console.log(this.localNotifications.hasPermission());
    //  this.localNotifications.schedule([notification])

    //})
  }

  
}
