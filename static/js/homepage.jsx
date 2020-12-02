const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Prompt = ReactRouterDOM.Prompt;
const Switch = ReactRouterDOM.Switch;
const Redirect = ReactRouterDOM.Redirect;
const Autocomplete = React;
const {Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse, 
	Form, FormControl, Nav, Navbar, Spinner, Popover } = ReactBootstrap;

// const Navigation = {
//     true: (
//     <Navbar sticky="top" bg="light" expand="lg">



//     </Navbar>
// }


function Homepage() {

    return (
        <div className="container" width="100vw" height="vh">
            {/* <nav className="header"> */}
            <Router>
                <Navbar>
                    <Nav.Item href='/subscribe'><Nav.Link as={Link} to='/subscribe'>Subscribe</Nav.Link></Nav.Item>
                    <Nav.Item href='/about'><Nav.Link as={Link} to='/about'>About Us</Nav.Link></Nav.Item>
                    <Nav.Item href='/unsubscribe'><Nav.Link as={Link} to='/unsubscribe'>Unsubscribe</Nav.Link></Nav.Item>
                </Navbar>
                    <h1 className="header">Welcome!</h1>
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
            {/* // </nav> */}
            <RandomMessage />
        </div>
    );
}

ReactDOM.render(
    <Homepage />,
    document.querySelector('#root')
);
