import { Component, OnInit } from '@angular/core';
import {RmApiService} from '../../../services/rm-api.service';
import {Observable} from 'rxjs';
import {CharacterType} from '../../../util/types/characters/character-type';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters$: Observable<CharacterType[]>;

  constructor(private rmService: RmApiService) { }

  ngOnInit(): void {
    this.characters$ = this.rmService.characters$;
  }

}
