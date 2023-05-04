from models import users
from config.database import conn
from fastapi import APIRouter
from schemas.user import User

user = APIRouter()


@user.post('/signup')
def fetch_all():
    return conn.execute(users.select()).fetchall()
