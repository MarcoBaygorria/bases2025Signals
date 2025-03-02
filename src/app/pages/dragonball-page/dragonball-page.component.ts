import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 15000 },
    // { id: 2, name: 'Vegeta', power: 8500 },
    // { id: 3, name: 'Krillin', power: 7000 },
    // { id: 4, name: 'Yamcha', power: 3000 },
    // { id: 5, name: 'Piccolo', power: 7000 },
    // { id: 6, name: 'Tien', power: 5000 },
    // { id: 7, name: 'Gohan', power: 4000 },
    // { id: 8, name: 'Trunks', power: 4000 },
    // { id: 9, name: 'Bulma', power: 2000 },
    // { id: 10, name: 'Chi-Chi', power: 2000 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update((prevState) => [...prevState, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
