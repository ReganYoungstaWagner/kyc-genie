import React from 'react';
import { Centered, Section } from '../styles/shared';
import { colors } from '../styles/theme';

export default function InstitutionProfileViewScreen() {
  return (
    <Centered>
      <Section>
        <h2 style={{ color: colors.primary }}>Client Profile</h2>
        <div>
          <h3>Verified Data</h3>
          <p>Name: John Doe</p>
          <p>ID: 1234567890</p>
          <p>Email: johndoe@example.com</p>
        </div>
        <div>
          <h3>Documents</h3>
          <ul>
            <li><a href="#">ID.pdf</a></li>
            <li><a href="#">ProofOfAddress.pdf</a></li>
          </ul>
        </div>
        <div>
          <h3>Verification Status</h3>
          <p>All checks passed</p>
        </div>
        <div>
          <h3>Audit Trail</h3>
          <ul>
            <li>Institution X accessed on 2025-09-17</li>
          </ul>
        </div>
      </Section>
    </Centered>
  );
}