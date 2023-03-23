import { Component, Input } from '@angular/core';
import { Auto } from './auto.model';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent {
  @Input() auto : Auto;

  constructor(){
    
  }

}
