import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesCharactersRoutingModule } from './favorites-characters-routing.module';
import { FavoritesCharactersComponent } from '../../components/smarts/favorites-characters/favorites-characters.component';
import {CharactersModule} from '../characters/characters.module';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [FavoritesCharactersComponent],
    imports: [
        CommonModule,
        FavoritesCharactersRoutingModule,
        CharactersModule,
        MatGridListModule
    ]
})
export class FavoritesCharactersModule { }
