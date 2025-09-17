import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Centered, StyledButton, Input, Label, Section, Form } from '../styles/shared';
import { colors } from '../styles/theme';

export default function RegistrationScreen() {
  const [profileType, setProfileType] = useState('individual');
  const [consent, setConsent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/verify');
  };

  return (
    <Centered>
      <Section>
        <h2 style={{ color: colors.primary }}>Create Profile</h2>
        <Form onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Input type="text" required />
          <Label>ID Number</Label>
          <Input type="text" required />
          <Label>Email</Label>
          <Input type="email" required />
          <Label>Phone</Label>
          <Input type="tel" required />
          <Label>
            <input
              type="radio"
              value="individual"
              checked={profileType === 'individual'}
              onChange={() => setProfileType('individual')}
            /> Individual
          </Label>
          <Label>
            <input
              type="radio"
              value="business"
              checked={profileType === 'business'}
              onChange={() => setProfileType('business')}
            /> Business
          </Label>
          <Label>
            Upload ID: <Input type="file" required />
          </Label>
          <Label>
            Upload Proof of Address: <Input type="file" required />
          </Label>
          <Label>
            <input
              type="checkbox"
              checked={consent}
              onChange={() => setConsent(!consent)}
              required
            /> I consent to data usage
          </Label>
          <StyledButton type="submit">Next</StyledButton>
        </Form>
      </Section>
    </Centered>
  );
}