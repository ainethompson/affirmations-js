""" CRUD operations. """
from model import db, User, Message, UserMessage, connect_to_db
from random import randint
import pdb
#Functions

""" USER FUNCTIONS """

def create_user(name, phone_num):
    """ create and return a new user. """

    user = User(name=name, phone_num=phone_num)
    db.session.add(user)
    db.session.commit()

    return user

def get_user_by_id(user_id):
    """Return a user by primary key."""

    return User.query.get(user_id)

def get_user_by_phone(phone_num):
    """ Return a user by phone_num"""

    user = db.session.query(User).filter(phone_num == User.phone_num).one()
    return user
    
    # SELECT * FROM users WHERE phone_num == phone_num
    # User.query.filter(User.phone_num == phone_num).one()

def get_all_phone_nums():
  
    all_phone_nums = db.session.query(User.phone_num).all()
    
    return all_phone_nums


""" MESSAGE FUNCTIONS """

def create_message(author, text):
    """ Create and return message. """

    message = Message(author=author, text=text)

    db.session.add(message)
    db.session.commit()

    return message

def get_message_by_id(message_id):
    """ Return message by id. """
    return Message.query.get(message_id)

def get_unsent_messages():
    """ Return list of message_ids of messages that have not yet been sent out """
    # SELECT message_id FROM messages WHERE sent = False
    return Message.query.filter(Message.sent == False).all()

def update_to_sent(message):
    message.sent = True
    db.session.commit()
    # UPDATE messages SET sent = TRUE


""" USERMESSAGE FUNCTIONS """
def create_user_message(user, message):
    """ Create and return 1 message for 1 user. """
    user_message = UserMessage(user=user, message=message)

    db.session.add(user_message)
    db.session.commit()

    return user_message

def get_user_messages(user_id):
    """ return messages that this user has already received"""
    pass 
    # user_message_list = []

    # for message in sent messages:
#       
    #SELECT message_id FROM messages WHERE message_id IN (SELECT message_id FROM user_messages WHERE user_id = 1);

    # return message

if __name__== '__main__':
    from server import app
    connect_to_db(app)