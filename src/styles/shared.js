import styled from 'styled-components';
import { colors } from './theme';

export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${colors.background};
  color: ${colors.text};
`;

export const Section = styled.div`
  background: ${colors.surface};
  padding: 16px 24px;
  border-radius: 8px;
  margin: 12px 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  min-width: 320px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledButton = styled.button`
  background: ${colors.primary};
  color: ${colors.surface};
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  margin: 8px 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: background 0.2s;
  &:hover {
    background: #228B22;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 4px;
`;