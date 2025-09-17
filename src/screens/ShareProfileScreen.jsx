import React, { useState } from 'react';
import { Centered, StyledButton, Input, Label, Section } from '../styles/shared';
import { colors } from '../styles/theme';

export default function ShareProfileScreen() {
  const [institution, setInstitution] = useState('');
  const [expiry, setExpiry] = useState('');
  const [permissions, setPermissions] = useState('read');
  const [link, setLink] = useState('');

  const handleShare = () => {
    setLink('https://kyc-genie.com/share/abc123');
  };

  return (
    <Centered>
      <Section>
        <h2 style={{ color: colors.primary }}>Share KYC Profile</h2>
        <Label>Institution name</Label>
        <Input
          type="text"
          value={institution}
          onChange={e => setInstitution(e.target.value)}
        />
        <Label>Expiry date</Label>
        <Input
          type="date"
          value={expiry}
          onChange={e => setExpiry(e.target.value)}
        />
        <Label>Permissions</Label>
        <select value={permissions} onChange={e => setPermissions(e.target.value)} style={{ marginBottom: '12px', padding: '8px', borderRadius: '4px' }}>
          <option value="read">Read Only</option>
          <option value="download">Download</option>
        </select>
        <StyledButton onClick={handleShare}>Generate Link</StyledButton>
        {link && (
          <div>
            <p>Share this link: <a href={link}>{link}</a></p>
          </div>
        )}
      </Section>
    </Centered>
  );
}