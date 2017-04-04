import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlacesPage } from '../pages/places/places';
import { AddPage } from '../pages/add/add';
import { AroundPage } from '../pages/around/around';
import { FriendsPage } from '../pages/friends/friends';

const pages = [
  MyApp,
  HomePage,
  TabsPage,
  PlacesPage,
  AddPage,
  AroundPage,
  FriendsPage,
];

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: pages,
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: pages,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}