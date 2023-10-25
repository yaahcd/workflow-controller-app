import { Route, Routes } from "react-router-dom"
import SignIn from "./components/signIn/SignIn"
import HomePage from "./components/homePage/HomePage"
import Navbar from './components/navbar/Navbar'
import EmployeesList from "./components/employeesList/EmployeesList"
import SingleEmployee from "./components/singleEmployee/SingleEmployee"
import './App.css'

function App() {


  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="home" element={<Navbar />}>
        <Route index element={<HomePage />}/>
        <Route path="employees" element={<EmployeesList />}/>
        <Route path="employees/:employee" element={<SingleEmployee />}/>
      </Route>
    </Routes>
  )
}

export default App
