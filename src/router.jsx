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
                element: <LeaderboardPage />,
                loader: async () => {
                    const response = await fetch("/api/score/leaderboard");
                    if (response.status === 500) {
                        throw new Response("Internal Server Error", {status: 500});
                    }
                    
                    return response.json();
                }
            }
        ]
    }
]

export default routes;