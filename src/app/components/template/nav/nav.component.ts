import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    const px = 250;
    
    if (window.scrollY >= px) {
      console.log(window.scrollY);
      window.document.getElementById('navbar-realeza')?.className;
    }
  }

}
