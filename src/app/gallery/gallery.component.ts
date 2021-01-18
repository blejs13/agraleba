import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }


  nextImage() {
    let $active = $('#button_gallery .active');
    let $next = ($active.next().length > 0) ? $active.next() : $('#button_gallery img:first');
    $active.fadeOut(100, function () {
      $active.hide().removeClass('active');
    });
    $next.delay(100).fadeIn(100, function () {
      $next.show().addClass('active');
    });

  }

  prevImage():void {
    let $active = $('#button_gallery .active');
    let $prev = ($active.prev().length > 0) ? $active.prev() : $('#button_gallery img:last');
    $active.fadeOut(100, function () {
      $active.hide().removeClass('active');
    });
    $prev.delay(100).fadeIn(100, function () {
      $prev.show().addClass('active');
    });

  }

  ngAfterViewInit() {
    let tmp = this
    $("#prev").click(function () {
      $('#prev').attr("disabled", 1);
      tmp.prevImage();
      setTimeout(function () { $('#prev').removeAttr( "disabled" );}, 250);
    });
    $("#next").click(function () {
      $('#next').attr("disabled", 1);
      tmp.nextImage();
      setTimeout(function () { $('#next').removeAttr( "disabled" );}, 250);
    });
  }


}
