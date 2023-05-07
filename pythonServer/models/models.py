
from sqlalchemy import Column, Table
from sqlalchemy.sql.sqltypes import INTEGER, String
from config.database import meta, engine,conn
users = Table('MEMBER', meta,
              Column('men_no', INTEGER(), primary_key=True),
              Column('men_id', String(255)),
              Column('mem_pwd', String(255)),
              Column('men_phone', String(255)),
              )



meta.create_all(engine)

print(conn.execute(users.select()).fetchall())
