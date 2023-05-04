from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine, MetaData
import json
import os

DASE_DIR = os.path.dirname(os.path.abspath(__file__))
SECRET_FILE = os.path.join(DASE_DIR,'secrets.json')
secrets = json.loads(open(SECRET_FILE).read())

DB_INFO = secrets["DB"]

DB_URL = f"mysql+pymysql://{DB_INFO['user']}:{DB_INFO['password']}@{DB_INFO['host']}/{DB_INFO['database']}?charset-utf8"

# class engineconn:

#     def __init__(self):
#         self.engine = create_engine(DB_URL, pool_recycle = 500)

#     def sessionmaker(self):
#         Session = sessionmaker(bind=self.engine)
#         session = Session()
#         return session

#     def connection(self):
#         conn = self.engine.connect()
#         return conn


from sqlalchemy import create_engine, MetaData
engine = create_engine(DB_URL)
meta = MetaData()
conn = engine.connect()

print(DB_URL)