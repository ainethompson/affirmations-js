const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Prompt = ReactRouterDOM.Prompt;
const Switch = ReactRouterDOM.Switch;
const Redirect = ReactRouterDOM.Redirect;
const Autocomplete = React;
const { Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse,
    Form, FormControl, Nav, Navbar, Spinner, Popover } = ReactBootstrap;


function Homepage() {

    return (
        <div>
            <Router>
                <Container>
                    <Navbar sticky="top">
                        <Nav activeKey="/" className="justify-content-center" justify fill variant="tabs">
                            <Nav.Item href='/subscribe'>
                                <Nav.Link as={Link} eventKey="link-1" to='/subscribe'>Subscribe</Nav.Link>
                            </Nav.Item>
                            <Nav.Item href='/about'>
                                <Nav.Link as={Link} eventKey="link-2" to='/about'>About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item href='/unsubscribe'>
                                <Nav.Link as={Link} eventKey="link-3" to='/unsubscribe'>Unsubscribe</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </Container>
                {/* <h1 className="header">Welcome!</h1> */}
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
                    {/* <Route path='/'>
                            <Homepage />
                        </Route> */}
                    <Route path='/confirm-subscription'>
                        <VerifySub />
                    </Route>
                    {/* <Route path='/error'>
                            <ErrorPage />
                        </Route> */}
                </Switch>
            </Router>
            <div className="container">
                <RandomMessage />
            </div>
        </div>
    );
}

ReactDOM.render(
    <Homepage />,
    document.querySelector('#root')
);
