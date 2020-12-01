from flask import Flask, render_template, request, flash, session, redirect, jsonify
from model import Message, connect_to_db
import crud
import os
import json
from verify import send_token

from jinja2 import StrictUndefined
from twilio.twiml.messaging_response import MessagingResponse

secrets_dict = json.loads(open('data/secrets.json').read())

app = Flask(__name__)
app.secret_key = secrets_dict["APP_SECRET_KEY"]
app.jinja_env.undefined = StrictUndefined
  
twilio_sid = secrets_dict["TWILIO_ACCOUNT_SID"]
auth_token = secrets_dict["TWILIO_AUTH_TOKEN"]
message_service_sid = secrets_dict["MESSAGING_SERVICE_SID"]
verify_service_sid = secrets_dict["VERIFY_SERVICE_SID"]


@app.route('/')
def homepage():
    """ View Homepage. """
    return render_template('base.html')


@app.route('/api/subscribe', methods=['POST'])
def process_subscribe():
    """ Submits form to save user info to db """

    data = request.get_json()
    name = data['firstName'].title()
    phone_num = data['phoneNum']
    user_in_db = crud.get_user_by_phone(phone_num)

    if user_in_db:
        # if user_in_db.confirmed == True:
        result_code = 'ERROR'
        result_text = "Oops! It looks like this number is already subscribed with us!"
    elif len(name) == 0 or len(phone_num) == 0:
        result_code = 'ERROR'
        result_text = "Please fill out the given fields."
    else:
        crud.create_user(name, phone_num)
        result_code = "SUCCESS"
        # result_text = "Success! You should receive a text to confirm your subscription shortly."
        result_text = name

        phone_str =''.join(list(phone_num)) #  ('510-981-9837',) --> 510-981-9837
        raw_phone = phone_str.replace('-', '') #  510-981-9837 --> 5109819837
        phone = f'+1{raw_phone}' #  5109819837 --> +15109819837
        # user = crud.get_user_by_phone(phone_num)
        print(phone)
        send_token(phone)
        # send phone number to verify.py and call function to send confirmation text

    return jsonify({'code': result_code, 'msg': result_text})
   

# @app.route('/api/confirm-subscription', methods=['GET','POST'])
# def confirm_sub_reply():
#     """ Use twilio to respond to users confirmation text
#     Send a dynamic reply to an incoming text message"""

#     # to do: get incoming number
#     # user = crud.get_user_by_phone(#incoming number)

#     # Get the message the user sent our Twilio number
#     body = request.values.get('Body', None)

#     # Start our TwiML response
#     resp = MessagingResponse()

#     # Determine the right reply for this message
#     if body == 'YES':
#         resp.message("Success! You are now subscribed. Text 'STOP' at any time to unsubscribe.")
#         # crud.update_to_confirmed(user)
#     elif body == 'STOP':
#         resp.message("Success! You are now unsubscribed.")
#         # crud.remove_user(user)

#     return str(resp)


@app.route('/api/unsubscribe', methods=['POST'])
def process_unsub():
    """ Submits form to delete user info from db """

    data = request.get_json()
    phone_num = data['phoneNum']

    user_to_remove = crud.get_user_by_phone(phone_num)

    if user_to_remove.confirmed == True:
        result_code = 'SUCCESS'
        result_text = user_to_remove.name
        crud.remove_user(user_to_remove)
    elif len(phone_num) == 0:
        result_code = 'ERROR'
        result_text = "Please fill out the given fields"
    else:
        result_code = 'ERROR'
        result_text = "Oops! It doesn't look like this number is subscribed with us."
        
    return jsonify({'code': result_code, 'msg': result_text})


@app.route('/api/message-generator', methods=['POST'])
def random_message():
    """ Get random message from DB for message generator """
    random_message = crud.get_random_message()
    return jsonify({"text": random_message.text, "author": random_message.author})

@app.route('/api/verify-subscription', methods=['POST'])
def confirm_sub():
    """ Check code entered in form with code sent to user """
    pass

    # get user phone number
    # get token sent to them
    # get code entered

    # call verify.check_verification?

    # if same:
    #   call crud.update_to_confirmed
    # else:
        # resend code
        # return try again
        
    # token_input = request.get_json()['tokenInput']

    # user = crud.get_user_by_phone(phone)

    # if token_input == given token:
    #     result_code = 'SUCCESS'
    #     result_text = ''
    #     crud.update_to_confirmed(user)
    # else:
    #     result_code = 'ERROR'
    #     result_text = 'The code you entered was incorrect. We are sending you a new code now.'
    #     send_token(phone)
        # re render form?

    # return jsonify({'code': result_code, 'msg': result_text})

# @app.route('/api/confirm-subscription', methods=['POST'])
# def confirm_sub():
#     phone_num = request.get_json['phoneNum']
#     user_to_confirm = crud.get_user_by_phone(phone_num)
# Route to send user info from subscribe.jsx to confirm_sub to send confirmation text 

if __name__ == '__main__': 
    connect_to_db(app)
    app.run(debug=True, host='0.0.0.0')