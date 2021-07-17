import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CharacterType} from '../../../util/types/characters/character-type';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {
  @Input() characters$: Observable<CharacterType[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
