from pydantic import BaseModel, EmailStr
from typing import Optional


class HCPCreate(BaseModel):
    name: str
    specialty: Optional[str] = None
    hospital: Optional[str] = None
    city: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None


class HCPResponse(HCPCreate):
    id: int

    class Config:
        from_attributes = True