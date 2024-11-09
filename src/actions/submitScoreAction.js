import { redirect } from "react-router-dom";

export async function action ({ request }) {
    const formData = await request.formData();
    const username = formData.get("username");
    const score = formData.get("score");

    try {
        const response = await fetch("/api/score", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, score }),
        });

        if (response.ok) {
            console.log(`Score posted successfully for user ${username}`);
        } else {
            throw new Error(`Failed to submit score for user ${username}`);
        }

        return redirect("/leaderboard");
    } catch (error) {
        console.error(`Error submitting score for user ${username}: `, error);
        throw error;
    }
}