// """ Generate random message on webpage """

// button 

function RandomMessage() {

    const handleSubmit = (event) => {
        event.preventDefault();

        $.post('/api/message-generator', (res) => {
            const randMsg = $('#randMsg');
            randMsg.html(`<p>${res.text}</p>`);
            console.log(res.text);
        }
    )}
    // on click, ajax get result from flask route

    return (
        <div>
            <button className="btn" id="randMsg" onClick={handleSubmit} method='POST'>Button</button>
            <span id="randMsg"></span>
        </div>
    )
}


ReactDOM.render(
    <RandomMessage />,
    document.querySelector('#root')
);

