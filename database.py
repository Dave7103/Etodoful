# app/database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

DATABASE_URL = "postgresql://etodoback_user:UZoTXz4WRZKZ0Ql45G7BthrNnworji8y@dpg-d03p003uibrs73agbra0-a.singapore-postgres.render.com/etodoback"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
Base = declarative_base()
