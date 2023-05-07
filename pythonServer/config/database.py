from sqlalchemy import create_engine, MetaData

import json
import os

DASE_DIR = os.path.dirname(os.path.abspath(__file__))
SECRET_FILE = os.path.join(DASE_DIR,'secrets.json')
secrets = json.loads(open(SECRET_FILE).read())

DB_INFO = secrets["DB"]

DB_URL = f"mysql+pymysql://{DB_INFO['user']}:{DB_INFO['password']}@{DB_INFO['host']}/{DB_INFO['database']}?charset-utf8"


engine = create_engine(DB_URL)
meta = MetaData()



conn = engine.connect()
