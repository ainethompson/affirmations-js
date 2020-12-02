
import os
from twilio.rest import Client
import json
from crud import get_user_by_phone

secrets_dict = json.loads(open('data/secrets.json').read())
twilio_sid = secrets_dict["TWILIO_ACCOUNT_SID"]
auth_token = secrets_dict["TWILIO_AUTH_TOKEN"]
message_service_sid = secrets_dict["MESSAGING_SERVICE_SID"]
verify_service_sid = secrets_dict["VERIFY_SERVICE_SID"]

account_sid = twilio_sid
auth_token = auth_token
client = Client(account_sid, auth_token)


def send_token(phone):
    """ Start a verification, send verification token """
    verification = client.verify \
                        .services(verify_service_sid) \
                        .verifications \
                        .create(to=phone, channel='sms')
    print(verification.status)


def check_verification(phone, code):
    """ Check a verification (validate) """
    verification_check = client.verify \
                            .services(verify_service_sid) \
                            .verification_checks \
                            .create(to=phone, code=code)
    print(verification_check.status)
    return verification_check.status


def confirm_unsubscribe(phone):
    
    user = get_user_by_phone(phone)
    quote = f'{user.name} has been unsubscribed from ... . Come back any time by visiting website ...'
    message = client.messages.create(to=phone,
                                    messaging_service_sid=message_service_sid,
                                    body=quote)
    print(message)