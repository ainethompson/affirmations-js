function Unsubscribe() {
    const [phoneNum, setPhoneNum] = React.useState({phoneNum: ''});

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setPhoneNum(previousData => ({...previousData, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        // const userPhone = {
        //     phoneNum: $('#phoneNum').val()
        // };
            const phoneNum = $('#unsubPhoneNum').val()

        $.post('/api/unsubscribe', phoneNum, (response) => {
            if (response.code === "SUCCESS") {
                ReactDOM.render(
                    <SuccessUnsub name={response.name}/>,
                    document.querySelector('#root'))
            }
            else {
                const unsubStatus = $('#unsubStatus');
                unsubStatus.html(`<p>${response.msg}</p>`);
            }
        });
    
        console.log(phoneNum);
    }

    return (
        <div>
            <form className='form-group' action='/unsubscribe' method='POST' onSubmit={handleSubmit}>
                <div>
                <label>
                    Please enter the phone number you wish to unsubscribe: 
                    <input type="tel" className="form-control" id="phoneNum" name="phoneNum" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-0000" onChange={handleChange} />
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


