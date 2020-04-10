import { company, address } from 'faker';

class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: string;
    lng: string;
  };

  constructor() {
    this.companyName = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: address.latitude(),
      lng: address.longitude(),
    };
  }
}
