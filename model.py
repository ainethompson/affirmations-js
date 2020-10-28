"""Models for affirmations app. 
DB name = affirmations_db"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """ A user. """

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    fname = db.Column(db.String(25), nullable=False)
    phone_num = db.Column(db.String(15), nullable=False)

    # messages = db.relationship('Message', backref='users', secondary='users_messages')
    # 'user-messages' = a list of UserMessage objects

    def __repr__(self):
        """ Provide helpful representation when printed """
        return f"<User_id = {self.user_id}, First name = {self.fname}, phone number = {self.phone_num}>"


class Message(db.Model):
    """ A message. """

    __tablename__ = "messages"

    message_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    message_author = db.Column(db.Text)
    message_text = db.Column(db.Text)
    sent = db.Column(db.Boolean, default=False, nullable=False)
    
    # users = db.relationship('User', backref='messages', secondary='users_messages')
    # 'user-messages' = a list of UserMessage objects

    def __repr__(self):
        return f"<id = {self.message_id}, author = {self.message_author}, text = {self.message_text}, sent = {self.sent}>"

class UserMessage(db.Model):
    """ middle table between users and messages """

    __tablename__ = "users_messages"

    user_message_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    message_id = db.Column(db.Integer, db.ForeignKey('messages.message_id'))

    user = db.relationship('User', backref='users_messages')
    message = db.relationship('Message', backref='users_messages')

    # 'user-messages' = a list of UserMessage objects

    def __repr__(self):
        return f"<user_message_id = {self.user_message_id}, user = {self.user}, message = {self.message}>"


def connect_to_db(flask_app, db_uri='postgresql:///affirmations_db', echo=True):
    flask_app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    flask_app.config['SQLALCHEMY_ECHO'] = echo
    flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.app = flask_app
    db.init_app(flask_app)

    print('Connected to the db!')

if __name__ == '__main__':
    from server import app

    # Call connect_to_db(app, echo=False) if your program output gets
    # too annoying; this will tell SQLAlchemy not to print out every
    # query it executes.

    connect_to_db(app)
    