
import os
from twilio.rest import Client
import json
# from server import twilio_sid, auth_token, verify_service_sid


secrets_dict = json.loads(open('data/secrets.json').read())
twilio_sid = secrets_dict["TWILIO_ACCOUNT_SID"]
auth_token = secrets_dict["TWILIO_AUTH_TOKEN"]
message_service_sid = secrets_dict["MESSAGING_SERVICE_SID"]
verify_service_sid = secrets_dict["VERIFY_SERVICE_SID"]

account_sid = twilio_sid
auth_token = auth_token
client = Client(account_sid, auth_token)

# def create_service():
#     """ Create a service """
#     service = client.verify.services.create(
#                                         friendly_name='New Service'
#                                     )
#     print(service.sid)

# def fetch_service():
#     """ Fetch a service """
#     service = client.verify.services(verify_service_sid).fetch()
#     print(service.sid)

#     return service.sid


def send_token(phone):
    """ Start a verification, send verification token """
    verification = client.verify \
                        .services(verify_service_sid) \
                        .verifications \
                        .create(to=phone, channel='sms')
    print(verification.status)

    # return verification.sid


# def fetch_verification():
#     """ Fetch a verification """
#     verification = client.verify \
#                         .services(verify_service_sid) \
#                         .verifications(verification.sid) \
#                         .fetch()
#     print(verification.status)

#     return verification.status


# def approve_verification():
#     """ Approve verification """
#     verification = client.verify \
#                         .services(service.sid) \
#                         .verifications('+15109819837') \
#                         .update(status='approved')
#     print(verification.status)

#     return verification.status


def check_verification():
    """ Check a verification (validate) """
    verification_check = client.verify \
                            .services(verify_service_sid) \
                            .verification_checks \
                            .create(to='+15109819837', code='123456')
    print(verification_check.status)

    return verification_check.status