class Vehicle {
  public drive(): void {
    console.log('glug glug glug');
  }
  public honk(): void {
    console.log('beep beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }
  public startDriving(): void {
    this.drive();
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();

// car.drive();
car.startDriving();
