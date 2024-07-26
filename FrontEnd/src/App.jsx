import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  useState(() => {
    axios
      .get("api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log("Fetching Error");
      });
  });

  return (
    <>
      <h1>My FullStack Website</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;
