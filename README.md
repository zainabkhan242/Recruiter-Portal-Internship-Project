# Recruiter Portal

A web application that helps recruiters add candidates, view candidate profiles and manage resumes in one place. Built as an internship project.

## Features

- Home, About and Contact pages with a responsive navigation bar
- Recruiter portal page to view and manage candidates
- Add new users / candidates through a form
- Candidate cards that show each candidate's details at a glance
- Resume upload for candidates

## Tech Stack

- **Frontend:** React (Create React App), HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Project Structure

```
Recruiter-Portal-Internship-Project/
├── backend/                  # Node.js + Express API
│   ├── package.json
│   └── ...
├── frontend/                 # React app
│   ├── public/
│   └── src/
│       └── components/
│           ├── Home.js
│           ├── About.js
│           ├── Contact.js
│           ├── Navbar.js
│           ├── RecruiterPortal.js
│           ├── AddUser.js
│           ├── CandidateCard.js
│           └── ResumeUpload.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB (local install or a free MongoDB Atlas cluster)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/zainabkhan242/Recruiter-Portal-Internship-Project.git
cd Recruiter-Portal-Internship-Project
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```
PORT=5000
MONGO_URI=your-mongodb-connection-string
```

Start the server:

```bash
npm start
```

The API runs at http://localhost:5000/.

### 3. Set up the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm start
```

The app opens at http://localhost:3000/.

## Environment Variables

| Variable    | Description                  |
|-------------|------------------------------|
| `PORT`      | Port the backend runs on     |
| `MONGO_URI` | MongoDB connection string    |

Never commit your `.env` file to GitHub.

## Future Improvements

- User authentication for recruiters
- Search and filter candidates by skills
- Email notifications
- Interview scheduling

## Author

**Zainab Khan**
GitHub: [@zainabkhan242](https://github.com/zainabkhan242)

## License

This project is licensed under the MIT License.
