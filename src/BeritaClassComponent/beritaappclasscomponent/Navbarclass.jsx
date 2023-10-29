import { Component } from "react";
import { Navbar, Container, FormControl } from "react-bootstrap";

class Navbarclass extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { searchQuery, setSearchQuery } = this.props;

    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Berita App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
              type="text"
              placeholder="Search articles..."
              className="mr-sm-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navbarclass;
