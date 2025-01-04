import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaList, FaPlay } from 'react-icons/fa';
import '../reg.css';

const Registration = () => {
  const [collegeId, setCollegeId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [skill, setSkill] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collegeId') {
      setCollegeId(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
    else if(name ==='skill'){
      setSkill(value)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!collegeId || !name || !email || !skill) {
      setError('All fields are required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      localStorage.setItem('collegeId', collegeId);
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('skill', skill);
      navigate('/quiz');
    }
  };

  const handleGoToRules = () => {
    navigate('/rules');
  };

  return (
    <RegistrationWrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Register for the Quiz</Title>
        <Input
          type="text"
          name="collegeId"
          placeholder="Enter College ID"
          value={collegeId}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={handleInputChange}
          required
        />
<Dropdown
  id="skills"
  name="skill"
  value={skill}
  onChange={(e) => {
    setSkill(e.target.value);  // Update the skill state
    handleInputChange(e);     // Additional handler if needed
  }}
>
  <Option value="" disabled>
    Select a skill
  </Option>
  <Option value="Python">Python</Option>
  <Option value="C">C</Option>
  <Option value="Java">Java</Option>
  <Option value="CPP">C++</Option>
  <Option value="HTML_CSS" >
    HTML & CSS
  </Option>
  <Option value="JavaScript" >
    JavaScript
  </Option>
  <Option value="PHP" disabled>
    PHP
  </Option>
  <Option value="Ruby" disabled>
    Ruby
  </Option>
</Dropdown>


        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWrapper>
          <RulesButton onClick={handleGoToRules}>
            <FaList style={{ marginRight: '10px' }} /> Rules
          </RulesButton>
          <StartButton type="submit">
            <FaPlay style={{ marginRight: '10px' }} /> Start Quiz
          </StartButton>
        </ButtonWrapper>
      </Form>
    </RegistrationWrapper>
  );
};

export default Registration;
const Dropdown = styled.select`
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  color: #333;
  padding: 1rem;
  margin: 1rem 0;
  width: 99%;
  border-radius: 8px;
  font-size: 1rem;
  transition: transform 0.3s ease;

  &:focus {
    outline: none;
    // transform: scale(1.05);
  }

  // Responsive styles
  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

const Option = styled.option`
  background-color: #f1f1f1;
  color: #333;

  &:disabled {
    color: #999; /* Makes disabled option visible */
    background-color: #e0e0e0; /* Light grey background for contrast */
    font-style: italic; /* Optional: makes the text italic for emphasis */
  }
`;

const RegistrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
  animation: fadeIn 1s ease-out;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const Form = styled.form`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Input = styled.input`
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  color: #333;
  padding: 1rem;
  margin: 1rem 0;
  width: 90%;
  border-radius: 8px;
  font-size: 1rem;
  transition: transform 0.3s ease;

  &:focus {
    outline: none;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  gap: 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const RulesButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  width: 48%;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.3rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
  }
`;

const StartButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  width: 48%;

  &:hover {
    background-color: #e53935;
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.3rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
  }
`;
