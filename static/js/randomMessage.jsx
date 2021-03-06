const { Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse,
    Form, FormControl, Nav, Navbar, Spinner, Popover } = ReactBootstrap;


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
                randMsg.innerHTML = `<p></p>
                <p>${response.text}</p>
                    <p>- ${response.author}</p>`;
            });
    }
    return (
        <React.Fragment>
            <Button variant="outline-dark" size="lg" action='/message-generator' className="btn rand-msg" id="randMes" onClick={handleSubmit} method='POST'>Affirmation Generator</Button>
            <span className="" id="randMsg"></span>
        </React.Fragment>
    );
}
