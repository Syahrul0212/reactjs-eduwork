import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/home">Eduwork</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="me-3" to="/home">Home</Link>
            <Link className="me-3" to="/berita">Berita</Link>
            <Link to="/form">Form</Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
}

export default App;
