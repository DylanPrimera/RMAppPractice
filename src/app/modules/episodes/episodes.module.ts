import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { ListEpisodesComponent } from '../../components/smarts/list-episodes/list-episodes.component';
import { EpisodesComponent } from '../../components/dummies/episodes/episodes.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ListEpisodesComponent, EpisodesComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    MatListModule,
    MatIconModule
  ]
})
export class EpisodesModule { }
