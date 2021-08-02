import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

;

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule}from '@angular/material/sidenav';
import { MatToolbarModule}from '@angular/material/toolbar';
import { MatMenuModule }from '@angular/material/menu';
import { MatIconModule}from '@angular/material/icon';
import { MatDividerModule}from '@angular/material/divider';
import { MatListModule}from '@angular/material/list';
import { MatButtonModule}from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';// must go before plugins


import { ChartsModule } from 'ng2-charts';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { WhyComponent } from './why/why.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';


FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ServicesComponent,
    WhyComponent,
    AboutComponent,
    CareerComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule,

    FullCalendarModule



    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
