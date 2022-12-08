import { useState } from "react";
import reactLogo from "./assets/react.svg";

function maxElfCalories(props) {
  props.preventDefault();
  const input = props.target.day1Inputter.value;
  const calLists = input.split('\n\n').map(list => list.split('\n').reduce((sum, num) => sum+=Number(num), 0))
  document.getElementById('day1Output').innerText = Math.max(...calLists)
  console.log(calLists)
  console.log(Math.max(...calLists))
}

function App() {
  const [day1Input, setDay1Input] = useState("")

  return (
    <>
      <h1>Advent of Code</h1>
      <section>
        <h2>Day 1</h2>
        <form onSubmit={maxElfCalories}>
          <label htmlFor="day1Inputter">Calorie List: </label>
          <textarea name="day1Inputter" id="day1Inputter" cols="30" rows="10"></textarea>
          <button type="submit">Submit</button>
        </form>
        <p>Max calories: <span id="day1Output"></span> </p>
      </section>
    </>
  );
}

export default App;
