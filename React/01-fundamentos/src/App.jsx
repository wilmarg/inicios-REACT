import { useState, Fragment } from "react";

import "./App.css"


const App = () => {

  const [count, setCount] = useState(0);

  /* setTimeout(() => {
    setCount(count + 1);
  }, 1000); */

  const handleAdd = () =>{
    setCount(count + 1);
  };

  const handleSubstract = () =>{
    setCount(count - 1);
  };

  const handleReset = () =>{
    setCount(0);
  };

  return(
      <Fragment>
        <div className="container">
          <h1>Counter: { count }</h1>
          <h2>{ new Date().toLocaleDateString() }</h2>
          <hr />
          <button onClick={handleAdd}>+</button>
          <button onClick={handleReset}>reset</button>
          <button onClick={handleSubstract}>-</button>
        </div>
      </Fragment>

      // <> contenido.... </> esta es una forma simple y facil de usar los Fragment, y así no es necesario importar 
    );

};

export default App;