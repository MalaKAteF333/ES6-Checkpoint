// App.js
import React from 'react';
import { Navbar, Container, Nav, Card }
from 'react-bootstrap';

function App() {
    return (
        <>
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand
                    href="#home">Navbar</Navbar.Brand>
                    <Nav className="me=auto">
                        <Nav.Link
                        href="#home">Home</Nav.Link>
                        <Nav.Link
                        herf="#features">Features</Nav.Link>
                        <Nav.Link
                        href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <h1>Welcome to React Bootstrap</h1>
                <Card style={{ width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Card</Card.Title>
                        <Card.Text>
                            This is a sample card.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <card style={{ width: ;18rem}}>
                    <Card.Body>
                        <Card.Text>Thus is anthor sample card.</Card.Text>
                    </Card.Body>
                </card>
            </Container>
        </div>
        </>
    )
}