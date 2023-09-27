import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}
  streams() {
    this.router.navigate(['/streams']);
  }
  captainsRecords() {
    this.router.navigate(['/captain-records']);
  }

  information() {
    this.router.navigate(['/information']);
  }

  registration() {
    this.router.navigate(['/registration']);
  }

  results() {
    this.router.navigate(['/results']);
  }

}
