

function SuccessSub(props) {
    return (
        <div>
            <h2>Success! {props.name} is now subscribed.</h2>
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
// to do: add link back to homepage

ReactDOM.render(
    <SuccessUnsub />,
    document.querySelector('#root')
);
