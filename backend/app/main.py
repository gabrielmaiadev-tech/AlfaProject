import os
from contextlib import asynccontextmanager

from fastapi import FastAPI
from sqlalchemy import create_engine, text

from app.models import Base, Project, Task, User

database_url = os.getenv(
    "DATABASE_URL",
    "postgresql+psycopg://devflow:devflow_local@localhost:5432/devflow",
)
engine = create_engine(database_url, pool_pre_ping=True)


@asynccontextmanager
async def lifespan(_: FastAPI):
    Base.metadata.create_all(bind=engine)
    yield
    engine.dispose()


app = FastAPI(
    title="DevFlow API",
    description="API de produtividade e gestão de tarefas para equipes de tecnologia.",
    version="0.1.0",
    lifespan=lifespan,
)


@app.get("/health", tags=["health"])
def health_check() -> dict[str, str]:
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))
    return {"status": "ok"}