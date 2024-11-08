import { scores as initialScores } from "./scores"
import { useUser } from "../contexts/UserContext"
import "./LeaderboardPage.css"
import { useEffect, useState } from "react";
import LeaderboardTable from "./LeaderboardTable";

export default function LeaderboardPage() {
    const {username, score} = useUser();
    const [scores, setScores] = useState(initialScores);

    useEffect(() => {
        if (username) {
            const userIndex = scores.findIndex(x => x.username.toLowerCase() === username.toLowerCase());
            
            if (userIndex < 0) {
                // If the user doesn't exist, add a new score entry
                initialScores.push({ username: username, score: score });
            } else {
                // If the user exists, update their score
                initialScores[userIndex].score = score
            }
        }

        setScores([...initialScores]);
    }, []);

    return (
        <div className="leaderboard-page">
            <h2>The Maths Club Quiz</h2>
            <h1>Leaderboard</h1>
            <div className="leaderboard-container">
                <LeaderboardTable scoreData={scores}/>
            </div>
        </div>
    )
};
