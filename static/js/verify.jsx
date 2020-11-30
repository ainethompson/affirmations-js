function VerifySub() {
    const [verifyToken, setVerifyToken] = React.useState({ verifyToken: '' });

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setVerifyToken(previousData => ({ ...previousData, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const tokenInput = {
            tokenInput: document.getElementById('verifyToken').value
        }

        fetch('/api/unsubscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tokenInput),
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
            });
        // .catch(error => console.log('ERROR'))


    return (
        <div>
            <form className='form-group' action='/verify' method='POST' onSubmit={handleSubmit}>
                <div>
                    <label>
                        Please enter the 6 digit confirmation code:
                    <input type="text" className="form-control" id="verifyToken" name="verifyToken" placeholder="123456" value={phoneNum.phoneNum} onChange={handleChange} />
                    </label>
                </div>
                <input type="submit" className="btn btn-primary mb-2" value="Submit" />
            </form>
            <div id="confirmStatus" ></div>
        </div>

    )
}



ReactDOM.render(
    <VerifySub />,
    document.querySelector('#root')
);

