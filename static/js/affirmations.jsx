
function Homepage() {
    return (
        <div>
            <h1>Welcome!</h1>
            <nav>
                <p><a href='/subscribe'>Subscribe</a></p>
                <p><a href='/about'>About us</a></p>
            </nav>
        </div>
    );
}

function Subscribe() {

}


ReactDOM.render(
    <Homepage />,
    document.querySelector('#root')
)

// Form from subscribe.html