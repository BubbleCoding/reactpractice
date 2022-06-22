import React, { useState } from "react";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100));
  const [guessedNumber, setGuessedNumber] = useState();
  const [guessedNumbersList, setGuessedNumbersList] = useState([]);

  const isFound = (event) => {
    event.preventDefault();
    return guessedNumbersList.includes(guessedNumber);
  };

  const lowHigh = (data) => {
    if (data > randomNumber){
      return "is higher"
    }
    return "is lower"
  };

  const newRandomNumber = (event) => {
    event.preventDefault();
    setRandomNumber(Math.floor(Math.random() * 100));
    setGuessedNumbersList([]);
    setGuessedNumber(0);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setGuessedNumber(event.target.value);
  };
  
  const checkWin = (event) =>{
    event.preventDefault();
    alert(guessedNumber == randomNumber);
    return guessedNumber == randomNumber;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(guessedNumber == randomNumber){
      alert("you win!");
      return
    }

    if(guessedNumbersList.includes(guessedNumber)){
      alert("Already tried this number!");
      return
    };

    const newList=guessedNumbersList;
    newList.push(guessedNumber);
    setGuessedNumbersList(newList);
    setGuessedNumber();
  };

  return (
    <main>
      <form>
        <input type="number" value={guessedNumber} number="number" onChange={handleChange}/>
        <input value="Submit number" type="submit" onClick={handleSubmit}/>
      </form>
        <div>
          {/* <h1>Number to guess: {randomNumber}</h1> */}
          <p>Total number of guesses: {guessedNumbersList.length}</p>
          <p>Highest number guessed: {Math.max.apply(Math, guessedNumbersList)}</p>
          <p>Lowest number guessed: {Math.min.apply(Math, guessedNumbersList)}</p>
        </div>
        <input value="New random number" type="submit" onClick={newRandomNumber}/>
        <div>
          {guessedNumbersList.map(data =>(
            <li>{data} {lowHigh(data)}</li>
          ))}
        </div>
    </main>
  );
}

export default App;
