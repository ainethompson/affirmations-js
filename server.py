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

    fname = request.form.get('fname').title()
    phone_num = request.form.get('phone_num')

    user = crud.create_user(fname, phone_num)

    session['fname'] = fname

    if user:
        flash("Oops! It looks like you're already subscribed with us!")
        # return redirect('/homepage')
    else:
        flash("Success!")
    # return redirect('/success')
   




# route to get form info front end to 
# @app.route('/handle-subscribe')

#     crud.create_user


# @app.route('/subscribe', methods=['POST'])
# def show_subscribe():
#     """ Show subscription page. """

#     return render_template('.html')


# @app.route('/api/subscribe', methods=['POST'])
# def subscribe():
#     # get form submission to work
#     # use ajax lab to generate post request
#     print('Subscribe the user')
#     return jsonify({'cats': 15})

@app.route('/about')
def unsent_messages():
    """ View unsent Messages """
    return render_template('subscribe.html')

""" Test Route """
@app.route('/api/about', methods=['GET'])
def get_messages():
    message_list = []
    for message in crud.get_unsent_messages():
        message_list.append({'author': message.author, 'text': message.text})

    return jsonify({'unsent messages': message_list})

# @app.route('/subscribe', methods=['POST'])
# def process_subscribe():
#     """ Subscribe user to receive daily messages and save user's name and phone number to DB """

#     return render_template('subscribe.html')
   
# @app.route('/success', methods=['GET'])
# def show_success():
   
#     # user = request.args.get('fname')
#     # fname = request.cookies['fname']
#     fname = session['fname']

#     return render_template('success.html', fname=fname)


if __name__ == '__main__': 
    connect_to_db(app)
    app.run(debug=True, host='0.0.0.0')