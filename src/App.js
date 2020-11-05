import { useState } from 'react'

import Header from './components/Header/header.component'
import CardContainer from './components/CardContainer/cardcontainer.component'

import './styles/toggler.style.scss'

function App() {
  const [isWholeNorway, setIsWholeNorway] = useState(false)

  return (
    <div>
      <Header isWholeNorway={isWholeNorway} />
      <div className='toggle-norway'>
        <h3>Vis tiltak for</h3>
        <div className='toggle-norway-toggler'>
          <div className='toggler-option'>Oslo</div>
          <div className='toggler-option'>Norge</div>
        </div>
      </div>
      <CardContainer isWholeNorway={isWholeNorway} />
    </div>
  )
}

export default App
