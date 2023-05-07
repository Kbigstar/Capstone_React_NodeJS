from fastapi import FastAPI

from starlette.middleware.cors import CORSMiddleware
# from database import conn 
from routes.routes import user


app = FastAPI()


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

app.include_router(user)



# @app.post("/signup")
# def create_item():
#     return {"message": 'example'}

