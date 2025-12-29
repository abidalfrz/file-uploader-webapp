from pydantic import BaseModel

class UploadResponse(BaseModel):
    filename: str

    class config:
        orm_mode = True