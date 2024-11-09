import { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";
import { useNavigate, Form } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import "./QuizPage.css";

export default function QuizPage() {
    const navigate = useNavigate();
    const questions = useLoaderData();

    const { username, score, setScore } = useUser();

    const [answers, setAnswers] = useState({});
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

    const handleAnswerChange = (e, questionNumber) => {
        setCurrentAnswer(e.target.value);

        setAnswers(prev => ({ ...prev, [questionNumber]: currentAnswer }));
    }

    const handleAnswerSubmit = () => {
        if (validateAnswer()) {
            const questionNumber = currentQuestionIndex+1;
            const correctAnswer = questions.find(q => q.questionNumber === questionNumber).correctAnswer;

            if (currentAnswer == correctAnswer) {
                setScore(prevScore => prevScore + 1);
            }

            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setCurrentAnswer("")
        }
    }

    useEffect(() => {
        if (!username) {
            navigate("/")
        }
    }, [username]);

    const currentQuestion = questions[currentQuestionIndex];
 
    return (
        <div className="quiz-container">
            <h3>Hi, {username}! Welcome to</h3>
            <h1>The Maths Club Quiz</h1>
            {
                currentQuestion ? (
                    <div className="quiz">
                        <h3>Question {currentQuestion.questionNumber}</h3>
                        <div className="quiz-question">
                            <p className="question-text">{currentQuestion.questionText} =</p>
                            <input 
                                autoFocus
                                required
                                type="text"
                                value={currentAnswer}
                                placeholder="answer"
                                className="answer"
                                onKeyDown={handleKeyPress}
                                onChange={e => handleAnswerChange(e, currentQuestion.questionNumber)} />
                            <button 
                                onClick={handleAnswerSubmit}
                                className="answer-btn">
                                    Next
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="quiz-complete">
                        <p>Quiz Complete!</p>
                        <p>You scored: {score}/{questions.length}</p>
                        <Form method="POST" action="/submit-score">
                            <input type="hidden" name="username" value={username} />
                            <input type="hidden" name="score" value={score} />
                            <button 
                                type="submit" 
                                className="quiz-submit-btn">
                                Go to leaderboard
                            </button>
                        </Form>
                    </div>
                )
            }
        </div>
    )
}