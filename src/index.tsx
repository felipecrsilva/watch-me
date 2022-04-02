import { render } from 'react-dom'

import { App } from './App'
import { GenreContextProvider } from './contexts/GenreContext'

render(
  <GenreContextProvider>
    <App />
  </GenreContextProvider>, 
  document.getElementById('root')
)