import { Component } from '@angular/core';
const EXAMPLE_DATA = [
  { id: 1, name: 'Hydrogen', atom: 'Hydrogen' },
  { id: 2, name: 'Helium', atom: 'Helium' },
  { id: 3, name: 'Lithium', atom: 'Lithium' },
  { id: 4, name: 'Beryllium', atom: 'Beryllium' },
  { id: 5, name: 'Boron', atom: 'Boron' },
  { id: 6, name: 'Carbon', atom: 'Carbon' },
  { id: 7, name: 'Nitrogen', atom: 'Nitrogen' },
  { id: 8, name: 'Oxygen', atom: 'Oxygen' },
  { id: 9, name: 'Fluorine', atom: 'Fluorine' },
  { id: 10, name: 'Neon', atom: 'Neon' },
  { id: 11, name: 'Sodium', atom: 'Sodium' },
  { id: 12, name: 'Magnesium', atom: 'Magnesium' },
  { id: 13, name: 'Aluminum', atom: 'Aluminum' },
  { id: 14, name: 'Silicon', atom: 'Silicon' },
  { id: 15, name: 'Phosphorus', atom: 'Phosphorus' },
  { id: 16, name: 'Sulfur', atom: 'Sulfur' },
  { id: 17, name: 'Chlorine', atom: 'Chlorine' },
  { id: 18, name: 'Argon', atom: 'Argon' },
  { id: 19, name: 'Potassium', atom: 'Potassium' },
  { id: 79, name: 'Lithium', atom: 'Potassium' },
  { id: 20, name: 'Calcium', atom: 'Calcium' },
  { id: 27, name: 'Nitrogen', atom: 'Nitrogens' },
  { id: 28, name: 'Oxygens', atom: 'Oxygens' },
  { id: 29, name: 'Fluorine', atom: 'Fluorines' },
  { id: 70, name: 'Neon', atom: 'Neons' },
  { id: 21, name: 'Sodium', atom: 'Sodiums' },
  { id: 22, name: 'Magnesium', atom: 'Magnesiums' },
  { id: 23, name: 'Aluminum', atom: 'Aluminums' },
  { id: 24, name: 'Silicon', atom: 'Silicons' },
  { id: 54, name: 'Lithium', atom: 'Silicons' },
  { id: 25, name: 'Phosphorus', atom: 'Phosphoruss' },
  { id: 26, name: 'Sulfur', atom: 'Sulfurs' },
  { id: 37, name: 'Chlorine', atom: 'Chlorines' },
  { id: 38, name: 'Argon', atom: 'Argons' },
  { id: 39, name: 'Potassium', atom: 'Potassiums' },
  { id: 40, name: 'Calcium', atom: 'Calciums' },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: Array<any> = EXAMPLE_DATA;
  title = 'Generic-Table';
}
