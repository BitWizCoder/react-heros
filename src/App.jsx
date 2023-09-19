import './App.css'
import Cards from './daisy-components/Cards'
import Hero from './daisy-components/Hero'


function App() {

  return (
    <div className='container mx-auto'>
      <h1 className='text-center mt-4 text-4xl font-semibold text-violet-400'>React with tailwind and daisyUI</h1>
      <Hero />
      <Cards />
    </div>
  )
}

export default App
