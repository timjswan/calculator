import React from 'react';
import logo from './logo.svg';
import './App.css';
import { runInThisContext } from 'vm';

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
  getTime(): Date;
  tick(): string;
}

interface ClockConstructor {
  new (d?: Date): ClockInterface;
}

function createClock(ctor: ClockConstructor, d?: Date): ClockInterface {
  return new ctor(d);
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }

  getTime(): Date{
    return this.currentTime;
  }

  tick(): string{
    return "bong bong";
  }

  constructor(d?: Date) {
    if(d){
      this.setTime(d);
    }
  }
}

class DigitalClock extends Clock {
  constructor(d?: Date){
    super();
  };

  tick() {
    return "beep beep";
  }
}

class AnalogClock extends Clock {
  constructor(d?: Date){
    super();
  }

  tick() {
    return "tick tock";
  }
}

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = (function (start: number){}) as Counter;
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

/* class Image implements SelectableControl {
  private state: any;
  select() {}
} */

class Greeter {
  greeting: string;
  constructor(message: string){
    this.greeting = message;
  }

  greet() {
    return `Hello, ${ this.greeting }`;
  }
}

class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }

  move(distanceInMeters: number = 0){
    return `${this.name} moved ${distanceInMeters}m.`;
  }
}

class Snake extends Animal {
  constructor(name: string){ super(name); }
  move(distanceInMeters = 5){
    return `Slithering... ${super.move(distanceInMeters)}`;
  }
}

class Horse extends Animal {
  constructor(name: string){ super(name); }
  move(distanceInMeters = 45){
    return `Galloping... ${super.move(distanceInMeters)}`;
  }
}

class Rhino extends Animal {
  constructor(){super("Rhino")};
}

class Employee {
  private name: string;
  constructor(theName: string){ this.name = theName; }
}

class Person {
  protected name: string;
  protected constructor(name: string) { this.name = name; }
}

class Employeee extends Person {
  private department: string;

  constructor(name: string, department: string){
    super(name);
    this.department = department;
  }

  public getElevatorPitch(){
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

class Octopus {  
  readonly numberOfLegs: number = 8;
  constructor (readonly name: string){
  }
}

const modelMaxLength = 20;

class Car {
  private _model: string = "";
  

  get model(): string {
    return this._model;
  }

  set model(newModel: string){
    if(newModel && newModel.length > modelMaxLength){
      throw new Error(`fullName has a max length of ${modelMaxLength}`);
    }

    this._model = newModel;
  }
}

class Grid {
  static origin = {x: 0, y: 0};

  calculateDistanceFromOrigin(point: {x: number; y: number;}){
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist) / this.scale;
  }
  constructor (public scale: number){}
}

abstract class Animall {
  abstract makeSound(): void;
  move(): string {
    return "roaming the earth...";
  }
}

abstract class Department {
  constructor(public name: string){
  }

  printName(): string {
    return `Department name: ${this.name}`;
  }

  abstract printMeeting(): string;
}

class AccountingDepartment extends Department {
  constructor(){
    super("Accounting and audting");
  }

  printMeeting(): string {
    return "The acc department meets monday 10am";
  }

  generateReports(): string {
    return "generating acc reports...";
  }
}

class Greeterr {
  static standardGreeting = "Hello, there";
  greeting: string = "";
  greet() {
    if(this.greeting){
      return `Hello, ${this.greeting}`;
    }
    else {
      return Greeterr.standardGreeting;
    }
  }
}

class Point {
  x: number = 0;
  y: number = 0;
}

interface Point3d extends Point {
  z: number;
}

const App: React.FC = () => {

  let clock = createClock(Clock);
  clock.setTime(new Date());
  let date: Date = clock.getTime();

  let digitalClock = createClock(DigitalClock, date);
  let analogClock = createClock(AnalogClock, date);

  let digitalDate = digitalClock.getTime();
  let analogDate = analogClock.getTime();

  let square = {} as Square;
  square.color = "blue";
  square.sideLength = 10;
  square.penWidth = 5.0;

  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;

  let greeter = new Greeter("world");

  let sam = new Snake("Sammy the python");
  let tom: Animal = new Horse("Tommy the Palomino");

  let animal = new Animal("Goat");
  let rhino = new Rhino();
  let employee = new Employee("Bob");

  let howard = new Employeee("Howard", "Sales");
  //let john = new Person("John");

  animal = rhino;
  //animal = employee;
  
  let dad = new Octopus("Man with 8 legs");
  //dad.name = "Man with 3 piece suit";

  let car = new Car();
  car.model = "Honda Civic";  

  let grid1 = new Grid(1.0);
  let grid2 = new Grid(5.0);

  let department: Department;
  //department = new Department(); can't create instance abstract class
  department = new AccountingDepartment();

  //let greeterr: Greeterr;
  //greeterr = new Greeterr("world");

  let greeter1: Greeterr;
  greeter1 = new Greeterr();

  let greeterrMaker: typeof Greeterr = Greeterr;
  greeterrMaker.standardGreeting = "Hey there";

  let greeter2: Greeter = new greeterrMaker();

  let point3d: Point3d = {x: 1, y: 2, z: 3};

  return (
    <div className="App">
      <p>The main clock current time is {date.toString()} and when it ticks it sounds like {clock.tick()}</p>
      <p>The digital clock time is {digitalDate.toString()} and when it ticks it sounds like {digitalClock.tick()}</p>
      <p>The analog clock time is {analogDate.toString()} and when it ticks it sounds like {analogClock.tick()}</p>
      <p>{square.color}, {square.sideLength}, {square.penWidth}</p>
      <p>{c.interval}</p>
      <p>{greeter.greet()}</p>
      <p>{sam.move()}, {tom.move(34)}</p>
      <p>{howard.getElevatorPitch()}</p>
      {car.model && 
        <p>{car.model}</p>
      }
      <p>{grid1.calculateDistanceFromOrigin({x: 10, y: 10})}</p>
      <p>{grid2.calculateDistanceFromOrigin({x: 10, y: 10})}</p>
      <p>{department.printName()}</p>
      <p>{department.printMeeting()}</p>
      <p>{greeter1.greet()}</p>
      <p>{greeter2.greet()}</p>
      <p>{point3d.z}</p>
    </div>
  );

}

export default App;
