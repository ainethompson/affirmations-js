

function Subscribe() {

     const [formData, setFormData] = React.useState({firstName: '', phoneNum: ''});

    //  to do: use useEffect to make handleChange handle phone number and name 
     const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
         setFormData(previousData => ({...previousData, [name]: value}));
     }
// to do: use ajax to send user info to db on backend
     const handleSubmit = (event) => {
         event.preventDefault();
         console.log(formData);
        //  check if formData is empty -- set some error
         console.log(`A form was submitted: ${formData}`);
        //  ajax to send info to db
     }

     return (
         <form onSubmit={handleSubmit}>
             <div>
                <label>
                    Name:
                    <input type="text" name='firstName' value={formData.firstName} placeholder="First Name" onChange={handleChange} />
                </label>
             </div>
             <div>
                <label>
                    Phone Number:
                    <input type="tel" name='phoneNum' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={formData.phoneNum} placeholder="000-000-0000" onChange={handleChange} />
                </label>
             </div>
             <input type="submit" value="Submit" />
         </form>
     );
}



// to do: make conditional whether this will render

function ToSubscribe() {

}

ReactDOM.render(
    <Subscribe />,
    document.querySelector('#root')
);









//     const { register,handleSubmit, watch, errors } = useForm();

//     return (
//         <form action="/subscribe" class="form-subscribe" method="POST">

//             <h2 class="form-subscribe-heading">Subscribe to receive daily affirmations</h2>

//             <div class="form-group">
//                 <label for="fname-field">Name:</label>
//                 <input type="fname"
//                         name="fname"
//                         placeholder="First Name"
//                         required>
//             </div>

//             <div class="form-group">
//                 <label for="phone-num-field">Phone Number:</label>
//                 <input type="tel"
//                         name="phone_num"
//                         id="phone_num"
//                         pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                         placeholder="000-000-0000"
//                         required>
//             </div>

//             <button class="subscribe" type="submit">Subscribe</button>
//             </form>

//     );
// }










// // const init = function() {
// //     document.getElementById('submit').addEventListener('click', send);//send calls send function below
// // }

// // const send = function(evt) {
// //     evt.preventDefault();
// //     document.getElementById('subscribe').onsubmit();
// // }




// // const submitForm = document.getElementById()