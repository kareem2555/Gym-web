import Hero from "./assets/Hero/Hero";
import Workout from "./assets/Workount/Workout";
import Genertaor from "./assets/Generator/Genertaor";
import { useState } from "react";
import { generateWorkout } from "./utils/Functions";

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState(`individual`);
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState(`strength_power`);

  function updateWorkout() {
    if (muscles.length === 0) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkout(newWorkout);
    window.location.href = `#workout`;
  }

  return (
    <main
      className="min-h-screen flex flex-col bg-gradient-to-r 
    from-slate-800 to-slate-950 text-white text-sm sm:text-base"
    >
      <Hero />
      <Genertaor
        poison={poison}
        muscles={muscles}
        goal={goal}
        setPoison={setPoison}
        setMuscles={setMuscles}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
