import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id){
        <li (click)="fav(game.name)" >{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent { 
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  
  fav(gameName: string){
    //alert(`A ${this.username} le gusta jugar a ${gameName}`); // Esta comilla permite el uso de código dentro del string, es la misma del template y el styles
    this.addFavoriteEvent.emit(gameName); // <-- se emite el valor de la propiedad (irá hacia el padre)
  }
  
  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'Horizon zero down'
    },
    {
      id:3,
      name:'Bloodborne'
    }
  ]
}
