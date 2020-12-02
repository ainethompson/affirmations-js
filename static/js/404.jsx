

function ErrorPage() {
    return (
        <div>
            <h1>Error. Page was not found.</h1>
        </div>
    );
}

ReactDOM.render(
    <ErrorPage />,
    document.querySelector('#root')
);