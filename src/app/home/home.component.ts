import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(private app:AppComponent) { }

  ngOnInit(): void {
    this.app.home = true
  }

  ngOnDestroy(){
    this.app.home = false
  }

}
