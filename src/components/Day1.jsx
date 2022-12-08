function maxElfCalories(props) {
    props.preventDefault();
    const input = props.target.day1Inputter.value;
    const calLists = input.split('\n\n').map(list => list.split('\n').reduce((sum, num) => sum+=Number(num), 0))
    const topCals = [0,0,0]
    for(let num of calLists) {
      if(num > topCals[2]) {
        topCals.pop()
        if(num > topCals[1]) {
          if(num > topCals[0]) {
            topCals.unshift(num)
          } else {
            topCals.splice(1, 0, num)
          }
        } else {
          topCals.push(num)
        }
      }
    }
  
    document.getElementById('maxCals').innerText = topCals[0]
    document.getElementById('max3Cals').innerText = topCals.reduce((sum, num) => sum+num)
  }

export default function Day1() {
  return (
    <section>
      <h2>Day 1</h2>
      <form onSubmit={maxElfCalories}>
        <label htmlFor="day1Inputter">Calorie List: </label>
        <textarea
          name="day1Inputter"
          id="day1Inputter"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <p>
        Max calories: <span id="maxCals"></span>{" "}
      </p>
      <p>
        Max 3 calories total: <span id="max3Cals"></span>{" "}
      </p>
    </section>
  );
}
