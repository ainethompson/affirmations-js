const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;
const Redirect = ReactRouterDOM.Redirect;

const { Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse,
    Form, FormControl, Nav, Navbar, Spinner, Popover } = ReactBootstrap;

    
function SuccessSub(props) {

    return (
        <div>
            <Container className=" d-flex justify-content-center">
                <Card className="transparent-bg text-center">
                    <Card.Body>
            <h3>Success! {props.name}'s subscription has been confirmed.</h3>
            <a href='/'>Return to Homepage</a>
            </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

// ReactDOM.render(
//     <SuccessSub />,
//     document.querySelector('#root')
// );


function SuccessUnsub(props) {


    return (
        <div>
            <Container className=" d-flex justify-content-center">
                <Card className="transparent-bg text-center">
                    <Card.Body>
                    <h3>Success, {props.name} has been unsubscribed. Come back any time!</h3>
            <a href='/'>Return to Homepage</a>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

