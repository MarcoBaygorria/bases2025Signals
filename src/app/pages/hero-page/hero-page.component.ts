import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  name = signal('ironman');
  age = signal(45);

  //Señal computada
  heroDescription = computed(() => `${this.name()} - ${this.age()}`);

  capitalizeName = computed(() => this.name().toUpperCase());


  changeHero() {
    this.name.set('spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.update(() => 60);
  }

}
