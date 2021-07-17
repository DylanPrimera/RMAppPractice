import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesCharactersRoutingModule } from './favorites-characters-routing.module';
import { FavoritesCharactersComponent } from '../../components/smarts/favorites-characters/favorites-characters.component';


@NgModule({
  declarations: [FavoritesCharactersComponent],
  imports: [
    CommonModule,
    FavoritesCharactersRoutingModule
  ]
})
export class FavoritesCharactersModule { }
