const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;
const Redirect = ReactRouterDOM.Redirect;

const { Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse,
    Form, FormControl, Nav, Navbar, Spinner, Popover } = ReactBootstrap;

    
function SuccessSub(props) {

    // document.body.style.background="url('/static/waterfall-lagoon.jpg')";
    // document.body.style.backgroundSize='cover';
    // document.body.style.backgroundRepeat='no-repeat'
    // document.body.style.backgroundAttachment='fixed'
    // document.body.style.backgroundPosition='center top'

    return (
        <Container>
        <div className='default-container'>
            
            <h2>Success! {props.name}'s subscription has been confirmed.</h2>
            <a href='/'>Return to Homepage</a>
            
        </div>
        </Container>
    );
}
// to do: add link back to homepage

ReactDOM.render(
    <SuccessSub />,
    document.querySelector('#root')
);


function SuccessUnsub(props) {

    // document.body.style.background="url('/static/green-lagoon.jpg')";
    // document.body.style.backgroundSize='cover';
    // document.body.style.backgroundRepeat='no-repeat'
    // document.body.style.backgroundAttachment='fixed'
    // document.body.style.backgroundPosition='center top'

    return (
        <Container>
        <div className='default-container'>
            <h2>Success, {props.name} has been unsubscribed. Come back any time!</h2>
            <a href='/'>Return to Homepage</a>
        </div>
        </Container>
    );
}
// to do: add link back to homepage
