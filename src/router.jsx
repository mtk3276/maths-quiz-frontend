import App from "./App";
import LoginPage from "./routes/LoginPage";
import QuizPage from "./routes/QuizPage";
import LeaderboardPage from "./routes/LeaderboardPage";
import { loader as quizLoader } from "./loaders/quizLoader";
import { loader as leaderboardLoader } from "./loaders/leaderboardLoader";

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
                element: <QuizPage />,
                loader: quizLoader,
            },
            {
                path: "/leaderboard",
                element: <LeaderboardPage />,
                loader: leaderboardLoader,
            }
        ]
    }
]

export default routes;