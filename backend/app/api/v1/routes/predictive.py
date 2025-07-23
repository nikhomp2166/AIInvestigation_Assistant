from fastapi import APIRouter, UploadFile, File

router = APIRouter()

@router.post("/crime/upload")
def upload_crime_csv(file: UploadFile = File(...)):
    return {"status": "uploaded"}

@router.get("/crime/hotspots")
def get_hotspots():
    return []