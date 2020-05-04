import smtplib, json
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

email_pw = json.loads(open("email_and_passwords.json", "r").read())

counter = 1

for team in email_pw:
    mail_content = f'''Hello, Greetings from DSCKIIT,

    Thank you for participating in DevHack 2020. This mail is regarding the login credentials for your DevHack team account. 
    Mentioned below are your team's login credentials. You can login with these on https://devhack.dsckiit.tech/login. 

    You will find further instructions there.

    Email: {team['email']}
    Password: {team['password']}

    Email us if you are not able to log into your accout. We would help you out.

    We wish you all the best for DevHack 2020.
    '''

    #The mail addresses and password

    sender_address = ''
    sender_pass = ''
    receiver_address = team['email']

    #Setup the MIME
    message = MIMEMultipart()
    message['From'] = sender_address
    message['To'] = receiver_address
    message['Subject'] = 'DevHack 2020 - Account Credentials'   #The subject line

    #The body and the attachments for the mail
    message.attach(MIMEText(mail_content, 'plain'))

    #Create SMTP session for sending the mail
    session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
    session.starttls() #enable security
    session.login(sender_address, sender_pass) #login with mail_id and password
    text = message.as_string()
    session.sendmail(sender_address, receiver_address, text)
    session.quit()
    
    print("Mail Sent to ", team['email'], " ", counter)
    counter += 1
    