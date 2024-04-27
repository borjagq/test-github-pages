import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:  string = 'ironman';
  public age:   number = 45;

  get capitalisedName(): string {    
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 18;
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;
  }

  other(): void {
    if (document.querySelector('h1')!.innerHTML != 'Desde Angular')
      document.querySelectorAll('h1').forEach(elm => {
        elm.innerHTML = 'Desde Angular';
      });

    else
      document.querySelectorAll('h1').forEach(elm => {
        elm.innerHTML = this.name;
      });
  }
}
