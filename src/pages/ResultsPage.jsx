import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../reg.css';

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
    const quizResultsFromLocation = location.state || {};
    const { score, total, attempted, incorrectAnswers, timeTaken } = quizResultsFromLocation;

    setScore(score || 0);
    setTotal(total || 0);
    setAttempted(attempted || 0);
    setIncorrectAnswers(incorrectAnswers || 0);
    setTimeTaken(timeTaken || 0);

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

        <AnalysisTable>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Questions:</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>Attempted:</td>
              <td>{attempted}</td>
            </tr>
            <tr>
              <td>Correct:</td>
              <td>{score / 4}</td>
            </tr>
            <tr>
              <td>Incorrect:</td>
              <td>{incorrectAnswers}</td>
            </tr>
            <tr>
              <td>Time Taken:</td>
              <td>{Math.floor(timeTaken / 60)}m {timeTaken % 60}s</td>
            </tr>
            <tr>
              <td>Score:</td>
              <td>{score}</td>
            </tr>
          </tbody>
        </AnalysisTable>

        <div>{statusMessage && <Status>{statusMessage}</Status>}</div>
        {isEmailSent && <TimerText>Redirecting in {timer} seconds...</TimerText>}
      </Card>
    </ResultsWrapper>
  );
};

export default ResultsPage;

// Enhanced Table and Styling
const ResultsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f6f9fc;
  color: #333;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Card = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 700px;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ResultsTitle = styled.h2`
  font-size: 2.5rem;
  color: #0056b3;
  margin-bottom: 1rem;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ScoreText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #0056b3;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Score = styled.span`
  font-size: 2.5rem;
  color: #00b74a;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Total = styled.span`
  font-size: 2rem;
  color: #ff4444;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const FeedbackText = styled.p`
  font-size: 1.6rem;
  color: #666;
  margin-bottom: 2rem;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
const AnalysisTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px; /* Rounded corners for the table */
  overflow: hidden; /* Ensure corners are rounded for table */
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #0056b3;
    color: white;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #e2e2e2;
  }

  td {
    color: #333;
  }

  /* Add rounded corners to the rows */
  tr:first-child td {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  tr:last-child td {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px;
  }
`;


const Status = styled.div`
  font-size: 1.4rem;
  color: #555;
  margin-top: 1rem;
`;

const TimerText = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #ff6347;
  margin-top: 1rem;
  animation: smoothBlink 1.5s ease-in-out infinite;
`;



    // sessionStorage.removeItem('quizResults'); // Clear session storage
