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


@app.route('/api/subscribe', methods=['POST'])
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
        # result_code = "SUCCESS"
        # result_text = f"Success! {fname} has been subscribed."
    
    return jsonify({'code': result_code, 'msg': result_text})
   


@app.route('/api/unsubscribe', methods=['POST'])
def process_unsub():
    """ Submits form to delete user info from db """
    phone_num = request.form.get('phone_num')

    user_to_remove = crud.get_user_by_phone(phone_num)

    # name = user_to_remove.name

    if user_to_remove:
        crud.remove_user(phone_num)
        result_code = 'SUCCESS'
        name = user_to_remove.name
        # result_text = f"Success. {user_to_remove.name} has been unsubscribed."
        return jsonify({'code': result_code, 'name': name})
        
    elif len(phone_num) == 0:
        result_code = 'ERROR'
        result_text = "Please fill out the given fields"
    else:
        result_code = 'ERROR'
        result_text = "Oops! It doesn't look like this number is subscribed with us."

    return jsonify({'code': result_code, 'msg': result_text})


# Api route to serve random affirmation
@app.route('/api/message-generator', methods=['POST'])
def random_message():
    random_message = crud.get_random_message()
    return jsonify({"text": random_message.text, "author": random_message.author})


if __name__ == '__main__': 
    connect_to_db(app)
    app.run(debug=True, host='0.0.0.0')