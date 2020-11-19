
// to do: convert flask session variable to react variable to display name
// use ajax to get name
function Success() {

    return (
        <h1>Success! {firstName} is now subscribed</h1>
    )
}

ReactDOM.render(
    <Success />,
    document.querySelector('#root')
);



// learn how to implement sessions with react