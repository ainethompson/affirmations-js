const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;
const Redirect = ReactRouterDOM.Redirect;

function SuccessSub(props) {
    return (
        <div>
            <h2>Success! {props.name}'s subscription has been confirmed.</h2>
            <a href='/'>Return to Homepage</a>
        </div>
    );
}
// to do: add link back to homepage

ReactDOM.render(
    <SuccessSub />,
    document.querySelector('#root')
);


function SuccessUnsub(props) {

    return (
        <div>
            <p>Success, {props.name} has been unsubscribed. Come back any time!</p>
            <a href='/'>Return to Homepage</a>
        </div>
    );
}
// to do: add link back to homepage

ReactDOM.render(
    <SuccessUnsub />,
    document.querySelector('#root')
);
