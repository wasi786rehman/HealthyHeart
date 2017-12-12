import { Component } from '@angular/core';

import { NavController, AlertController, Platform, NavParams} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


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




  ExerciseDate: any; ExerciseTime: any; ExerciseDuration: any;
  MedicationMedicineName: any; MedicationStrength: any; MedicationUnit: any; MedicationSchedule: any; MedicationNoofTimes: any; MedicationDate: any; MedicationTime: any; MedicationStocks:any
  AppoinmentDate: any; AppoinmentTime: any; AppoinmentName: string; AppoinmentDescription: string;
  InvestigationBloodPressure: any; InvestigationBloodSugarBeforeMeal: any; InvestigationBloodSugarAfterMeal: any; InvestigationWeight: any; InvestigationHeartRate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private storage: Storage) {
    // If we navigated to this page, we will have an item available as a nav param

    // Let's populate this page with some filler content for funzies
    this.item = navParams.get('item');
    this.event = navParams.get('event');
    this.pet = "Add";

    this.Exercise = [];
    this.storage.get('Exercise').then((data) => {
      if (data != null) this.Exercise = JSON.parse(data);
      else this.Exercise = [];
    }).catch((data) => {
      console.log(data);
      this.Exercise = [];
    });
    
     
    
    this.Appoinment = [];
    this.Medication = [];
    this.Investigation = [];

  }
  Add()
  {
    let toast = this.toastCtrl.create({
      message: 'Added successfully',
      duration: 1000,
      position: 'bottom',
      
    });
    toast.present();
  }
  AddExercise()
  {
    this.Exercise.push({ Date: this.ExerciseDate, Time: this.ExerciseTime, Duration: this.ExerciseDuration });
    this.storage.set('Exercise', JSON.stringify(this.Exercise));
    this.Add();


  }
  AddAppoinment()
  {
    this.Appoinment.push({ Date: this.AppoinmentDate, Time: this.AppoinmentTime,Name:this.AppoinmentName,Description:this.AppoinmentDescription });
    this.Add();
  }
  AddMedication()
  {

    this.Medication.push({ Date: this.MedicationDate, Time: this.MedicationTime, MedicineName: this.MedicationMedicineName, Strength: this.MedicationStrength,Unit:this.MedicationUnit,Schedule:this.MedicationSchedule,NoofTimes:this.MedicationNoofTimes ,Stocks:this.MedicationStocks});
    this.Add();
  }
  AddInvesgtigation()
  {
    this.Investigation.push({BloodPressure:this.InvestigationBloodPressure,BloodSugarAfterMeal:this.InvestigationBloodSugarAfterMeal,Weight:this.InvestigationWeight,HeartRate:this.InvestigationHeartRate,BloodSugarBeforeMeal:this.InvestigationBloodSugarBeforeMeal});
    this.Add();
  }
}
