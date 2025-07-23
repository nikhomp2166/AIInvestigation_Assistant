from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_cases():
    return [{"id": 1, "title": "Case Example", "status": "Under Investigation"}]

@router.post("/")
def create_case():
    return {"msg": "Case created"}