// const { func } = require("prop-types");


function Subscribe() {

    const [formData, setFormData] = React.useState({firstName: '', phoneNum: ''});

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
         setFormData(previousData => ({...previousData, [name]: value}));
     }
// to do: use ajax to send user info to db on backend
    const handleSubmit = (event) => {
        event.preventDefault();

        const userInfo = {
            firstName: $('#firstName').val(),
            phoneNum: $('#phoneNum').val()
        };
        $.post('/api/subscribe', userInfo, (response) => {
            if (response.code === "SUCCESS") {
                ReactDOM.render(
                    <SuccessSub name={userInfo.firstName}/>,
                    document.querySelector('#root'))
            }
            else {
            // if successful, render success component
            // else, stay on page and display response message
                const subStatus = $('#subStatus');
                subStatus.html(`<p>${response.msg}</p>`);
            }
        });
    
        console.log(formData);
        //  check if formData is empty -- set some error

        // if info sent to db, render success component
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


function Unsubscribe() {
    const [phoneNum, setPhoneNum] = React.useState({phoneNum: ''});

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
         setPhoneNum(previousData => ({...previousData, [name]: value}));
     }
// to do: use ajax to send user info to db on backend
    const handleSubmit = (event) => {
        event.preventDefault();

        const userPhone = {
            phoneNum: $('#phoneNum').val()
        };
        $.post('/api/unsubscribe', userPhone, (response) => {
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
                    <input type="tel" className="form-control" id="phoneNum" name="phoneNum" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={userPhone.phoneNum} placeholder="000-000-0000" onChange={handleChange} />
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


