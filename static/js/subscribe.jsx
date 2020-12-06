const { Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse,
    Form, FormControl, Nav, Navbar, Spinner, Popover } = ReactBootstrap;

function Subscribe() {

    document.body.style.background="url('/static/snow-mountain-sunrise1.jpg')";
    document.body.style.backgroundSize='cover';
    document.body.style.backgroundRepeat='no-repeat'
    document.body.style.backgroundAttachment='fixed'
    document.body.style.backgroundPosition='center top'

    const [formData, setFormData] = React.useState({ firstName: '', phoneNum: '' });

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setFormData(previousData => ({ ...previousData, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const userInfo = {
            firstName: document.getElementById('firstName').value,
            phoneNum: document.getElementById('phoneNum').value
        };

        fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo),
        })
            .then(response => response.json())
            .then(function (response) {
                if (response.code === "SUCCESS") {
                    ReactDOM.render(
                        <VerifySub phoneNum={formData.phoneNum} name={formData.firstName} />,
                        document.getElementById('root'))
                } else {
                    const subStatus = document.getElementById('subStatus');
                    subStatus.innerHTML = `<p>${response.msg}</p>`;
                }
            })
        // .catch(error => console.log('ERROR'))
    }
    return (
        <div>
            <Container className="d-flex justify-content-center">
                <Card className="transparent-bg align-items-center">
                    <Card.Body>
                        <Card.Title>
                            Welcome! Please enter your information below.
                        </Card.Title>
                            <Form className='form-group margin-30 form-horizontal' action='/subscribe' method='POST' onSubmit={handleSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formName">
                                            <Form.Label>
                                                Name:
                            <Form.Control type="text" className="" id="firstName" name="firstName" value={formData.firstName} placeholder="First Name" onChange={handleChange} />
                                            </Form.Label>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formPhone">
                                            <Form.Label>
                                                Phone Number:
                            <Form.Control type="tel" className="form-control" id="phoneNum" name="phoneNum" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={formData.phoneNum} placeholder="000-000-0000" onChange={handleChange} />
                                            </Form.Label>
                                        </Form.Group>
                                    </Col>
                                    </Row>
                                    <Row>
                                        <Col></Col><Col></Col>
                                    <Col>
                                        <Form.Control type="submit" className="btn btn-secondary align-right mb-2" value="Subscribe" />
                                    </Col>
                                </Row>
                                <Row>
                                    <div id="subStatus" ></div>
                                </Row>
                            </Form>
                    </Card.Body>
                </Card>

            </Container>
        </div>
    );
}


function Unsubscribe() {

    document.body.style.background="url('/static/snow-river-sunrise.jpg')";
    document.body.style.backgroundSize='cover';
    document.body.style.backgroundRepeat='no-repeat'
    document.body.style.backgroundAttachment='fixed'
    document.body.style.backgroundPosition='center top'

    const [phoneNum, setPhoneNum] = React.useState({ phoneNum: '' });

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setPhoneNum(previousData => ({ ...previousData, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const userInfo = {
            phoneNum: document.getElementById('phoneNum').value
        }

        fetch('/api/unsubscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo),
        })
            .then(response => response.json())
            .then(function (response) {
                if (response.code === "SUCCESS") {
                    ReactDOM.render(
                        <SuccessUnsub name={response.msg} />,
                        document.getElementById('root'))
                } else {
                    const unsubStatus = document.getElementById('unsubStatus');
                    unsubStatus.innerHTML = `<p>${response.msg}</p>`;
                }
            });
        // .catch(error => console.log('ERROR'))
    }
    return (
        <div>
            <Container className="d-flex justify-content-center">
                <Card className="transparent-bg">
                    <Card.Body>
                        <Card.Title>
                            Come back any time!
                        </Card.Title>
                            <Form className='form-group margin-30 form-horizontal' action='/unsubscribe' method='POST' onSubmit={handleSubmit}>
                                <Row>
                                    <Col>
                                    <Form.Group controlId="formPhone">
                                        <Form.Label>
                                            Please enter the phone number you wish to unsubscribe:
                            <Form.Control type="tel" className="form-control text-left" id="phoneNum" name="phoneNum" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-0000" value={phoneNum.phoneNum} onChange={handleChange} />
                                        </Form.Label>
                                        </Form.Group>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col></Col><Col></Col>
                                    <Col className="text-right">
                                        <Form.Control type="submit" className="btn-secondary mb-2" value="Unsubscribe" />
                                    </Col>
                                </Row>
                                
                                <div id="unsubStatus" ></div>
                            </Form>
                    </Card.Body>
                </Card>

            </Container>
        </div>
    );
}
