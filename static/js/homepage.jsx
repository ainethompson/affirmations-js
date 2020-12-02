const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Prompt = ReactRouterDOM.Prompt;
const Switch = ReactRouterDOM.Switch;
const Redirect = ReactRouterDOM.Redirect;
const Autocomplete = React;
const {Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse, 
	Form, FormControl, Nav, Navbar, Spinner, Popover } = ReactBootstrap;


function Homepage() {

    return (
        <div className="container">
            <h1>Welcome!</h1>
            <nav className="header">
                <Router>
                    <p>
                        <Link to='/subscribe'>Subscribe</Link>
                    </p>
                    <p> 
                        <Link to='/about'>About us</Link>
                    </p>
                    <p>
                        <Link to='/unsubscribe'>Unsubscribe</Link>
                    </p>
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
                        <Route path='/'>
                            <Homepage />
                        </Route>
                        <Route path='/confirm-subscription'>
                            <VerifySub />
                        </Route>
                        {/* <Route path='/error'>
                            <ErrorPage />
                        </Route> */}
                    </Switch> 
                </Router>
            </nav>
            <RandomMessage />
        </div>
    );
}

ReactDOM.render(
    <Homepage />,
    document.querySelector('#root')
);



