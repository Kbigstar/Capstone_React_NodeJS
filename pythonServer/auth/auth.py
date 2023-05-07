import jwt
import os
import json
import datetime

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SECRET_FILE = os.path.join(BASE_DIR,'../config/secrets.json')
secrets = json.loads(open(SECRET_FILE).read())

jwt_INFO = secrets['JWT']

access_token = jwt.encode({'id' : 1}, jwt_INFO['SECRET'], algorithm = 'HS256')

