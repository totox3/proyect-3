import { useState } from 'react'
import SearchBar from './ componets/SearchBar'
import imageList from '/.componets/imageList'
import SearchImage from './api'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <h1> App</h1>
       <SearchBar onsubmit={handleSubmit} />
      </div>
     

  )
}

export default App
