from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.routes import auth, users, cases, evidence, interrogation, predictive

app = FastAPI(title="AI Investigation Assistant")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ปรับสำหรับ production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/v1/auth", tags=["auth"])
app.include_router(users.router, prefix="/api/v1/users", tags=["users"])
app.include_router(cases.router, prefix="/api/v1/cases", tags=["cases"])
app.include_router(evidence.router, prefix="/api/v1/evidence", tags=["evidence"])
app.include_router(interrogation.router, prefix="/api/v1/interrogation", tags=["interrogation"])
app.include_router(predictive.router, prefix="/api/v1/predictive", tags=["predictive"])

@app.get("/")
def read_root():
    return {"msg": "AI Investigation Assistant API"}