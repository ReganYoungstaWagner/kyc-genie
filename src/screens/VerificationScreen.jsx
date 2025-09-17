import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Centered, StyledButton, Section } from '../styles/shared';
import { colors } from '../styles/theme';

export default function VerificationScreen() {
  const [status, setStatus] = useState({
    safps: 'pending',
    dha: 'pending',
    worldCheck: 'pending',
  });
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setStatus({ safps: 'verified', dha: 'verified', worldCheck: 'verified' }), 2000);
  }, []);

  const allVerified = Object.values(status).every((s) => s === 'verified');

  return (
    <Centered>
      <Section>
        <h2 style={{ color: colors.primary }}>Verification</h2>
        <p>SAFPS check: <b>{status.safps}</b></p>
        <p>DHA identity match: <b>{status.dha}</b></p>
        <p>World Check screening: <b>{status.worldCheck}</b></p>
        <progress value={allVerified ? 100 : 50} max="100" style={{ width: '100%' }} />
        {!allVerified && <StyledButton onClick={() => setStatus({ safps: 'verified', dha: 'verified', worldCheck: 'verified' })}>Retry</StyledButton>}
        {allVerified && <StyledButton onClick={() => navigate('/dashboard')}>Go to Dashboard</StyledButton>}
      </Section>
    </Centered>
  );
}