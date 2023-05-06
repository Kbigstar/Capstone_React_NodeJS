from pydantic import BaseModel


class User(BaseModel):
    men_no: int
    men_id: str
    mem_pwd: str
    men_phone: str