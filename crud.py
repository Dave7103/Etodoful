# app/crud.py
from sqlalchemy.orm import Session
import models, schemas

def get_todos(db: Session):
    return db.query(models.ToDo).all()

def get_todo(db: Session, todo_id: int):
    return db.query(models.ToDo).filter(models.ToDo.id == todo_id).first()

def create_todo(db: Session, todo: schemas.TodoCreate):
    db_todo = models.ToDo(title=todo.title, completed=False)  # ✅ only this line!
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo

def update_todo(db: Session, todo_id: int, todo: schemas.TodoUpdate):
    db_todo = get_todo(db, todo_id)
    if db_todo:
        db_todo.title = todo.title
        db_todo.completed = todo.completed
        db.commit()
        db.refresh(db_todo)
    return db_todo

def delete_todo(db: Session, todo_id: int):
    db_todo = get_todo(db, todo_id)
    if db_todo:
        db.delete(db_todo)
        db.commit()
    return db_todo

def filter_todos(db: Session, completed: bool):
    return db.query(models.Todo).filter(models.ToDo.completed == completed).all()
