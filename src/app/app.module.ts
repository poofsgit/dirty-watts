import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { StreamsComponent } from './streams/streams.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { CaptainRecordsComponent } from './captain-records/captain-records.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamsComponent,
    HomeComponent,
    InformationComponent,
    CaptainRecordsComponent,
    RegistrationComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
