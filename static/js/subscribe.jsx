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

        // const userInfo = {
        //     firstName: $('#firstName').val(),
        //     phoneNum: $('#phoneNum').val()

        const userInfo = {
            firstName: document.getElementById('firstName').value,
            phoneNum: document.getElementById('phoneNum').value
        };
        console.log(userInfo);

        $.post('/api/subscribe', userInfo, (response) => {
            if (response.code === "SUCCESS") {
                ReactDOM.render(
                    <SuccessSub name={response.msg}/>,
                    document.querySelector('#root'))
                // to do: trigger send message to confirm subscription
            } 
            else {
                const subStatus = $('#subStatus');
                subStatus.html(`<p>${response.msg}</p>`);
            }
        });

        // const form = new FormData(userInfo);
        // form.append(document.querySelector('#firstName'));
        // form.append(document.querySelector('#phoneNum'));
        // const myHeaders = new Headers();

        // const myRequest = new Request('/api/subscribe', {
        //     method: 'POST',
        //     headers: myHeaders,

        // })
    //     const data = {firstName: 'aine' };
    //         // document.querySelector('#firstName'),
    //     // phoneNum: document.querySelector('#phoneNum')};

    //     fetch('/api/subscribe', {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data),
    //   })
    //     .then (response => response.json())
    //     .then (data => {
    //         console.log('Success:', data);
    //     });
        // .then(function(response) {
        //     if (response.code === "SUCCESS") {
        //         console.log(`${response.msg}`);
        //         // ReactDOM.render( 
        //         //     <SuccessSub name={data.msg}/>,
        //         //     document.querySelector('#root'))
        //         // // to do: trigger send message to confirm subscription
        //     } else {
        //         console.log(`${response.msg}`);
        //         // const subStatus = document.querySelector('#subStatus');
        //         // subStatus.html(`<p>${data.msg}</p>`);
            }
    // })
    //     // .catch(error => console.log('ERROR'))
    //     // console.log(formData);
    // }

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

