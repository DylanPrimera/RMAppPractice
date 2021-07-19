import {Component, OnDestroy, OnInit} from '@angular/core';
import {RmApiService} from '../../../services/rm-api.service';
import {Observable, Subscription} from 'rxjs';
import {CharacterType} from '../../../util/types/characters/character-type';
import {LocalStorageService} from '../../../services/local-storage.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  public characters$: Observable<CharacterType[]>;
  public subscription: Subscription = new Subscription();

  constructor(private rmService: RmApiService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.localStorageService.initialStorage();
    this.subscription.add(this.rmService.getData().subscribe());
    this.characters$ = this.rmService.characters$;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
