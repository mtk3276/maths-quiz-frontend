export async function loader() {
    const response = await fetch("/api/score/leaderboard");
    if (response.status === 500) {
        throw new Response("Internal Server Error", {status: 500});
    }
    
    return response.json();
}