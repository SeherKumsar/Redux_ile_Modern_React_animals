function App () {
    const handleMouseMove = () => {
        console.log('Button was clicked!')
    };

  return (
    <div>
      <button onMouseMove={handleMouseMove}>Add Animal</button>
    </div>
  );
}

export default App;