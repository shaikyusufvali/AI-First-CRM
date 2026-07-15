from datetime import datetime


def log_interaction(data: str):
    return {
        "tool": "Log Interaction",
        "status": "success",
        "time": str(datetime.now()),
        "summary": f"Interaction logged successfully.\n\n{data}"
    }


def edit_interaction(data: str):
    return {
        "tool": "Edit Interaction",
        "status": "success",
        "message": f"Interaction updated.\n\n{data}"
    }


def summarize_interaction(data: str):
    words = data.split()

    summary = " ".join(words[:25])

    return {
        "tool": "Summarize",
        "summary": summary + "..."
    }


def extract_entities(data: str):
    return {
        "tool": "Entity Extraction",
        "doctor": "Dr. Sharma",
        "hospital": "Apollo Hospital",
        "product": "CardioX",
        "city": "Hyderabad"
    }


def recommend_next_action(data: str):
    return {
        "tool": "Next Action",
        "recommendation":
        "Schedule follow-up within 7 days and share product brochure."
    }