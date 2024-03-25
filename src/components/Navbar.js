import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import Logo from "../logo.svg";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function TextLinkExample() {
const notify = () => toast.success("Success");
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/">
          <img src={Logo} className="App-logo" height={50} width={50} alt="Logo"/>
          Halley
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <NavLink to="/" className="container" onClick={notify}>
              Home
            </NavLink>
          </Navbar.Text>
          <Navbar.Text>
            <NavLink to="/about" className="container" onClick={notify}>
              About
            </NavLink>
          </Navbar.Text>
          <Navbar.Text>
            <NavLink to="/tickets" className="container" onClick={notify}>
              TicketsPending
            </NavLink>
          </Navbar.Text>
          <Navbar.Text>
            <NavLink to="/prediction" className="container" onClick={notify}>
              Predictions
            </NavLink>
          </Navbar.Text>
          <Navbar.Text>
            <NavLink to="/contact" className="container" onClick={notify}>
              ContactUs
            </NavLink>
          </Navbar.Text>
          <Navbar.Text>
            <Profile />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      <ToastContainer position="bottom-left"/>
    </Navbar>
  );
}

export default TextLinkExample;