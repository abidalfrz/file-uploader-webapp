from fastapi import FastAPI, UploadFile, File
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import shutil
import os
from typing import List
import aiofiles
from fastapi.staticfiles import StaticFiles

app = FastAPI()

os.makedirs("./uploaded_files", exist_ok=True)

app.mount("/static", StaticFiles(directory="uploaded_files"), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # Port of Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UploadResponse(BaseModel):
    filename: str

    class config:
        orm_mode = True

@app.get("/")
def home():
    return {"message": "Welcome to the File Uploader API!"}

@app.post("/files/upload/", response_model=UploadResponse)
async def upload_file(file_upload: UploadFile = File(...)):
    
    data = await file_upload.read()

    save_path = f"./uploaded_files/{file_upload.filename}"

    async with aiofiles.open(save_path, 'wb') as out_file:
        await out_file.write(data)

    return {"filename": file_upload.filename}

@app.get("/files/all", response_model=List[UploadResponse])
def list_files():
    files = os.listdir("./uploaded_files")

    files = [f for f in files if os.path.isfile(os.path.join("./uploaded_files", f))]
    return [{"filename": filename} for filename in files]

if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)