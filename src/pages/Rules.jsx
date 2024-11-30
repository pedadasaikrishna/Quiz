import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa'; // Import icons from react-icons

const Rules = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Navigate back to the registration page
  };

  return (
    <RulesWrapper>
      <RulesCard>
        <Title>Quiz Rules and Regulations</Title>
        <RuleList>
        <RuleItem>
            <FaCheckCircle style={{ color: '#00C853', marginRight: '10px' }} />
            Each correct answer carries <MarkHighlight>4</MarkHighlight> marks.
          </RuleItem>
          <RuleItem>
            <FaCheckCircle style={{ color: '#00C853', marginRight: '10px' }} />
            No negative marking.
          </RuleItem>
          <RuleItem>
            <FaCheckCircle style={{ color: '#00C853', marginRight: '10px' }} />
            All fields must be filled before starting the quiz.
          </RuleItem>
          <RuleItem>
            <FaCheckCircle style={{ color: '#00C853', marginRight: '10px' }} />
            Each question has only one correct answer.
          </RuleItem>
          <RuleItem>
            <FaCheckCircle style={{ color: '#00C853', marginRight: '10px' }} />
            No cheating or using external sources.
          </RuleItem>
          <RuleItem>
            <FaCheckCircle style={{ color: '#00C853', marginRight: '10px' }} />
            You must complete the quiz within the allotted time.
          </RuleItem>
          <RuleItem>
            <FaCheckCircle style={{ color: '#00C853', marginRight: '10px' }} />
            Once you submit your answers, they cannot be changed.
          </RuleItem>

        </RuleList>
        <BestWish>All the best!</BestWish>
        <BackButton onClick={handleBack}>
          <FaArrowLeft style={{ marginRight: '8px' }} /> Back to Registration
        </BackButton>
      </RulesCard>
    </RulesWrapper>
  );
};

export default Rules;

const RulesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const RulesCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const RuleList = styled.ul`
  text-align: left;
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;
 
const RuleItem = styled.li`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;

const MarkHighlight = styled.h1`
  font-size: 2rem;
  color: #d32f2f;
  font-weight: bold;
  display: inline; /* Makes it inline with the text */
  background: linear-gradient(45deg, #ff8a80, #d32f2f);
  border-radius: 6px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1; /* Ensures no extra space above or below */
  margin: 0; /* Removes any default margin */
   margin-left: 5px;
  margin-right: 5px;
`;


const BestWish = styled.span`
  display: block;
  font-size: 1.5rem;
  color: #6200ea;
  font-weight: bold;
  margin-top: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  background: linear-gradient(90deg, #6200ea, #3700b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 2s infinite;

  @keyframes shimmer {
    0% {
      background-position: -200%;
    }
    100% {
      background-position: 200%;
    }
  }
`;

const BackButton = styled.button`
  background-color: #6200ea;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 1rem;

  &:hover {
    background-color: #3700b3;
    transform: scale(1.02);
  }

  &:active {
    background-color: #6200ea;
  }
`;
