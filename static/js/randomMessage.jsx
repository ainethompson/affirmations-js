// """ Generate random message on webpage """

// button 

function RandomMessage() {

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('/api/message-generator', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then(response => response.json())
            .then(function (response) {
                const randMsg = document.getElementById('randMsg');
                randMsg.innerHTML = `<p>${response.text}</p>
                    <p>- ${response.author}</p>`;
            });
    }
    return (
        <div>
            <button action='/message-generator' className="btn" id="randMes" onClick={handleSubmit} method='POST'>Button</button>
            <span id="randMsg"></span>
        </div>
    );
}

ReactDOM.render(
    <RandomMessage />,
    document.querySelector('#root')
);

