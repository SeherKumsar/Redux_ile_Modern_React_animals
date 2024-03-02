import { useState } from "react";

// function useState(defaultValue) {
//     return {
//         yourState: defaultValue,
//         yourSetter: () => {},
//     };
// }

function App() {
  const [count, setCount] = useState(0);

    // const stateConfig = useState(0);
    // const count = stateConfig.yourState;
    // const setCount = stateConfig.yourSetter;

    // const { yourState: count, yourSetter: setCount } = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;
