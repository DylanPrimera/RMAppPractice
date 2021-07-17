import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {RmApiService} from '../../../services/rm-api.service';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.scss']
})
export class ListEpisodesComponent implements OnInit {
  public episodes$: Observable<any>;

  constructor(private rmService: RmApiService) { }

  ngOnInit(): void {
    this.episodes$ = this.rmService.episodes$;
  }
}
