import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {RmApiService} from '../../../services/rm-api.service';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.scss']
})
export class ListEpisodesComponent implements OnInit, OnDestroy {
  public episodes$: Observable<any>;
  public subscription: Subscription = new Subscription();

  constructor(private rmService: RmApiService) { }

  ngOnInit(): void {
    this.subscription.add(this.rmService.getData().subscribe());
    this.episodes$ = this.rmService.episodes$;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
