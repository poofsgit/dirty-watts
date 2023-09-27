import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StreamsComponent} from "./streams/streams.component";
import { CaptainRecordsComponent } from './captain-records/captain-records.component';
import { InformationComponent } from './information/information.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResultsComponent } from './results/results.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'captain-records', component: CaptainRecordsComponent},
  { path: 'information', component: InformationComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'results', component: ResultsComponent},
  { path: 'streams', component: StreamsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
