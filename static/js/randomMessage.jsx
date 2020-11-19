// """ Generate random message on webpage """

// button 

function RandomMessage() {

    $.post('/message-generator', (res) => {

    })

    const handleSubmit = (event) => {
        event.preventDefault();


    }

    // ajax to get result from flask
    // on click, ajax get result from flask route

    return (
        <div>
            <button className="btn" id="rand-msg" onClick={handleSubmit}>Random Message Generator</button>
        </div>
    )
}


ReactDOM.render(
    <RandomMessage />,
    document.querySelector('#root')
);

