import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import { Toaster } from 'sonner'
import './index.css'
import { MemoHook } from './06-memos/MemoHook'
import { ClientInformation } from './08-use-suspense/ClientInformation'
import { getUserAction } from './08-use-suspense/api/get-user.action'
// import { InstagramApp } from './07-useOptimistic/InstagramApp'
//import { TrafficLight } from './01-useState/TrafficLight'

//import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
//import { PokemonPage } from './03-examples/PokemonPage'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { TasksApp } from './05-useReducer/TasksApp'
//import { ScrambleWords } from './05-useReducer/ScrambleWords'
//import { ProfessionalApp } from './09-useContext/ProfessionalApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Toaster /> */}
    <Suspense fallback={<p className="text-white text-2xl">Loading...</p>}>
      <ClientInformation getUser={getUserAction(1000)} ></ClientInformation>
    </Suspense>
    {/* <InstagramApp /> */}
  </StrictMode>,
)
