from flask import Flask, render_template, request, flash, session, redirect, jsonify
from model import Message, connect_to_db
import crud
import os
import json
from jinja2 import StrictUndefined

secrets_dict = json.loads(open('data/secrets.json').read())

app = Flask(__name__)
app.secret_key = secrets_dict["APP_SECRET_KEY"]
app.jinja_env.undefined = StrictUndefined
  
twilio_sid = secrets_dict["TWILIO_ACCOUNT_SID"]
auth_token = secrets_dict["TWILIO_AUTH_TOKEN"]

@app.route('/')
def homepage():
    """ View Homepage. """

    return render_template('base.html')


@app.route('/subscribe', methods=['POST'])
def process_subscribe():
    """ Submits form to save user info to db """

    fname = request.form.get('firstName').title()
    phone_num = request.form.get('phoneNum')

    user_in_db = crud.get_user_by_phone(phone_num)


    if user_in_db:
        result_code = 'ERROR'
        result_text = "Oops! It looks like this number is already subscribed with us!"
    elif len(fname) == 0 or len(phone_num) == 0:
        result_code = 'ERROR'
        result_text = "Please fill out the given fields"
    else:
        crud.create_user(fname, phone_num)
        result_code = "USER CREATED"
        result_text = f"Success! {fname} has been subscribed."
        # return redirect success page

    # session['fname'] = fname

    return jsonify({'code': result_code, 'msg': result_text})


    # if user:
    #     flash("Oops! It looks like you're already subscribed with us!")
    #     # return redirect('/homepage')
    # else:
    #     flash("Success!")
    # # return redirect('/success')
   

# Api route to serve random affirmation
@app.route('/api/message-generator', methods=['POST'])
def random_message():
    random_message = crud.get_random_message
    # call crud function to get random message
    return random_message
# @app.route('/api/subscribe', methods=['POST'])
# def subscribe():
#     # get form submission to work
#     # use ajax lab to generate post request
#     print('Subscribe the user')
#     return jsonify({'cats': 15})


# 
if __name__ == '__main__': 
    connect_to_db(app)
    app.run(debug=True, host='0.0.0.0')