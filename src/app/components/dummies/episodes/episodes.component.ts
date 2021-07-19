import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {EpisodesType} from '../../../util/types/episodes/episodes-type';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  @Input() episodes$: Observable<EpisodesType[]>;


  constructor() { }

  ngOnInit(): void {
  }

}
