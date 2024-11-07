import { scores } from "./scores"
import "./LeaderboardPage.css"

export default function LeaderboardPage() {
    return (
        <div className="leaderboard-page">
            <h2>The Maths Club Quiz</h2>
            <h1>Leaderboard</h1>
            <div className="leaderboard-container">
                <table className="leaderboard">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            scores
                                .sort( (a, b) => b.score > a.score ? 1 : -1 )
                                .map(d => (
                                <tr>
                                    <td>{d.username}</td>
                                    <td>{d.score}</td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
};
