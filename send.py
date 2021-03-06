from twilio.rest import Client
import json
from model import connect_to_db
import crud
import schedule
import time
from random import choice, randint

if __name__ == '__main__':
    from server import app
    connect_to_db(app)

secrets_dict = json.loads(open('data/secrets.json').read())
twilio_sid = secrets_dict["TWILIO_ACCOUNT_SID"]
auth_token = secrets_dict["TWILIO_AUTH_TOKEN"]
message_service_sid = secrets_dict["MESSAGING_SERVICE_SID"]

twilio_number = '+15103300507'
client = Client(twilio_sid, auth_token)

all_phones = crud.get_all_confirmed_phones()
phone_list = []

for phone_num in all_phones:
    phone_str = ''.join(list(phone_num))
    raw_phone = phone_str.replace('-', '')

    phone_list.append(f'+1{raw_phone}')


def send_message():

    unsent_messages = crud.get_unsent_messages()
    i = randint(0, len(unsent_messages))
    to_send = unsent_messages[i]

    for num in phone_list:
        phone = num

        chars = []
        for i in range(len(phone)):
            chars.append(phone[i])
        chars = chars[2:]
        sections = f'{chars[0:3]}-{chars[3:6]}-{chars[6:10]}'
        to_remove = "[],' "
        new_str = sections
        for item in to_remove:
            new_str = new_str.replace(item, '')
        print(new_str)

        user = crud.get_user_by_phone(new_str)

        text = to_send.text
        author = to_send.author
        quote = f"Good morning {user.name} ✨ \n\n{text} \n\n- {author}"

        message = client.messages.create(to=phone,
                                        from_=twilio_number,
                                        #  messaging_service_sid=message_service_sid,
                                         body=quote)
        print(message)

        crud.create_user_message(user, to_send)

    crud.update_to_sent(to_send)


# schedule.every(10).seconds.do(send_message)
schedule.every().day.at("01:00").do(send_message)

while True:
    schedule.run_pending()
    time.sleep(1)
