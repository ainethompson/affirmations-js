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

def update_to_confirmed(user):
    user.confirmed = True
    db.session.commit()

def get_user_by_id(user_id):
    """Return a user by primary key."""

    return User.query.get(user_id)

def get_user_by_phone(phone_num):
    """ Return a user by phone_num"""

    user = db.session.query(User).filter(phone_num == User.phone_num).first()
    return user
    
    # SELECT * FROM users WHERE phone_num == phone_num
    # User.query.filter(User.phone_num == phone_num).one()

def get_all_phone_nums():
  
    all_phone_nums = db.session.query(User.phone_num).all()
    return all_phone_nums

def get_all_confirmed_phones():

    all_confirmed_phones = db.session.query(User.phone_num).filter(User.confirmed == True).all()
    # SELECT phone_num FROM users WHERE confirmed == True
    return all_confirmed_phones

def remove_user(phone_num):
    """ Delete a user from DB by phone num """

    user = get_user_by_phone(phone_num)
    db.session.delete(user)
    db.session.commit()

    return user
    # DELETE FROM users WHERE user.phone_num == phone)


""" MESSAGE FUNCTIONS """

def create_message(author, text):
    """ Create and return message. """

    message = Message(author=author, text=text)

    db.session.add(message)
    db.session.commit()

    return message

def get_message_by_id(message_id):
    return Message.query.get(message_id)

def get_unsent_messages():
    # SELECT message_id FROM messages WHERE sent = False
    return Message.query.filter(Message.sent == False).all()

def update_to_sent(message):
    message.sent = True
    db.session.commit()
    # UPDATE messages SET sent = TRUE

def get_random_message():
    i = randint(1, 60)
    return get_message_by_id(i)


""" USERMESSAGE FUNCTIONS """
def create_user_message(user, message):
    """ Create and return 1 message for 1 user. """
    user_message = UserMessage(user=user, message=message)

    db.session.add(user_message)
    db.session.commit()

    return user_message

def get_user_messages(user_id):
    """ return list of messages that this user has received"""
    return UserMessage.query.filter(user_id == UserMessage.user_id).all()

def get_message_users(message_id):
    """ return list of users that this message has been sent to """
    if UserMessage.message_id:
        return UserMessage.query.filter(message_id == UserMessage.message_id).all()
    else:
        return "This message has not been sent to anybody"

if __name__== '__main__':
    from server import app
    connect_to_db(app)