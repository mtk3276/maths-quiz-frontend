import "./LeaderboardTable.css"

export default function LeaderboardTable({ scoreData, currentUser }) {
    return (
        <> 
            <table className="leaderboard">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        scoreData
                            .sort( (a, b) => b.score > a.score ? 1 : -1 )
                            .map(d => (
                            <tr key={d.username} className={`${currentUser == d.username ? "currentUserRow" : ""}`}>
                                <td>{d.username}</td>
                                <td>{d.score}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
