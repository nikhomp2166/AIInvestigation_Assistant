import os
from pydantic import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "AI Investigation Assistant"
    SQLALCHEMY_DATABASE_URI: str = os.getenv("DATABASE_URL", "postgresql://postgres:postgres@db:5432/aiinvestigation")
    JWT_SECRET_KEY: str = os.getenv("JWT_SECRET_KEY", "your-secret-key")
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 8  # 8 hours

settings = Settings()