import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaList, FaPlay } from 'react-icons/fa';
import '../reg.css'
const Registration = () => {
  const [collegeId, setCollegeId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!collegeId || !name || !email) {
      setError('All fields are required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      localStorage.setItem('collegeId', collegeId);
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
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
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <ButtonWrapper>
          <RulesButton onClick={handleGoToRules}>
            <FaList style={{ marginRight: '10px' }} /> Rules and Regulations
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

const RegistrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
  animation: fadeIn 1s ease-out;
`;

const Form = styled.form`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  max-width: 400px;
  animation: slideIn 1s ease-out;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
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
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
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
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
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
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e53935;
  }
`;
