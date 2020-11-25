""" to do: implement twilio to text user once they've subscribed
- if they subscribe yes add to db? """

from twilio.rest import Client
import json
import crud
import model
from server import twilio_sid, auth_token


# When user subscribes on website, call this function to send out a message asking to confirm their subscription
# if user responds yes, call crud.update_to_confirmed to add them to confirmed users so they will start receiving daily messages
# else, leave confirmed column set to false



if __name__== '__main__':
    from server import app
    model.connect_to_db(app)

    twilio_number = '+15103300507'

    user = crud.get_user_by_phone('510-981-9837')
    
def send_confirmation(user):
    client = Client(twilio_sid, auth_token)

    #get user object for who just subscribed from the server

    phone_num = user.phone_num

    phone_str =''.join(list(phone_num)) #  ('510-981-9837',) --> 510-981-9837
    print(phone_str)

    raw_phone = phone_str.replace('-', '') #  510-981-9837 --> 5109819837
    print(raw_phone)

    phone= f'+1{raw_phone}' #  5109819837 --> +15109819837
    print(phone)




    name = user.name

    text = f"Welcome {name}! Please reply 'YES' to confirm your suscription with *App name*."

    message = client.messages.create(to=phone,
                                from_=twilio_number,
                                body=text)
    print(message)
    
    # if reply yes --> update to confirmed == True