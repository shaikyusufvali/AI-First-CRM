from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.db import Base, engine
from app.models.hcp import HCP

from app.routers.hcp import router as hcp_router
from app.routers.ai import router as ai_router

# Create Database Tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI First CRM",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(hcp_router)
app.include_router(ai_router)


@app.get("/")
def home():
    return {
        "message": "AI First CRM Running 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8000,
        reload=True
    )