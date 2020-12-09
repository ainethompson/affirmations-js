const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Prompt = ReactRouterDOM.Prompt;
const Switch = ReactRouterDOM.Switch;
const Redirect = ReactRouterDOM.Redirect;
const Autocomplete = React;
const { Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse,
    Form, FormControl, Nav, Navbar, Spinner, Popover } = ReactBootstrap;

function Navigation() {

    return (
        <div>
            <Router>
                <Container className="d-flex justify-content-center">
                    <Navbar sticky="top" className="navbar-inverse">
                        <Navbar.Brand className="navbar-brand" href="/">Spark Your Day ✨</Navbar.Brand>

                        <Nav activeKey="/" className="navbar-nav" fill variant="tabs">

                            <Nav.Item className="navbar-center" href='/subscribe'>
                                <Nav.Link as={Link} eventKey="link-1" to='/subscribe'>Subscribe</Nav.Link>
                            </Nav.Item>
                            <Nav.Item href='/about'>
                                <Nav.Link as={Link} eventKey="link-2" to='/about'>About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item href='/unsubscribe'>
                                <Nav.Link as={Link} eventKey="link-3" to='/unsubscribe'>Unsubscribe</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </Container>
                <Switch>
                    <Route path='/subscribe'>
                        <Subscribe />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/success'>
                        <SuccessSub />
                    </Route>
                    <Route path='/message-generator'>
                        <RandomMessage />
                    </Route>
                    <Route path='/unsubscribe'>
                        <Unsubscribe />
                    </Route>
                    <Route path='/confirm-subscription'>
                        <VerifySub />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                    <Route path='/error'>
                            <ErrorPage />
                        </Route>
                </Switch>
            </Router>
        </div>
    );
}

ReactDOM.render(
    <Navigation />,
    document.querySelector('#root')
);
