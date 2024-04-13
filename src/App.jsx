import './App.css'
import HeroSection from './components/Hero/HeroSerction'
import Navbar from './components/Hero/Navbar'

function App() {

  return (
    <>


      <div className='main-h-screen  overflow-hidden'>

        <div className='max-w-7xl mx-auto p-5'>

          <Navbar></Navbar>
          <HeroSection></HeroSection>
        </div>


      </div >


    </>
  )
}

export default App
