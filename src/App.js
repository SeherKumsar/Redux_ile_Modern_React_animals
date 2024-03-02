function App() {
  // const handleClick = () => {
  //     console.log('Button was clicked!')
  // };

  return (
    <div>
      {/* <button onClick={handleClick}>Add Animal</button> */}
      {/* <button onClick={function() {
            console.log('Button was clicked!')
      }}
      > */}
      <button onClick={() => console.log("Button was clicked!")}>
        Add Animal
      </button>
    </div>
  );
}

export default App;
