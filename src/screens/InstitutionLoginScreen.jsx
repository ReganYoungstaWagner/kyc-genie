import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Centered, StyledButton, Input, Label, Section } from '../styles/shared';
import { colors } from '../styles/theme';

export default function InstitutionLoginScreen() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/institution/request');
  };

  return (
    <Centered>
      <Section>
        <h2 style={{ color: colors.primary }}>Institution Login</h2>
        <form onSubmit={handleLogin}>
          <Label>Institution Name</Label>
          <Input type="text" required />
          <Label>Password</Label>
          <Input type="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </form>
      </Section>
    </Centered>
  );
}