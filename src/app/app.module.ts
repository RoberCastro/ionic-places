import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HeaderContentComponent } from '../components/header-content/header-content';
import { Routes } from './app.routes';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import {Camera} from '@ionic-native/camera';
import {Contacts} from '@ionic-native/contacts';
import {Endpoints} from '../providers/endpoints'
import {Auth} from '../providers/auth'
import {Map} from '../components/map/map';
import {SortAsc} from '../pipes/sort-asc';

const app:Array<any>=[MyApp];
const pages:Array<any> = Routes.getPages();
const components:Array<any> = [
  HeaderContentComponent,
  Map,
];
const pipes:Array<any> = [SortAsc];
const appIonicConfig = {
  mode: 'md',
  platforms: {
    ios: {
      tabsPlacement: 'top',
    }
  }
};

let storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    // headerPrefix: YOUR_HEADER_PREFIX,
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token')),
  }), http);
}

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: app.concat(pages).concat(components).concat(pipes),
  imports: [
    IonicModule.forRoot(MyApp,appIonicConfig, Routes.getDeepLinkerConfig())
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    Endpoints,
    Auth,
    Camera,
    Contacts
  ],
  bootstrap: [IonicApp],
  entryComponents: app.concat(pages),
})
export class AppModule {}
