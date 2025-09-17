import React from 'react';
import { Link } from 'react-router-dom';
import { Centered, StyledButton, Section } from '../styles/shared';
import { colors } from '../styles/theme';

export default function LandingScreen() {
  return (
    <Centered>
      <Section>
        <h1 style={{ color: colors.primary }}>KYC Genie</h1>
        <p>Your one-stop solution for KYC verification.</p>
        <div>
          <Link to="/register"><StyledButton>Create Profile</StyledButton></Link>
          <Link to="/dashboard"><StyledButton>Log In</StyledButton></Link>
        </div>
      </Section>
    </Centered>
  );
}