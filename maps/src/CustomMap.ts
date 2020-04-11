interface MapData {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  // makes it so no one can access to google map class
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  //   instead of include different class types
  // use the mapData interface instead to say anything passed in must have
  // the location fields as a property
  addMarker(mapData: MapData): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapData.location.lat,
        lng: mapData.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapData.markerContent(),
      });
      //   opens window on map at marker
      infoWindow.open(this.googleMap, marker);
    });
  }
}
