import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//Modificado Wilmar
import { HttpClientModule } from '@angular/common/http';

import { RegisterProvider } from './proviers/registerProvider';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [   
    AppComponent 
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    RegisterProvider,
    ReactiveFormsModule,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
