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

const App: React.FC = () => {

  let clock = new Clock();
  clock.setTime(new Date());
  let date: Date = clock.getTime();

  let digitalClock = createClock(DigitalClock, date);
  let analogClock = createClock(AnalogClock, date);

  let digitalDate = digitalClock.getTime();
  let analogDate = analogClock.getTime();
  
  return (
    <div className="App">
      <p>The main clock current time is {date.toString()} and when it ticks it sounds like {clock.tick()}</p>
      <p>The digital clock time is {digitalDate.toString()} and when it ticks it sounds like {digitalClock.tick()}</p>
      <p>The analog clock time is {analogDate.toString()} and when it ticks it sounds like {analogClock.tick()}</p>
    </div>
  );

}

export default App;
