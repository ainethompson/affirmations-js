// """ Generate random message on webpage """

// button 

function RandomMessage() {

    const handleSubmit = (event) => {
        event.preventDefault();

        $.post('/api/message-generator', (res) => {
            const randMsg = $('#randMsg');
            randMsg.html(`<p>${res.text}</p>
            <p>- ${res.author}</p>`);
            console.log(res.text, res.author);
        }
    )}

    return (
        <div>
            <button action='/message-generator' className="btn" id="randMes" onClick={handleSubmit} method='POST'>Button</button>
            <span id="randMsg"></span>
        </div>
    )
}-

ReactDOM.render(
    <RandomMessage />,
    document.querySelector('#root')
);

