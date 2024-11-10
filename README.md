# Maths Quiz Frontend

## Project Description
This application contains the frontend for a maths quiz leaderboard, developed using React. The app allows users to log in, attempt a math quiz, and view a leaderboard of top scores.

The app implements React Router for routing, and axios to fetch quiz data. It is non-responsive and intended for dekstop use only. 

## Live Demo
Visit the live website: [Maths Quiz](https://lively-sand-066de3b03.5.azurestaticapps.net)

## Features
- Login page: simulates user login - this project will not contain any real user authentication
- Quiz page: displays a set of math questions and tracks user answers.
- Leaderboard page: displays the highest scores based on user answers.

## Getting Started
1. **Clone both the frontend and backend repositories:**
    - Frontend: `git clone https://github.com/mtk3276/maths-quiz-frontend.git`
    - Backend: `git clone https://github.com/mtk3276/maths-quiz-backend.git`
2. **Install dependencies:** 
    - From the frontend directory run: `npm install`
    - From the backend directory run: `npm install`
3. **Start the backend server:**
    - From the backend directory, run: `npm start`
    - The backend should be running on [http://localhost:5001](http://localhost:5001)
4. **Start the frontend app:**
    - From the frontend directory, run: `npm run dev`
5. **Open app in browser:** 
    - Go to [http://localhost:5173](http://localhost:5173) to view the app

## Technologies Used
- **React** - For the main UI 
- **React Router** - To enable navigation and routing between pages
- **Axios** - To make HTTP requests to the backend API
- **Azure Static Web App** - For hosting the frontend

## Future Development
- Error page for a better user experience when things go wrong
- Navigation bar to allow users to navigate through the website 
- Back button in quiz so users can go back and forth between questions 
- View results button on quiz page when quiz is complete to enable a user to review which questions they answered correctly and incorrectly.