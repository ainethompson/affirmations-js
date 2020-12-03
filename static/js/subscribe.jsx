// const { func } = require("prop-types");
function Subscribe() {

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
                    // to do: Call verify component instead, find way to get name through to success page
                    // <SuccessSub name={response.msg} />,
                    // document.getElementById('root'))
                } else {
                    const subStatus = document.getElementById('subStatus');
                    subStatus.innerHTML = `<p>${response.msg}</p>`;
                }
            })
        // .catch(error => console.log('ERROR'))
    }
    return (
        <div>
            <Form inline className='form-group' action='/subscribe' method='POST' onSubmit={handleSubmit}>
                <Form.Row>
                    <Col>
                        <Form.Label>
                            Name:
                            <Form.Control type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} placeholder="First Name" onChange={handleChange} />
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Label>
                            Phone Number:
                            <Form.Control type="tel" className="form-control" id="phoneNum" name="phoneNum" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={formData.phoneNum} placeholder="000-000-0000" onChange={handleChange} />
                        </Form.Label>
                    </Col>
                </Form.Row>
                <Col>
                    <input type="submit" className="btn btn-primary mb-2" value="Subscribe" />
                </Col>
            </Form>
            <Row>
                <div id="subStatus" ></div>
            </Row>
        </div>
    );
}

ReactDOM.render(
    <Subscribe />,
    document.querySelector('#root')
);




function Unsubscribe() {
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
                    // // to do: trigger send message to confirm un subscription
                } else {
                    const unsubStatus = document.getElementById('unsubStatus');
                    unsubStatus.innerHTML = `<p>${response.msg}</p>`;
                }
            });
        // .catch(error => console.log('ERROR'))
    }
    return (
        <div>
            <Form inline className='form-group' action='/unsubscribe' method='POST' onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Label>
                            Please enter the phone number you wish to unsubscribe:
                            <Form.Control type="tel" className="form-control" id="phoneNum" name="phoneNum" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-0000" value={phoneNum.phoneNum} onChange={handleChange} />
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type="submit" className="btn btn-primary mb-2" value="Unsubscribe" />
                    </Col>
                </Row>
            </Form>
            <div id="unsubStatus" ></div>
        </div>
    );
}

ReactDOM.render(
    <Unsubscribe />,
    document.querySelector('#root')
);
