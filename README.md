# Task Management Application

A full-stack Task Management Application that allows users to securely manage their tasks with authentication and personalized task access. Users can create, update, delete, search, and filter tasks while tracking their completion status.

## Live Demo

**Frontend:** https://task-management-tawny-tau.vercel.app

**Backend:** https://taskmanagement-nm95.onrender.com

## Project Overview

This application helps users organize and manage their daily tasks efficiently. Each user has a separate workspace where they can create and manage their own tasks without accessing tasks belonging to other users.

The project implements secure authentication using JWT and cookies, ensuring that task operations can only be performed by the owner of the task.

---

## Features

### Authentication & Authorization

* User Registration
* User Login
* User Logout
* JWT-based Authentication
* Protected Routes
* User-specific Data Access

### Task Management

* Create New Tasks
* View Tasks
* Update Existing Tasks
* Delete Tasks
* Mark Tasks as Complete
* Mark Tasks as Pending
* User-specific Task Ownership

### Search 

* Search Tasks
* Dynamic Task Updates

### User Experience

* Responsive Design
* Toast Notifications
* Sidebar Navigation
* Real-time UI Updates

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Context API
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Tokens)
* Cookies
* Cookie Parser

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## Project Structure

```text
Task-Management/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── controller/
│   ├── middleware/
│   ├── models/
│   ├── utils/
│   └── package.json
│
└── README.md
```

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Nishikantkumar192/TaskManagement
cd Task-Management
```

### Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

## Environment Variables

Create a `.env` file inside the `server` directory.

```env
MONGODB_URL=
JWT_SECRET=
```

---

## Running the Project

### Run Frontend

```bash
cd client
npm run dev
```

### Run Backend

```bash
cd server
npm start
```

### Run Both Simultaneously

```bash
npm run both
```

> Uses Concurrently for running frontend and backend together.

---

## API Endpoints

### Authentication Routes

| Method | Endpoint               | Description           |
| ------ | ---------------------- | --------------------- |
| POST   | `/api/auth/register`   | Register User         |
| POST   | `/api/auth/log-in`     | Login User            |
| GET    | `/api/auth/logout`     | Logout User           |
| GET    | `/api/auth/isLoggedIn` | Verify Authentication |

### Task Routes

| Method | Endpoint        | Description |
| ------ | --------------- | ----------- |
| GET    | `/api/data`     | Fetch Tasks |
| POST   | `/api/data`     | Create Task |
| PUT    | `/api/data/:id` | Update Task |
| DELETE | `/api/data/:id` | Delete Task |

---


## Video Demonstration

🚀 **Live Demo:** https://task-management-tawny-tau.vercel.app

🎥 **Video Walkthrough:** [Watch Here](https://youtu.be/HVjlgFLmXdY)

## Security Features

* JWT Authentication
* Protected API Routes
* Cookie-based Authentication
* User-specific Authorization
* CORS Protection
* Secure Password Hashing using bcryptjs

---

## Future Improvements

* Due Dates for Tasks
* Task Categories
* Task Priority Levels
* Drag & Drop Task Management
* Email Notifications
* Dark Mode
* Activity Logs
* Team Collaboration Features

---

## Learning Outcomes

Through this project, I gained practical experience with:

* Full Stack Development
* REST API Development
* Authentication & Authorization
* MongoDB Database Design
* State Management using Context API
* Frontend Deployment using Vercel
* Backend Deployment using Render
* Debugging Production Issues
* CORS Configuration
* JWT & Cookie Authentication

---

## Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

## License

This project was developed as an assignment and learning project for educational purposes.

---

## Author

**Nishikant Kumar**

Electronics & Communication Engineering Student

Passionate about Full-Stack Development, Problem Solving, and Building Practical Software Solutions.
