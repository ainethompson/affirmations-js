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
    message_data = json.loads(f.read())

messages_in_db = []
for message in message_data:
    author, text = (message['Author'], message['Text'])
    db_message = crud.create_message(author, text)
    
    messages_in_db.append(db_message)







