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

    # user_in_db = crud.get_user_by_phone(phone_num)

    # if user_in_db:
    #     result_code = 'ERROR'
    #     result_text = "Oops! It looks like you're already subscribed with us!"
    # else:
    crud.create_user(fname, phone_num)
    result_code = "USER CREATED"
    result_text = f"Success! {fname} has been subscribed."

    # session['fname'] = fname

    return jsonify({'code': result_code, 'msg': result_text})


    # if user:
    #     flash("Oops! It looks like you're already subscribed with us!")
    #     # return redirect('/homepage')
    # else:
    #     flash("Success!")
    # # return redirect('/success')
   




# route to get form info front end to 
# @app.route('/handle-subscribe')

#     crud.create_user



# @app.route('/api/subscribe', methods=['POST'])
# def subscribe():
#     # get form submission to work
#     # use ajax lab to generate post request
#     print('Subscribe the user')
#     return jsonify({'cats': 15})


""" Test Route """

@app.route('/api/about', methods=['GET'])
def get_messages():

    message_list = []
    for message in crud.get_unsent_messages():
        message_list.append({'author': message.author, 'text': message.text})

    return jsonify({'unsent messages': message_list})

@app.route('/about')
def unsent_messages():
    """ View unsent Messages """
    return render_template('subscribe.html')

if __name__ == '__main__': 
    connect_to_db(app)
    app.run(debug=True, host='0.0.0.0')