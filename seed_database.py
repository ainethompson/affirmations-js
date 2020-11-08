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
    name = f'user #{n}'
    phone_num = f'{n}{n}{n}-{n}{n}{n}-{n}{n}{n}{n}'

    user = crud.create_user(name, phone_num)

    for i in range(10):
        random_message = choice(messages_in_db)

        crud.create_user_message(user, random_message)