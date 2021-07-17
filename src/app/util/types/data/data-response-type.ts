import {ApiResponseType} from '../api/api-response-type';
import {CharacterType} from '../characters/character-type';
import {EpisodesType} from '../episodes/episodes-type';

export interface DataResponse {
  characters: ApiResponseType<CharacterType[]>;
  episodes: ApiResponseType<EpisodesType[]>;
}
