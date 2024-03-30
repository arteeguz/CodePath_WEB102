import { useState } from 'react'
import BaristaForm from './components/BaristaForm'
import './App.css'

function App() {


  return (
    <>
    <div>
    <div class="title-container">
      <h1 class="title">On My Grind</h1>
      <p>"So you think you can barista? Let's put that to the test...</p>
    </div>
    <BaristaForm />
    </div>
    <div>
      <form>
        
      </form>

      <button type="submit" className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>

      <button
        type = "new-drink-button"
        className = "button newdrink"
        onClick = {onNewDrink}
        >
          New Drink
      </button>
    </div>
    </>
  )
}

export default App
