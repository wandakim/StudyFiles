import React from 'react';

function Potato({ name }) {
  return <h1>I like {name}</h1>;
}

function App() {
  return (
  <div>
    <h1>hello!!!!</h1>
    <Potato name = "bigpo"/>
    <Potato name = "smallpo"/>
    <Potato name = "midpo"/>
    <Potato name = "illpo"/>
    <Potato name = "gimpo"/>
  </div>  
  );
}

// JSX is HTML +JavaScript. 
// components start with upper case. 
// we can pass an information to componants.
// props.

export default App;
