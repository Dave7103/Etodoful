from pydantic import BaseModel
from typing import Optional

class TodoCreate(BaseModel):
    title: str

class TodoUpdate(BaseModel):
    title: Optional[str] = None
    completed: Optional[bool] = None

class Todo(BaseModel):
    id: int
    title: str
    completed: bool

    class Config:
        orm_mode = True  # Allows SQLAlchemy objects to be converted to Pydantic models

class TodoInDB(Todo):
    id: int

    class Config:
        orm_mode = True  # or from_attributes = True (if using Pydantic v2)
