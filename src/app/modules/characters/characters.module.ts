import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharactersComponent} from '../../components/smarts/characters/characters.component';
import {ListCharactersComponent} from '../../components/dummies/list-characters/list-characters.component';
import {CharactersCardComponent} from '../../components/dummies/characters-card/characters-card.component';
import {CharactersDetailsComponent} from '../../components/smarts/characters-details/characters-details.component';
import {CharactersRoutingModule} from './characters-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    CharactersComponent,
    ListCharactersComponent,
    CharactersCardComponent,
    CharactersDetailsComponent],
  exports: [
    ListCharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
  ]
})
export class CharactersModule {
}
