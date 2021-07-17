import {LocationType} from '../location/location-type';


export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: LocationType;
  image: string;
  isFavorite?: boolean;
}
