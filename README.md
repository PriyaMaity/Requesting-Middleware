# 🚀 Express Request Logging Middleware Project

## 📋 Description

This project demonstrates how to build a Node.js application using Express with custom middleware to log request details. The middleware captures essential information such as:

- HTTP Method
- Requested URL
- IP Address
- Timestamps
- Response Status Code
- Time Taken to Process the Request

It helps monitor and debug the app by providing insight into request-response cycles.

---

## 🎯 Objectives

- Understand the role of middleware in Express.
- Implement a custom logging middleware called `requestLogger`.
- Capture real-time request details.
- Learn to apply middleware globally.
- (Optional) Add different logging levels (`infoLogger`).

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/request-middlware.git
cd request-middlware
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
node index.js
```

The server will start on **http://localhost:8090**

---

## 🔧 Routes Available

- `/` – Home Page
- `/about` – About Page (You can add more pages as needed)

---

## 🧪 Sample Logs

```bash
Listening to Port : 8090
Developer Name: Priya Maity
[INFO] Request received: GET /
[INFO] [2025-04-11T13:33:54.128Z] GET / - IP: ::1 - 200 - 7ms
[INFO] Request received: GET /about
[INFO] [2025-04-11T13:34:00.602Z] GET /about - IP: ::1 - 200 - 2ms
```

---

## 👩‍💻 Developer

- **Name:** Priya Maity
