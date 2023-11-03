import { useState } from 'react'
import {Nombre} from './componentes/nombre'
import {Parrafo} from './componentes/parrafo'
import {Boton} from './componentes/boton'
import {Boton2} from './componentes/boton2'
import {Perfil} from './componentes/perfil'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className='contenedor'>
        <Perfil></Perfil>
      <Nombre></Nombre>
      <Parrafo></Parrafo>
      <Boton></Boton>
      <Boton2></Boton2>

      </div>
      </>
  );
  }
export default App
