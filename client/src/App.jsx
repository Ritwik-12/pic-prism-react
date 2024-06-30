
import { BrowserRouter} from 'react-router-dom'
import GsapTransition from './Components/GsapTransition'
import Navbar from "./Components/Navbar"

function App() {


  return ( 
    <>
       <BrowserRouter>
       <Navbar/>
         <GsapTransition/>
       </BrowserRouter>
    </>
  )
}

export default App
