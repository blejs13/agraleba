import { Component, OnInit, Renderer2, ViewChild } from '@angular/core'
import * as $ from "jquery"

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  @ViewChild('nav') nav

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  showNav(){
    //$('#menu').addClass('bg-danger')
    console.log(this.nav.nativeElement)
    this.renderer.addClass(this.nav.nativeElement,"bg-danger")
    this.renderer.removeClass(this.nav.nativeElement,"bg-danger")    
  }

}
