import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Centered, StyledButton, Input, Label, Section } from '../styles/shared';
import { colors } from '../styles/theme';

export default function InstitutionRequestScreen() {
  const [search, setSearch] = useState('');
  const [reason, setReason] = useState('');
  const navigate = useNavigate();

  const handleRequest = (e) => {
    e.preventDefault();
    navigate('/institution/profile');
  };

  return (
    <Centered>
      <Section>
        <h2 style={{ color: colors.primary }}>Request Client KYC</h2>
        <form onSubmit={handleRequest}>
          <Label>Client ID or Email</Label>
          <Input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            required
          />
          <Label>Reason for access</Label>
          <Input
            type="text"
            value={reason}
            onChange={e => setReason(e.target.value)}
            required
          />
          <StyledButton type="submit">Request Access</StyledButton>
        </form>
      </Section>
    </Centered>
  );
}