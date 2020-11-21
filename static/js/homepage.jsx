

function Homepage() {
    // ReactDOM.render(
    //     <RandomMessage />,
    //     document.querySelector('#root')
    // );
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
                    <p>
                        <ReactRouterDOM.Link to='/unsubscribe'>Unsubscribe</ReactRouterDOM.Link>
                    </p>
                    <p>
                        <ReactRouterDOM.Link to='/message-generator'>Message Generator</ReactRouterDOM.Link>
                    </p>
                    <ReactRouterDOM.Switch>
                        <ReactRouterDOM.Route path='/subscribe'>
                            <Subscribe />
                        </ReactRouterDOM.Route>
                        <ReactRouterDOM.Route path='/about'>
                            <About />
                        </ReactRouterDOM.Route>
                        <ReactRouterDOM.Route path='/success'>
                            <SuccessSub />
                        </ReactRouterDOM.Route>
                        <ReactRouterDOM.Route path='/message-generator'>
                            <RandomMessage />
                        </ReactRouterDOM.Route>
                        <ReactRouterDOM.Route path='/unsubscribe'>
                            <Unsubscribe />
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

