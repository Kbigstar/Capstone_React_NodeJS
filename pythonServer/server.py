from fastapi import FastAPI
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware
from database import engineconn
from models import Test

app = FastAPI()

engine = engineconn()
session = engine.sessionmaker()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    email: str
    password: str
    name: str

class ResponseMessage(BaseModel):
    message: str


@app.post("/signup", response_model=ResponseMessage)
def create_item(item: Item):
    example = session.query(Test).all()
    return {"message": "item received"}

