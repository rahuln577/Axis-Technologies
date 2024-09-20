import { Outlet } from "react-router-dom"
import Footer from "./Sections/Footer"
import Navbar from "./Sections/Landing/Navbar"

const App = () => {
  return (
    <>
      {/*<Navbar/>*/}
      <Outlet/>
      <Footer/>
      {/* <Home/> */}
    </>
  )
}

export default App
