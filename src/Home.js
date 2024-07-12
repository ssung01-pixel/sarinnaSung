import { useState } from "react";


const Home = () => {
  useState('mario');
  const handleClick = () => {

  };

  return (
    <div className="Home">
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default Home;
