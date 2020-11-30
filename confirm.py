""" to do: implement twilio to text user once they've subscribed
- if they subscribe yes add to db? """

from flask import Flask, request, redirect
from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse
import json
import crud
import model
# from server import twilio_sid, auth_token


# When user subscribes on website, call this function to send out a message asking to confirm their subscription
# if user responds yes, call crud.update_to_confirmed to add them to confirmed users so they will start receiving daily messages
# else, leave confirmed column set to false



if __name__== '__main__':
    from server import app
    model.connect_to_db(app)

    twilio_number = '+15103300507'

    secrets_dict = json.loads(open('data/secrets.json').read())

    twilio_sid = secrets_dict["TWILIO_ACCOUNT_SID"]
    auth_token = secrets_dict["TWILIO_AUTH_TOKEN"]
    message_service_sid = secrets_dict["MESSAGING_SERVICE_SID"]
    
    # user = crud.get_user_by_phone('510-981-9837')

def send_confirmation(user):
    client = Client(twilio_sid, auth_token)

    #get user object for who just subscribed from the server

    phone_num = user.phone_num
    phone_str =''.join(list(phone_num)) #  ('510-981-9837',) --> 510-981-9837
    raw_phone = phone_str.replace('-', '') #  510-981-9837 --> 5109819837
   
    phone= f'+1{raw_phone}' #  5109819837 --> +15109819837
    print(phone)
    name = user.name
    text = f"Welcome {name}! Please reply 'YES' to confirm your suscription with *App name*."

    message = client.messages.create(to=phone,
                                messaging_service_sid=message_service_sid,
                                body=text)
    print(message)
    
    # if reply yes --> update to confirmed == True


# app = Flask(__name__)

# @app.route("/sms", methods=['GET', 'POST'])
# def sms_reply():
#     """Respond to incoming calls with a simple text message."""
#     # Start our TwiML response
#     resp = MessagingResponse()

#     # Add a message
#     resp.message("The Robots are coming! Head for the hills!")

#     return str(resp)

# if __name__ == "__main__":
#     app.run(debug=True)
# def respond():