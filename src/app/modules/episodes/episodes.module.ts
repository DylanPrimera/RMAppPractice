import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { ListEpisodesComponent } from '../../components/smarts/list-episodes/list-episodes.component';


@NgModule({
  declarations: [ListEpisodesComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule { }
