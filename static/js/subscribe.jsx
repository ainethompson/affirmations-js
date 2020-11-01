
import React from "react";
// import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";


function NameForm() {
     const [value, setValue] = React.useState('First Name');

     const handleChange = (event) => {
         setValue(event.target.value);
     }

     const handleSubmit = (event) => {
         event.preventDefault();
         console.log(`A name was submitted: ${value}`);
     }

     return (
         <form onSubmit={handleSubmit}>
             <label>
                 Name:
                 <input type="text" value={value} onChange={handleChange} />
             </label>
             <input type="submit" value="Submit" />
         </form>
     );
}

ReactDOM.render(
    <NameForm />,
    document.querySelector('#root')
)









    const { register,handleSubmit, watch, errors } = useForm();

    return (
        <form action="/subscribe" class="form-subscribe" method="POST">

            <h2 class="form-subscribe-heading">Subscribe to receive daily affirmations</h2>

            <div class="form-group">
                <label for="fname-field">Name:</label>
                <input type="fname"
                        name="fname"
                        placeholder="First Name"
                        required>
            </div>

            <div class="form-group">
                <label for="phone-num-field">Phone Number:</label>
                <input type="tel"
                        name="phone_num"
                        id="phone_num"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="000-000-0000"
                        required>
            </div>

            <button class="subscribe" type="submit">Subscribe</button>
            </form>

    );
}










// const init = function() {
//     document.getElementById('submit').addEventListener('click', send);//send calls send function below
// }

// const send = function(evt) {
//     evt.preventDefault();
//     document.getElementById('subscribe').onsubmit();
// }




// const submitForm = document.getElementById()