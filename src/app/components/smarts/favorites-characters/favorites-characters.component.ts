import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {CharacterType} from '../../../util/types/characters/character-type';
import {RmApiService} from '../../../services/rm-api.service';
import {LocalStorageService} from '../../../services/local-storage.service';

@Component({
  selector: 'app-favorites-characters',
  templateUrl: './favorites-characters.component.html',
  styleUrls: ['./favorites-characters.component.scss']
})
export class FavoritesCharactersComponent implements OnInit {
  public favCharacters$: Observable<CharacterType[]>;
  // public subscription: Subscription = new Subscription();
  public favorite = true;

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.localStorage.getFavorites();
    this.favCharacters$ = this.localStorage.favCharacters$;
  }


}
