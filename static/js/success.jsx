

function SuccessSub(props) {
    return (
        <div>
            <h1>Success! {props.name} is now subscribed.</h1>
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
            <p>Success. {props.name} has been unsubscribed. Come back any time!</p>
        </div>
    );
}

ReactDOM.render(
    <SuccessUnsub />,
    document.querySelector('#root')
);
