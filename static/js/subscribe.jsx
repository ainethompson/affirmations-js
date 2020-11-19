

function Subscribe(props) {

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
        $.post('/subscribe', userInfo, (response) => {
            if (code === "SUCCESS") {
                return props.success
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

        //  console.log(`A form was submitted: ${firstName}, ${phoneNum}`);
        //  ajax to send info to db
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
    <Subscribe 
        success="ReactDOM.render(
            <Success />,
            document.querySelector('#root')"
        />,
    document.querySelector('#root')
);




