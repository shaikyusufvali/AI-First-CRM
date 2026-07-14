from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.db import get_db
from app.schemas.hcp import HCPCreate, HCPResponse
from app.services.hcp_service import (
    get_all_hcp,
    get_hcp,
    create_hcp,
    update_hcp,
    delete_hcp,
)

router = APIRouter(prefix="/hcp", tags=["HCP"])


@router.get("/", response_model=list[HCPResponse])
def read_all(db: Session = Depends(get_db)):
    return get_all_hcp(db)


@router.get("/{hcp_id}", response_model=HCPResponse)
def read_one(hcp_id: int, db: Session = Depends(get_db)):
    return get_hcp(db, hcp_id)


@router.post("/", response_model=HCPResponse)
def create(data: HCPCreate, db: Session = Depends(get_db)):
    return create_hcp(db, data)


@router.put("/{hcp_id}", response_model=HCPResponse)
def update(hcp_id: int, data: HCPCreate, db: Session = Depends(get_db)):
    return update_hcp(db, hcp_id, data)


@router.delete("/{hcp_id}")
def delete(hcp_id: int, db: Session = Depends(get_db)):
    return delete_hcp(db, hcp_id)