import { Component } from '@angular/core';
import { Auto } from './auto/auto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  auto : Auto[];

  constructor(){
    this.auto = [
      new Auto(1, '127', 'Fiat', 1300, 110),
      new Auto(2, 'Giulietta', 'Alfa Romeo', 4000, 180),
      new Auto(3, 'Fiesta', 'Ford', 1600, 130),
      new Auto(4, 'Baracca', 'Subaru', 5500, 170) 
    ]

  }

  ordinaPrezzo(): Auto[]{
  
    return this.auto.sort((a : Auto, b : Auto) => b.prezzo-a.prezzo);
  
    
    

  }

  ordinaVelocita(): Auto[]{
    return this.auto.sort((a:Auto, b : Auto) => b.velocitaMax - a.velocitaMax)

  }

    
}




