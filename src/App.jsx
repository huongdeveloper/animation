import Banner from "./Components/Banner/Banner"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import "./App.scss";
import Explore from "./Components/Explore/Explore";
const App = () => {
  return (
    <div className="App-Animation container px-0 overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navbar />
      <Banner />
      <Explore />
      <Footer />
    </div>
  )
}

export default App
