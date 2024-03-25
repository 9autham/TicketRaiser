import "./App.css";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tickets from "./components/Tickets";
import ErrorPage from "./ErrorPage";
import TestComp from './components/TestComp'
import ContactUs from './components/ContactUs'
import Users from './components/Users'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/tickets" element={<Tickets/>}></Route>
        <Route path="/test" element={<TestComp/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/prediction" element={<Users/>}></Route>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
