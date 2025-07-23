from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Enum
from sqlalchemy.orm import relationship
from app.db.base import Base
import enum

class Role(enum.Enum):
    investigator = "investigator"
    supervisor = "supervisor"

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)
    role = Column(Enum(Role), default=Role.investigator)
    is_active = Column(Boolean, default=True)

class Case(Base):
    __tablename__ = "cases"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    status = Column(String, default="Under Investigation")
    created_at = Column(DateTime)
    updated_at = Column(DateTime)
    owner_id = Column(Integer, ForeignKey("users.id"))
    deadline = Column(DateTime)
    owner = relationship("User")