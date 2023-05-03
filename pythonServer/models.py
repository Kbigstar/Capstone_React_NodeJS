from sqlalchemy import Column, TEXT, INT, CHAR, BIGINT
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Test(Base):
    __tablename__ = "MEMBER"


    id = Column(BIGINT, nullable=False, autoincrement=True, primary_key=True)
    name = Column(TEXT, nullable=False)
    number = Column(INT, nullable=False)
    # men_no = Column(INT, nullable=True, autoincrement=True, primary_key=True)
    # men_id = Column(CHAR, nullable=True)
    # men_pwd = Column(CHAR, nullable=True)
    # men_name = Column(CHAR, nullable=False)
    # men_phone =  Column(INT, nullable=False)

    # print(men_no)
    # print(men_id)
    # print(men_pwd)
    # print(men_name)
    # print(men_phone)