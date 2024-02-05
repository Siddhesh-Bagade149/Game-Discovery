import { useState } from 'react'

import './App.css'
import GameCard from '../components/GameCard'
import { Grid } from '@mui/material'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Grid container spacing={2}>
        <GameCard
          name='Witcher 3'
          imageUrl='	https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
          score='9'
        />
        <GameCard
          name='Witcher 3'
          imageUrl='	https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
          score='9'
        />
        <GameCard
          name='Witcher 3'
          imageUrl='	https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
          score='9'
        />
        
      </Grid>
    </div>
  )
}

export default App
