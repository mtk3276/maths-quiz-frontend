import { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "./QuizPage.css";

const questions = [
    { id: 1, question: "15 + 31", answer: "46" },
    { id: 2, question: "22 - 14", answer: "8" },
    { id: 3, question: "92 - 6", answer: "86" },
    { id: 4, question: "24 + 27", answer: "51" },
    { id: 5, question: "17 - 5", answer: "12" },
]

export default function QuizPage() {
    const navigate = useNavigate();

    const { username } = useUser();

    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState("");

    const validateAnswer = () => {
        return currentAnswer != "";
    }

    const handleKeyPress = (evt) => {
        if (evt.key === "Return" || evt.key === "Enter") 
            handleAnswerSubmit();

        const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];

        if (!(allowedKeys.includes(evt.key) || /[0-9]/.test(evt.key))) {
            evt.preventDefault();
        }
    }

    const handleAnswerChange = (e, id) => {
        setCurrentAnswer(e.target.value);

        setAnswers(prev => ({ ...prev, [id]: currentAnswer }));
    }

    const handleAnswerSubmit = () => {
        if (validateAnswer()) {
            const id = currentQuestionIndex+1;
            const correctAnswer = questions.find(q => q.id === id).answer;

            if (currentAnswer == correctAnswer) {
                setScore(prevScore => prevScore + 1);
            }

            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setCurrentAnswer("")
        }
    }

    const handleLeaderboardRedirect = () => {
        navigate("/leaderboard")
    }

    const currentQuestion = questions[currentQuestionIndex];
 
    return (
        <div className="quiz">
            <h3>Hi, {username}! Welcome to</h3>
            <h1>The Maths Club Quiz</h1>
            {
                currentQuestion ? (
                    <div className="quiz-question">
                        <p className="question-text">{currentQuestion.question} =</p>
                        <input 
                            autoFocus
                            required
                            type="text"
                            value={currentAnswer}
                            placeholder="answer"
                            className="answer"
                            onKeyDown={handleKeyPress}
                            onChange={e => handleAnswerChange(e, currentQuestion.id)} />
                        <button 
                            onClick={handleAnswerSubmit}
                            className="answer-btn">
                                Next
                        </button>
                    </div>
                ) : (
                    <div className="quiz-complete">
                        <p>Quiz Complete!</p>
                        <p>You scored: {score}/{questions.length}</p>
                        <button onClick={handleLeaderboardRedirect} className="quiz-submit-btn">
                            Go to leaderboard
                        </button>
                    </div>
                )
            }
        </div>
    )
}