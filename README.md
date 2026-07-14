# # 🚀 AI First CRM - Healthcare Relationship Management System

<div align="center">

## AI Powered Customer Relationship Management System

A modern Full Stack CRM application built using **FastAPI**, **React**, **MySQL**, **Material UI**, and **Recharts**.

Designed to manage Healthcare Professionals (HCPs) efficiently with a clean dashboard, analytics, search, pagination, and export functionality.

---

![Python](https://img.shields.io/badge/Python-3.13-blue?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green?style=for-the-badge&logo=fastapi)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange?style=for-the-badge&logo=mysql)
![MaterialUI](https://img.shields.io/badge/Material_UI-UI-007FFF?style=for-the-badge&logo=mui)

</div>

---

# 📌 Project Overview

AI First CRM is a Full Stack CRM application developed for managing Healthcare Professionals (HCPs).

The application provides an intuitive dashboard, complete CRUD operations, analytics, search, pagination, and Excel export.

It demonstrates real-world Full Stack development using FastAPI and React.

---

# ✨ Features

## Authentication

- Login Screen
- Protected Routes
- Logout

## HCP Management

- Add HCP
- Edit HCP
- Delete HCP
- View HCP Details

## Dashboard

- Total HCP Count
- Total Cities
- Total Specialties
- Recent HCPs
- Bar Chart
- Pie Chart

## Utilities

- Search
- Pagination
- Export to Excel
- Responsive UI

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Material UI
- Axios
- Recharts
- File Saver
- XLSX

## Backend

- FastAPI
- SQLAlchemy
- Pydantic
- Uvicorn

## Database

- MySQL

## Development Tools

- VS Code
- Git
- GitHub
- Postman
- Swagger UI

---

# 📂 Project Structure

```

AI-First-CRM/
│
├── backend/
│ ├── app/
│ │ ├── database/
│ │ ├── models/
│ │ ├── routers/
│ │ ├── schemas/
│ │ └── main.py
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── layouts/
│ │ ├── pages/
│ │ ├── services/
│ │ └── App.jsx
│
└── README.md

```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/shaikyusufvali/AI-First-CRM.git
```

```
cd AI-First-CRM
```

---

# Backend Setup

```
cd backend
```

Create Virtual Environment

```
python -m venv venv
```

Activate Environment

Windows

```
venv\Scripts\activate
```

Install Packages

```
pip install -r requirements.txt
```

Run Backend

```
uvicorn app.main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

```
cd frontend
```

Install Packages

```
npm install
```

Run

```
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# Database

Database Used

- MySQL

Tables

- hcp

Fields

- id
- name
- specialty
- hospital
- city
- email
- phone

---

# REST API Endpoints

GET

```
/hcp/
```

POST

```
/hcp/
```

PUT

```
/hcp/{id}
```

DELETE

```
/hcp/{id}

```
---

# 📊 Dashboard

The Dashboard provides a quick overview of CRM data.

## Dashboard Widgets

- 📌 Total HCPs
- 🌍 Total Cities
- 🩺 Total Specialties
- 📋 Recent HCPs

## Charts

### 📊 Bar Chart

Displays HCP distribution by City.

### 🥧 Pie Chart

Displays HCP distribution by Specialty.

---

# 📄 HCP Management

The HCP Module supports complete CRUD operations.

## Available Features

- Add HCP
- Update HCP
- Delete HCP
- View HCP Details
- Search HCP
- Pagination
- Export to Excel

---

# 🎨 UI Features

- Material UI Components
- Responsive Layout
- Professional Dashboard
- Sidebar Navigation
- Navbar
- Login Screen
- Protected Routes

---

# 📸 Screenshots

## Login Page

> Add Screenshot Here

```
## 📸 Screenshots

### Login Page

![Login](screenshots/login.png)

### Dashboard

![## 📸 Screenshots

### Login Page

<img width="1349" height="710" alt="image" src="https://github.com/user-attachments/assets/54838359-1077-4296-8499-9915158a6c72" />


### Dashboard

<img width="1364" height="689" alt="image" src="https://github.com/user-attachments/assets/5eb404ed-6fe9-4f5c-8073-b8b7c477a191" />

### HCP Management

![HCP<img width="1351" height="722" alt="image" src="https://github.com/user-attachments/assets/f9ad26c7-fd7b-45e1-a738-ef5300cc3725" />


### Analytics Charts

![Charts](screenshots/charts.png)

### HCP Management

![HCP](screenshots/hcp.png)

### Analytics Charts

![Charts](screenshots/charts.png)
```

---

## Dashboard

> Add Screenshot Here

```
screenshots/dashboard.png
```

---

## HCP Management

> Add Screenshot Here

```
screenshots/hcp.png
```

---

## Charts

> Add Screenshot Here

```
screenshots/charts.png
```

---

# 🚀 Future Enhancements

- JWT Authentication
- Role Based Access
- Email Notifications
- Advanced Filters
- Import Excel
- PDF Export
- Dark Mode
- Audit Logs
- AI Insights
- Docker Deployment
- Cloud Deployment
- Unit Testing

---

# 💼 Skills Demonstrated

- React.js
- FastAPI
- REST API Development
- SQLAlchemy ORM
- MySQL
- CRUD Operations
- Material UI
- Axios
- Recharts
- Excel Export
- Component Based Architecture

---

# 👨‍💻 Author

**Shaik Yusuf Vali**

- GitHub: https://github.com/shaikyusufvali
- LinkedIn: https://www.linkedin.com/in/shaik-yusuf-vali/

---

# ⭐ Support

If you like this project,

Please ⭐ Star this repository.

---

# 📜 License

This project is developed for learning and portfolio purposes.

© 2026 Shaik Yusuf Vali. All Rights Reserved.
