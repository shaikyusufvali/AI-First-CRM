# 🚀 AI First CRM – AI Powered Healthcare Relationship Management System

<div align="center">

# 🤖 AI First CRM

A modern **AI-powered Customer Relationship Management (CRM)** application developed for managing Healthcare Professionals (HCPs).

Built using **React**, **FastAPI**, **MySQL**, **LangGraph**, **Groq LLM**, **Material UI**, and **Recharts**.

![Python](https://img.shields.io/badge/Python-3.13-blue?style=for-the-badge&logo=python)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green?style=for-the-badge&logo=fastapi)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange?style=for-the-badge&logo=mysql)
![LangGraph](https://img.shields.io/badge/LangGraph-AI-purple?style=for-the-badge)
![Groq](https://img.shields.io/badge/Groq-LLM-red?style=for-the-badge)

</div>

---

# 📌 Project Overview

AI First CRM is a Full Stack Healthcare CRM application that helps manage Healthcare Professionals (HCPs) efficiently.

The application provides:

- Secure Login
- Dashboard Analytics
- Complete HCP CRUD
- Search & Pagination
- Excel Export
- AI Assistant powered by LangGraph + Groq LLM

This project demonstrates modern Full Stack Development with AI integration.

---

# ✨ Features

## 🔐 Authentication

- Login
- Protected Routes
- Logout

---

## 👨‍⚕️ HCP Management

- Add HCP
- Edit HCP
- Delete HCP
- View Details
- Search
- Pagination
- Export Excel

---

## 📊 Dashboard

- Total HCPs
- Total Cities
- Total Specialties
- Recent HCPs
- Bar Chart
- Pie Chart

---

## 🤖 AI Assistant

Integrated using **LangGraph + Groq LLM**

Supports:

- ✅ Log Interaction
- ✅ Edit Interaction
- ✅ Meeting Summarization
- ✅ Entity Extraction
- ✅ Next Action Recommendation

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Material UI
- Axios
- Recharts
- XLSX
- File Saver

---

## Backend

- FastAPI
- SQLAlchemy
- Pydantic
- LangGraph
- LangChain
- Groq LLM
- Uvicorn

---

## Database

- MySQL

---

## Development Tools

- VS Code
- Git
- GitHub
- Swagger UI
- Postman

---

# 📂 Project Structure

```text
AI-First-CRM/

├── backend/
│
│   ├── ai/
│   │   ├── agent.py
│   │   ├── graph.py
│   │   ├── tools.py
│   │   ├── state.py
│   │   └── prompt.py
│
│   ├── app/
│   │   ├── database/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── schemas/
│   │   └── main.py
│
├── frontend/
│
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/shaikyusufvali/AI-First-CRM.git

cd AI-First-CRM
```

## Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend URL

```
http://localhost:5173
```
---

# 🗄 Database

## Database

- MySQL

## Table

**hcp**

Fields

- id
- name
- specialty
- hospital
- city
- email
- phone

---

# 🌐 REST API Endpoints

## Authentication

- Login

## HCP APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/hcp/` | Get all HCPs |
| POST | `/hcp/` | Add HCP |
| PUT | `/hcp/{id}` | Update HCP |
| DELETE | `/hcp/{id}` | Delete HCP |

---

## 🤖 AI APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/ai/chat` | AI Assistant |

Example Request

```json
{
  "message": "Log interaction with Dr Sharma"
}
```

Example Response

```json
{
  "tool_result": {
    "tool": "Log Interaction",
    "status": "success"
  },
  "llm": "..."
}
```

---

# 🤖 AI Workflow

The AI Assistant is powered by **LangGraph**.

Workflow:

```
User Query
      │
      ▼
FastAPI API
      │
      ▼
LangGraph Router
      │
      ├── Log Interaction
      ├── Edit Interaction
      ├── Summarize
      ├── Entity Extraction
      └── Next Action
      │
      ▼
Groq LLM
      │
      ▼
JSON Response
```

---

# 📊 Dashboard

Dashboard includes

- 📌 Total HCPs
- 🌍 Total Cities
- 🩺 Total Specialties
- 📋 Recent HCPs
- 📊 Bar Chart
- 🥧 Pie Chart

---

# 📄 HCP Management

Features

- Add HCP
- Edit HCP
- Delete HCP
- Search
- Pagination
- Export Excel

---

# 📸 Screenshots

## 🔐 Login Page

<img width="1349" height="710" alt="Login" src="https://github.com/user-attachments/assets/54838359-1077-4296-8499-9915158a6c72" />

---

## 📊 Dashboard

<img width="1364" height="689" alt="Dashboard" src="https://github.com/user-attachments/assets/5eb404ed-6fe9-4f5c-8073-b8b7c477a191" />

---

## 👨‍⚕️ HCP Management

<img width="1351" height="722" alt="HCP Management" src="https://github.com/user-attachments/assets/f9ad26c7-fd7b-45e1-a738-ef5300cc3725" />

---

# 🚀 Future Enhancements

- JWT Authentication
- Role Based Access
- AI Analytics
- Email Notifications
- PDF Export
- Import Excel
- Docker Deployment
- Cloud Deployment
- Audit Logs
- Dark Mode

---

# 💼 Skills Demonstrated

- React.js
- FastAPI
- REST API Development
- SQLAlchemy
- MySQL
- Material UI
- Axios
- Recharts
- LangGraph
- LangChain
- Groq LLM
- AI Agent Development
- CRUD Operations
- Prompt Engineering
- Component Based Architecture

---

# 👨‍💻 Author

**Shaik Yusuf Vali**

- GitHub: https://github.com/shaikyusufvali
- LinkedIn: https://www.linkedin.com/in/shaik-yusuf-vali/

---

# ⭐ Support

If you found this project useful,

Please ⭐ Star this repository.

---

# 📜 License

This project is developed for learning, academic submission, and portfolio purposes.

© 2026 Shaik Yusuf Vali. All Rights Reserved.
