
import './App.css'
import { Navbar, Hero } from './components' 

function App() {

  return (
  <>
  
  <div className="w-full px-6 flex justify-center items-center">
    <div className="xl:max-w-[1280px] w-full">
      <Navbar />
    </div>
  </div>

  <div className="w-full px-6 flex justify-center items-center">
    <div className="xl:max-w-[1280px] w-full">
      <Hero />
    </div>
  </div>
      
  </>

  )
      
    
}

export default App
