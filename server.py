from flask import Flask, render_template, request, flash, session, redirect, jsonify
from model import connect_to_db
import crud
import os
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = 'secret'
app.jinja_env.undefined = StrictUndefined
  
account_sid = os.environ.get('TWILIO_SID')
auth_token = os.environ.get('TWILIO_TOKEN')

@app.route('/')
def homepage():
    """ View Homepage. """

    return render_template('homepage.html')

@app.route('/subscribe', methods=['GET'])
def show_subscribe():
    """ Show subscription page. """

    return render_template('subscribe.html')

@app.route('/subscribe', methods=['POST'])
def process_subscribe():
    """ Subscribe user to receive daily messages and save user's name and phone number to DB """

    return render_template('subscribe.html')
   
@app.route('/success', methods=['GET'])
def show_success():
   
    # user = request.args.get('fname')
    # fname = request.cookies['fname']
    fname = session['fname']

    return render_template('success.html', fname=fname)


if __name__ == '__main__': 
    connect_to_db(app)
    app.run(debug=True, host='0.0.0.0')