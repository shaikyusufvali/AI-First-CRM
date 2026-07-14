from sqlalchemy.orm import Session
from app.models.hcp import HCP


def get_all_hcp(db: Session):
    return db.query(HCP).all()


def get_hcp(db: Session, hcp_id: int):
    return db.query(HCP).filter(HCP.id == hcp_id).first()


def create_hcp(db: Session, data):
    hcp = HCP(**data.dict())
    db.add(hcp)
    db.commit()
    db.refresh(hcp)
    return hcp


def update_hcp(db: Session, hcp_id: int, data):
    hcp = get_hcp(db, hcp_id)

    if not hcp:
        return None

    for key, value in data.dict().items():
        setattr(hcp, key, value)

    db.commit()
    db.refresh(hcp)

    return hcp


def delete_hcp(db: Session, hcp_id: int):
    hcp = get_hcp(db, hcp_id)

    if not hcp:
        return None

    db.delete(hcp)
    db.commit()

    return {"message": "Deleted Successfully"}