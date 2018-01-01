import { Component } from '@angular/core';

import { NavController, AlertController, Platform, NavParams} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ToastController } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
//import { SQLite } from 'ionic-native';
//import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';

import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'ListReminder-ListReminder',
  templateUrl: 'ListReminder.html'
})
export class ListReminder {
  item: string;
  pet: string;
  event: string;
  Exercise: Array<{ Date: any, Time: any, Duration: any }>;
  Medication: Array<{ MedicineName: any, Strength: any, Unit: any, Schedule: any, NoofTimes: any, Date: any, Time: any, Stocks:any}>;
  Appoinment: Array<{ Date: any, Time: any, Name: string,Description:string }>;
  Investigation: Array<{ BloodPressure: any, BloodSugarBeforeMeal: any, BloodSugarAfterMeal, Weight: any, HeartRate:any}>;


  sqlstorage: any = null;
  items: Array<Object>;

  ExerciseDate: any; ExerciseTime: any; ExerciseDuration: any;
  MedicationMedicineName: any; MedicationStrength: any; MedicationUnit: any; MedicationSchedule: any; MedicationNoofTimes: any; MedicationDate: any; MedicationTime: any; MedicationStocks:any
  AppoinmentDate: any; AppoinmentTime: any; AppoinmentName: string; AppoinmentDescription: string;
  InvestigationBloodPressure: any; InvestigationBloodSugarBeforeMeal: any; InvestigationBloodSugarAfterMeal: any; InvestigationWeight: any; InvestigationHeartRate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private localNotifications: LocalNotifications) {
    // If we navigated to this page, we will have an item available as a nav param

    // Let's populate this page with some filler content for funzies
    this.item = navParams.get('item');
    this.event = navParams.get('event');
    this.pet = "Add";

    this.Exercise = [];
    //this.storage.get('Exercise').then((data) => {
    //  if (data != null) this.Exercise = JSON.parse(data);
    //  else this.Exercise = [];
    //}).catch((data) => {
    //  console.log(data);
    //  this.Exercise = [];
    //});
    
     
    
    this.Appoinment = [];
    this.Medication = [];
    this.Investigation = [];


  //  this.sqlstorage = new SQLite();

  //  this.sqlstorage.openDatabase({ name: '_ionicstorage.db',location: 'default'}).then(() => {

  //    this.sqlstorage.executeSql(`create table if not exists items(
  //  reference CHAR(10) PRIMARY KEY,
  //  name CHAR(30),
  //  qMin CHAR(30),
  //  qReal CHAR(30),
  //))`, {});

  //  });
  //  console.log("exec");
  //  this.addItem();
  //  this.findAll();
  }
  Add()
  {
    let toast = this.toastCtrl.create({
      message: 'Added successfully',
      duration: 1000,
      position: 'bottom',
      
    });
    toast.present();

    //this.noif.requestPermission().then(
    //  (permission) => {
    //    if (permission === 'granted') {

    //      // Create the notification
    //      this.noif.create('Reminder', {
    //        tag: 'message1',
    //        body: 'Reminder added successfully',
    //        icon: 'assets/icon/favicon.ico'

    //      });


    //    }
    //  }
    //);
  }
  AddExercise()
  {
    this.Exercise.push({ Date: this.ExerciseDate, Time: this.ExerciseTime, Duration: this.ExerciseDuration+'Min' });
    //this.storage.set('Exercise', JSON.stringify(this.Exercise));

    let dt = this.ExerciseDate + ' ' + this.ExerciseTime;


    this.localNotifications.schedule({
      id: 3,
      title: 'Happy Heart reminder',
      text: 'Reminder For Exercise for'+ this.ExerciseDuration+'Min',
      data: { mydata: 'My hidden message this is' + this.ExerciseDuration },
      at: new Date(dt)
    });
    this.Add();


  }
  AddAppoinment()
  {
    this.Appoinment.push({ Date: this.AppoinmentDate, Time: this.AppoinmentTime, Name: this.AppoinmentName, Description: this.AppoinmentDescription });
    let dt = this.AppoinmentDate + ' ' + this.AppoinmentTime;


    this.localNotifications.schedule({
      id: 4,
      title: 'Happy Heart reminder',
      text: 'Reminder For Appoinment with' + this.AppoinmentName + 'Description: ' + this.AppoinmentDescription,
      data: { mydata: 'My hidden message this is' + this.ExerciseDuration },
      at: new Date(dt)
    });
    this.Add();
  }
  AddMedication()
  {

    this.Medication.push({ Date: this.MedicationDate, Time: this.MedicationTime, MedicineName: this.MedicationMedicineName, Strength: this.MedicationStrength,Unit:this.MedicationUnit,Schedule:this.MedicationSchedule,NoofTimes:this.MedicationNoofTimes ,Stocks:this.MedicationStocks});
    let dt = this.MedicationDate + ' ' + this.MedicationTime;


    this.localNotifications.schedule({
      id: 4,
      title: 'Happy Heart reminder',
      text: 'Reminder For Medicine with' + this.AppoinmentName + 'Description: ' + this.AppoinmentDescription,
      data: { mydata: 'My hidden message this is' + this.ExerciseDuration },
      at: new Date(dt)
    });
    this.Add();
  }
  AddInvesgtigation()
  {
    this.Investigation.push({BloodPressure:this.InvestigationBloodPressure,BloodSugarAfterMeal:this.InvestigationBloodSugarAfterMeal,Weight:this.InvestigationWeight,HeartRate:this.InvestigationHeartRate,BloodSugarBeforeMeal:this.InvestigationBloodSugarBeforeMeal});

    this.Add();
  }

  //public addItem() {
  //  let q = "INSERT INTO items VALUES ('ITEM000001','ITEM','000001','')";
  //  this.sqlstorage.executeSql(q).then((data) => {
  //    console.log("Success");
  //  }, (e) => {
  //    console.log("Error :  " + JSON.stringify(e.err));
  //  });
  //}

  //public findAll() {
  //  this.sqlstorage.executeSql("SELECT * FROM items", []).then((data) => {
  //    this.items = [];
  //    if (data.rows.length > 0) {
  //      for (var i = 0; i < data.rows.length; i++) {
  //        this.items.push(data.rows.item(i));
  //      }
  //    }
  //  }, (e) => {

  //    console.log("Errot: " + JSON.stringify(e));
  //    });
  //  console.log(JSON.stringify(this.items));
  //}
}
