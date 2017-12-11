import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';
import { Page5 } from '../pages/page5/page5';
import { cabg } from '../pages/cabg/cabg';
import { medication } from '../pages/medication/medication';
import { lifestylemodification } from '../pages/lifestylemodification/lifestylemodification';
import { Reminder } from '../pages/reminder/reminder';
import { AddReminder } from '../pages/AddReminder/AddReminder';
import { ListReminder } from '../pages/reminder/ListReminder';
import { Storage } from '@ionic/storage';




@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
cabg,
medication,
    lifestylemodification,
    Reminder,
    ListReminder,
    AddReminder
  ],
  imports: [
    IonicModule.forRoot(MyApp, { tabsPlacement: 'bottom' })

    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    cabg,
    medication,
    lifestylemodification,
    Reminder,
    ListReminder,
    AddReminder

  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, Storage]
})
export class AppModule {}
