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
                    // // to do: trigger send message to confirm subscription
                } else {
                    const unsubStatus = document.getElementById('unsubStatus');
                    unsubStatus.innerHTML = `<p>${response.msg}</p>`;
                }
            });
        // .catch(error => console.log('ERROR'))
    }



    return (
        <div>
            <form className='form-group' action='/unsubscribe' method='POST' onSubmit={handleSubmit}>
                <div>
                    <label>
                        Please enter the phone number you wish to unsubscribe:
                    <input type="tel" className="form-control" id="phoneNum" name="phoneNum" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-0000" value={phoneNum.phoneNum} onChange={handleChange} />
                    </label>
                </div>
                <input type="submit" className="btn btn-primary mb-2" value="Unsubscribe" />
            </form>
            <div id="unsubStatus" ></div>
        </div>
    );
}


ReactDOM.render(
    <Unsubscribe />,
    document.querySelector('#root')
);


