import React from 'react';
import { Link } from 'react-router-dom';
import { Centered, StyledButton, Section } from '../styles/shared';
import { colors } from '../styles/theme';

export default function DashboardScreen() {
  return (
    <Centered>
      <Section>
        <h2 style={{ color: colors.primary }}>Profile Overview</h2>
        <div>
          <h3>Verified Info</h3>
          <p>Name: John Doe</p>
          <p>ID: 1234567890</p>
          <p>Email: johndoe@example.com</p>
        </div>
        <div>
          <h3>Documents</h3>
          <ul>
            <li>ID.pdf</li>
            <li>ProofOfAddress.pdf</li>
          </ul>
        </div>
        <Link to="/share"><StyledButton>Share Profile</StyledButton></Link>
        <div>
          <h3>Activity Log</h3>
          <ul>
            <li>Bank X accessed your data on 2025-09-17</li>
          </ul>
        </div>
        <div>
          <h3>Settings</h3>
          <StyledButton>Privacy</StyledButton>
          <StyledButton>Notifications</StyledButton>
        </div>
      </Section>
    </Centered>
  );
}