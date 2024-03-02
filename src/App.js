import { useState } from "react";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  //   const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // setCount(count + 1);
    // ['cat']

    // ['cat', 'horse']

    // modifies a piece of state
    // animals.push(getRandomAnimal());
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      {/* <div>Number of animals: {count}</div> */}
      <div>{animals}</div>
    </div>
  );
}

export default App;
