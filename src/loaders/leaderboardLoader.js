import axiosInstance from "../axiosInstance";

export async function loader() {
    try {
        const response = await axiosInstance.get("/score/leaderboard");
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 500) {
            throw new Error("Internal Server Error");
        } else {
            throw new Error(error.message);
        }
    }
};