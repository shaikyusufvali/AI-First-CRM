from fastapi import APIRouter
from pydantic import BaseModel

from ai.graph import graph
from ai.agent import ask_llm


router = APIRouter(
    prefix="/ai",
    tags=["AI Assistant"],
)


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(request: ChatRequest):

    # Run LangGraph Tool
    state = {
        "message": request.message,
        "result": {},
    }

    result = graph.invoke(state)

    # Run LLM
    llm_response = ask_llm(request.message)

    return {
        "tool_result": result["result"],
        "llm": llm_response,
    }