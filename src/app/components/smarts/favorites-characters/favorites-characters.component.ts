import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CharacterType} from '../../../util/types/characters/character-type';
import {LocalStorageService} from '../../../services/local-storage.service';

@Component({
  selector: 'app-favorites-characters',
  templateUrl: './favorites-characters.component.html',
  styleUrls: ['./favorites-characters.component.scss']
})
export class FavoritesCharactersComponent implements OnInit {
  public favCharacters$: Observable<CharacterType[]>;
  public favorite = true;

  constructor(private localStorage: LocalStorageService) {
    this.localStorage.initialStorage();
  }

  ngOnInit(): void {
    this.localStorage.getFavorites();
    this.favCharacters$ = this.localStorage.favCharacters$;
  }


}
