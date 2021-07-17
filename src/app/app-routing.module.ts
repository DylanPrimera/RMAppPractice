import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'characters', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./modules/favorites-characters/favorites-characters.module').then(m => m.FavoritesCharactersModule)
  },
  {path: 'episodes', loadChildren: () => import('./modules/episodes/episodes.module').then(m => m.EpisodesModule)},
  // {path: '**', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)},
  {path: 'characters', loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
