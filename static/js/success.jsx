

function Success(props) {
    
    return (
        <div>
            <h1>Success! {props.name} is now subscribed.</h1>
        </div>
    );
}

// to do: add link back to homepage

ReactDOM.render(
    <Success />,
    document.querySelector('#root')
);



