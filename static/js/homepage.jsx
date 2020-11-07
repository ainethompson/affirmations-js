
// import "subscribe.jsx";

function Homepage() {
    return (
        <div>
            <h1>Welcome!</h1>
            <nav>
                <ReactRouterDOM.BrowserRouter>
                    <p>
                        <ReactRouterDOM.Link to='/subscribe'>Subscribe</ReactRouterDOM.Link>
                    </p>
                    <p>
                        <ReactRouterDOM.Link to='/about'>About us</ReactRouterDOM.Link>
                    </p>
                    <ReactRouterDOM.Switch>
                        <ReactRouterDOM.Route path='/subscribe'>
                            <Subscribe />
                        </ReactRouterDOM.Route>
                        <ReactRouterDOM.Route path='/about'>
                            <About />
                        </ReactRouterDOM.Route>
                    </ReactRouterDOM.Switch> 
                </ReactRouterDOM.BrowserRouter>
            </nav>
        </div>
    );
}



ReactDOM.render(
    <Homepage />,
    document.querySelector('#root')
);

// Form from subscribe.html