import { Component } from '@angular/core';

import { NavController, AlertController, Platform, ToastController} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Page5 } from '../page5/page5';
import { Reminder } from '../reminder/reminder';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})

export class Page1 {
 
  name: string;
  
  public people: Array<Object>;
  constructor(public navCtrl: NavController, public storage: Storage, public alt: AlertController, public toastCtrl: ToastController, public plt: Platform, private localNotifications: LocalNotifications, private sqlite: SQLite) {
    this.plt.ready().then(() => {

      
      this.localNotifications.registerPermission();
      

    //  this.sqlite.create({
    //    name: 'data.db',
    //    location: 'default'
    //  })
    //    .then((db: SQLiteObject) => {

    //      //data insert section
    //      db.executeSql('CREATE TABLE IF NOT EXISTS usernameList(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', {})
    //        .then(() => alert('Executed SQL'))
    //        .catch(e => console.log(e));

    //      //data insert section
    //      db.executeSql('INSERT INTO usernameList(name) VALUES(?)', 'hgvh')
    //        .then(() => alert('Executed SQL'))
    //        .catch(e => console.log(e));


    //      //data retrieve section

    //      db.executeSql('select * from usernameList', {}).then((data) => {

    //        alert(JSON.stringify(data));

    //        alert(data.rows.length);
    //        //alert(data.rows.item(5).name);
            

    //      }, (err) => {
    //        alert('Unable to execute sql: ' + JSON.stringify(err));
    //      });
    //    })
    //    .catch(e => alert(JSON.stringify(e)));
     

    //}

    });
   

  }

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
    
    //this.navCtrl.push(Page5);
  }
  createDatabase()
  {
    
    
    
    
  }
  reminder(){
    this.navCtrl.push(Reminder);
    
    
  }
  
}
