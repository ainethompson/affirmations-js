function VerifySub() {

    const [inputCode, setInputCode] = React.useState({ inputCode: '' });

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setInputCode(previousData => ({ ...previousData, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const inputToken = {
            inputCode: document.getElementById('tokenInput').value
        };

        fetch('/api/verify-subscription ', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputToken),
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
            <form className='form-group' action='/confirm-subscription' method='POST' onSubmit={handleSubmit}>
                <div>
                    <label>
                        Please enter the 6 digit confirmation code:
                    <input type="text" className="form-control" id="inputCode" name="inputCode" placeholder="123456" value={inputToken.inputCode} onChange={handleChange} />
                    </label>
                </div>
                <input type="submit" className="btn btn-primary mb-2" value="Submit" />
            </form>
            <div id="confirmStatus" ></div>
        </div>
    );
}



ReactDOM.render(
    <VerifySub />,
    document.getElementById('root')
);

