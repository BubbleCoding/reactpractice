import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);


class MagicCard{
  constructor(name, type, pt){
    this.name = name;
    this.type = type;
    this.pt = pt
  }
  stats(){
    return 'This is a ' + this.name + ' its pt is ' + this.pt + ' its type is ' + this.type;
  }

}

const MountainCard = new MagicCard("Mountan", "Land", "Nothing");
MountainCard.stats();

