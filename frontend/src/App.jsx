import { useState } from 'react'

import './App.css'
import GameCard from '../components/GameCard'
import { Grid } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <Grid container spacing={2}>
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </Grid>

  </div>
}

export default App
