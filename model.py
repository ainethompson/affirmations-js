"""Models for affirmations app. 
DB name = affirmations_db"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """ A user. """

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.String, nullable=False)
    phone_num = db.Column(db.String, nullable=False, unique=True)
    confirmed = db.Column(db.Boolean, default=False, nullable=False)

    def __repr__(self):
        """ Provide helpful representation when printed """
        return f"<User_id = {self.user_id}, name = {self.name}, phone = {self.phone_num}, confirmed = {self.confirmed}>"
# users_messages = list of UserMessage objects
# call user.users_messages to get all messages a user has been sent

class Message(db.Model):
    """ A message. """

    __tablename__ = "messages"

    message_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    author = db.Column(db.Text)
    text = db.Column(db.Text)
    sent = db.Column(db.Boolean, default=False, nullable=False)

    def __repr__(self):
        return f"<id = {self.message_id}, author = {self.author}, text = {self.text}, sent = {self.sent}>"
# users_messages = list of UserMessage objects
# call message.users_messages to get all users a message has been sent to

class UserMessage(db.Model):
    """ middle table between users and messages """

    __tablename__ = "users_messages"

    user_message_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    message_id = db.Column(db.Integer, db.ForeignKey('messages.message_id'))

    user = db.relationship('User', backref='users_messages')
    message = db.relationship('Message', backref='users_messages')

    def __repr__(self):
        return f"<user_message_id = {self.user_message_id}, user = {self.user.name}, message = {self.message.text}>"


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
    