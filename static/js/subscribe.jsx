// const { func } = require("prop-types");


function Subscribe() {

    const [formData, setFormData] = React.useState({firstName: '', phoneNum: ''});

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
         setFormData(previousData => ({...previousData, [name]: value}));
     }
    const handleSubmit = (event) => {
        event.preventDefault();

        const userInfo = {
            // to do: title case first name
            firstName: $('#firstName').val(),
            phoneNum: $('#phoneNum').val()
        };
        $.post('/api/subscribe', userInfo, (response) => {
            if (response.code === "SUCCESS") {
                ReactDOM.render(
                    <SuccessSub name={response.msg}/>,
                    document.querySelector('#root'))
            }
            else {
                const subStatus = $('#subStatus');
                subStatus.html(`<p>${response.msg}</p>`);
            }
        });
    
        console.log(formData);
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

