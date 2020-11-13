from twilio.rest import Client
import json
import model
import crud
from server import twilio_sid, auth_token
import schedule
import time
from random import choice, randint


if __name__== '__main__':
    from server import app
    model.connect_to_db(app)

def send_message():
    twilio_number = '+15103300507'
    # phone ='+15109819837'
    
# TO SEND TO EVERY USER:
    all_phones = crud.get_all_phone_nums()
    phone_list = []

    for phone_num in all_phones:
        phone_str =''.join(list(phone_num)) #  ('510-981-9837',) --> 510-981-9837
        raw_phone = phone_str.replace('-', '') #  510-981-9837 --> 5109819837
        
        phone_list.append(f'+1{raw_phone}') #  5109819837 --> +15109819837

    for num in phone_list:
        phone = num

        client = Client(twilio_sid, auth_token)

        unsent_messages = crud.get_unsent_messages()
        i = randint(0, len(unsent_messages))
        to_send = unsent_messages[i]

        text = to_send.text
        author = to_send.author
        quote = f"✨{text} \n\n- {author} ✨"
        
        message = client.messages.create(to=phone,
                                from_=twilio_number,
                                body=quote)
        print(message)

    # to do: format phone from '+10000000000' to '000-000-0000'

    loop throu each phone num to get list of each char
    return f string use indeces to get order

   
    for phone in phone_list:
        chars = []
        for i in range(len(phone)):
            chars.append(phone[i])
        chars = chars[2:]
        sections = f'{chars[0:3]}-{chars[3:6]}-{chars[6:10]}'
        to_remove = "[],' "
        new_str = sections
        for item in to_remove:
            new_str = new_str.replace(item,'')
        print(new_str)

        # db_phone_1 = sections.replace('[', '')
        # db_phone_2 = db_phone_1.replace(']', '')
        # db_phone_3 = db_phone_2.replace("'", "")
        # db_phone_4 = db_phone_3.replace()
        # phone_string = ''.join(list(db_phone_3))
        # print(phone_string)


        db_phone = sections.strip("[]")
        print (sections)
        ''.join(db_phone_2)


# phone_list = ['+15109819837', '+15109147993', '+15108470677']


        # db_phone = phone.strip
    # user = crud.get_user_by_phone(phone_str)

    crud.create_user_message(user, to_send)
    
    crud.update_to_sent(to_send)


schedule.every(10).seconds.do(send_message)
# schedule.every().day.at("19:39").do(send_message)

while True:
        schedule.run_pending()
        time.sleep(1)
