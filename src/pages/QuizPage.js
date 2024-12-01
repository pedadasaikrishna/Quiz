import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import data from '../data';

const QuizPage = () => {
  const navigate = useNavigate();
  const [collegeId, setCollegeId] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [, setScore] = useState(0);
  const [timer, setTimer] = useState(30 * 60); // 30-minute countdown timer
  const [, setIsQuizCompleted] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(
    data.map(() => ({ answer: null }))
  );
  const [, setCorrectAnswers] = useState(0);
  const [, setIncorrectAnswers] = useState(0);
  const questions = data;

  useEffect(() => {
    const storedCollegeId = localStorage.getItem('collegeId');
    if (storedCollegeId) {
      setCollegeId(storedCollegeId);
    } else {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) { 
          clearInterval(interval);
          setIsQuizCompleted(true);
          navigate('/results', {
            state: getQuizResults(), // Pass results to the results page
          });
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  const getQuizResults = () => {
    const updatedAnswers = [...questionsAnswered];
    const updatedCorrect = updatedAnswers.filter(
      (answer, index) => answer.answer === questions[index].correctAnswer
    ).length;

    const updatedIncorrect = updatedAnswers.filter(
      (answer, index) =>
        answer.answer !== null && answer.answer !== questions[index].correctAnswer
    ).length;

    const score = updatedCorrect * 4; // +4 per correct answer
    const timeTaken = 30 * 60 - timer; // Time spent on the quiz

    return {
      score,
      total: questions.length,
      timeTaken,
      correctAnswers: updatedCorrect,
      incorrectAnswers: updatedIncorrect,
      attempted: updatedAnswers.filter((answer) => answer.answer !== null).length,
    };
  };

  const handleAnswer = (option) => {
    const updatedAnswers = [...questionsAnswered];
    updatedAnswers[currentQuestion] = { answer: option };
    setQuestionsAnswered(updatedAnswers);

    const isCorrect = option === questions[currentQuestion].correctAnswer;

    // Update score and counts based on correctness
    const updatedCorrect = updatedAnswers.filter(
      (answer, index) => answer.answer === questions[index].correctAnswer
    ).length;

    const updatedIncorrect = updatedAnswers.filter(
      (answer, index) =>
        answer.answer !== null && answer.answer !== questions[index].correctAnswer
    ).length;

    setCorrectAnswers(updatedCorrect);
    setIncorrectAnswers(updatedIncorrect);
    setScore(updatedCorrect * 4); // +4 per correct answer
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizCompleted(true);
      navigate('/results', { state: getQuizResults() });
    }
  };

  return (
    <QuizWrapper>
      <NavWrapper>
        <CollegeId>
          <strong>ID:</strong> {collegeId}
        </CollegeId>
        <TimerWrapper>
          <FontAwesomeIcon icon={faClock} size="lg" />
          <Timer>{`${Math.floor(timer / 60)} Min ${timer % 60} Sec`}</Timer>
        </TimerWrapper>
      </NavWrapper>

      <QuestionCard>
        <QuestionNumber>{currentQuestion + 1}</QuestionNumber>
        <Question>{questions[currentQuestion].question}</Question>
        <OptionsWrapper>
          {questions[currentQuestion].options.map((option, index) => (
            <OptionButton
              key={index}
              onClick={() => handleAnswer(option)}
              selected={questionsAnswered[currentQuestion]?.answer === option}
            >
              {option}
            </OptionButton>
          ))}
        </OptionsWrapper>
        <NavigationButtons>
          <PrevButton onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
            Previous
          </PrevButton>
          <NextButton onClick={handleNextQuestion}>
            {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next'}
          </NextButton>
        </NavigationButtons>
      </QuestionCard>
    </QuizWrapper>
  );
};

// Styled Components
const QuestionNumber = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(135deg, #ff7eb3, #ff758c);
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`;

const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  background-color: #eef2f7;
  color: #2b2b2b;
  animation: fadeIn 0.5s ease-in;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  color: #4a4a4a;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const CollegeId = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #4a90e2;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #ff5722;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Timer = styled.div`
  margin-left: 8px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const QuestionCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 95%;
  }
`;

const Question = styled.h2`
  font-size: 2.2rem; /* Default font size for larger screens */
  font-weight: 600; /* Normal weight for large screens */
  margin-bottom: 2rem;
  color: #333; /* Dark color for high contrast */
  line-height: 1.8; /* Increase line height for readability */
  text-align: center; /* Center-align text */
  word-wrap: break-word;
  word-break: break-word;
  max-width: 90%; /* Keeps text contained */
  padding: 1.5rem; /* Adds space around the text */
  background-color: #f9f9f9; /* Light background for readability */
  border-radius: 8px; /* Rounded corners for a soft look */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    font-size: 1.8rem; /* Slightly smaller font for medium screens */
    font-weight: 500; /* Lighten the weight for medium screens */
    margin-bottom: 1.8rem;
    padding: 1.2rem; /* Reduce padding for medium screens */
  }

  @media (max-width: 768px) {
    font-size: 1.6rem; /* Smaller font size for tablets */
    font-weight: 500; /* Light weight for better mobile readability */
    margin-bottom: 1.5rem;
    line-height: 1.7; /* Slightly tighter line height for smaller screens */
    padding: 1rem; /* Reduced padding for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 1.4rem; /* Even smaller font size for mobile screens */
    font-weight: 400; /* Light font weight for mobile */
    margin-bottom: 1.2rem;
    line-height: 1.6; /* Adjust line height for mobile screens */
    padding: 0.8rem; /* Reduce padding further on mobile */
  }
`;


const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OptionButton = styled.button`
  background-color: ${(props) => (props.selected ? '#e6f7e6' : '#f5f8fc')};
  color: #333;
  border: 2px solid ${(props) => (props.selected ? '#5cb85c' : '#d6d6d6')};
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;

  &:hover {
    background-color: ${(props) => (props.selected ? '#d4f3d4' : '#eaf2fb')};
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrevButton = styled.button`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #ffffff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #5a0dbc, #1e64f1);
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

const NextButton = styled.button`
  background: linear-gradient(135deg, #f7971e, #f067b4);
  color: #ffffff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #f07500, #e15d99);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

export default QuizPage;
