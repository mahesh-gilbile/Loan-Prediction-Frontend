import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppServices } from './app.services';
import { FirsPageComponent } from './firs-page/firs-page.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Loan-Prediction';

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.route.navigate(['/']);
  }
}
