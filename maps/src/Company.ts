import { company, address } from 'faker';
import { MapData } from './CustomMap';

export class Company implements MapData {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.companyName = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }
  markerContent(): string {
    //   google maps can display html in content
    return `<div>
                <h1>Companyname ${this.companyName}</h1>
                <h3>Catchphrase ${this.catchPhrase}</h3>
            </div>
    `;
  }
}
