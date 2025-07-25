from pydantic import BaseModel

class UserBase(BaseModel):
    username: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    class Config:
        orm_mode = True

class CaseBase(BaseModel):
    title: str

class Case(CaseBase):
    id: int
    status: str
    class Config:
        orm_mode = True