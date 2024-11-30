import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../reg.css'
const ResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Access location state
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');
  const [timer, setTimer] = useState(0);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const emailSentRef = useRef(false);

  useEffect(() => {
    // Fetch quiz results from location.state
    const quizResultsFromLocation = location.state || {};
    const { score, total, attempted, incorrectAnswers, timeTaken } = quizResultsFromLocation;

    setScore(score || 0);
    setTotal(total || 0);
    setAttempted(attempted || 0);
    setIncorrectAnswers(incorrectAnswers || 0);
    setTimeTaken(timeTaken || 0);

    // Retrieve user data from localStorage
    const storedName = localStorage.getItem('name') || 'Student';
    const storedEmail = localStorage.getItem('email');

    if (!storedEmail) {
      setStatusMessage('Error: No registered email found.');
    } else if (storedEmail && !emailSentRef.current) {
      sendResultsToEmail(storedName, storedEmail, score, total, timeTaken);
      emailSentRef.current = true;
    }
  }, [location.state]);

  const sendResultsToEmail = (name, email, score, total, timeTaken) => {
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    const formattedTime = `${minutes}m ${seconds}s`;

    emailjs
      .send(
        'service_m2o06bk',
        'template_enabqkb',
        {
          from_name: name,
          email: email,
          time_spent: formattedTime,
          total_questions: total,
          quiz_result: `
          ${score === total * 4 ? "Perfect! 🎉" : score >= total * 3 ? "Fantastic! 🌟" : score >= total / 2 ? "Well done! 👍" : "Good try, keep improving! 💪"}
          You scored ${score} out of ${total * 4} correctly.
          ${score === total * 4 ? "You're a quiz master! 🏆" : score >= total * 3 ? "Keep up the great work! 🚀" : score >= total / 2 ? "Keep pushing, you're doing great! 💯" : "Don't give up, you'll do better next time! 💪"}
        `,
        },
        '7hW1qWdtrW8zERMVZ'
      )
      .then(() => {
        setStatusMessage('Your results have been sent to your registered email! 🎉');
        setIsEmailSent(true);
        startTimer();
      })
      .catch(() => {
        setStatusMessage('Failed to send message. Please try again later.');
      });
  };

  const startTimer = () => {
    const countdownTime = 5;
    setTimer(countdownTime);

    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(timerInterval);
          navigateToRegistration();
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const navigateToRegistration = () => {
    navigate('/');
    sessionStorage.removeItem('quizResults'); // Clear session storage
  };

  return (
    <ResultsWrapper>
      <Card>
        <ResultsTitle>Your Results</ResultsTitle>

        <ScoreText>
          <Score>{score}</Score> / <Total>{total * 4}</Total>
        </ScoreText>

        <FeedbackText>
          {score === total
            ? 'Excellent! Perfect score!'
            : score >= total / 2
            ? 'Good job! Keep it up!'
            : 'You can do better! Try again!'}
        </FeedbackText>

        <AnalysisContainer>
          <AnalysisItem>
            <Label>Total Questions:</Label>
            <Value>{total}</Value>
          </AnalysisItem>
          <AnalysisItem>
            <Label>Attempted:</Label>
            <Value>{attempted}</Value>
          </AnalysisItem>
          <AnalysisItem>
            <Label>Correct:</Label>
            <Value>{score / 4}</Value>
          </AnalysisItem>
          <AnalysisItem>
            <Label>Incorrect:</Label>
            <Value>{incorrectAnswers}</Value>
          </AnalysisItem>
          <AnalysisItem>
            <Label>Time Taken:</Label>
            <Value>{Math.floor(timeTaken / 60)}m {timeTaken % 60}s</Value>
          </AnalysisItem>
          <AnalysisItem>
            <Label>Score:</Label>
            <Value>{score}</Value>
          </AnalysisItem>
        </AnalysisContainer>

        <div>{statusMessage && <Status>{statusMessage}</Status>}</div>
        {isEmailSent && <TimerText>Redirecting in {timer} seconds...</TimerText>}
      </Card>
    </ResultsWrapper>
  );
};

export default ResultsPage;

const ResultsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f6f9fc; /* Soft light background */
  color: #333; /* Neutral text color */
  padding: 2rem;
`;

const Card = styled.div`
  background: #ffffff; /* Clean white card */
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  width: 90%;
  max-width: 600px;
  text-align: center;
`;

const ResultsTitle = styled.h2`
  font-size: 2.5rem;
  color: #0056b3; /* Bold quiz-themed blue */
  margin-bottom: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const ScoreText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #0056b3; /* Highlighted blue for quiz branding */
`;

const Score = styled.span`
  font-size: 2.5rem;
  color: #00b74a; /* Green for correct answers */
`;

const Total = styled.span`
  font-size: 2rem;
  color: #ff4444; /* Red for total/remaining */
`;

const FeedbackText = styled.p`
  font-size: 1.6rem;
  color: #666;
  margin-bottom: 2rem;
  font-style: italic;
`;

const AnalysisContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  color: #444;
`;

const AnalysisItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
`;

const Label = styled.div`
  font-weight: bold;
  color: #555;
`;

const Value = styled.div`
  color: #0056b3; /* Matches quiz branding */
`;

const Status = styled.div`
  font-size: 1.4rem;
  color: #555;
  margin-top: 1rem;
`;


const TimerText = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #ff6347; /* Red-orange color for timer */
  margin-top: 1rem;
  animation: smoothBlink 1.5s ease-in-out infinite;
`;



