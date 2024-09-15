import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center px-4 md:px-24 py-10 md:py-20'>
        <Home />
      </div>
    </>
  )
}

export default App
