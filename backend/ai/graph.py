from langgraph.graph import StateGraph, END

from ai.state import AgentState

from ai.tools import (
    log_interaction,
    edit_interaction,
    summarize_interaction,
    extract_entities,
    recommend_next_action,
)


def router(state: AgentState):

    message = state["message"].lower()

    if "log" in message:
        state["result"] = log_interaction(state["message"])

    elif "edit" in message:
        state["result"] = edit_interaction(state["message"])

    elif "summary" in message or "summarize" in message:
        state["result"] = summarize_interaction(state["message"])

    elif "extract" in message:
        state["result"] = extract_entities(state["message"])

    elif "next" in message or "recommend" in message:
        state["result"] = recommend_next_action(state["message"])

    else:
        state["result"] = {
            "tool": "General AI",
            "message": "No matching tool found."
        }

    return state


builder = StateGraph(AgentState)

builder.add_node("router", router)

builder.set_entry_point("router")

builder.add_edge("router", END)

graph = builder.compile()