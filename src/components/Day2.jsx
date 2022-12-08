export default function Day2() {
  function calcRPS(props) {
    props.preventDefault();
    const input = props.target.day2Inputter.value;
    const strats = input.split("\n");

    // part 1
    const shapePoints1 = { X: 1, Y: 2, Z: 3 };
    const winTable1 = { A: "Y", B: "Z", C: "X" };
    const loseTable1 = {A: 'Z', B: 'X', C: 'Y'};
    const outcomePoints1 = {L: 0, D:3, W:6};

    // part 2
    const outcomePoints2 = {X: 0, Y: 3, Z: 6};
    const drawPoints = {A: 1, B: 2, C: 3}
    const winPoints = {A: 2, B: 3, C: 1}
    const losePoints = {A: 3, B: 1, C: 2}

    const points2 = strats.reduce((sum, strat) => {
        const opponent = strat[0]
        const outcome = strat[2]
        sum += outcomePoints2[outcome]
        if(outcome === 'X') sum += losePoints[opponent]
        else if(outcome ==='Y') sum += drawPoints[opponent]
        else sum += winPoints[opponent]

        return sum
    }, 0)

    const points = strats.reduce((sum, strat) => {
        const opponent = strat[0]
        const play = strat[2]
        sum += shapePoints1[play]
        if(winTable1[opponent] === play) sum += outcomePoints1['W']
        else if(loseTable1[opponent] === play) sum += outcomePoints1['L']
        else sum += outcomePoints1['D']
        return sum
    }, 0)
    document.getElementById('stratGuideScore1').innerText = points
    document.getElementById('stratGuideScore2').innerText = points2
  }

  return (
    <section>
      <h2>Day 2</h2>
      <form onSubmit={calcRPS}>
        <label htmlFor="day2Inputter">Strategy: </label>
        <textarea
          name="day2Inputter"
          id="day2Inputter"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <p>Strat Guide Score (xyz = shapes): <span id="stratGuideScore1"></span> </p>
      <p>Strat Guide Score (xyz = win/lose): <span id="stratGuideScore2"></span> </p>
    </section>
  );
}
