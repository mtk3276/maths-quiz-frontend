import App from "./App";
import LoginPage from "./routes/LoginPage";
import QuizPage from "./routes/QuizPage";
import LeaderboardPage from "./routes/LeaderboardPage";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
            {
                path: "/quiz",
                element: <QuizPage />
            },
            {
                path: "/leaderboard",
                element: <LeaderboardPage />
            }
        ]
    }
]

export default routes;