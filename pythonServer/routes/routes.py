from models.models import users
from config.database import conn
from fastapi import APIRouter
from schemas.user import User
from schemas.user import LoginUser

user = APIRouter()


@user.post('/signup')
def fetch_all(item : User):
    try:
        conn.execute(users.insert().values(men_id=item.email,mem_pwd=item.password,men_name=item.name))
        return { 'message' : True }
    except:
        return { 'message' : False }

    
@user.post('/login')
def login_all(item : LoginUser):
    # print(item)
    # print(conn.execute(users.select()).fetchall())    
    try:
        resuit = conn.execute(users.select().where(users.c.men_id == item.email).where(users.c.mem_pwd == item.password))
        for rows in resuit:
            print(rows)
        return { 'message' : True , 'state' : rows }
    except:
        return { 'message' : False , 'state' : '로그인 실패' }




