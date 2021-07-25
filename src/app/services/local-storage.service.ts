import {Injectable} from '@angular/core';
import {FAVORITE_CHARACTERS} from '../util/constants';
import {BehaviorSubject} from 'rxjs';
import {CharacterType} from '../util/types/characters/character-type';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private favCharactersBS = new BehaviorSubject<CharacterType[]>(null);
  public favCharacters$ = this.favCharactersBS.asObservable();

  constructor(private toast: ToastrService) {
  }

  // en caso de que no haya nada en el local storage este metedo creará un array vacío
  initialStorage(): void {
    const aux = JSON.parse(localStorage.getItem(FAVORITE_CHARACTERS));
    if (!aux) {
      localStorage.setItem(FAVORITE_CHARACTERS, JSON.stringify([]));
    }
    this.getFavorites();
  }

  clearStorage(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.log('Error when trying to clear storage', e);
    }
  }

  getFavorites(): any {
    try {
      const favCharacters = JSON.parse(localStorage.getItem(FAVORITE_CHARACTERS));
      this.favCharactersBS.next(favCharacters);
      return favCharacters;
    } catch (e) {
      console.log('Error when trying to get favorites characters', e);
    }
  }

  public postOrDeleteFavorite(c: CharacterType): void {
    const {id} = c;
    const currentFavs = this.getFavorites();
    const found = !!currentFavs.find((favs: CharacterType) => favs.id === id);
    found ? this.deleteFavorite(id) : this.postFavorite(c);
  }

  private postFavorite(character: CharacterType): void {
    try {
      const currentFavs = this.getFavorites();
      localStorage.setItem(FAVORITE_CHARACTERS, JSON.stringify([...currentFavs, character]));
      this.favCharactersBS.next([...currentFavs, character]);
      this.toast.success(`${character.name} successfully added to favorites!`, 'Favorites notification');
    } catch (e) {
      this.toast.error(`'Error when trying to add ${character.name} to favorites characters`);
    }
  }

  private deleteFavorite(id: number): void {
    try {
      const currentFavs = this.getFavorites();
      const aux = currentFavs.filter(item => item.id !== id);
      localStorage.setItem(FAVORITE_CHARACTERS, JSON.stringify([...aux]));
      this.favCharactersBS.next([...aux]);
      this.toast.success('successfully deleted of favorites characters!', 'Unfavorites notification');
    } catch (e) {
      this.toast.error('Error when trying to delete of favorites characters', 'Unfavorites notification');
    }
  }
}
