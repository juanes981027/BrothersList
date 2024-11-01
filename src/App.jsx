import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import BrothersList from './views/BothersList/BrothersList'
import MonthlyReport from './views/MonthlyReport/MonthlyReport'
import UnderConstruction from './views/UnderConstruction/UnderConstruction'

function App()
{


  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<BrothersList />} />
          <Route path='/brothers-list' element={<BrothersList />} />
          <Route path='/monthly-report' element={<UnderConstruction />} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
