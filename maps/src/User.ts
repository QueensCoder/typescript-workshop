import { name, address } from 'faker';
import { MapData } from './CustomMap';

// user has to be implemented by all properties of mapdata
// give another error if another type is changed on mapdata
export class User implements MapData {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = name.firstName();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }
  markerContent(): string {
    return `Username: ${this.name}`;
  }
}
