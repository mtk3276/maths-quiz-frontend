import axios from "axios";

export async function loader() {
    try {
        const response = await axios.get("/api/score/leaderboard");
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 500) {
            throw new Error("Internal Server Error");
        } else {
            throw new Error(error.message);
        }
    }
};