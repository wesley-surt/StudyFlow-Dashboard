import { useState } from 'react'
import './App.css'
import './css-bootstrap-custom/card.css'
import SimpleDonutChart from './view/SimpleDonutChart.jsx';
import AddNewSubject from './view/cards/AddNewSubject.jsx';
import GoalCalculator from './view/cards/GoalCalculator.jsx';
import SessionCards from './view/SessionCards.jsx';
import { lessonsDataBase } from './DataBase.jsx';
import { motivationalPhrases } from './DataBase.jsx';


export default function App() {
  const [lessons, setLessons] = useState(lessonsDataBase);

  return (
    <>
      <div className='text-start' style={{color: '#EFF0F4'}}>
        <p className='fs-1 m-0 mb-3'>Olá, Funalo! 👋</p>
        <p className='mb-4'>{motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)]}</p>
      </div>

      <div className='d-flex flex-column gap-5'>
        <SimpleDonutChart subjects={lessons} />

        <div className="d-flex row flex-wrap justify-content-between gy-5">
          <AddNewSubject lessons={lessons} setLessons={setLessons} />
          <GoalCalculator lessons={lessons} />
        </div>

        <div className="d-flex justify-content-center my-4">
          <SessionCards lessons={lessons} setLessons={setLessons} />
        </div>
      </div>
    </>
  )
}