import './App.scss'
import Home from './components/Home'
import About from './components/About'
import CustomCursor from "./components/CustomCursor";
import NavBar from './components/NavBar';


function App() {

  return (
    <>
      <CustomCursor/>
      <NavBar/>
      <section className='bg' id='home'><Home/></section>
      <section className='bg' id='about'><About/></section>
      <section className='bg' id='project'>Projects</section>
      <section className='bg' id='skills'>Skills</section>
      <section className='bg' id='contact'>Contact</section>
      <section className='bg' id='snaps'>Snaps</section>
    </>
  )
}

export default App
