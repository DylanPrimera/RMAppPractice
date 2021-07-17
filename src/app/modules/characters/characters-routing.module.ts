import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersDetailsComponent} from '../../components/smarts/characters-details/characters-details.component';
import {CharactersComponent} from '../../components/smarts/characters/characters.component';

const routes: Routes = [
  {path: '', component: CharactersComponent},
  { path: 'character-detail/:id', component: CharactersDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
