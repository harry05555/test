import { Component } from '@angular/core';
import { TransportLKW } from './lastenTransporter/transportLKW.class';
import { Audi } from './ware/fahrzeug/audi.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  constructor(private transportLKW: TransportLKW) {
    console.log(transportLKW.isTransportMachbar(new Audi()));
    console.log(transportLKW.MAX_GEWICHT_KG);
  }
}