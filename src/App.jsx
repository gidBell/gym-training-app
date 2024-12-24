import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './Utils/functions'



function App() {
  const [workout, setWorkout] = useState(null)
  const [routine, setRoutine] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('power_lifting')

  const updateWorkout = () => {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({ routine, muscles, goal })
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }


  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-red-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator
        routine={routine}
        setRoutine={setRoutine}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
