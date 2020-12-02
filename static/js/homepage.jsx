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
    
//   to do: put message generator button directly on homescreen (not linked)
    return (
        <div className="container">
            <h1>Welcome!</h1>
            <nav>
                <Router>
                    <p>
                        <Link to='/subscribe'>Subscribe</Link>
                    </p>
                    <p> 
                        <Link to='/about'>About us</Link>
                    </p>
                    {/* <p>
                        <Link to='/success'></Link>
                    </p> */}
                    {/* <p>
                        <Link to='/confirm-subscription'>verify form</Link>
                    </p> */}
                    <p>
                        <Link to='/unsubscribe'>Unsubscribe</Link>
                    </p>
                    {/* <p>
                        <Link to='/message-generator'>Message Generator</Link>
                    </p> */}
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
                        {/* <Route>
                            <ErrorPage />
                        </Route> */}
                    </Switch> 
                </Router>
            </nav>
            <RandomMessage />
        </div>
    );
}


// ReactDOM.render(
//     <RandomMessage />,
//     document.querySelector('#root')
// );

ReactDOM.render(
    <Homepage />,
    document.querySelector('#root')
);



