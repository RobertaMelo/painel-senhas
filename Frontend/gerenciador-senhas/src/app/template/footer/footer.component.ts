import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  clock;
  
  constructor() { }

  ngOnInit() {
    this.iniciaRelogio();
  }

  iniciaRelogio() {
    this.clock = interval(1000).pipe(  
      map(tick => new Date()),
      share()
    )
  }

}
