import { Component, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core'
import * as $ from "jquery"
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private renderer:Renderer2,
              public app:AppComponent) { }

  ngOnInit(): void {}

  @ViewChild('navlist') navlist
  hideNav(){
    this.renderer.removeClass(this.navlist.nativeElement,"show") 
    this.app.scrollTop()
  }





  // //test
  // @ViewChild('nav') navi
  // changeClassAngular(){
  //   this.renderer.addClass(this.navi.nativeElement,"bg-danger")
  //   this.renderer.removeClass(this.navi.nativeElement,"bg-danger")    
  // }

  // @ViewChild('nav',{read:ViewContainerRef}) nav : ViewContainerRef
  // @ViewChild('template', { read: TemplateRef }) _template: TemplateRef<any>;
  // addElementAngular(){
  //   let view: ViewRef = this._template.createEmbeddedView(null)
  //   this.nav.insert(view)
  // }
  
  // clearAngular(){
  //   this.nav.clear()
  // }
}
