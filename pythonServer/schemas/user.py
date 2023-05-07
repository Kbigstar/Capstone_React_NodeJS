from pydantic import BaseModel


class User(BaseModel):
    email: str
    password: str
    name : str

class LoginUser(BaseModel):
    email: str
    password: str