import React from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../Utils/swoldier'
import { useState } from 'react'
import Button from './Button'

const Header = (props) => {
  const { index, title, description } = props
  return (
    <div className='flex flex-col gap-4 '>
      <div className='flex justify-center items-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-red-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator(props) {
  const { routine, setRoutine, muscles, setMuscles, goal, setGoal, updateWorkout } = props
  const [showModal, setShowModal] = useState(false)

  // let showModal = false
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const updateMuscles = (muscleGroup) => {

    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }

    if (muscles.length > 2) {
      return
    }

    if (routine !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
      setShowModal(false)
    }
  }

  return (
    <SectionWrapper id={'generate'} header={'generate your workout'} title={['It\s', 'Huge', 'o\'clock']}>

      <Header index={'01'} title={'Pick your routine'} description={'Select the workout program you would like to engage in.'} />

      <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button onClick={() => {
              setMuscles([])
              setRoutine(type)
            }} className={'bg-slate-800 border rounded-lg duration-200 px-4 hover:border-red-600 py-4 ' + (type === routine ? 'border-red-600' : 'border-red-400')} key={typeIndex}><p className='capitalize'>{type.replaceAll('_', " ")}</p></button>
          )
        })}
      </div>

      <Header index={'02'} title={'Lock on targets'} description={'Select the muscle you want to build.'} />

      <div className='bg-slate-800 border border-solid border-red-400 rounded-lg flex flex-col'>
        <button onClick={toggleModal} className='relative py-4 flex items-center justify-center'>
          <p className='capitalize'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
          <i className="fa-solid absolute right-3 top-1/2-translate-y-1/2 fa-circle-down"></i>
        </button>
        {showModal && (
          <div className='flex flex-col p-3'>
            {(routine === 'individual' ? WORKOUTS[routine] : Object.keys(WORKOUTS[routine])).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button onClick={() => {
                  updateMuscles(muscleGroup)
                }} key={muscleGroupIndex} className={'hover:text-red-400 duration-200 ' + (muscles.includes(muscleGroup) ? 'text-red-400' : '')}>
                  <p className='uppercase'>{muscleGroup.replaceAll('_', '')}</p>
                </button>
              )
            })}
          </div>
        )}
      </div>

      <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective.'} />

      <div className='grid grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button onClick={() => {
              setGoal(scheme)
            }} className={'bg-slate-800 border rounded-lg duration-200 hover:border-red-600 py-4 px-4 ' + (scheme === goal ? 'border-red-600' : 'border-red-400')} key={schemeIndex}><p className='capitalize'>{scheme.replaceAll('_', "")}</p></button>
          )
        })}
      </div>
      <Button func={updateWorkout} text={'Generate'}></Button>

    </SectionWrapper>

  )
}
