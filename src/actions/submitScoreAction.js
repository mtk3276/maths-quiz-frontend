import { redirect } from "react-router-dom";
import axios from "axios";

export async function action ({ request }) {
    const formData = await request.formData();
    const username = formData.get("username");
    const score = formData.get("score");

    try {
        const response = await axios.post(
            "/api/score",
            { username, score }, 
            { headers: { "Content-Type": "application/json" } }
        );

        console.log(`Successfully posted score for user ${username}: ` + response.data);
        return redirect("/leaderboard");
    } catch (error) {
        console.error(`Error submitting score for user ${username}: `, error);
        throw error;
    }
};
