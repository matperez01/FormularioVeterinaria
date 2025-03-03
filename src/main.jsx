import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style/style.css"

import { Formulario } from './components/Formulario'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formulario/>
  </StrictMode>,
)
