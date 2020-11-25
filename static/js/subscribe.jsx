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
                        <SuccessSub name={response.msg} />,
                        document.getElementById('root'))
                    // // to do: trigger send message to confirm subscription
                } else {
                    const subStatus = document.getElementById('subStatus');
                    subStatus.innerHTML = `<p>${response.msg}</p>`;
                }
            })
        // .catch(error => console.log('ERROR'))
    }

    return (
        <div>
            <form className='form-group' action='/subscribe' method='POST' onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} placeholder="First Name" onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Phone Number:
                    <input type="tel" className="form-control" id="phoneNum" name="phoneNum" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={formData.phoneNum} placeholder="000-000-0000" onChange={handleChange} />
                    </label>
                </div>
                <input type="submit" className="btn btn-primary mb-2" value="Subscribe" />
            </form>
            <div id="subStatus" ></div>
        </div>
    );
}


ReactDOM.render(
    <Subscribe />,
    document.querySelector('#root')
);
