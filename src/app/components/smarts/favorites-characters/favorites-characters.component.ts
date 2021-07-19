import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {CharacterType} from '../../../util/types/characters/character-type';
import {RmApiService} from '../../../services/rm-api.service';

@Component({
  selector: 'app-favorites-characters',
  templateUrl: './favorites-characters.component.html',
  styleUrls: ['./favorites-characters.component.scss']
})
export class FavoritesCharactersComponent implements OnInit, OnDestroy {

  public characters$: Observable<CharacterType[]>;
  public subscription: Subscription = new Subscription();
  public favorite = true;

  constructor(private rmService: RmApiService) { }

  ngOnInit(): void {
    this.subscription.add(this.rmService.getData().subscribe());
    this.characters$ = this.rmService.characters$;
  }

  getFavorite(event: CharacterType): void {
    console.log('id? ', event.id);
    console.log('name ', event.name);
    console.log('is favorite? ', event.isFavorite);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
