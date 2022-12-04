import {HouseCar} from './houseCar';

export interface Card {
  id?: number;
  price?: number;
  address1?: string;
  address2?: string;
  startDate?: string;
  hourStart?: string;
  houseCar?: HouseCar;
  count?: number;
}
