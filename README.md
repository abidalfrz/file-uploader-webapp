# 📂 Simple Full Stack File Uploader

This repository contains a full-stack web application designed for seamless file management. It combines a high-performance FastAPI backend for handling file storage with a modern React (Vite) frontend for an interactive user experience. Users can upload documents or images and view the list of uploaded files through a responsive interface.

---

## 🧠 Features

- File Upload: Users can upload files (documents, images) through a user-friendly web interface.
- File Listing: View a list of all uploaded files with their names.
- Client-Side Routing: Smooth navigation between upload and file list pages using React Router.
- Direct Access: Capability to view or download uploaded files directly from the browser.
- RESTful API: Backend built with FastAPI for efficient file handling and storage.
- Async Processing: Utilizes asynchronous programming for improved performance during file uploads.

---

## 🛠️ Tech Stack

<b>Backend:</b>
- **Python**
- **FastAPI**
- **Uvicorn**
- **aiofiles**

<b>Frontend:</b>
- **JavaScript**
- **React**
- **Vite**
- **React Router DOM**
- **CSS**

---

## 📁 Project Structure

```bash
file-uploader-webapp/
│
├── backend/
│   ├── uploaded_files/      # Storage directory for user uploads
│   ├── schemas/
│   │   └── schema.py         # Pydantic models for validation
│   └── app.py               # Main FastAPI application entry point
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── Navbar.jsx   # Navigation bar component
│   │   ├── css/
│   │   │   ├── App.css      # Global layout styles
│   │   │   ├── Navbar.css   # Navigation specific styles
│   │   │   ├── Fileform.css # Upload form styling
│   │   │   └── Filelist.css # File grid styling
│   │   ├── pages/
│   │   │   ├── Fileform.jsx # File upload page
│   │   │   └── Filelist.jsx # Uploaded files gallery page
│   │   ├── App.jsx          # Main React component & Routing logic
│   │   └── main.jsx         # React entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── requirements.txt         # Python dependencies
```
---

## 🚀 How to Run

To run this project on your local machine, you need to run the backend and frontend in separate terminals.

### 1. Clone the Repository

```bash
git clone https://github.com/abidalfrz/file-uploader-webapp.git
cd file-uploader-webapp
```

### 2. Setup Backend (Terminal 1)

```bash
# Create Virtual Environment
python -m venv venv
source venv/bin/activate      # On Linux/macOS
venv\Scripts\activate.bat     # On Windows

# Install Dependencies
pip install -r requirements.txt

# Run the FastAPI Server
cd backend
python app.py

# The Backend API will be accessible at http://127.0.0.1:8000
```
### 3. Setup Frontend (Terminal 2)

```bash
# Navigate to Frontend Directory
cd frontend

# Install Dependencies
npm install

# Run the Vite Development Server
npm run dev 
# The Frontend will be accessible at http://localhost:5173 (or another port if 5173 is occupied)
``` 

### 4. Access the Application

Open your web browser and navigate to the URL shown in your frontend terminal (usually http://localhost:5173).

1. Use the "Upload File" page to send files to the server.
2. Navigate to the "View Files" page to view and access your uploaded files.
3. Click on a file card to view or download the file.

---

