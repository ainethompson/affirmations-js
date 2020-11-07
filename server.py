from flask import Flask, render_template, request, flash, session, redirect, jsonify
from model import connect_to_db
import crud
import os
import json
from jinja2 import StrictUndefined

# with open('data/secrets.json') as s:
#     secret_data = json.load(s)

secrets_json = open('data/secrets.json').read()

secrets_dict = json.loads(secrets_json)

# secrets_dict = secrets_object.items()

app = Flask(__name__)
app.secret_key = 'secret'
app.jinja_env.undefined = StrictUndefined
  
twilio_sid = secrets_dict["TWILIO_ACCOUNT_SID"]


# account_sid = os.environ.get('TWILIO_SID')
# auth_token = os.environ.get('TWILIO_TOKEN')

@app.route('/')
def homepage():
    """ View Homepage. """

    return render_template('base.html')

# @app.route('/subscribe', methods=['GET'])
# def show_subscribe():
#     """ Show subscription page. """

#     return render_template('subscribe.html')

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