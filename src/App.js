import logo from "./logo.svg";
import "./App.css";
import Bookmark from "./components/Bookmark";

import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="cookwithdal_logo.jpg"
              width="60"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          {/* className="me-auto" */}
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Feed</Nav.Link>
            <Nav.Link href="#features">Planner</Nav.Link>
            <Nav.Link href="#pricing">Shopping List</Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
            <Nav.Link href="#profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <br />
      <Bookmark bookmarkState={false} bookmarkImageSrc={"unselected.jpg"} />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
