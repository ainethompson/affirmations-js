""" Script to seed database. """

import os
import json
import crud
from random import choice, randint
import model
import server

os.system('dropdb affirmations_db')
os.system('createdb affirmations_db')

model.connect_to_db(server.app)
model.db.create_all()

# Load message data from json file
with open('data/messages.json') as f:
    # message_data = json.load(f)
    message_data = json.loads(f.read())

messages_in_db = []
for message in message_data:
    author, text = (message['Author'], message['Text'])
    db_message = crud.create_message(author, text)
    
    messages_in_db.append(db_message)


# fname = 'Shrek'
# # model.User.fname 
# phone_num = '000-000-0000'
# # model.User.phone_num


# phone_num = '510-981-9837'
# user = crud.create_user(name, phone_num)

# for message in sent messages:
    # if user has received that message:
    # create instance of user_message
# user_message = crud.create_user_message(user, db_message)

""" Test Data """
for n in range(10):
    name = f'test_user #{n}'
    phone_num = f'{n}{n}{n}-{n}{n}{n}-{n}{n}{n}{n}'

    user = crud.create_user(name, phone_num)

    for i in range(10):
        random_message = choice(messages_in_db)

        crud.create_user_message(user, random_message)






# Decode error, issue with decoding json object into python object?

# 11/9 currently getting this error:
# Traceback (most recent call last):
#   File "seed_database.py", line 17, in <module>
#     message_data = json.load(f)
#   File "/usr/lib/python3.6/json/__init__.py", line 299, in load
#     parse_constant=parse_constant, object_pairs_hook=object_pairs_hook, **kw)
#   File "/usr/lib/python3.6/json/__init__.py", line 354, in loads
#     return _default_decoder.decode(s)
#   File "/usr/lib/python3.6/json/decoder.py", line 339, in decode
#     obj, end = self.raw_decode(s, idx=_w(s, 0).end())
#   File "/usr/lib/python3.6/json/decoder.py", line 357, in raw_decode
#     raise JSONDecodeError("Expecting value", s, err.value) from None
# json.decoder.JSONDecodeError: Expecting value: line 70 column 1 (char 9828)


# FIXED -- JSON FILE HAD EXTRA ']' AT THE END!