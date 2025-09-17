import React from 'react';
import { Centered, StyledButton, Input, Label, Section } from '../styles/shared';
import { colors } from '../styles/theme';

export default function InstitutionIntegrationScreen() {
  return (
    <Centered>
      <Section>
        <h2 style={{ color: colors.primary }}>Integration Settings</h2>
        <Label>API Key</Label>
        <Input type="text" value="sk_test_abc123" readOnly />
        <StyledButton>Regenerate</StyledButton>
        <Label>Webhook URL</Label>
        <Input type="text" placeholder="https://yourdomain.com/webhook" />
        <Label>
          <input type="checkbox" /> Sandbox/Test Mode
        </Label>
        <div style={{ marginTop: '12px' }}>
          <a href="#" style={{ color: colors.primary }}>API Documentation</a>
        </div>
      </Section>
    </Centered>
  );
}