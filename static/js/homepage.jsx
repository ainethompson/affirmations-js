

function Homepage() {
    return (
        <div className="container">
            <h1>Welcome!</h1>
            <nav>
                <ReactRouterDOM.BrowserRouter>
                    <p>
                        <ReactRouterDOM.Link to='/subscribe'>Subscribe</ReactRouterDOM.Link>
                    </p>
                    <p>
                        <ReactRouterDOM.Link to='/about'>About us</ReactRouterDOM.Link>
                    </p>
                    <p>
                        <ReactRouterDOM.Link to='/success'></ReactRouterDOM.Link>
                    </p>
                    <ReactRouterDOM.Switch>
                        <ReactRouterDOM.Route path='/subscribe'>
                            <Subscribe />
                        </ReactRouterDOM.Route>
                        <ReactRouterDOM.Route path='/about'>
                            <About />
                        </ReactRouterDOM.Route>
                        <ReactRouterDOM.Route path='/success'>
                            <Success />
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

