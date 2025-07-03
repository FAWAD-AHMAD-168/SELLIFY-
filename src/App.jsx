import React from 'react'
import  Login  from './components/auth/Login.jsx' 
import "../src/output.css"
import Admin from './pages/Admin.jsx'
import Signup from './components/auth/Signup.jsx'


const App = () => {
  return (

    <div> 
      <Login />
      <Signup />
      <Admin />

</div>
   

  )
}

export default App