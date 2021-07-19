import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CharacterType} from '../../../util/types/characters/character-type';
import {LocalStorageService} from '../../../services/local-storage.service';


@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {
  @Input() characters: CharacterType;

  constructor(private localStorage: LocalStorageService) {
  }

  sendFavorite(): void {
    const isFav = this.characters.isFavorite;
    this.setIcon();
    this.characters.isFavorite = !isFav;
    this.localStorage.postOrDeleteFavorite(this.characters);
  }

  setIcon(): string {
    return this.characters.isFavorite ? 'favorite' : 'favorite_border';
  }

  ngOnInit(): void {
  }

}
