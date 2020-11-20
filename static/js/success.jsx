
// to do: convert flask session variable to react variable to display name
// use ajax to get name
function Success(props) {
    // $.get('/get-name', (res) => {
    //     $('#firstName').html(res);
    // });
    console.log(props)
    return (
        <div>
            <h1>Success! {props.name} is now subscribed</h1>
        </div>
    )
}

ReactDOM.render(
    <Success />,
    document.querySelector('#root')
);



// learn how to implement sessions with react