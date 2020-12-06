const { Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse,
    Form, FormControl, Nav, Navbar, Spinner, Popover } = ReactBootstrap;

function VerifySub(props) {

    const [inputCode, setInputCode] = React.useState({ value: '' });

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setInputCode(previousData => ({ ...previousData, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const values = {
            inputCode: document.getElementById('inputCode').value,
            phoneNum: props.phoneNum,
            name: props.name
        };

        fetch('/api/confirm-subscription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        })
            .then(response => response.json())
            .then(function (response) {
                if (response.code === "SUCCESS") {
                    ReactDOM.render(
                        <SuccessSub name={response.msg} />,
                        document.getElementById('root'))
                } else {
                    const confirmStatus = document.getElementById('confirmStatus');
                    confirmStatus.innerHTML = `<p>${response.msg}</p>`;
                }
            })
        // .catch(error => console.log('ERROR'));
    }

    return (
        <div>
            <Container className="justify-content-center">
                <Card className="transparent-bg text-center">
                    <Card.Body>
                    <Form className='form-group form-horizontal' action='/confirm-subscription' method='POST' onSubmit={handleSubmit}>
                    <div>
                        <p>You should receive a text with a confirmation code momentarily.</p>
                        <Form.Label inline="true">
                            Please enter the 4 digit code:
                    <input type="text" className="form-control" id="inputCode" name="inputCode" placeholder="1234" onChange={handleChange} />
                        </Form.Label>
                    </div>
                    <input type="submit" className="btn btn-primary mb-2" value="Submit" />

                    <div id="confirmStatus" ></div>
                </Form>
                    </Card.Body>
                </Card>
                
            </Container>
        </div>
    );
}



ReactDOM.render(
    <VerifySub />,
    document.getElementById('root')
);

