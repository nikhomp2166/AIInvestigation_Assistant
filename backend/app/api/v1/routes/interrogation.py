from fastapi import APIRouter, UploadFile, File, Form

router = APIRouter()

@router.post("/stt")
def speech_to_text(audio_file: UploadFile = File(...)):
    return {"transcript": "stub transcript"}

@router.post("/format")
def format_transcript(raw_transcript: str = Form(...)):
    return {"formatted_text": "formatted transcript stub"}

@router.post("/sheet")
def upload_to_sheet(sheet_id: str = Form(...), text: str = Form(...)):
    return {"msg": "uploaded to sheet"}