import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import { MemoHook } from './06-memos/MemoHook'
import { InstagramApp } from './07-useOptimistic/InstagramApp'
//import { TrafficLight } from './01-useState/TrafficLight'

//import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
//import { PokemonPage } from './03-examples/PokemonPage'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { TasksApp } from './05-useReducer/TasksApp'
//import { ScrambleWords } from './05-useReducer/ScrambleWords'
//import { ProfessionalApp } from './09-useContext/ProfessionalApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InstagramApp />
  </StrictMode>,
)
