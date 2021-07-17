import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FavoritesCharactersComponent} from '../../components/smarts/favorites-characters/favorites-characters.component';

const routes: Routes = [
  {path: '', component: FavoritesCharactersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesCharactersRoutingModule { }
