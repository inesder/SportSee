import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin: 1rem;
  font-size: 1rem;
  font-weight:700;
  color: #ffff;
  background-color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff0101;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  const handleUserClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <Container>
      <Title>Choisir un utilisateur</Title>
      <Button onClick={() => handleUserClick(12)}>Karl</Button>
      <Button onClick={() => handleUserClick(18)}>Cecilia</Button>
    </Container>
  );
};

export default HomePage;
