import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // NEVER GOING TO...
//   count = 123

//   setCount(30)

  const handleClick = () => {
    setCount(30);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    <div>
        Number of animals: {count}
    </div>
    </div>
  );
}

export default App;
