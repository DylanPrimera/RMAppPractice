import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';
import {EpisodesType} from '../util/types/episodes/episodes-type';
import {CharacterType} from '../util/types/characters/character-type';
import {DataResponse} from '../util/types/data/data-response-type';
import {LocalStorageService} from './local-storage.service';

const QUERY = gql`{
  episodes {
    results {
      name
      episode
    }
  }
  characters {
    results {
      name
      status
      species
      gender
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class RmApiService {
  private episodesBS = new BehaviorSubject<EpisodesType[]>(null);
  private charactersBS = new BehaviorSubject<CharacterType[]>(null);
  public episodes$ = this.episodesBS.asObservable();
  public characters$ = this.charactersBS.asObservable();

  constructor(private apollo: Apollo, private localStoragaService: LocalStorageService) {
  }

  getData(): Observable<{ readonly data?: any }> {
    return this.apollo.watchQuery<DataResponse>({query: QUERY}).valueChanges.pipe(
      take(1),
      tap(({data}) => {
        const {characters, episodes} = data;
        this.episodesBS.next(episodes.results);
        // this.charactersBS.next(characters.results);
        this.parseCharactersData(characters.results);
      })
    );
  }

  private parseCharactersData(characters: CharacterType[]): void {
    const aux = this.localStoragaService.getFavorites();
    const newData = characters.map(character => {
      const found = !!aux.find((fav: CharacterType) => fav.id === character.id);
      return {...character, isFavorite: found};
    });
    this.charactersBS.next(newData);
  }
}
