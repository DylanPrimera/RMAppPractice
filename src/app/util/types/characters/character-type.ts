import {LocationType} from '../location/location-type';
import {OriginType} from '../origin/origin.type';


export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: OriginType;
  location: LocationType;
  image: string;
  isFavorite?: boolean;
}
